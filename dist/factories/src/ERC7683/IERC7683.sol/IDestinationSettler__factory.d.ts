import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDestinationSettler, IDestinationSettlerInterface } from "../../../../src/ERC7683/IERC7683.sol/IDestinationSettler.js";
export declare class IDestinationSettler__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "originData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly name: "fill";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IDestinationSettlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDestinationSettler;
}
//# sourceMappingURL=IDestinationSettler__factory.d.ts.map