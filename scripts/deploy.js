async function main() {
  const ScoreRegistry = await ethers.getContractFactory("ScoreRegistry");

  // Start deployment, returning a promise that resolves to a contract object
  const scoreRegistry = await ScoreRegistry.deploy();
  await scoreRegistry.deployed();
  // const box = await upgrades.deployProxy(ScoreRegistry, [42]);

  console.log("Contract deployed to address:", scoreRegistry.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
