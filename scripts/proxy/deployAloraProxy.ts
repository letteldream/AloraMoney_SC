import { ethers, upgrades } from "hardhat";

//available functions
async function main() {
  const [deployer] = await ethers.getSigners()
  if (deployer === undefined) throw new Error('Deployer is undefined.')
  console.log('Deploying contracts with the account:', deployer.address)
  console.log('Account balance:', (await deployer.getBalance()).toString())
 const Token = await ethers.getContractFactory("Alora");

 console.log("Deploying upgradeable contract of Token...");

 const TokenDeployed = await upgrades.deployProxy(Token, {
  initializer: "initialize",
 });
 await TokenDeployed.deployed();

 console.log("Contract deployed to:", TokenDeployed.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
