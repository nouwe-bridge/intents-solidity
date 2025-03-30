import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StandardHookMetadata, StandardHookMetadataInterface } from "../../../../@hyperlane-xyz/hooks/libs/StandardHookMetadata.js";
type StandardHookMetadataConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StandardHookMetadata__factory extends ContractFactory {
    constructor(...args: StandardHookMetadataConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<StandardHookMetadata>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): StandardHookMetadata;
    connect(signer: Signer): StandardHookMetadata__factory;
    static readonly bytecode = "0x608c6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806326418953146038575b600080fd5b603f600181565b60405161ffff909116815260200160405180910390f3fea2646970667358221220291a8b9ec2f88ae3e03c7963a178af8935fd239f9e48e3efbebf9e0404185e2464736f6c63430008190033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "VARIANT";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): StandardHookMetadataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StandardHookMetadata;
}
export {};
//# sourceMappingURL=StandardHookMetadata__factory.d.ts.map