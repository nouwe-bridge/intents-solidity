import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BasicSwap7683, BasicSwap7683Interface } from "../../src/BasicSwap7683.js";
export declare class BasicSwap7683__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidDomain";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidGaslessOrderOrigin";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidGaslessOrderSettler";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidNativeAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidNonce";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidOrderDomain";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidOrderId";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidOrderOrigin";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidOrderStatus";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderType";
            readonly type: "bytes32";
        }];
        readonly name: "InvalidOrderType";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "originDomain";
            readonly type: "uint32";
        }];
        readonly name: "InvalidOriginDomain";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OrderFillExpired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OrderFillNotExpired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OrderOpenExpired";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "originData";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly name: "Filled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }];
        readonly name: "NonceInvalidation";
        readonly type: "event";
    }, {
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32[]";
            readonly name: "orderIds";
            readonly type: "bytes32[]";
        }];
        readonly name: "Refund";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "Refunded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32[]";
            readonly name: "orderIds";
            readonly type: "bytes32[]";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes[]";
            readonly name: "ordersFillerData";
            readonly type: "bytes[]";
        }];
        readonly name: "Settle";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "Settled";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "FILLED";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "OPENED";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PERMIT2";
        readonly outputs: readonly [{
            readonly internalType: "contract IPermit2";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "REFUNDED";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SETTLED";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "UNKNOWN";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_orderId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_originData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "_fillerData";
            readonly type: "bytes";
        }];
        readonly name: "fill";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }];
        readonly name: "filledOrders";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "originData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_nonce";
            readonly type: "uint256";
        }];
        readonly name: "invalidateNonces";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nonce";
            readonly type: "uint256";
        }];
        readonly name: "isValidNonce";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
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
            readonly name: "_order";
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
            readonly name: "_order";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_signature";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "_originFillerData";
            readonly type: "bytes";
        }];
        readonly name: "openFor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }];
        readonly name: "openOrders";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "orderData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "orderId";
            readonly type: "bytes32";
        }];
        readonly name: "orderStatus";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "status";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
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
            readonly internalType: "struct OnchainCrossChainOrder[]";
            readonly name: "_orders";
            readonly type: "tuple[]";
        }];
        readonly name: "refund";
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
            readonly internalType: "struct GaslessCrossChainOrder[]";
            readonly name: "_orders";
            readonly type: "tuple[]";
        }];
        readonly name: "refund";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
            readonly name: "_order";
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
            readonly name: "_resolvedOrder";
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
            readonly name: "_order";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "_originFillerData";
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
            readonly name: "_resolvedOrder";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "_orderIds";
            readonly type: "bytes32[]";
        }];
        readonly name: "settle";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "usedNonces";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
            readonly name: "_resolvedOrder";
            readonly type: "tuple";
        }];
        readonly name: "witnessHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "witnessTypeString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): BasicSwap7683Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): BasicSwap7683;
}
//# sourceMappingURL=BasicSwap7683__factory.d.ts.map