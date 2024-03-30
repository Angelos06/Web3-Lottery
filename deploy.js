async function main() {
    const sLottery = await ethers.getContractFactory("LoterieApetrea");
    // Start deployment, returning a promise that resolves to a contract object
    const sLottery_new = await sLottery.deploy();
    console.log("Contract deployed to address:", sLottery_new.address);
    }
    main()
    .then(() => process.exit(0))
    .catch(error => {
    console.error(error);
    process.exit(1);
    });