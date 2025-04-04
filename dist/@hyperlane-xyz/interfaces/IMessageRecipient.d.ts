import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common.js";
export interface IMessageRecipientInterface extends utils.Interface {
    functions: {
        "handle(uint32,bytes32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "handle" | "handle(uint32,bytes32,bytes)"): FunctionFragment;
    encodeFunctionData(functionFragment: "handle", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "handle(uint32,bytes32,bytes)", values: [BigNumberish, BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "handle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handle(uint32,bytes32,bytes)", data: BytesLike): Result;
    events: {};
}
export interface IMessageRecipient extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMessageRecipientInterface;
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
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: CallOverrides): Promise<void>;
        "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "handle(uint32,bytes32,bytes)"(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IMessageRecipient.d.ts.map