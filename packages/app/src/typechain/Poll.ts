/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type MaxValuesStruct = {
  maxMessages: BigNumberish;
  maxVoteOptions: BigNumberish;
};

export type MaxValuesStructOutput = [BigNumber, BigNumber] & {
  maxMessages: BigNumber;
  maxVoteOptions: BigNumber;
};

export type TreeDepthsStruct = {
  intStateTreeDepth: BigNumberish;
  messageTreeSubDepth: BigNumberish;
  messageTreeDepth: BigNumberish;
  voteOptionTreeDepth: BigNumberish;
};

export type TreeDepthsStructOutput = [number, number, number, number] & {
  intStateTreeDepth: number;
  messageTreeSubDepth: number;
  messageTreeDepth: number;
  voteOptionTreeDepth: number;
};

export type BatchSizesStruct = {
  messageBatchSize: BigNumberish;
  tallyBatchSize: BigNumberish;
};

export type BatchSizesStructOutput = [number, number] & {
  messageBatchSize: number;
  tallyBatchSize: number;
};

export type PubKeyStruct = { x: BigNumberish; y: BigNumberish };

export type PubKeyStructOutput = [BigNumber, BigNumber] & {
  x: BigNumber;
  y: BigNumber;
};

export type ExtContractsStruct = {
  vkRegistry: string;
  maci: string;
  messageAq: string;
};

export type ExtContractsStructOutput = [string, string, string] & {
  vkRegistry: string;
  maci: string;
  messageAq: string;
};

export type MessageStruct = { data: BigNumberish[] };

export type MessageStructOutput = [BigNumber[]] & { data: BigNumber[] };

