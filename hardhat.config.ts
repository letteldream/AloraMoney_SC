import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";
import "@openzeppelin/hardhat-upgrades";

const mnemonic = ""


/*
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
*/

/*

npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
*/

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: "bsctestnet",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545"
        },
        hardhat: {},
        bsctestnet: {
            url: "https://speedy-nodes-nyc.moralis.io/89b4f5c6d2fc13792dcaf416/bsc/testnet",
            chainId: 97,
            gasPrice: 20000000000,
            accounts: [`${mnemonic}`]
        },
        bscmainnet: {
            url: "https://bsc-dataseed.binance.org/",
            chainId: 56,
            gasPrice: 20000000000,
            accounts: [`${mnemonic}`]
        },
        avaxfuji: {
            url: 'https://api.avax-test.network/ext/bc/C/rpc',
            network_id: 43113,
            gas: 8000000,
            gasPrice: 26000000000,
            accounts: [`${mnemonic}`]
        },
        avaxmainnet: {
            url: 'https://api.avax.network/ext/bc/C/rpc',
            gas: 8000000,
            chainId: 43114,
            accounts: [`${mnemonic}`]
        },
        ropsten: {
            url: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            gas: 8000000,
            chainId: 3,
            accounts: [`${mnemonic}`]
        }
    },
    etherscan: {
        apiKey: "UMKZDMNWZE1PTPD4JVUUUXN7WGNR1FWZJW"
        //apiKey: "V28HJCGUP2XCHSV5IXXG6IK9W14HHXKDCY"
    },
    solidity: {
        version: "0.8.13",
        settings: {
            optimizer: {
                enabled: true
            }
        }
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    mocha: {
        timeout: 20000
    },
    typechain: {
        outDir: "typechain",
        target: "ethers-v5",
    },
    gasReporter: {
        currency: "USD",
        gasPrice: 25,
        // enabled: process.env.REPORT_GAS ? true : false,
    },
};
