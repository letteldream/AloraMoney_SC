# Hardhat Typescript Template

Create and test smart contracts using Hardhat with Typescript.

Uses

- [Hardhat](https://github.com/nomiclabs/hardhat): compile and run the smart contracts on a local development network
- [TypeChain](https://github.com/ethereum-ts/TypeChain): generate TypeScript types for smart contracts
- [Ethers](https://github.com/ethers-io/ethers.js/): renowned Ethereum library and wallet implementation
- [Waffle](https://github.com/EthWorks/Waffle): tooling for writing comprehensive smart contract tests
- [Solhint](https://github.com/protofire/solhint): linter
- [Prettier Plugin Solidity](https://github.com/prettier-solidity/prettier-plugin-solidity): code formatter

## Get Started

Before running any command, make sure to install dependencies:

```sh
npm install
```

### Compile

Compile the smart contracts with Hardhat:

```sh
npm run compile
```

### Test

Run the Mocha tests:

```sh
npm run test
```

### Deploy contract to netowrk (requires private key and Alchemy API key)

```sh
npx hardhat run --network ropsten ./scripts/deploy.ts
```

### Validate a contract with etherscan (requires API key)

```sh
npx hardhat verify --network <network> <DEPLOYED_CONTRACT_ADDRESS> "Constructor argument 1"
```

## Plugins

- Gas reporter [hardhat-gas-reporter](https://hardhat.org/plugins/hardhat-gas-reporter.html)
- Etherscan [hardhat-etherscan](https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html)

## Issues

- [Solidity linter [solc] compiler version on VSCode](https://ethereum.stackexchange.com/questions/46158/solved-how-to-change-solidity-linter-solc-compiler-version-in-visual-studio-c)
- [Solhint compiler-version issue](https://github.com/protofire/solhint/issues/230)

## References

- [amanusk/hardhat-template](https://github.com/amanusk/hardhat-template)
- [Hardhat Tutorial](https://hardhat.org/tutorial/)
# lfg_upgradable_token
