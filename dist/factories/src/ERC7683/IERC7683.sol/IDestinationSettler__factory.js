/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "orderId",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "originData",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "fillerData",
                type: "bytes",
            },
        ],
        name: "fill",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
export class IDestinationSettler__factory {
    static abi = _abi;
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
//# sourceMappingURL=IDestinationSettler__factory.js.map