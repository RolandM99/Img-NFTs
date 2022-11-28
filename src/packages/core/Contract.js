import { Contract, providers, Wallet } from 'ethers';
import contractABI from '../utils/ContractABI.json';

export default function getContract() {

    const contractAddress = "0x5f543087ff6028524EC2eD30f091B3A06f6643cd"


    const provider = new providers.JsonRpcProvider(process.env.REACT_APP_RPC_URL)
    const signer = new Wallet(process.env.REACT_APP_KEY).connect(provider)

    const contractInstance = new Contract(contractAddress, contractABI, signer)

    return contractInstance
}