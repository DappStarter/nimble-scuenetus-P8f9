require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hover enter flat sugar fan rifle miss protect hover close bubble train'; 
let testAccounts = [
"0xfeb0b8a552cd7f914263dc2f25764263f397c001f43be9ec4fbe9d4f49381151",
"0x3d8f4563d4ec8366448a6a380aad1f1bf53eedbf42255d99d6c26539cd02361c",
"0xb3cbd63b5547d8a073f965bebef7c9ece06c2fd1ea9a53a2c16d2a52884e6708",
"0x5727efd838998f341191728cff8cf55e2edb5599d6b5a91684f7683907304c86",
"0x9519b70d7788a516e1efdab6eb53520e89971ce5d53ca431ea85cf877495326c",
"0x2c74b0fabd333f3b8c8a81c1868bf7185a56fc0e66e16711a50b99661d88bda2",
"0xe4ed57e5e3e799c2b353fb3063b36d974a746bfe7a661c9b420c50a27eb3a2c8",
"0x74a99250acdbadf3d3bdcb2583729711dbcf2b9826515fa53e66a533a4374f18",
"0xe4454d62e60ed22b935b9adb27258b83aa5778456ce1fc7bde01e8539ecda739",
"0x568964b56860db701eaab3ef7df18a9f3f421acef18cb07303b2008b1f74e561"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


