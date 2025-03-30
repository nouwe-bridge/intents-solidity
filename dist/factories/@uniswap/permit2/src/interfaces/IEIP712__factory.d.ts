import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IEIP712, IEIP712Interface } from "../../../../../@uniswap/permit2/src/interfaces/IEIP712.js";
export declare class IEIP712__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IEIP712Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IEIP712;
}
//# sourceMappingURL=IEIP712__factory.d.ts.map