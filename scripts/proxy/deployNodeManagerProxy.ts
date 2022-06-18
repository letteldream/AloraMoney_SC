import { ethers, upgrades } from "hardhat";

//available functions
async function main() {
  const [deployer] = await ethers.getSigners()
  if (deployer === undefined) throw new Error('Deployer is undefined.')
  console.log('Deploying contracts with the account:', deployer.address)
  console.log('Account balance:', (await deployer.getBalance()).toString())
 const Node = await ethers.getContractFactory("NodeManager");

 console.log("Deploying upgradeable contract of Node...");

 const NodeDeployed = await upgrades.deployProxy(Node, {
  initializer: "initialize",
 });
 await NodeDeployed.deployed();

 console.log("Contract deployed to:", NodeDeployed.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
