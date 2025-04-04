import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common.js";
export interface IPostDispatchHookInterface extends utils.Interface {
    functions: {
        "hookType()": FunctionFragment;
        "postDispatch(bytes,bytes)": FunctionFragment;
        "quoteDispatch(bytes,bytes)": FunctionFragment;
        "supportsMetadata(bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "hookType" | "hookType()" | "postDispatch" | "postDispatch(bytes,bytes)" | "quoteDispatch" | "quoteDispatch(bytes,bytes)" | "supportsMetadata" | "supportsMetadata(bytes)"): FunctionFragment;
    encodeFunctionData(functionFragment: "hookType", values?: undefined): string;
    encodeFunctionData(functionFragment: "hookType()", values?: undefined): string;
    encodeFunctionData(functionFragment: "postDispatch", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "postDispatch(bytes,bytes)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "quoteDispatch", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "quoteDispatch(bytes,bytes)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "supportsMetadata", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "supportsMetadata(bytes)", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "hookType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hookType()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postDispatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postDispatch(bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteDispatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteDispatch(bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsMetadata(bytes)", data: BytesLike): Result;
    events: {};
}
export interface IPostDispatchHook extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPostDispatchHookInterface;
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
        hookType(overrides?: CallOverrides): Promise<[number]>;
        "hookType()"(overrides?: CallOverrides): Promise<[number]>;
        postDispatch(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "postDispatch(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        quoteDispatch(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        "quoteDispatch(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsMetadata(metadata: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        "supportsMetadata(bytes)"(metadata: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    hookType(overrides?: CallOverrides): Promise<number>;
    "hookType()"(overrides?: CallOverrides): Promise<number>;
    postDispatch(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "postDispatch(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    quoteDispatch(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    "quoteDispatch(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    supportsMetadata(metadata: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    "supportsMetadata(bytes)"(metadata: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        hookType(overrides?: CallOverrides): Promise<number>;
        "hookType()"(overrides?: CallOverrides): Promise<number>;
        postDispatch(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        "postDispatch(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        quoteDispatch(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteDispatch(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        supportsMetadata(metadata: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        "supportsMetadata(bytes)"(metadata: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        hookType(overrides?: CallOverrides): Promise<BigNumber>;
        "hookType()"(overrides?: CallOverrides): Promise<BigNumber>;
        postDispatch(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "postDispatch(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        quoteDispatch(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteDispatch(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        supportsMetadata(metadata: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "supportsMetadata(bytes)"(metadata: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        hookType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "hookType()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        postDispatch(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "postDispatch(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        quoteDispatch(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "quoteDispatch(bytes,bytes)"(metadata: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsMetadata(metadata: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "supportsMetadata(bytes)"(metadata: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IPostDispatchHook.d.ts.map