import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOriginSettler, IOriginSettlerInterface } from "../../../../src/ERC7683/IERC7683.sol/IOriginSettler.js";
export declare class IOriginSettler__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "openDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderId";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "maxSpent";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "minReceived";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "destinationSettler";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "originData";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct FillInstruction[]";
                readonly name: "fillInstructions";
                readonly type: "tuple[]";
            }];
            readonly indexed: false;
            readonly internalType: "struct ResolvedCrossChainOrder";
            readonly name: "resolvedOrder";
            readonly type: "tuple";
        }];
        readonly name: "Open";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderDataType";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct OnchainCrossChainOrder";
            readonly name: "order";
            readonly type: "tuple";
        }];
        readonly name: "open";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "originSettler";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "openDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderDataType";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct GaslessCrossChainOrder";
            readonly name: "order";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "originFillerData";
            readonly type: "bytes";
        }];
        readonly name: "openFor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderDataType";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct OnchainCrossChainOrder";
            readonly name: "order";
            readonly type: "tuple";
        }];
        readonly name: "resolve";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "openDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderId";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "maxSpent";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "minReceived";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "destinationSettler";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "originData";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct FillInstruction[]";
                readonly name: "fillInstructions";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct ResolvedCrossChainOrder";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "originSettler";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "openDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderDataType";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct GaslessCrossChainOrder";
            readonly name: "order";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "originFillerData";
            readonly type: "bytes";
        }];
        readonly name: "resolveFor";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "originChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "openDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "orderId";
                readonly type: "bytes32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "maxSpent";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "token";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "recipient";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "minReceived";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "destinationSettler";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "originData";
                    readonly type: "bytes";
                }];
                readonly internalType: "struct FillInstruction[]";
                readonly name: "fillInstructions";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct ResolvedCrossChainOrder";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IOriginSettlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOriginSettler;
}
//# sourceMappingURL=IOriginSettler__factory.d.ts.map