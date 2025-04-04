import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISpecifiesInterchainSecurityModule, ISpecifiesInterchainSecurityModuleInterface } from "../../../../@hyperlane-xyz/interfaces/IInterchainSecurityModule.sol/ISpecifiesInterchainSecurityModule.js";
export declare class ISpecifiesInterchainSecurityModule__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "interchainSecurityModule";
        readonly outputs: readonly [{
            readonly internalType: "contract IInterchainSecurityModule";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ISpecifiesInterchainSecurityModuleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISpecifiesInterchainSecurityModule;
}
//# sourceMappingURL=ISpecifiesInterchainSecurityModule__factory.d.ts.map