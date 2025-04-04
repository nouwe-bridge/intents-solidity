import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMessageRecipient, IMessageRecipientInterface } from "../../../@hyperlane-xyz/interfaces/IMessageRecipient.js";
export declare class IMessageRecipient__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_origin";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_sender";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }];
        readonly name: "handle";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IMessageRecipientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMessageRecipient;
}
//# sourceMappingURL=IMessageRecipient__factory.d.ts.map