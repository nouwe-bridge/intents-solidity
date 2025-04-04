import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IInterchainSecurityModule, IInterchainSecurityModuleInterface } from "../../../../@hyperlane-xyz/interfaces/IInterchainSecurityModule.sol/IInterchainSecurityModule.js";
export declare class IInterchainSecurityModule__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "moduleType";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_metadata";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }];
        readonly name: "verify";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IInterchainSecurityModuleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IInterchainSecurityModule;
}
//# sourceMappingURL=IInterchainSecurityModule__factory.d.ts.map