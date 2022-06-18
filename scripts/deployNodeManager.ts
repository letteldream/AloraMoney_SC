import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners()
    if (deployer === undefined) throw new Error('Deployer is undefined.')
    console.log('Deploying contracts with the account:', deployer.address)

    console.log('Account balance:', (await deployer.getBalance()).toString())

    const feeManager = "0xD65Bc3A56D325F6625708cC78F39c3d6E83c8D30";
    // const nftAddress = "0xc9fF330300CD23d9cc238A951dD465F2BaFec068";
        
    const NodeManager = await ethers.getContractFactory('NodeManager')
    const NodeManagerDeployed = await NodeManager.deploy(feeManager)

    console.log('NodeManagerDeployed:', NodeManagerDeployed.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })

// 0x2D99ABD9008Dc933ff5c0CD271B88309593aB921