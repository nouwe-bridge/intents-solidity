import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common.js";
export type OutputStruct = {
    token: BytesLike;
    amount: BigNumberish;
    recipient: BytesLike;
    chainId: BigNumberish;
};
export type OutputStructOutput = [string, BigNumber, string, BigNumber] & {
    token: string;
    amount: BigNumber;
    recipient: string;
    chainId: BigNumber;
};
export type FillInstructionStruct = {
    destinationChainId: BigNumberish;
    destinationSettler: BytesLike;
    originData: BytesLike;
};
export type FillInstructionStructOutput = [BigNumber, string, string] & {
    destinationChainId: BigNumber;
    destinationSettler: string;
    originData: string;
};
export type ResolvedCrossChainOrderStruct = {
    user: string;
    originChainId: BigNumberish;
    openDeadline: BigNumberish;
    fillDeadline: BigNumberish;
    orderId: BytesLike;
    maxSpent: OutputStruct[];
    minReceived: OutputStruct[];
    fillInstructions: FillInstructionStruct[];
};
export type ResolvedCrossChainOrderStructOutput = [
    string,
    BigNumber,
    number,
    number,
    string,
    OutputStructOutput[],
    OutputStructOutput[],
    FillInstructionStructOutput[]
] & {
    user: string;
    originChainId: BigNumber;
    openDeadline: number;
    fillDeadline: number;
    orderId: string;
    maxSpent: OutputStructOutput[];
    minReceived: OutputStructOutput[];
    fillInstructions: FillInstructionStructOutput[];
};
export type OnchainCrossChainOrderStruct = {
    fillDeadline: BigNumberish;
    orderDataType: BytesLike;
    orderData: BytesLike;
};
export type OnchainCrossChainOrderStructOutput = [number, string, string] & {
    fillDeadline: number;
    orderDataType: string;
    orderData: string;
};
export type GaslessCrossChainOrderStruct = {
    originSettler: string;
    user: string;
    nonce: BigNumberish;
    originChainId: BigNumberish;
    openDeadline: BigNumberish;
    fillDeadline: BigNumberish;
    orderDataType: BytesLike;
    orderData: BytesLike;
};
export type GaslessCrossChainOrderStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    number,
    string,
    string
] & {
    originSettler: string;
    user: string;
    nonce: BigNumber;
    originChainId: BigNumber;
    openDeadline: number;
    fillDeadline: number;
    orderDataType: string;
    orderData: string;
};
export interface Base7683Interface extends utils.Interface {
    functions: {
        "FILLED()": FunctionFragment;
        "OPENED()": FunctionFragment;
        "PERMIT2()": FunctionFragment;
        "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()": FunctionFragment;
        "UNKNOWN()": FunctionFragment;
        "fill(bytes32,bytes,bytes)": FunctionFragment;
        "filledOrders(bytes32)": FunctionFragment;
        "invalidateNonces(uint256)": FunctionFragment;
        "isValidNonce(address,uint256)": FunctionFragment;
        "open((uint32,bytes32,bytes))": FunctionFragment;
        "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)": FunctionFragment;
        "openOrders(bytes32)": FunctionFragment;
        "orderStatus(bytes32)": FunctionFragment;
        "refund((uint32,bytes32,bytes)[])": FunctionFragment;
        "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])": FunctionFragment;
        "resolve((uint32,bytes32,bytes))": FunctionFragment;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)": FunctionFragment;
        "settle(bytes32[])": FunctionFragment;
        "usedNonces(address,uint256)": FunctionFragment;
        "witnessHash((address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))": FunctionFragment;
        "witnessTypeString()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "FILLED" | "FILLED()" | "OPENED" | "OPENED()" | "PERMIT2" | "PERMIT2()" | "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH" | "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()" | "UNKNOWN" | "UNKNOWN()" | "fill" | "fill(bytes32,bytes,bytes)" | "filledOrders" | "filledOrders(bytes32)" | "invalidateNonces" | "invalidateNonces(uint256)" | "isValidNonce" | "isValidNonce(address,uint256)" | "open" | "open((uint32,bytes32,bytes))" | "openFor" | "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)" | "openOrders" | "openOrders(bytes32)" | "orderStatus" | "orderStatus(bytes32)" | "refund((uint32,bytes32,bytes)[])" | "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])" | "resolve" | "resolve((uint32,bytes32,bytes))" | "resolveFor" | "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)" | "settle" | "settle(bytes32[])" | "usedNonces" | "usedNonces(address,uint256)" | "witnessHash" | "witnessHash((address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))" | "witnessTypeString" | "witnessTypeString()"): FunctionFragment;
    encodeFunctionData(functionFragment: "FILLED", values?: undefined): string;
    encodeFunctionData(functionFragment: "FILLED()", values?: undefined): string;
    encodeFunctionData(functionFragment: "OPENED", values?: undefined): string;
    encodeFunctionData(functionFragment: "OPENED()", values?: undefined): string;
    encodeFunctionData(functionFragment: "PERMIT2", values?: undefined): string;
    encodeFunctionData(functionFragment: "PERMIT2()", values?: undefined): string;
    encodeFunctionData(functionFragment: "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNKNOWN", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNKNOWN()", values?: undefined): string;
    encodeFunctionData(functionFragment: "fill", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "fill(bytes32,bytes,bytes)", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "filledOrders", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "filledOrders(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "invalidateNonces", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "invalidateNonces(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isValidNonce", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isValidNonce(address,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "open", values: [OnchainCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "open((uint32,bytes32,bytes))", values: [OnchainCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "openFor", values: [GaslessCrossChainOrderStruct, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)", values: [GaslessCrossChainOrderStruct, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "openOrders", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "openOrders(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "orderStatus", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "orderStatus(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "refund((uint32,bytes32,bytes)[])", values: [OnchainCrossChainOrderStruct[]]): string;
    encodeFunctionData(functionFragment: "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])", values: [GaslessCrossChainOrderStruct[]]): string;
    encodeFunctionData(functionFragment: "resolve", values: [OnchainCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "resolve((uint32,bytes32,bytes))", values: [OnchainCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "resolveFor", values: [GaslessCrossChainOrderStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)", values: [GaslessCrossChainOrderStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "settle", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "settle(bytes32[])", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "usedNonces", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "usedNonces(address,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "witnessHash", values: [ResolvedCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "witnessHash((address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))", values: [ResolvedCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "witnessTypeString", values?: undefined): string;
    encodeFunctionData(functionFragment: "witnessTypeString()", values?: undefined): string;
    decodeFunctionResult(functionFragment: "FILLED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FILLED()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "OPENED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "OPENED()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT2()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNKNOWN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNKNOWN()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fill", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fill(bytes32,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "filledOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "filledOrders(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invalidateNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invalidateNonces(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidNonce(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "open((uint32,bytes32,bytes))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openOrders(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "orderStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "orderStatus(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refund((uint32,bytes32,bytes)[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolve((uint32,bytes32,bytes))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settle(bytes32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usedNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usedNonces(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "witnessHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "witnessHash((address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "witnessTypeString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "witnessTypeString()", data: BytesLike): Result;
    events: {
        "Filled(bytes32,bytes,bytes)": EventFragment;
        "NonceInvalidation(address,uint256)": EventFragment;
        "Open(bytes32,(address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))": EventFragment;
        "Refund(bytes32[])": EventFragment;
        "Settle(bytes32[],bytes[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Filled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Filled(bytes32,bytes,bytes)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NonceInvalidation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NonceInvalidation(address,uint256)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Open"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Open(bytes32,(address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Refund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Refund(bytes32[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Settle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Settle(bytes32[],bytes[])"): EventFragment;
}
export interface FilledEventObject {
    orderId: string;
    originData: string;
    fillerData: string;
}
export type FilledEvent = TypedEvent<[
    string,
    string,
    string
], FilledEventObject>;
export type FilledEventFilter = TypedEventFilter<FilledEvent>;
export interface NonceInvalidationEventObject {
    owner: string;
    nonce: BigNumber;
}
export type NonceInvalidationEvent = TypedEvent<[
    string,
    BigNumber
], NonceInvalidationEventObject>;
export type NonceInvalidationEventFilter = TypedEventFilter<NonceInvalidationEvent>;
export interface OpenEventObject {
    orderId: string;
    resolvedOrder: ResolvedCrossChainOrderStructOutput;
}
export type OpenEvent = TypedEvent<[
    string,
    ResolvedCrossChainOrderStructOutput
], OpenEventObject>;
export type OpenEventFilter = TypedEventFilter<OpenEvent>;
export interface RefundEventObject {
    orderIds: string[];
}
export type RefundEvent = TypedEvent<[string[]], RefundEventObject>;
export type RefundEventFilter = TypedEventFilter<RefundEvent>;
export interface SettleEventObject {
    orderIds: string[];
    ordersFillerData: string[];
}
export type SettleEvent = TypedEvent<[string[], string[]], SettleEventObject>;
export type SettleEventFilter = TypedEventFilter<SettleEvent>;
export interface Base7683 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Base7683Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        FILLED(overrides?: CallOverrides): Promise<[string]>;
        "FILLED()"(overrides?: CallOverrides): Promise<[string]>;
        OPENED(overrides?: CallOverrides): Promise<[string]>;
        "OPENED()"(overrides?: CallOverrides): Promise<[string]>;
        PERMIT2(overrides?: CallOverrides): Promise<[string]>;
        "PERMIT2()"(overrides?: CallOverrides): Promise<[string]>;
        RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()"(overrides?: CallOverrides): Promise<[string]>;
        UNKNOWN(overrides?: CallOverrides): Promise<[string]>;
        "UNKNOWN()"(overrides?: CallOverrides): Promise<[string]>;
        fill(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "fill(bytes32,bytes,bytes)"(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        filledOrders(orderId: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            originData: string;
            fillerData: string;
        }>;
        "filledOrders(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            originData: string;
            fillerData: string;
        }>;
        invalidateNonces(_nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "invalidateNonces(uint256)"(_nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isValidNonce(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        "isValidNonce(address,uint256)"(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        open(_order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "open((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        openFor(_order: GaslessCrossChainOrderStruct, _signature: BytesLike, _originFillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)"(_order: GaslessCrossChainOrderStruct, _signature: BytesLike, _originFillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        openOrders(orderId: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            orderData: string;
        }>;
        "openOrders(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            orderData: string;
        }>;
        orderStatus(orderId: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            status: string;
        }>;
        "orderStatus(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            status: string;
        }>;
        "refund((uint32,bytes32,bytes)[])"(_orders: OnchainCrossChainOrderStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])"(_orders: GaslessCrossChainOrderStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resolve(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<[
            ResolvedCrossChainOrderStructOutput
        ] & {
            _resolvedOrder: ResolvedCrossChainOrderStructOutput;
        }>;
        "resolve((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<[
            ResolvedCrossChainOrderStructOutput
        ] & {
            _resolvedOrder: ResolvedCrossChainOrderStructOutput;
        }>;
        resolveFor(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<[
            ResolvedCrossChainOrderStructOutput
        ] & {
            _resolvedOrder: ResolvedCrossChainOrderStructOutput;
        }>;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<[
            ResolvedCrossChainOrderStructOutput
        ] & {
            _resolvedOrder: ResolvedCrossChainOrderStructOutput;
        }>;
        settle(_orderIds: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "settle(bytes32[])"(_orderIds: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        usedNonces(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        "usedNonces(address,uint256)"(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        witnessHash(_resolvedOrder: ResolvedCrossChainOrderStruct, overrides?: CallOverrides): Promise<[string]>;
        "witnessHash((address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))"(_resolvedOrder: ResolvedCrossChainOrderStruct, overrides?: CallOverrides): Promise<[string]>;
        witnessTypeString(overrides?: CallOverrides): Promise<[string]>;
        "witnessTypeString()"(overrides?: CallOverrides): Promise<[string]>;
    };
    FILLED(overrides?: CallOverrides): Promise<string>;
    "FILLED()"(overrides?: CallOverrides): Promise<string>;
    OPENED(overrides?: CallOverrides): Promise<string>;
    "OPENED()"(overrides?: CallOverrides): Promise<string>;
    PERMIT2(overrides?: CallOverrides): Promise<string>;
    "PERMIT2()"(overrides?: CallOverrides): Promise<string>;
    RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()"(overrides?: CallOverrides): Promise<string>;
    UNKNOWN(overrides?: CallOverrides): Promise<string>;
    "UNKNOWN()"(overrides?: CallOverrides): Promise<string>;
    fill(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "fill(bytes32,bytes,bytes)"(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    filledOrders(orderId: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
        originData: string;
        fillerData: string;
    }>;
    "filledOrders(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
        originData: string;
        fillerData: string;
    }>;
    invalidateNonces(_nonce: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "invalidateNonces(uint256)"(_nonce: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isValidNonce(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    "isValidNonce(address,uint256)"(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    open(_order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "open((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    openFor(_order: GaslessCrossChainOrderStruct, _signature: BytesLike, _originFillerData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)"(_order: GaslessCrossChainOrderStruct, _signature: BytesLike, _originFillerData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    openOrders(orderId: BytesLike, overrides?: CallOverrides): Promise<string>;
    "openOrders(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<string>;
    orderStatus(orderId: BytesLike, overrides?: CallOverrides): Promise<string>;
    "orderStatus(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<string>;
    "refund((uint32,bytes32,bytes)[])"(_orders: OnchainCrossChainOrderStruct[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])"(_orders: GaslessCrossChainOrderStruct[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resolve(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    "resolve((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    resolveFor(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    settle(_orderIds: BytesLike[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "settle(bytes32[])"(_orderIds: BytesLike[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    usedNonces(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    "usedNonces(address,uint256)"(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    witnessHash(_resolvedOrder: ResolvedCrossChainOrderStruct, overrides?: CallOverrides): Promise<string>;
    "witnessHash((address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))"(_resolvedOrder: ResolvedCrossChainOrderStruct, overrides?: CallOverrides): Promise<string>;
    witnessTypeString(overrides?: CallOverrides): Promise<string>;
    "witnessTypeString()"(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        FILLED(overrides?: CallOverrides): Promise<string>;
        "FILLED()"(overrides?: CallOverrides): Promise<string>;
        OPENED(overrides?: CallOverrides): Promise<string>;
        "OPENED()"(overrides?: CallOverrides): Promise<string>;
        PERMIT2(overrides?: CallOverrides): Promise<string>;
        "PERMIT2()"(overrides?: CallOverrides): Promise<string>;
        RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()"(overrides?: CallOverrides): Promise<string>;
        UNKNOWN(overrides?: CallOverrides): Promise<string>;
        "UNKNOWN()"(overrides?: CallOverrides): Promise<string>;
        fill(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "fill(bytes32,bytes,bytes)"(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: CallOverrides): Promise<void>;
        filledOrders(orderId: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            originData: string;
            fillerData: string;
        }>;
        "filledOrders(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            originData: string;
            fillerData: string;
        }>;
        invalidateNonces(_nonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "invalidateNonces(uint256)"(_nonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isValidNonce(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "isValidNonce(address,uint256)"(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        open(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<void>;
        "open((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<void>;
        openFor(_order: GaslessCrossChainOrderStruct, _signature: BytesLike, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)"(_order: GaslessCrossChainOrderStruct, _signature: BytesLike, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<void>;
        openOrders(orderId: BytesLike, overrides?: CallOverrides): Promise<string>;
        "openOrders(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<string>;
        orderStatus(orderId: BytesLike, overrides?: CallOverrides): Promise<string>;
        "orderStatus(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<string>;
        "refund((uint32,bytes32,bytes)[])"(_orders: OnchainCrossChainOrderStruct[], overrides?: CallOverrides): Promise<void>;
        "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])"(_orders: GaslessCrossChainOrderStruct[], overrides?: CallOverrides): Promise<void>;
        resolve(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
        "resolve((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
        resolveFor(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
        settle(_orderIds: BytesLike[], overrides?: CallOverrides): Promise<void>;
        "settle(bytes32[])"(_orderIds: BytesLike[], overrides?: CallOverrides): Promise<void>;
        usedNonces(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "usedNonces(address,uint256)"(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        witnessHash(_resolvedOrder: ResolvedCrossChainOrderStruct, overrides?: CallOverrides): Promise<string>;
        "witnessHash((address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))"(_resolvedOrder: ResolvedCrossChainOrderStruct, overrides?: CallOverrides): Promise<string>;
        witnessTypeString(overrides?: CallOverrides): Promise<string>;
        "witnessTypeString()"(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Filled(bytes32,bytes,bytes)"(orderId?: null, originData?: null, fillerData?: null): FilledEventFilter;
        Filled(orderId?: null, originData?: null, fillerData?: null): FilledEventFilter;
        "NonceInvalidation(address,uint256)"(owner?: string | null, nonce?: null): NonceInvalidationEventFilter;
        NonceInvalidation(owner?: string | null, nonce?: null): NonceInvalidationEventFilter;
        "Open(bytes32,(address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))"(orderId?: BytesLike | null, resolvedOrder?: null): OpenEventFilter;
        Open(orderId?: BytesLike | null, resolvedOrder?: null): OpenEventFilter;
        "Refund(bytes32[])"(orderIds?: null): RefundEventFilter;
        Refund(orderIds?: null): RefundEventFilter;
        "Settle(bytes32[],bytes[])"(orderIds?: null, ordersFillerData?: null): SettleEventFilter;
        Settle(orderIds?: null, ordersFillerData?: null): SettleEventFilter;
    };
    estimateGas: {
        FILLED(overrides?: CallOverrides): Promise<BigNumber>;
        "FILLED()"(overrides?: CallOverrides): Promise<BigNumber>;
        OPENED(overrides?: CallOverrides): Promise<BigNumber>;
        "OPENED()"(overrides?: CallOverrides): Promise<BigNumber>;
        PERMIT2(overrides?: CallOverrides): Promise<BigNumber>;
        "PERMIT2()"(overrides?: CallOverrides): Promise<BigNumber>;
        RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()"(overrides?: CallOverrides): Promise<BigNumber>;
        UNKNOWN(overrides?: CallOverrides): Promise<BigNumber>;
        "UNKNOWN()"(overrides?: CallOverrides): Promise<BigNumber>;
        fill(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "fill(bytes32,bytes,bytes)"(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        filledOrders(orderId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "filledOrders(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        invalidateNonces(_nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "invalidateNonces(uint256)"(_nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isValidNonce(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "isValidNonce(address,uint256)"(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        open(_order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "open((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        openFor(_order: GaslessCrossChainOrderStruct, _signature: BytesLike, _originFillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)"(_order: GaslessCrossChainOrderStruct, _signature: BytesLike, _originFillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        openOrders(orderId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "openOrders(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        orderStatus(orderId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "orderStatus(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "refund((uint32,bytes32,bytes)[])"(_orders: OnchainCrossChainOrderStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])"(_orders: GaslessCrossChainOrderStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        resolve(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        "resolve((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        resolveFor(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        settle(_orderIds: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "settle(bytes32[])"(_orderIds: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        usedNonces(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "usedNonces(address,uint256)"(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        witnessHash(_resolvedOrder: ResolvedCrossChainOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        "witnessHash((address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))"(_resolvedOrder: ResolvedCrossChainOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        witnessTypeString(overrides?: CallOverrides): Promise<BigNumber>;
        "witnessTypeString()"(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        FILLED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "FILLED()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        OPENED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "OPENED()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PERMIT2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "PERMIT2()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNKNOWN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "UNKNOWN()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fill(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "fill(bytes32,bytes,bytes)"(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        filledOrders(orderId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "filledOrders(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        invalidateNonces(_nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "invalidateNonces(uint256)"(_nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isValidNonce(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isValidNonce(address,uint256)"(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        open(_order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "open((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        openFor(_order: GaslessCrossChainOrderStruct, _signature: BytesLike, _originFillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)"(_order: GaslessCrossChainOrderStruct, _signature: BytesLike, _originFillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        openOrders(orderId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "openOrders(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        orderStatus(orderId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "orderStatus(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "refund((uint32,bytes32,bytes)[])"(_orders: OnchainCrossChainOrderStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])"(_orders: GaslessCrossChainOrderStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resolve(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "resolve((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolveFor(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        settle(_orderIds: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "settle(bytes32[])"(_orderIds: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        usedNonces(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "usedNonces(address,uint256)"(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        witnessHash(_resolvedOrder: ResolvedCrossChainOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "witnessHash((address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))"(_resolvedOrder: ResolvedCrossChainOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        witnessTypeString(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "witnessTypeString()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Base7683.d.ts.map