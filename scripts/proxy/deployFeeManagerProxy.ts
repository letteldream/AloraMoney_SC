import { ethers, upgrades } from "hardhat";

//available functions
async function main() {
  const [deployer] = await ethers.getSigners()
  if (deployer === undefined) throw new Error('Deployer is undefined.')
  console.log('Deploying contracts with the account:', deployer.address)
  console.log('Account balance:', (await deployer.getBalance()).toString())
 const Fee = await ethers.getContractFactory("FeeManager");

 console.log("Deploying upgradeable contract of Fee...");

 const FeeDeployed = await upgrades.deployProxy(Fee, {
  initializer: "initialize",
 });
 await FeeDeployed.deployed();

 console.log("Contract deployed to:", FeeDeployed.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })