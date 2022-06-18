import { ethers,upgrades } from 'hardhat'

async function main() {
    const [deployer] = await ethers.getSigners()
    if (deployer === undefined) throw new Error('Deployer is undefined.')
    console.log('Deploying contracts with the account:', deployer.address)

    console.log('Account balance:', (await deployer.getBalance()).toString())

    const Alora = await ethers.getContractFactory('Alora')

    const AloraDeployed = await upgrades.upgradeProxy("0xa33A86daDf707cAaa3788FC3Dc5BBaD63843ED4c", Alora);
    await AloraDeployed.deployed();

    console.log('Alora:', AloraDeployed.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
