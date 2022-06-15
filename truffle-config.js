const HDWallet = require("truffle-hdwallet-provider");
const developmentMnemonic = "SEED PHRASE";


module.exports = {
    contracts_directory: ".ethereum/contracts",
    contracts_build_directory: "ethereum/build",
    test_directory: "truffle-test",

    networks: {
        provider: () => 
        new HDWallet(developmentMnemonic, "http:/127.0.0.1:7545"),
        network_id: "*"


        // development: {
        //     host: "127.0.0.1",
        //     port: 7545,
        //     network_id: "*",
        // },
    },

    mocha: {
        timeout: 10000
    },

    compilers: {
        solc: {
            version: "0.4.17",
            settings: {
                optimizer: {
                    enabled: false,
                    runs: 200
                },
            }
        }
    },

    db: {
        enabled: false
    }
};