export interface PollInterface extends utils.Interface {
  functions: {
    "batchEnqueueMessage(uint256)": FunctionFragment;
    "batchSizes()": FunctionFragment;
    "coordinatorPubKey()": FunctionFragment;
    "coordinatorPubKeyHash()": FunctionFragment;
    "currentSbCommitment()": FunctionFragment;
    "extContracts()": FunctionFragment;
    "getDeployTimeAndDuration()": FunctionFragment;
    "hash2(uint256[2])": FunctionFragment;
    "hash3(uint256[3])": FunctionFragment;
    "hash4(uint256[4])": FunctionFragment;
    "hash5(uint256[5])": FunctionFragment;
    "hashLeftRight(uint256,uint256)": FunctionFragment;
    "hashMessageAndEncPubKey((uint256[10]),(uint256,uint256))": FunctionFragment;
    "isAfterDeadline()": FunctionFragment;
    "maxValues()": FunctionFragment;
    "mergeMaciStateAq(uint256)": FunctionFragment;
    "mergeMaciStateAqSubRoots(uint256,uint256)": FunctionFragment;
    "mergeMessageAq()": FunctionFragment;
    "mergeMessageAqSubRoots(uint256)": FunctionFragment;
    "mergedStateRoot()": FunctionFragment;
    "numSignUpsAndMessages()": FunctionFragment;
    "owner()": FunctionFragment;
    "publishMessage((uint256[10]),(uint256,uint256))": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sha256Hash(uint256[])": FunctionFragment;
    "stateAqMerged()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treeDepths()": FunctionFragment;
    "verifyPerVOSpentVoiceCredits(uint256,uint256,uint256[][],uint256)": FunctionFragment;
    "verifySpentVoiceCredits(uint256,uint256)": FunctionFragment;
    "verifyTallyResult(uint256,uint256,uint256[][],uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "batchEnqueueMessage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchSizes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "coordinatorPubKey",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "coordinatorPubKeyHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentSbCommitment",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "extContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDeployTimeAndDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hash2",
    values: [[BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash3",
    values: [[BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash4",
    values: [[BigNumberish, BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash5",
    values: [
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hashMessageAndEncPubKey",
    values: [MessageStruct, PubKeyStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "isAfterDeadline",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "maxValues", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mergeMaciStateAq",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mergeMaciStateAqSubRoots",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mergeMessageAq",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mergeMessageAqSubRoots",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mergedStateRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numSignUpsAndMessages",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "publishMessage",
    values: [MessageStruct, PubKeyStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sha256Hash",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "stateAqMerged",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "treeDepths",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verifyPerVOSpentVoiceCredits",
    values: [BigNumberish, BigNumberish, BigNumberish[][], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "verifySpentVoiceCredits",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyTallyResult",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish[][],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchEnqueueMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "batchSizes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "coordinatorPubKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coordinatorPubKeyHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentSbCommitment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "extContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDeployTimeAndDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hash2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash3", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash4", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash5", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashMessageAndEncPubKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAfterDeadline",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxValues", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mergeMaciStateAq",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mergeMaciStateAqSubRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mergeMessageAq",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mergeMessageAqSubRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mergedStateRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numSignUpsAndMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "publishMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sha256Hash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stateAqMerged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treeDepths", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyPerVOSpentVoiceCredits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifySpentVoiceCredits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyTallyResult",
    data: BytesLike
  ): Result;

  events: {
    "MergeMaciStateAq(uint256)": EventFragment;
    "MergeMaciStateAqSubRoots(uint256)": EventFragment;
    "MergeMessageAq(uint256)": EventFragment;
    "MergeMessageAqSubRoots(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PublishMessage(tuple,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MergeMaciStateAq"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MergeMaciStateAqSubRoots"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MergeMessageAq"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MergeMessageAqSubRoots"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublishMessage"): EventFragment;
}

export type MergeMaciStateAqEvent = TypedEvent<
  [BigNumber],
  { _stateRoot: BigNumber }
>;

export type MergeMaciStateAqEventFilter =
  TypedEventFilter<MergeMaciStateAqEvent>;

export type MergeMaciStateAqSubRootsEvent = TypedEvent<
  [BigNumber],
  { _numSrQueueOps: BigNumber }
>;

export type MergeMaciStateAqSubRootsEventFilter =
  TypedEventFilter<MergeMaciStateAqSubRootsEvent>;

export type MergeMessageAqEvent = TypedEvent<
  [BigNumber],
  { _messageRoot: BigNumber }
>;

export type MergeMessageAqEventFilter = TypedEventFilter<MergeMessageAqEvent>;

export type MergeMessageAqSubRootsEvent = TypedEvent<
  [BigNumber],
  { _numSrQueueOps: BigNumber }
>;

export type MergeMessageAqSubRootsEventFilter =
  TypedEventFilter<MergeMessageAqSubRootsEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PublishMessageEvent = TypedEvent<
  [MessageStructOutput, PubKeyStructOutput],
  { _message: MessageStructOutput; _encPubKey: PubKeyStructOutput }
>;

export type PublishMessageEventFilter = TypedEventFilter<PublishMessageEvent>;

export interface Poll extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PollInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    batchEnqueueMessage(
      _messageSubRoot: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchSizes(
      overrides?: CallOverrides
    ): Promise<
      [number, number] & { messageBatchSize: number; tallyBatchSize: number }
    >;

    coordinatorPubKey(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

    coordinatorPubKeyHash(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentSbCommitment(overrides?: CallOverrides): Promise<[BigNumber]>;

    extContracts(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        vkRegistry: string;
        maci: string;
        messageAq: string;
      }
    >;

    getDeployTimeAndDuration(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    hash2(
      array: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hash3(
      array: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hash4(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hashMessageAndEncPubKey(
      _message: MessageStruct,
      _encPubKey: PubKeyStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isAfterDeadline(overrides?: CallOverrides): Promise<[boolean]>;

    maxValues(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        maxMessages: BigNumber;
        maxVoteOptions: BigNumber;
      }
    >;

    mergeMaciStateAq(
      _pollId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mergeMaciStateAqSubRoots(
      _numSrQueueOps: BigNumberish,
      _pollId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mergeMessageAq(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mergeMessageAqSubRoots(
      _numSrQueueOps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mergedStateRoot(overrides?: CallOverrides): Promise<[BigNumber]>;

    numSignUpsAndMessages(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    publishMessage(
      _message: MessageStruct,
      _encPubKey: PubKeyStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sha256Hash(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stateAqMerged(overrides?: CallOverrides): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treeDepths(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number] & {
        intStateTreeDepth: number;
        messageTreeSubDepth: number;
        messageTreeDepth: number;
        voteOptionTreeDepth: number;
      }
    >;

    verifyPerVOSpentVoiceCredits(
      _voteOptionIndex: BigNumberish,
      _spent: BigNumberish,
      _spentProof: BigNumberish[][],
      _spentSalt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifySpentVoiceCredits(
      _totalSpent: BigNumberish,
      _totalSpentSalt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyTallyResult(
      _voteOptionIndex: BigNumberish,
      _tallyResult: BigNumberish,
      _tallyResultProof: BigNumberish[][],
      _tallyResultSalt: BigNumberish,
      _spentVoiceCreditsHash: BigNumberish,
      _perVOSpentVoiceCreditsHash: BigNumberish,
      _tallyCommitment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  batchEnqueueMessage(
    _messageSubRoot: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchSizes(
    overrides?: CallOverrides
  ): Promise<
    [number, number] & { messageBatchSize: number; tallyBatchSize: number }
  >;

  coordinatorPubKey(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

  coordinatorPubKeyHash(overrides?: CallOverrides): Promise<BigNumber>;

  currentSbCommitment(overrides?: CallOverrides): Promise<BigNumber>;

  extContracts(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      vkRegistry: string;
      maci: string;
      messageAq: string;
    }
  >;

  getDeployTimeAndDuration(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  hash2(
    array: [BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hash3(
    array: [BigNumberish, BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hash4(
    array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hash5(
    array: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hashLeftRight(
    _left: BigNumberish,
    _right: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hashMessageAndEncPubKey(
    _message: MessageStruct,
    _encPubKey: PubKeyStruct,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isAfterDeadline(overrides?: CallOverrides): Promise<boolean>;

  maxValues(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      maxMessages: BigNumber;
      maxVoteOptions: BigNumber;
    }
  >;

  mergeMaciStateAq(
    _pollId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mergeMaciStateAqSubRoots(
    _numSrQueueOps: BigNumberish,
    _pollId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mergeMessageAq(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mergeMessageAqSubRoots(
    _numSrQueueOps: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mergedStateRoot(overrides?: CallOverrides): Promise<BigNumber>;

  numSignUpsAndMessages(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  owner(overrides?: CallOverrides): Promise<string>;

  publishMessage(
    _message: MessageStruct,
    _encPubKey: PubKeyStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sha256Hash(
    array: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  stateAqMerged(overrides?: CallOverrides): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treeDepths(
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number] & {
      intStateTreeDepth: number;
      messageTreeSubDepth: number;
      messageTreeDepth: number;
      voteOptionTreeDepth: number;
    }
  >;

  verifyPerVOSpentVoiceCredits(
    _voteOptionIndex: BigNumberish,
    _spent: BigNumberish,
    _spentProof: BigNumberish[][],
    _spentSalt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifySpentVoiceCredits(
    _totalSpent: BigNumberish,
    _totalSpentSalt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyTallyResult(
    _voteOptionIndex: BigNumberish,
    _tallyResult: BigNumberish,
    _tallyResultProof: BigNumberish[][],
    _tallyResultSalt: BigNumberish,
    _spentVoiceCreditsHash: BigNumberish,
    _perVOSpentVoiceCreditsHash: BigNumberish,
    _tallyCommitment: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    batchEnqueueMessage(
      _messageSubRoot: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    batchSizes(
      overrides?: CallOverrides
    ): Promise<
      [number, number] & { messageBatchSize: number; tallyBatchSize: number }
    >;

    coordinatorPubKey(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

    coordinatorPubKeyHash(overrides?: CallOverrides): Promise<BigNumber>;

    currentSbCommitment(overrides?: CallOverrides): Promise<BigNumber>;

    extContracts(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        vkRegistry: string;
        maci: string;
        messageAq: string;
      }
    >;

    getDeployTimeAndDuration(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    hash2(
      array: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash3(
      array: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash4(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashMessageAndEncPubKey(
      _message: MessageStruct,
      _encPubKey: PubKeyStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAfterDeadline(overrides?: CallOverrides): Promise<boolean>;

    maxValues(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        maxMessages: BigNumber;
        maxVoteOptions: BigNumber;
      }
    >;

    mergeMaciStateAq(
      _pollId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mergeMaciStateAqSubRoots(
      _numSrQueueOps: BigNumberish,
      _pollId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mergeMessageAq(overrides?: CallOverrides): Promise<void>;

    mergeMessageAqSubRoots(
      _numSrQueueOps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mergedStateRoot(overrides?: CallOverrides): Promise<BigNumber>;

    numSignUpsAndMessages(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    owner(overrides?: CallOverrides): Promise<string>;

    publishMessage(
      _message: MessageStruct,
      _encPubKey: PubKeyStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sha256Hash(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stateAqMerged(overrides?: CallOverrides): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    treeDepths(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number] & {
        intStateTreeDepth: number;
        messageTreeSubDepth: number;
        messageTreeDepth: number;
        voteOptionTreeDepth: number;
      }
    >;

    verifyPerVOSpentVoiceCredits(
      _voteOptionIndex: BigNumberish,
      _spent: BigNumberish,
      _spentProof: BigNumberish[][],
      _spentSalt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifySpentVoiceCredits(
      _totalSpent: BigNumberish,
      _totalSpentSalt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyTallyResult(
      _voteOptionIndex: BigNumberish,
      _tallyResult: BigNumberish,
      _tallyResultProof: BigNumberish[][],
      _tallyResultSalt: BigNumberish,
      _spentVoiceCreditsHash: BigNumberish,
      _perVOSpentVoiceCreditsHash: BigNumberish,
      _tallyCommitment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "MergeMaciStateAq(uint256)"(_stateRoot?: null): MergeMaciStateAqEventFilter;
    MergeMaciStateAq(_stateRoot?: null): MergeMaciStateAqEventFilter;

    "MergeMaciStateAqSubRoots(uint256)"(
      _numSrQueueOps?: null
    ): MergeMaciStateAqSubRootsEventFilter;
    MergeMaciStateAqSubRoots(
      _numSrQueueOps?: null
    ): MergeMaciStateAqSubRootsEventFilter;

    "MergeMessageAq(uint256)"(_messageRoot?: null): MergeMessageAqEventFilter;
    MergeMessageAq(_messageRoot?: null): MergeMessageAqEventFilter;

    "MergeMessageAqSubRoots(uint256)"(
      _numSrQueueOps?: null
    ): MergeMessageAqSubRootsEventFilter;
    MergeMessageAqSubRoots(
      _numSrQueueOps?: null
    ): MergeMessageAqSubRootsEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "PublishMessage(tuple,tuple)"(
      _message?: null,
      _encPubKey?: null
    ): PublishMessageEventFilter;
    PublishMessage(
      _message?: null,
      _encPubKey?: null
    ): PublishMessageEventFilter;
  };

  estimateGas: {
    batchEnqueueMessage(
      _messageSubRoot: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchSizes(overrides?: CallOverrides): Promise<BigNumber>;

    coordinatorPubKey(overrides?: CallOverrides): Promise<BigNumber>;

    coordinatorPubKeyHash(overrides?: CallOverrides): Promise<BigNumber>;

    currentSbCommitment(overrides?: CallOverrides): Promise<BigNumber>;

    extContracts(overrides?: CallOverrides): Promise<BigNumber>;

    getDeployTimeAndDuration(overrides?: CallOverrides): Promise<BigNumber>;

    hash2(
      array: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash3(
      array: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash4(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashMessageAndEncPubKey(
      _message: MessageStruct,
      _encPubKey: PubKeyStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAfterDeadline(overrides?: CallOverrides): Promise<BigNumber>;

    maxValues(overrides?: CallOverrides): Promise<BigNumber>;

    mergeMaciStateAq(
      _pollId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mergeMaciStateAqSubRoots(
      _numSrQueueOps: BigNumberish,
      _pollId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mergeMessageAq(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mergeMessageAqSubRoots(
      _numSrQueueOps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mergedStateRoot(overrides?: CallOverrides): Promise<BigNumber>;

    numSignUpsAndMessages(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    publishMessage(
      _message: MessageStruct,
      _encPubKey: PubKeyStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sha256Hash(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stateAqMerged(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    treeDepths(overrides?: CallOverrides): Promise<BigNumber>;

    verifyPerVOSpentVoiceCredits(
      _voteOptionIndex: BigNumberish,
      _spent: BigNumberish,
      _spentProof: BigNumberish[][],
      _spentSalt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifySpentVoiceCredits(
      _totalSpent: BigNumberish,
      _totalSpentSalt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyTallyResult(
      _voteOptionIndex: BigNumberish,
      _tallyResult: BigNumberish,
      _tallyResultProof: BigNumberish[][],
      _tallyResultSalt: BigNumberish,
      _spentVoiceCreditsHash: BigNumberish,
      _perVOSpentVoiceCreditsHash: BigNumberish,
      _tallyCommitment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    batchEnqueueMessage(
      _messageSubRoot: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchSizes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    coordinatorPubKey(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    coordinatorPubKeyHash(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentSbCommitment(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    extContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeployTimeAndDuration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash2(
      array: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash3(
      array: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash4(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashMessageAndEncPubKey(
      _message: MessageStruct,
      _encPubKey: PubKeyStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAfterDeadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxValues(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mergeMaciStateAq(
      _pollId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mergeMaciStateAqSubRoots(
      _numSrQueueOps: BigNumberish,
      _pollId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mergeMessageAq(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mergeMessageAqSubRoots(
      _numSrQueueOps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mergedStateRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numSignUpsAndMessages(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    publishMessage(
      _message: MessageStruct,
      _encPubKey: PubKeyStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sha256Hash(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stateAqMerged(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    treeDepths(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifyPerVOSpentVoiceCredits(
      _voteOptionIndex: BigNumberish,
      _spent: BigNumberish,
      _spentProof: BigNumberish[][],
      _spentSalt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifySpentVoiceCredits(
      _totalSpent: BigNumberish,
      _totalSpentSalt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyTallyResult(
      _voteOptionIndex: BigNumberish,
      _tallyResult: BigNumberish,
      _tallyResultProof: BigNumberish[][],
      _tallyResultSalt: BigNumberish,
      _spentVoiceCreditsHash: BigNumberish,
      _perVOSpentVoiceCreditsHash: BigNumberish,
      _tallyCommitment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}