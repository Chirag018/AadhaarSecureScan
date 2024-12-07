import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-dependency-compiler";
require("dotenv").config({ path: "../.env.local" });

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  dependencyCompiler: {
    paths: ["@anon-aadhaar/contracts/Verifier.sol"],
  },
  networks:{
    sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: [process.env.PRIVATE_KEY || ""]
    }
  },
};

export default config;
