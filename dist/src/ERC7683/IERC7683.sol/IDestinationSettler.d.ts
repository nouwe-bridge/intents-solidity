import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common.js";
export interface IDestinationSettlerInterface extends utils.Interface {
    functions: {
        "fill(bytes32,bytes,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "fill" | "fill(bytes32,bytes,bytes)"): FunctionFragment;
    encodeFunctionData(functionFragment: "fill", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "fill(bytes32,bytes,bytes)", values: [BytesLike, BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "fill", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fill(bytes32,bytes,bytes)", data: BytesLike): Result;
    events: {};
}
export interface IDestinationSettler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDestinationSettlerInterface;
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
        fill(orderId: BytesLike, originData: BytesLike, fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "fill(bytes32,bytes,bytes)"(orderId: BytesLike, originData: BytesLike, fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    fill(orderId: BytesLike, originData: BytesLike, fillerData: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "fill(bytes32,bytes,bytes)"(orderId: BytesLike, originData: BytesLike, fillerData: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        fill(orderId: BytesLike, originData: BytesLike, fillerData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "fill(bytes32,bytes,bytes)"(orderId: BytesLike, originData: BytesLike, fillerData: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        fill(orderId: BytesLike, originData: BytesLike, fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "fill(bytes32,bytes,bytes)"(orderId: BytesLike, originData: BytesLike, fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        fill(orderId: BytesLike, originData: BytesLike, fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "fill(bytes32,bytes,bytes)"(orderId: BytesLike, originData: BytesLike, fillerData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IDestinationSettler.d.ts.map