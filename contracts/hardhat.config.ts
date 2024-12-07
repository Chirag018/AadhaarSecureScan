import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  dependencyCompiler: {
    paths: ["@anon-aadhaar/contracts/Verifier.sol"],
  },
};

export default config;
