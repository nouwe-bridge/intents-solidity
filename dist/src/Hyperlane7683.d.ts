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
export declare namespace GasRouter {
    type GasRouterConfigStruct = {
        domain: BigNumberish;
        gas: BigNumberish;
    };
    type GasRouterConfigStructOutput = [number, BigNumber] & {
        domain: number;
        gas: BigNumber;
    };
}
export interface Hyperlane7683Interface extends utils.Interface {
    functions: {
        "FILLED()": FunctionFragment;
        "OPENED()": FunctionFragment;
        "PACKAGE_VERSION()": FunctionFragment;
        "PERMIT2()": FunctionFragment;
        "REFUNDED()": FunctionFragment;
        "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()": FunctionFragment;
        "SETTLED()": FunctionFragment;
        "UNKNOWN()": FunctionFragment;
        "destinationGas(uint32)": FunctionFragment;
        "domains()": FunctionFragment;
        "enrollRemoteRouter(uint32,bytes32)": FunctionFragment;
        "enrollRemoteRouters(uint32[],bytes32[])": FunctionFragment;
        "fill(bytes32,bytes,bytes)": FunctionFragment;
        "filledOrders(bytes32)": FunctionFragment;
        "handle(uint32,bytes32,bytes)": FunctionFragment;
        "hook()": FunctionFragment;
        "initialize(address,address,address)": FunctionFragment;
        "interchainSecurityModule()": FunctionFragment;
        "invalidateNonces(uint256)": FunctionFragment;
        "isValidNonce(address,uint256)": FunctionFragment;
        "localDomain()": FunctionFragment;
        "mailbox()": FunctionFragment;
        "open((uint32,bytes32,bytes))": FunctionFragment;
        "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)": FunctionFragment;
        "openOrders(bytes32)": FunctionFragment;
        "orderStatus(bytes32)": FunctionFragment;
        "owner()": FunctionFragment;
        "quoteGasPayment(uint32)": FunctionFragment;
        "refund((uint32,bytes32,bytes)[])": FunctionFragment;
        "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "resolve((uint32,bytes32,bytes))": FunctionFragment;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)": FunctionFragment;
        "routers(uint32)": FunctionFragment;
        "setDestinationGas(uint32,uint256)": FunctionFragment;
        "setDestinationGas((uint32,uint256)[])": FunctionFragment;
        "setHook(address)": FunctionFragment;
        "setInterchainSecurityModule(address)": FunctionFragment;
        "settle(bytes32[])": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unenrollRemoteRouter(uint32)": FunctionFragment;
        "unenrollRemoteRouters(uint32[])": FunctionFragment;
        "usedNonces(address,uint256)": FunctionFragment;
        "witnessHash((address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))": FunctionFragment;
        "witnessTypeString()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "FILLED" | "FILLED()" | "OPENED" | "OPENED()" | "PACKAGE_VERSION" | "PACKAGE_VERSION()" | "PERMIT2" | "PERMIT2()" | "REFUNDED" | "REFUNDED()" | "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH" | "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()" | "SETTLED" | "SETTLED()" | "UNKNOWN" | "UNKNOWN()" | "destinationGas" | "destinationGas(uint32)" | "domains" | "domains()" | "enrollRemoteRouter" | "enrollRemoteRouter(uint32,bytes32)" | "enrollRemoteRouters" | "enrollRemoteRouters(uint32[],bytes32[])" | "fill" | "fill(bytes32,bytes,bytes)" | "filledOrders" | "filledOrders(bytes32)" | "handle" | "handle(uint32,bytes32,bytes)" | "hook" | "hook()" | "initialize" | "initialize(address,address,address)" | "interchainSecurityModule" | "interchainSecurityModule()" | "invalidateNonces" | "invalidateNonces(uint256)" | "isValidNonce" | "isValidNonce(address,uint256)" | "localDomain" | "localDomain()" | "mailbox" | "mailbox()" | "open" | "open((uint32,bytes32,bytes))" | "openFor" | "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)" | "openOrders" | "openOrders(bytes32)" | "orderStatus" | "orderStatus(bytes32)" | "owner" | "owner()" | "quoteGasPayment" | "quoteGasPayment(uint32)" | "refund((uint32,bytes32,bytes)[])" | "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])" | "renounceOwnership" | "renounceOwnership()" | "resolve" | "resolve((uint32,bytes32,bytes))" | "resolveFor" | "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)" | "routers" | "routers(uint32)" | "setDestinationGas(uint32,uint256)" | "setDestinationGas((uint32,uint256)[])" | "setHook" | "setHook(address)" | "setInterchainSecurityModule" | "setInterchainSecurityModule(address)" | "settle" | "settle(bytes32[])" | "transferOwnership" | "transferOwnership(address)" | "unenrollRemoteRouter" | "unenrollRemoteRouter(uint32)" | "unenrollRemoteRouters" | "unenrollRemoteRouters(uint32[])" | "usedNonces" | "usedNonces(address,uint256)" | "witnessHash" | "witnessHash((address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))" | "witnessTypeString" | "witnessTypeString()"): FunctionFragment;
    encodeFunctionData(functionFragment: "FILLED", values?: undefined): string;
    encodeFunctionData(functionFragment: "FILLED()", values?: undefined): string;
    encodeFunctionData(functionFragment: "OPENED", values?: undefined): string;
    encodeFunctionData(functionFragment: "OPENED()", values?: undefined): string;
    encodeFunctionData(functionFragment: "PACKAGE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "PACKAGE_VERSION()", values?: undefined): string;
    encodeFunctionData(functionFragment: "PERMIT2", values?: undefined): string;
    encodeFunctionData(functionFragment: "PERMIT2()", values?: undefined): string;
    encodeFunctionData(functionFragment: "REFUNDED", values?: undefined): string;
    encodeFunctionData(functionFragment: "REFUNDED()", values?: undefined): string;
    encodeFunctionData(functionFragment: "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()", values?: undefined): string;
    encodeFunctionData(functionFragment: "SETTLED", values?: undefined): string;
    encodeFunctionData(functionFragment: "SETTLED()", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNKNOWN", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNKNOWN()", values?: undefined): string;
    encodeFunctionData(functionFragment: "destinationGas", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "destinationGas(uint32)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "domains", values?: undefined): string;
    encodeFunctionData(functionFragment: "domains()", values?: undefined): string;
    encodeFunctionData(functionFragment: "enrollRemoteRouter", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "enrollRemoteRouter(uint32,bytes32)", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "enrollRemoteRouters", values: [BigNumberish[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "enrollRemoteRouters(uint32[],bytes32[])", values: [BigNumberish[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "fill", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "fill(bytes32,bytes,bytes)", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "filledOrders", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "filledOrders(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "handle", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "handle(uint32,bytes32,bytes)", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "hook", values?: undefined): string;
    encodeFunctionData(functionFragment: "hook()", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "initialize(address,address,address)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "interchainSecurityModule", values?: undefined): string;
    encodeFunctionData(functionFragment: "interchainSecurityModule()", values?: undefined): string;
    encodeFunctionData(functionFragment: "invalidateNonces", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "invalidateNonces(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isValidNonce", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isValidNonce(address,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "localDomain", values?: undefined): string;
    encodeFunctionData(functionFragment: "localDomain()", values?: undefined): string;
    encodeFunctionData(functionFragment: "mailbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "mailbox()", values?: undefined): string;
    encodeFunctionData(functionFragment: "open", values: [OnchainCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "open((uint32,bytes32,bytes))", values: [OnchainCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "openFor", values: [GaslessCrossChainOrderStruct, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)", values: [GaslessCrossChainOrderStruct, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "openOrders", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "openOrders(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "orderStatus", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "orderStatus(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteGasPayment", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteGasPayment(uint32)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "refund((uint32,bytes32,bytes)[])", values: [OnchainCrossChainOrderStruct[]]): string;
    encodeFunctionData(functionFragment: "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])", values: [GaslessCrossChainOrderStruct[]]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership()", values?: undefined): string;
    encodeFunctionData(functionFragment: "resolve", values: [OnchainCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "resolve((uint32,bytes32,bytes))", values: [OnchainCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "resolveFor", values: [GaslessCrossChainOrderStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)", values: [GaslessCrossChainOrderStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "routers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "routers(uint32)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDestinationGas(uint32,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDestinationGas((uint32,uint256)[])", values: [GasRouter.GasRouterConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "setHook", values: [string]): string;
    encodeFunctionData(functionFragment: "setHook(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "setInterchainSecurityModule", values: [string]): string;
    encodeFunctionData(functionFragment: "setInterchainSecurityModule(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "settle", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "settle(bytes32[])", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "transferOwnership(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "unenrollRemoteRouter", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unenrollRemoteRouter(uint32)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unenrollRemoteRouters", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "unenrollRemoteRouters(uint32[])", values: [BigNumberish[]]): string;
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
    decodeFunctionResult(functionFragment: "PACKAGE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PACKAGE_VERSION()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT2()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REFUNDED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REFUNDED()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SETTLED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SETTLED()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNKNOWN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNKNOWN()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "destinationGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "destinationGas(uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "domains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "domains()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrollRemoteRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrollRemoteRouter(uint32,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrollRemoteRouters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrollRemoteRouters(uint32[],bytes32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fill", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fill(bytes32,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "filledOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "filledOrders(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handle(uint32,bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hook()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize(address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interchainSecurityModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interchainSecurityModule()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invalidateNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invalidateNonces(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidNonce(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "localDomain()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mailbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mailbox()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "open((uint32,bytes32,bytes))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openOrders(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "orderStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "orderStatus(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteGasPayment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteGasPayment(uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refund((uint32,bytes32,bytes)[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolve((uint32,bytes32,bytes))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routers(uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDestinationGas(uint32,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDestinationGas((uint32,uint256)[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHook(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInterchainSecurityModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInterchainSecurityModule(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settle(bytes32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unenrollRemoteRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unenrollRemoteRouter(uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unenrollRemoteRouters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unenrollRemoteRouters(uint32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usedNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usedNonces(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "witnessHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "witnessHash((address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "witnessTypeString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "witnessTypeString()", data: BytesLike): Result;
    events: {
        "Filled(bytes32,bytes,bytes)": EventFragment;
        "GasSet(uint32,uint256)": EventFragment;
        "HookSet(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "IsmSet(address)": EventFragment;
        "NonceInvalidation(address,uint256)": EventFragment;
        "Open(bytes32,(address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Refund(bytes32[])": EventFragment;
        "Refunded(bytes32,address)": EventFragment;
        "Settle(bytes32[],bytes[])": EventFragment;
        "Settled(bytes32,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Filled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Filled(bytes32,bytes,bytes)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasSet(uint32,uint256)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "HookSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "HookSet(address)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized(uint8)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IsmSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IsmSet(address)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NonceInvalidation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NonceInvalidation(address,uint256)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Open"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Open(bytes32,(address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Refund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Refund(bytes32[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Refunded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Refunded(bytes32,address)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Settle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Settle(bytes32[],bytes[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Settled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Settled(bytes32,address)"): EventFragment;
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
export interface GasSetEventObject {
    domain: number;
    gas: BigNumber;
}
export type GasSetEvent = TypedEvent<[number, BigNumber], GasSetEventObject>;
export type GasSetEventFilter = TypedEventFilter<GasSetEvent>;
export interface HookSetEventObject {
    _hook: string;
}
export type HookSetEvent = TypedEvent<[string], HookSetEventObject>;
export type HookSetEventFilter = TypedEventFilter<HookSetEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface IsmSetEventObject {
    _ism: string;
}
export type IsmSetEvent = TypedEvent<[string], IsmSetEventObject>;
export type IsmSetEventFilter = TypedEventFilter<IsmSetEvent>;
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
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface RefundEventObject {
    orderIds: string[];
}
export type RefundEvent = TypedEvent<[string[]], RefundEventObject>;
export type RefundEventFilter = TypedEventFilter<RefundEvent>;
export interface RefundedEventObject {
    orderId: string;
    receiver: string;
}
export type RefundedEvent = TypedEvent<[string, string], RefundedEventObject>;
export type RefundedEventFilter = TypedEventFilter<RefundedEvent>;
export interface SettleEventObject {
    orderIds: string[];
    ordersFillerData: string[];
}
export type SettleEvent = TypedEvent<[string[], string[]], SettleEventObject>;
export type SettleEventFilter = TypedEventFilter<SettleEvent>;
export interface SettledEventObject {
    orderId: string;
    receiver: string;
}
export type SettledEvent = TypedEvent<[string, string], SettledEventObject>;
export type SettledEventFilter = TypedEventFilter<SettledEvent>;
export interface Hyperlane7683 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Hyperlane7683Interface;
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
        PACKAGE_VERSION(overrides?: CallOverrides): Promise<[string]>;
        "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<[string]>;
        PERMIT2(overrides?: CallOverrides): Promise<[string]>;
        "PERMIT2()"(overrides?: CallOverrides): Promise<[string]>;
        REFUNDED(overrides?: CallOverrides): Promise<[string]>;
        "REFUNDED()"(overrides?: CallOverrides): Promise<[string]>;
        RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()"(overrides?: CallOverrides): Promise<[string]>;
        SETTLED(overrides?: CallOverrides): Promise<[string]>;
        "SETTLED()"(overrides?: CallOverrides): Promise<[string]>;
        UNKNOWN(overrides?: CallOverrides): Promise<[string]>;
        "UNKNOWN()"(overrides?: CallOverrides): Promise<[string]>;
        destinationGas(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "destinationGas(uint32)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        domains(overrides?: CallOverrides): Promise<[number[]]>;
        "domains()"(overrides?: CallOverrides): Promise<[number[]]>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "enrollRemoteRouter(uint32,bytes32)"(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        enrollRemoteRouters(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "enrollRemoteRouters(uint32[],bytes32[])"(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
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
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        hook(overrides?: CallOverrides): Promise<[string]>;
        "hook()"(overrides?: CallOverrides): Promise<[string]>;
        initialize(_customHook: string, _interchainSecurityModule: string, _owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "initialize(address,address,address)"(_customHook: string, _interchainSecurityModule: string, _owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        interchainSecurityModule(overrides?: CallOverrides): Promise<[string]>;
        "interchainSecurityModule()"(overrides?: CallOverrides): Promise<[string]>;
        invalidateNonces(_nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "invalidateNonces(uint256)"(_nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isValidNonce(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        "isValidNonce(address,uint256)"(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        localDomain(overrides?: CallOverrides): Promise<[number]>;
        "localDomain()"(overrides?: CallOverrides): Promise<[number]>;
        mailbox(overrides?: CallOverrides): Promise<[string]>;
        "mailbox()"(overrides?: CallOverrides): Promise<[string]>;
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
        owner(overrides?: CallOverrides): Promise<[string]>;
        "owner()"(overrides?: CallOverrides): Promise<[string]>;
        quoteGasPayment(_destinationDomain: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "quoteGasPayment(uint32)"(_destinationDomain: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "refund((uint32,bytes32,bytes)[])"(_orders: OnchainCrossChainOrderStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])"(_orders: GaslessCrossChainOrderStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "renounceOwnership()"(overrides?: Overrides & {
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
        routers(_domain: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "routers(uint32)"(_domain: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "setDestinationGas(uint32,uint256)"(domain: BigNumberish, gas: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "setDestinationGas((uint32,uint256)[])"(gasConfigs: GasRouter.GasRouterConfigStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setHook(_hook: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "setHook(address)"(_hook: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setInterchainSecurityModule(_module: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "setInterchainSecurityModule(address)"(_module: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        settle(_orderIds: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "settle(bytes32[])"(_orderIds: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "transferOwnership(address)"(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unenrollRemoteRouter(_domain: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "unenrollRemoteRouter(uint32)"(_domain: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unenrollRemoteRouters(_domains: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "unenrollRemoteRouters(uint32[])"(_domains: BigNumberish[], overrides?: Overrides & {
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
    PACKAGE_VERSION(overrides?: CallOverrides): Promise<string>;
    "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<string>;
    PERMIT2(overrides?: CallOverrides): Promise<string>;
    "PERMIT2()"(overrides?: CallOverrides): Promise<string>;
    REFUNDED(overrides?: CallOverrides): Promise<string>;
    "REFUNDED()"(overrides?: CallOverrides): Promise<string>;
    RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()"(overrides?: CallOverrides): Promise<string>;
    SETTLED(overrides?: CallOverrides): Promise<string>;
    "SETTLED()"(overrides?: CallOverrides): Promise<string>;
    UNKNOWN(overrides?: CallOverrides): Promise<string>;
    "UNKNOWN()"(overrides?: CallOverrides): Promise<string>;
    destinationGas(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "destinationGas(uint32)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    domains(overrides?: CallOverrides): Promise<number[]>;
    "domains()"(overrides?: CallOverrides): Promise<number[]>;
    enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "enrollRemoteRouter(uint32,bytes32)"(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    enrollRemoteRouters(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "enrollRemoteRouters(uint32[],bytes32[])"(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
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
    handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    hook(overrides?: CallOverrides): Promise<string>;
    "hook()"(overrides?: CallOverrides): Promise<string>;
    initialize(_customHook: string, _interchainSecurityModule: string, _owner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "initialize(address,address,address)"(_customHook: string, _interchainSecurityModule: string, _owner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    interchainSecurityModule(overrides?: CallOverrides): Promise<string>;
    "interchainSecurityModule()"(overrides?: CallOverrides): Promise<string>;
    invalidateNonces(_nonce: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "invalidateNonces(uint256)"(_nonce: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isValidNonce(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    "isValidNonce(address,uint256)"(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    localDomain(overrides?: CallOverrides): Promise<number>;
    "localDomain()"(overrides?: CallOverrides): Promise<number>;
    mailbox(overrides?: CallOverrides): Promise<string>;
    "mailbox()"(overrides?: CallOverrides): Promise<string>;
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
    owner(overrides?: CallOverrides): Promise<string>;
    "owner()"(overrides?: CallOverrides): Promise<string>;
    quoteGasPayment(_destinationDomain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "quoteGasPayment(uint32)"(_destinationDomain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "refund((uint32,bytes32,bytes)[])"(_orders: OnchainCrossChainOrderStruct[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])"(_orders: GaslessCrossChainOrderStruct[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "renounceOwnership()"(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resolve(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    "resolve((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    resolveFor(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    routers(_domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "routers(uint32)"(_domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "setDestinationGas(uint32,uint256)"(domain: BigNumberish, gas: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "setDestinationGas((uint32,uint256)[])"(gasConfigs: GasRouter.GasRouterConfigStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setHook(_hook: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "setHook(address)"(_hook: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setInterchainSecurityModule(_module: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "setInterchainSecurityModule(address)"(_module: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    settle(_orderIds: BytesLike[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "settle(bytes32[])"(_orderIds: BytesLike[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "transferOwnership(address)"(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unenrollRemoteRouter(_domain: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "unenrollRemoteRouter(uint32)"(_domain: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unenrollRemoteRouters(_domains: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "unenrollRemoteRouters(uint32[])"(_domains: BigNumberish[], overrides?: Overrides & {
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
        PACKAGE_VERSION(overrides?: CallOverrides): Promise<string>;
        "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<string>;
        PERMIT2(overrides?: CallOverrides): Promise<string>;
        "PERMIT2()"(overrides?: CallOverrides): Promise<string>;
        REFUNDED(overrides?: CallOverrides): Promise<string>;
        "REFUNDED()"(overrides?: CallOverrides): Promise<string>;
        RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()"(overrides?: CallOverrides): Promise<string>;
        SETTLED(overrides?: CallOverrides): Promise<string>;
        "SETTLED()"(overrides?: CallOverrides): Promise<string>;
        UNKNOWN(overrides?: CallOverrides): Promise<string>;
        "UNKNOWN()"(overrides?: CallOverrides): Promise<string>;
        destinationGas(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "destinationGas(uint32)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        domains(overrides?: CallOverrides): Promise<number[]>;
        "domains()"(overrides?: CallOverrides): Promise<number[]>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: CallOverrides): Promise<void>;
        "enrollRemoteRouter(uint32,bytes32)"(_domain: BigNumberish, _router: BytesLike, overrides?: CallOverrides): Promise<void>;
        enrollRemoteRouters(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: CallOverrides): Promise<void>;
        "enrollRemoteRouters(uint32[],bytes32[])"(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: CallOverrides): Promise<void>;
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
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: CallOverrides): Promise<void>;
        "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: CallOverrides): Promise<void>;
        hook(overrides?: CallOverrides): Promise<string>;
        "hook()"(overrides?: CallOverrides): Promise<string>;
        initialize(_customHook: string, _interchainSecurityModule: string, _owner: string, overrides?: CallOverrides): Promise<void>;
        "initialize(address,address,address)"(_customHook: string, _interchainSecurityModule: string, _owner: string, overrides?: CallOverrides): Promise<void>;
        interchainSecurityModule(overrides?: CallOverrides): Promise<string>;
        "interchainSecurityModule()"(overrides?: CallOverrides): Promise<string>;
        invalidateNonces(_nonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "invalidateNonces(uint256)"(_nonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isValidNonce(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "isValidNonce(address,uint256)"(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        localDomain(overrides?: CallOverrides): Promise<number>;
        "localDomain()"(overrides?: CallOverrides): Promise<number>;
        mailbox(overrides?: CallOverrides): Promise<string>;
        "mailbox()"(overrides?: CallOverrides): Promise<string>;
        open(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<void>;
        "open((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<void>;
        openFor(_order: GaslessCrossChainOrderStruct, _signature: BytesLike, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)"(_order: GaslessCrossChainOrderStruct, _signature: BytesLike, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<void>;
        openOrders(orderId: BytesLike, overrides?: CallOverrides): Promise<string>;
        "openOrders(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<string>;
        orderStatus(orderId: BytesLike, overrides?: CallOverrides): Promise<string>;
        "orderStatus(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        "owner()"(overrides?: CallOverrides): Promise<string>;
        quoteGasPayment(_destinationDomain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteGasPayment(uint32)"(_destinationDomain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "refund((uint32,bytes32,bytes)[])"(_orders: OnchainCrossChainOrderStruct[], overrides?: CallOverrides): Promise<void>;
        "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])"(_orders: GaslessCrossChainOrderStruct[], overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;
        resolve(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
        "resolve((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
        resolveFor(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
        routers(_domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "routers(uint32)"(_domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "setDestinationGas(uint32,uint256)"(domain: BigNumberish, gas: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "setDestinationGas((uint32,uint256)[])"(gasConfigs: GasRouter.GasRouterConfigStruct[], overrides?: CallOverrides): Promise<void>;
        setHook(_hook: string, overrides?: CallOverrides): Promise<void>;
        "setHook(address)"(_hook: string, overrides?: CallOverrides): Promise<void>;
        setInterchainSecurityModule(_module: string, overrides?: CallOverrides): Promise<void>;
        "setInterchainSecurityModule(address)"(_module: string, overrides?: CallOverrides): Promise<void>;
        settle(_orderIds: BytesLike[], overrides?: CallOverrides): Promise<void>;
        "settle(bytes32[])"(_orderIds: BytesLike[], overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        "transferOwnership(address)"(newOwner: string, overrides?: CallOverrides): Promise<void>;
        unenrollRemoteRouter(_domain: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "unenrollRemoteRouter(uint32)"(_domain: BigNumberish, overrides?: CallOverrides): Promise<void>;
        unenrollRemoteRouters(_domains: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        "unenrollRemoteRouters(uint32[])"(_domains: BigNumberish[], overrides?: CallOverrides): Promise<void>;
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
        "GasSet(uint32,uint256)"(domain?: null, gas?: null): GasSetEventFilter;
        GasSet(domain?: null, gas?: null): GasSetEventFilter;
        "HookSet(address)"(_hook?: null): HookSetEventFilter;
        HookSet(_hook?: null): HookSetEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "IsmSet(address)"(_ism?: null): IsmSetEventFilter;
        IsmSet(_ism?: null): IsmSetEventFilter;
        "NonceInvalidation(address,uint256)"(owner?: string | null, nonce?: null): NonceInvalidationEventFilter;
        NonceInvalidation(owner?: string | null, nonce?: null): NonceInvalidationEventFilter;
        "Open(bytes32,(address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))"(orderId?: BytesLike | null, resolvedOrder?: null): OpenEventFilter;
        Open(orderId?: BytesLike | null, resolvedOrder?: null): OpenEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Refund(bytes32[])"(orderIds?: null): RefundEventFilter;
        Refund(orderIds?: null): RefundEventFilter;
        "Refunded(bytes32,address)"(orderId?: null, receiver?: null): RefundedEventFilter;
        Refunded(orderId?: null, receiver?: null): RefundedEventFilter;
        "Settle(bytes32[],bytes[])"(orderIds?: null, ordersFillerData?: null): SettleEventFilter;
        Settle(orderIds?: null, ordersFillerData?: null): SettleEventFilter;
        "Settled(bytes32,address)"(orderId?: null, receiver?: null): SettledEventFilter;
        Settled(orderId?: null, receiver?: null): SettledEventFilter;
    };
    estimateGas: {
        FILLED(overrides?: CallOverrides): Promise<BigNumber>;
        "FILLED()"(overrides?: CallOverrides): Promise<BigNumber>;
        OPENED(overrides?: CallOverrides): Promise<BigNumber>;
        "OPENED()"(overrides?: CallOverrides): Promise<BigNumber>;
        PACKAGE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<BigNumber>;
        PERMIT2(overrides?: CallOverrides): Promise<BigNumber>;
        "PERMIT2()"(overrides?: CallOverrides): Promise<BigNumber>;
        REFUNDED(overrides?: CallOverrides): Promise<BigNumber>;
        "REFUNDED()"(overrides?: CallOverrides): Promise<BigNumber>;
        RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()"(overrides?: CallOverrides): Promise<BigNumber>;
        SETTLED(overrides?: CallOverrides): Promise<BigNumber>;
        "SETTLED()"(overrides?: CallOverrides): Promise<BigNumber>;
        UNKNOWN(overrides?: CallOverrides): Promise<BigNumber>;
        "UNKNOWN()"(overrides?: CallOverrides): Promise<BigNumber>;
        destinationGas(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "destinationGas(uint32)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        domains(overrides?: CallOverrides): Promise<BigNumber>;
        "domains()"(overrides?: CallOverrides): Promise<BigNumber>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "enrollRemoteRouter(uint32,bytes32)"(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        enrollRemoteRouters(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "enrollRemoteRouters(uint32[],bytes32[])"(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        fill(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "fill(bytes32,bytes,bytes)"(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        filledOrders(orderId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "filledOrders(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        hook(overrides?: CallOverrides): Promise<BigNumber>;
        "hook()"(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_customHook: string, _interchainSecurityModule: string, _owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "initialize(address,address,address)"(_customHook: string, _interchainSecurityModule: string, _owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        interchainSecurityModule(overrides?: CallOverrides): Promise<BigNumber>;
        "interchainSecurityModule()"(overrides?: CallOverrides): Promise<BigNumber>;
        invalidateNonces(_nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "invalidateNonces(uint256)"(_nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isValidNonce(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "isValidNonce(address,uint256)"(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        localDomain(overrides?: CallOverrides): Promise<BigNumber>;
        "localDomain()"(overrides?: CallOverrides): Promise<BigNumber>;
        mailbox(overrides?: CallOverrides): Promise<BigNumber>;
        "mailbox()"(overrides?: CallOverrides): Promise<BigNumber>;
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
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        "owner()"(overrides?: CallOverrides): Promise<BigNumber>;
        quoteGasPayment(_destinationDomain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteGasPayment(uint32)"(_destinationDomain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "refund((uint32,bytes32,bytes)[])"(_orders: OnchainCrossChainOrderStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])"(_orders: GaslessCrossChainOrderStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "renounceOwnership()"(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resolve(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        "resolve((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        resolveFor(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        routers(_domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "routers(uint32)"(_domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "setDestinationGas(uint32,uint256)"(domain: BigNumberish, gas: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "setDestinationGas((uint32,uint256)[])"(gasConfigs: GasRouter.GasRouterConfigStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setHook(_hook: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "setHook(address)"(_hook: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setInterchainSecurityModule(_module: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "setInterchainSecurityModule(address)"(_module: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        settle(_orderIds: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "settle(bytes32[])"(_orderIds: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "transferOwnership(address)"(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        unenrollRemoteRouter(_domain: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "unenrollRemoteRouter(uint32)"(_domain: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        unenrollRemoteRouters(_domains: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "unenrollRemoteRouters(uint32[])"(_domains: BigNumberish[], overrides?: Overrides & {
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
        PACKAGE_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "PACKAGE_VERSION()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PERMIT2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "PERMIT2()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REFUNDED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "REFUNDED()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "RESOLVED_CROSS_CHAIN_ORDER_TYPEHASH()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SETTLED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "SETTLED()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNKNOWN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "UNKNOWN()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        destinationGas(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "destinationGas(uint32)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        domains(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "domains()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "enrollRemoteRouter(uint32,bytes32)"(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        enrollRemoteRouters(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "enrollRemoteRouters(uint32[],bytes32[])"(_domains: BigNumberish[], _addresses: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        fill(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "fill(bytes32,bytes,bytes)"(_orderId: BytesLike, _originData: BytesLike, _fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        filledOrders(orderId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "filledOrders(bytes32)"(orderId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        hook(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "hook()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_customHook: string, _interchainSecurityModule: string, _owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "initialize(address,address,address)"(_customHook: string, _interchainSecurityModule: string, _owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        interchainSecurityModule(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "interchainSecurityModule()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        invalidateNonces(_nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "invalidateNonces(uint256)"(_nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isValidNonce(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isValidNonce(address,uint256)"(_from: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "localDomain()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mailbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "mailbox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteGasPayment(_destinationDomain: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "quoteGasPayment(uint32)"(_destinationDomain: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "refund((uint32,bytes32,bytes)[])"(_orders: OnchainCrossChainOrderStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "refund((address,address,uint256,uint256,uint32,uint32,bytes32,bytes)[])"(_orders: GaslessCrossChainOrderStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "renounceOwnership()"(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resolve(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "resolve((uint32,bytes32,bytes))"(_order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolveFor(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(_order: GaslessCrossChainOrderStruct, _originFillerData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        routers(_domain: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "routers(uint32)"(_domain: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "setDestinationGas(uint32,uint256)"(domain: BigNumberish, gas: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "setDestinationGas((uint32,uint256)[])"(gasConfigs: GasRouter.GasRouterConfigStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setHook(_hook: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "setHook(address)"(_hook: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setInterchainSecurityModule(_module: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "setInterchainSecurityModule(address)"(_module: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        settle(_orderIds: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "settle(bytes32[])"(_orderIds: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "transferOwnership(address)"(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unenrollRemoteRouter(_domain: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "unenrollRemoteRouter(uint32)"(_domain: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unenrollRemoteRouters(_domains: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "unenrollRemoteRouters(uint32[])"(_domains: BigNumberish[], overrides?: Overrides & {
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
//# sourceMappingURL=Hyperlane7683.d.ts.map