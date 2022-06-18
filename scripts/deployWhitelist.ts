import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners()
    if (deployer === undefined) throw new Error('Deployer is undefined.')
    console.log('Deploying contracts with the account:', deployer.address)

    console.log('Account balance:', (await deployer.getBalance()).toString())

    const WhiteList = await ethers.getContractFactory('WhiteList')
    const WhiteListDeployed = await WhiteList.deploy(
    )

    console.log('WhiteListDeployed:', WhiteListDeployed.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })

