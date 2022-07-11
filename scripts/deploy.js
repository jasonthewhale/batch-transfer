const hardhat = require('hardhat');


async function main() {
    const factory = await hardhat.ethers.getContractFactory('BatchTransfer');
    const contract = await factory.deploy();

    await contract.deployed();

    console.log('Contract Address: ', contract.address);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
