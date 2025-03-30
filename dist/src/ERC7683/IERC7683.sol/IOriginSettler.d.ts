import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common.js";
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
export interface IOriginSettlerInterface extends utils.Interface {
    functions: {
        "open((uint32,bytes32,bytes))": FunctionFragment;
        "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)": FunctionFragment;
        "resolve((uint32,bytes32,bytes))": FunctionFragment;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "open" | "open((uint32,bytes32,bytes))" | "openFor" | "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)" | "resolve" | "resolve((uint32,bytes32,bytes))" | "resolveFor" | "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"): FunctionFragment;
    encodeFunctionData(functionFragment: "open", values: [OnchainCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "open((uint32,bytes32,bytes))", values: [OnchainCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "openFor", values: [GaslessCrossChainOrderStruct, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)", values: [GaslessCrossChainOrderStruct, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "resolve", values: [OnchainCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "resolve((uint32,bytes32,bytes))", values: [OnchainCrossChainOrderStruct]): string;
    encodeFunctionData(functionFragment: "resolveFor", values: [GaslessCrossChainOrderStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)", values: [GaslessCrossChainOrderStruct, BytesLike]): string;
    decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "open((uint32,bytes32,bytes))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolve((uint32,bytes32,bytes))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)", data: BytesLike): Result;
    events: {
        "Open(bytes32,(address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Open"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Open(bytes32,(address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))"): EventFragment;
}
export interface OpenEventObject {
    orderId: string;
    resolvedOrder: ResolvedCrossChainOrderStructOutput;
}
export type OpenEvent = TypedEvent<[
    string,
    ResolvedCrossChainOrderStructOutput
], OpenEventObject>;
export type OpenEventFilter = TypedEventFilter<OpenEvent>;
export interface IOriginSettler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOriginSettlerInterface;
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
        open(order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "open((uint32,bytes32,bytes))"(order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        openFor(order: GaslessCrossChainOrderStruct, signature: BytesLike, originFillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)"(order: GaslessCrossChainOrderStruct, signature: BytesLike, originFillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resolve(order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<[ResolvedCrossChainOrderStructOutput]>;
        "resolve((uint32,bytes32,bytes))"(order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<[ResolvedCrossChainOrderStructOutput]>;
        resolveFor(order: GaslessCrossChainOrderStruct, originFillerData: BytesLike, overrides?: CallOverrides): Promise<[ResolvedCrossChainOrderStructOutput]>;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(order: GaslessCrossChainOrderStruct, originFillerData: BytesLike, overrides?: CallOverrides): Promise<[ResolvedCrossChainOrderStructOutput]>;
    };
    open(order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "open((uint32,bytes32,bytes))"(order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    openFor(order: GaslessCrossChainOrderStruct, signature: BytesLike, originFillerData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)"(order: GaslessCrossChainOrderStruct, signature: BytesLike, originFillerData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resolve(order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    "resolve((uint32,bytes32,bytes))"(order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    resolveFor(order: GaslessCrossChainOrderStruct, originFillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(order: GaslessCrossChainOrderStruct, originFillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    callStatic: {
        open(order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<void>;
        "open((uint32,bytes32,bytes))"(order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<void>;
        openFor(order: GaslessCrossChainOrderStruct, signature: BytesLike, originFillerData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)"(order: GaslessCrossChainOrderStruct, signature: BytesLike, originFillerData: BytesLike, overrides?: CallOverrides): Promise<void>;
        resolve(order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
        "resolve((uint32,bytes32,bytes))"(order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
        resolveFor(order: GaslessCrossChainOrderStruct, originFillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(order: GaslessCrossChainOrderStruct, originFillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    };
    filters: {
        "Open(bytes32,(address,uint256,uint32,uint32,bytes32,(bytes32,uint256,bytes32,uint256)[],(bytes32,uint256,bytes32,uint256)[],(uint256,bytes32,bytes)[]))"(orderId?: BytesLike | null, resolvedOrder?: null): OpenEventFilter;
        Open(orderId?: BytesLike | null, resolvedOrder?: null): OpenEventFilter;
    };
    estimateGas: {
        open(order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "open((uint32,bytes32,bytes))"(order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        openFor(order: GaslessCrossChainOrderStruct, signature: BytesLike, originFillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)"(order: GaslessCrossChainOrderStruct, signature: BytesLike, originFillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resolve(order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        "resolve((uint32,bytes32,bytes))"(order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<BigNumber>;
        resolveFor(order: GaslessCrossChainOrderStruct, originFillerData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(order: GaslessCrossChainOrderStruct, originFillerData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        open(order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "open((uint32,bytes32,bytes))"(order: OnchainCrossChainOrderStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        openFor(order: GaslessCrossChainOrderStruct, signature: BytesLike, originFillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "openFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes,bytes)"(order: GaslessCrossChainOrderStruct, signature: BytesLike, originFillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resolve(order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "resolve((uint32,bytes32,bytes))"(order: OnchainCrossChainOrderStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolveFor(order: GaslessCrossChainOrderStruct, originFillerData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "resolveFor((address,address,uint256,uint256,uint32,uint32,bytes32,bytes),bytes)"(order: GaslessCrossChainOrderStruct, originFillerData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IOriginSettler.d.ts.map