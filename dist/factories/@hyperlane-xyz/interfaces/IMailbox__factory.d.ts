import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMailbox, IMailboxInterface } from "../../../@hyperlane-xyz/interfaces/IMailbox.js";
export declare class IMailbox__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "destination";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "recipient";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "Dispatch";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "messageId";
            readonly type: "bytes32";
        }];
        readonly name: "DispatchId";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "origin";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "sender";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }];
        readonly name: "Process";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "messageId";
            readonly type: "bytes32";
        }];
        readonly name: "ProcessId";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "defaultHook";
        readonly outputs: readonly [{
            readonly internalType: "contract IPostDispatchHook";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "defaultIsm";
        readonly outputs: readonly [{
            readonly internalType: "contract IInterchainSecurityModule";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "messageId";
            readonly type: "bytes32";
        }];
        readonly name: "delivered";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "destinationDomain";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "recipientAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "body";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "customHookMetadata";
            readonly type: "bytes";
        }, {
            readonly internalType: "contract IPostDispatchHook";
            readonly name: "customHook";
            readonly type: "address";
        }];
        readonly name: "dispatch";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "messageId";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "destinationDomain";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "recipientAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "body";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "defaultHookMetadata";
            readonly type: "bytes";
        }];
        readonly name: "dispatch";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "messageId";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "destinationDomain";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "recipientAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "messageBody";
            readonly type: "bytes";
        }];
        readonly name: "dispatch";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "messageId";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "latestDispatchedId";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "localDomain";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "metadata";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "process";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "destinationDomain";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "recipientAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "messageBody";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "customHookMetadata";
            readonly type: "bytes";
        }, {
            readonly internalType: "contract IPostDispatchHook";
            readonly name: "customHook";
            readonly type: "address";
        }];
        readonly name: "quoteDispatch";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "destinationDomain";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "recipientAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "messageBody";
            readonly type: "bytes";
        }];
        readonly name: "quoteDispatch";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "destinationDomain";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "recipientAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "messageBody";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "defaultHookMetadata";
            readonly type: "bytes";
        }];
        readonly name: "quoteDispatch";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }];
        readonly name: "recipientIsm";
        readonly outputs: readonly [{
            readonly internalType: "contract IInterchainSecurityModule";
            readonly name: "module";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "requiredHook";
        readonly outputs: readonly [{
            readonly internalType: "contract IPostDispatchHook";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IMailboxInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMailbox;
}
//# sourceMappingURL=IMailbox__factory.d.ts.map