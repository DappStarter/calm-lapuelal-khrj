require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food ship return stereo pulse gesture ghost army genuine'; 
let testAccounts = [
"0x3a34d836424fbd70196951294ebf426fff07057cd7513a8c8fc0e35082486390",
"0x5e4b8828f741465956a632b703d3192e24be12a982d9cde13c4b4f67978e690a",
"0x2f7a8753e5de84bb77f2e75eca3497c629491f6e43b6d32b69fc7c22feb456b3",
"0x28eed87612aa200682087f073484b434c04e9cb389f7591a4b9ab295fede912e",
"0x3fc2d69a0bfd98ed5bc0ed9c82c1a4e7bdf1395a39c53023227ff8c2a979d6d5",
"0x7c68c59d1bb1a514cb81940a37a1267a49c16e3ec6515b85c6e242a8df2aea83",
"0x0ab443513541db780490a5bb2122306565ef8ce5039b6458a4209a326ae8aabf",
"0xe1c9e3a29a6318b2650e43342253345222401ae461a1fe6b1d397121e2b99090",
"0x2d2198c42896e6844d84ec536aba6e769e947e023f9c1dd186a3ebe46d025172",
"0x158f6ad2a5e816d35ba7ff43ded06d82b77c3e6b5d3ff0750459ec863990086d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

