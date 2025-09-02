import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type Facility = {
  __typename?: 'Facility';
  _count?: Maybe<FacilityCount>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type FacilityCount = {
  __typename?: 'FacilityCount';
  inflows: Scalars['Int']['output'];
  outflow: Scalars['Int']['output'];
};


export type FacilityCountInflowsArgs = {
  where?: InputMaybe<InflowWhereInput>;
};


export type FacilityCountOutflowArgs = {
  where?: InputMaybe<OutflowWhereInput>;
};

export type FacilityCreateInput = {
  inflows?: InputMaybe<InflowCreateNestedManyWithoutFacilityInput>;
  name: Scalars['String']['input'];
  outflow?: InputMaybe<OutflowCreateNestedManyWithoutFacilityInput>;
};

export type FacilityCreateNestedOneWithoutInflowsInput = {
  connect?: InputMaybe<FacilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FacilityCreateOrConnectWithoutInflowsInput>;
  create?: InputMaybe<FacilityUncheckedCreateWithoutInflowsInput>;
};

export type FacilityCreateNestedOneWithoutOutflowInput = {
  connect?: InputMaybe<FacilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FacilityCreateOrConnectWithoutOutflowInput>;
  create?: InputMaybe<FacilityUncheckedCreateWithoutOutflowInput>;
};

export type FacilityCreateOrConnectWithoutInflowsInput = {
  create: FacilityUncheckedCreateWithoutInflowsInput;
  where: FacilityWhereUniqueInput;
};

export type FacilityCreateOrConnectWithoutOutflowInput = {
  create: FacilityUncheckedCreateWithoutOutflowInput;
  where: FacilityWhereUniqueInput;
};

export type FacilityRelationFilter = {
  is?: InputMaybe<FacilityWhereInput>;
  isNot?: InputMaybe<FacilityWhereInput>;
};

export type FacilityUncheckedCreateWithoutInflowsInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  outflow?: InputMaybe<OutflowUncheckedCreateNestedManyWithoutFacilityInput>;
};

export type FacilityUncheckedCreateWithoutOutflowInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  inflows?: InputMaybe<InflowUncheckedCreateNestedManyWithoutFacilityInput>;
  name: Scalars['String']['input'];
};

export type FacilityUncheckedUpdateWithoutInflowsInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  outflow?: InputMaybe<OutflowUncheckedUpdateManyWithoutFacilityNestedInput>;
};

export type FacilityUncheckedUpdateWithoutOutflowInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  inflows?: InputMaybe<InflowUncheckedUpdateManyWithoutFacilityNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FacilityUpdateOneRequiredWithoutInflowsNestedInput = {
  connect?: InputMaybe<FacilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FacilityCreateOrConnectWithoutInflowsInput>;
  create?: InputMaybe<FacilityUncheckedCreateWithoutInflowsInput>;
  update?: InputMaybe<FacilityUncheckedUpdateWithoutInflowsInput>;
  upsert?: InputMaybe<FacilityUpsertWithoutInflowsInput>;
};

export type FacilityUpdateOneRequiredWithoutOutflowNestedInput = {
  connect?: InputMaybe<FacilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FacilityCreateOrConnectWithoutOutflowInput>;
  create?: InputMaybe<FacilityUncheckedCreateWithoutOutflowInput>;
  update?: InputMaybe<FacilityUncheckedUpdateWithoutOutflowInput>;
  upsert?: InputMaybe<FacilityUpsertWithoutOutflowInput>;
};

export type FacilityUpdateSimpleInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FacilityUpsertWithoutInflowsInput = {
  create: FacilityUncheckedCreateWithoutInflowsInput;
  update: FacilityUncheckedUpdateWithoutInflowsInput;
  where?: InputMaybe<FacilityWhereInput>;
};

export type FacilityUpsertWithoutOutflowInput = {
  create: FacilityUncheckedCreateWithoutOutflowInput;
  update: FacilityUncheckedUpdateWithoutOutflowInput;
  where?: InputMaybe<FacilityWhereInput>;
};

export type FacilityWhereInput = {
  AND?: InputMaybe<Array<FacilityWhereInput>>;
  NOT?: InputMaybe<Array<FacilityWhereInput>>;
  OR?: InputMaybe<Array<FacilityWhereInput>>;
  id?: InputMaybe<IntFilter>;
  inflows?: InputMaybe<InflowListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  outflow?: InputMaybe<OutflowListRelationFilter>;
};

export type FacilityWhereUniqueInput = {
  AND?: InputMaybe<Array<FacilityWhereInput>>;
  NOT?: InputMaybe<Array<FacilityWhereInput>>;
  OR?: InputMaybe<Array<FacilityWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  inflows?: InputMaybe<InflowListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  outflow?: InputMaybe<OutflowListRelationFilter>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Inflow = {
  __typename?: 'Inflow';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  date: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  facility: Facility;
  facilityId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  job?: Maybe<Job>;
  jobId?: Maybe<Scalars['Int']['output']>;
  person: Person;
  personId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type InflowApiCreateInput = {
  amount: Scalars['Float']['input'];
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  facility: Scalars['Int']['input'];
  job?: InputMaybe<Scalars['Int']['input']>;
  person: Scalars['Int']['input'];
};

export type InflowCreateManyFacilityInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jobId?: InputMaybe<Scalars['Int']['input']>;
  personId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type InflowCreateManyFacilityInputEnvelope = {
  data: Array<InflowCreateManyFacilityInput>;
};

export type InflowCreateManyJobInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  facilityId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  personId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type InflowCreateManyJobInputEnvelope = {
  data: Array<InflowCreateManyJobInput>;
};

export type InflowCreateManyPersonInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  facilityId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  jobId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type InflowCreateManyPersonInputEnvelope = {
  data: Array<InflowCreateManyPersonInput>;
};

export type InflowCreateNestedManyWithoutFacilityInput = {
  connect?: InputMaybe<Array<InflowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InflowCreateOrConnectWithoutFacilityInput>>;
  create?: InputMaybe<Array<InflowCreateWithoutFacilityInput>>;
  createMany?: InputMaybe<InflowCreateManyFacilityInputEnvelope>;
};

export type InflowCreateNestedManyWithoutJobInput = {
  connect?: InputMaybe<Array<InflowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InflowCreateOrConnectWithoutJobInput>>;
  create?: InputMaybe<Array<InflowCreateWithoutJobInput>>;
  createMany?: InputMaybe<InflowCreateManyJobInputEnvelope>;
};

export type InflowCreateNestedManyWithoutPersonInput = {
  connect?: InputMaybe<Array<InflowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InflowCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<InflowCreateWithoutPersonInput>>;
  createMany?: InputMaybe<InflowCreateManyPersonInputEnvelope>;
};

export type InflowCreateOrConnectWithoutFacilityInput = {
  create: InflowUncheckedCreateWithoutFacilityInput;
  where: InflowWhereUniqueInput;
};

export type InflowCreateOrConnectWithoutJobInput = {
  create: InflowUncheckedCreateWithoutJobInput;
  where: InflowWhereUniqueInput;
};

export type InflowCreateOrConnectWithoutPersonInput = {
  create: InflowUncheckedCreateWithoutPersonInput;
  where: InflowWhereUniqueInput;
};

export type InflowCreateWithoutFacilityInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  job?: InputMaybe<JobCreateNestedOneWithoutInflowsInput>;
  person: PersonCreateNestedOneWithoutInflowsInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type InflowCreateWithoutJobInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  facility: FacilityCreateNestedOneWithoutInflowsInput;
  person: PersonCreateNestedOneWithoutInflowsInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type InflowCreateWithoutPersonInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  facility: FacilityCreateNestedOneWithoutInflowsInput;
  job?: InputMaybe<JobCreateNestedOneWithoutInflowsInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type InflowListRelationFilter = {
  every?: InputMaybe<InflowWhereInput>;
  none?: InputMaybe<InflowWhereInput>;
  some?: InputMaybe<InflowWhereInput>;
};

export type InflowScalarWhereInput = {
  AND?: InputMaybe<Array<InflowScalarWhereInput>>;
  NOT?: InputMaybe<Array<InflowScalarWhereInput>>;
  OR?: InputMaybe<Array<InflowScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  facilityId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  jobId?: InputMaybe<IntNullableFilter>;
  personId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type InflowUncheckedCreateNestedManyWithoutFacilityInput = {
  connect?: InputMaybe<Array<InflowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InflowCreateOrConnectWithoutFacilityInput>>;
  create?: InputMaybe<Array<InflowCreateWithoutFacilityInput>>;
  createMany?: InputMaybe<InflowCreateManyFacilityInputEnvelope>;
};

export type InflowUncheckedCreateNestedManyWithoutPersonInput = {
  connect?: InputMaybe<Array<InflowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InflowCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<InflowCreateWithoutPersonInput>>;
  createMany?: InputMaybe<InflowCreateManyPersonInputEnvelope>;
};

export type InflowUncheckedCreateWithoutFacilityInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jobId?: InputMaybe<Scalars['Int']['input']>;
  personId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type InflowUncheckedCreateWithoutJobInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  facilityId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  personId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type InflowUncheckedCreateWithoutPersonInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  facilityId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  jobId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type InflowUncheckedUpdateManyWithoutFacilityInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  jobId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  personId?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InflowUncheckedUpdateManyWithoutFacilityNestedInput = {
  connect?: InputMaybe<Array<InflowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InflowCreateOrConnectWithoutFacilityInput>>;
  create?: InputMaybe<Array<InflowCreateWithoutFacilityInput>>;
  createMany?: InputMaybe<InflowCreateManyFacilityInputEnvelope>;
  delete?: InputMaybe<Array<InflowWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InflowScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InflowWhereUniqueInput>>;
  set?: InputMaybe<Array<InflowWhereUniqueInput>>;
  update?: InputMaybe<Array<InflowUpdateWithWhereUniqueWithoutFacilityInput>>;
  updateMany?: InputMaybe<Array<InflowUpdateManyWithWhereWithoutFacilityInput>>;
  upsert?: InputMaybe<Array<InflowUpsertWithWhereUniqueWithoutFacilityInput>>;
};

export type InflowUncheckedUpdateManyWithoutPersonInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  facilityId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  jobId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InflowUncheckedUpdateManyWithoutPersonNestedInput = {
  connect?: InputMaybe<Array<InflowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InflowCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<InflowCreateWithoutPersonInput>>;
  createMany?: InputMaybe<InflowCreateManyPersonInputEnvelope>;
  delete?: InputMaybe<Array<InflowWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InflowScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InflowWhereUniqueInput>>;
  set?: InputMaybe<Array<InflowWhereUniqueInput>>;
  update?: InputMaybe<Array<InflowUpdateWithWhereUniqueWithoutPersonInput>>;
  updateMany?: InputMaybe<Array<InflowUpdateManyWithWhereWithoutPersonInput>>;
  upsert?: InputMaybe<Array<InflowUpsertWithWhereUniqueWithoutPersonInput>>;
};

export type InflowUncheckedUpdateWithoutFacilityInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  jobId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  personId?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InflowUncheckedUpdateWithoutPersonInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  facilityId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  jobId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InflowUpdateInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  facility?: InputMaybe<FacilityUpdateOneRequiredWithoutInflowsNestedInput>;
  job?: InputMaybe<JobUpdateOneWithoutInflowsNestedInput>;
  person?: InputMaybe<PersonUpdateOneRequiredWithoutInflowsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InflowUpdateManyWithWhereWithoutFacilityInput = {
  data: InflowUncheckedUpdateManyWithoutFacilityInput;
  where: InflowScalarWhereInput;
};

export type InflowUpdateManyWithWhereWithoutPersonInput = {
  data: InflowUncheckedUpdateManyWithoutPersonInput;
  where: InflowScalarWhereInput;
};

export type InflowUpdateWithWhereUniqueWithoutFacilityInput = {
  data: InflowUncheckedUpdateWithoutFacilityInput;
  where: InflowWhereUniqueInput;
};

export type InflowUpdateWithWhereUniqueWithoutPersonInput = {
  data: InflowUncheckedUpdateWithoutPersonInput;
  where: InflowWhereUniqueInput;
};

export type InflowUpsertWithWhereUniqueWithoutFacilityInput = {
  create: InflowUncheckedCreateWithoutFacilityInput;
  update: InflowUncheckedUpdateWithoutFacilityInput;
  where: InflowWhereUniqueInput;
};

export type InflowUpsertWithWhereUniqueWithoutPersonInput = {
  create: InflowUncheckedCreateWithoutPersonInput;
  update: InflowUncheckedUpdateWithoutPersonInput;
  where: InflowWhereUniqueInput;
};

export type InflowWhereInput = {
  AND?: InputMaybe<Array<InflowWhereInput>>;
  NOT?: InputMaybe<Array<InflowWhereInput>>;
  OR?: InputMaybe<Array<InflowWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  facility?: InputMaybe<FacilityRelationFilter>;
  facilityId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  job?: InputMaybe<JobNullableRelationFilter>;
  jobId?: InputMaybe<IntNullableFilter>;
  person?: InputMaybe<PersonRelationFilter>;
  personId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type InflowWhereUniqueInput = {
  AND?: InputMaybe<Array<InflowWhereInput>>;
  NOT?: InputMaybe<Array<InflowWhereInput>>;
  OR?: InputMaybe<Array<InflowWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  facility?: InputMaybe<FacilityRelationFilter>;
  facilityId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  job?: InputMaybe<JobNullableRelationFilter>;
  jobId?: InputMaybe<IntNullableFilter>;
  person?: InputMaybe<PersonRelationFilter>;
  personId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Job = {
  __typename?: 'Job';
  _count?: Maybe<JobCount>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type JobCount = {
  __typename?: 'JobCount';
  inflows: Scalars['Int']['output'];
};


export type JobCountInflowsArgs = {
  where?: InputMaybe<InflowWhereInput>;
};

export type JobCreateInput = {
  inflows?: InputMaybe<InflowCreateNestedManyWithoutJobInput>;
  name: Scalars['String']['input'];
};

export type JobCreateNestedOneWithoutInflowsInput = {
  connect?: InputMaybe<JobWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobCreateOrConnectWithoutInflowsInput>;
  create?: InputMaybe<JobUncheckedCreateWithoutInflowsInput>;
};

export type JobCreateOrConnectWithoutInflowsInput = {
  create: JobUncheckedCreateWithoutInflowsInput;
  where: JobWhereUniqueInput;
};

export type JobNullableRelationFilter = {
  is?: InputMaybe<JobWhereInput>;
  isNot?: InputMaybe<JobWhereInput>;
};

export type JobUncheckedCreateWithoutInflowsInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type JobUncheckedUpdateWithoutInflowsInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type JobUpdateOneWithoutInflowsNestedInput = {
  connect?: InputMaybe<JobWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobCreateOrConnectWithoutInflowsInput>;
  create?: InputMaybe<JobUncheckedCreateWithoutInflowsInput>;
  delete?: InputMaybe<JobWhereInput>;
  disconnect?: InputMaybe<JobWhereInput>;
  update?: InputMaybe<JobUncheckedUpdateWithoutInflowsInput>;
  upsert?: InputMaybe<JobUpsertWithoutInflowsInput>;
};

export type JobUpdateSimpleInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type JobUpsertWithoutInflowsInput = {
  create: JobUncheckedCreateWithoutInflowsInput;
  update: JobUncheckedUpdateWithoutInflowsInput;
  where?: InputMaybe<JobWhereInput>;
};

export type JobWhereInput = {
  AND?: InputMaybe<Array<JobWhereInput>>;
  NOT?: InputMaybe<Array<JobWhereInput>>;
  OR?: InputMaybe<Array<JobWhereInput>>;
  id?: InputMaybe<IntFilter>;
  inflows?: InputMaybe<InflowListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type JobWhereUniqueInput = {
  AND?: InputMaybe<Array<JobWhereInput>>;
  NOT?: InputMaybe<Array<JobWhereInput>>;
  OR?: InputMaybe<Array<JobWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  inflows?: InputMaybe<InflowListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFacility: Facility;
  createInflow: Inflow;
  createJob: Job;
  createOutflow: Outflow;
  createPerson: Person;
  deleteFacility: Scalars['Boolean']['output'];
  deleteInflow: Scalars['Boolean']['output'];
  deleteJob: Scalars['Boolean']['output'];
  deleteOutflow: Scalars['Boolean']['output'];
  deletePerson: Scalars['Boolean']['output'];
  updateFacility?: Maybe<Facility>;
  updateInflow?: Maybe<Inflow>;
  updateJob?: Maybe<Job>;
  updateOutflow?: Maybe<Outflow>;
  updatePerson?: Maybe<Person>;
};


export type MutationCreateFacilityArgs = {
  data: FacilityCreateInput;
};


export type MutationCreateInflowArgs = {
  data: InflowApiCreateInput;
};


export type MutationCreateJobArgs = {
  data: JobCreateInput;
};


export type MutationCreateOutflowArgs = {
  data: OutflowApiCreateInput;
};


export type MutationCreatePersonArgs = {
  data: PersonCreateInput;
};


export type MutationDeleteFacilityArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteInflowArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteJobArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteOutflowArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePersonArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateFacilityArgs = {
  data: FacilityUpdateSimpleInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateInflowArgs = {
  data: InflowUpdateInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateJobArgs = {
  data: JobUpdateSimpleInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateOutflowArgs = {
  data: OutflowUpdateInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePersonArgs = {
  data: PersonUpdateSimpleInput;
  id: Scalars['Int']['input'];
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type Outflow = {
  __typename?: 'Outflow';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  date: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  facility: Facility;
  facilityId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  person: Person;
  personId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type OutflowApiCreateInput = {
  amount: Scalars['Float']['input'];
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  facility: Scalars['Int']['input'];
  person: Scalars['Int']['input'];
};

export type OutflowCreateManyFacilityInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  personId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type OutflowCreateManyFacilityInputEnvelope = {
  data: Array<OutflowCreateManyFacilityInput>;
};

export type OutflowCreateManyPersonInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  facilityId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type OutflowCreateManyPersonInputEnvelope = {
  data: Array<OutflowCreateManyPersonInput>;
};

export type OutflowCreateNestedManyWithoutFacilityInput = {
  connect?: InputMaybe<Array<OutflowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OutflowCreateOrConnectWithoutFacilityInput>>;
  create?: InputMaybe<Array<OutflowCreateWithoutFacilityInput>>;
  createMany?: InputMaybe<OutflowCreateManyFacilityInputEnvelope>;
};

export type OutflowCreateNestedManyWithoutPersonInput = {
  connect?: InputMaybe<Array<OutflowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OutflowCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<OutflowCreateWithoutPersonInput>>;
  createMany?: InputMaybe<OutflowCreateManyPersonInputEnvelope>;
};

export type OutflowCreateOrConnectWithoutFacilityInput = {
  create: OutflowUncheckedCreateWithoutFacilityInput;
  where: OutflowWhereUniqueInput;
};

export type OutflowCreateOrConnectWithoutPersonInput = {
  create: OutflowUncheckedCreateWithoutPersonInput;
  where: OutflowWhereUniqueInput;
};

export type OutflowCreateWithoutFacilityInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  person: PersonCreateNestedOneWithoutOutflowsInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type OutflowCreateWithoutPersonInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  facility: FacilityCreateNestedOneWithoutOutflowInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type OutflowListRelationFilter = {
  every?: InputMaybe<OutflowWhereInput>;
  none?: InputMaybe<OutflowWhereInput>;
  some?: InputMaybe<OutflowWhereInput>;
};

export type OutflowScalarWhereInput = {
  AND?: InputMaybe<Array<OutflowScalarWhereInput>>;
  NOT?: InputMaybe<Array<OutflowScalarWhereInput>>;
  OR?: InputMaybe<Array<OutflowScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  facilityId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  personId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OutflowUncheckedCreateNestedManyWithoutFacilityInput = {
  connect?: InputMaybe<Array<OutflowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OutflowCreateOrConnectWithoutFacilityInput>>;
  create?: InputMaybe<Array<OutflowCreateWithoutFacilityInput>>;
  createMany?: InputMaybe<OutflowCreateManyFacilityInputEnvelope>;
};

export type OutflowUncheckedCreateNestedManyWithoutPersonInput = {
  connect?: InputMaybe<Array<OutflowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OutflowCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<OutflowCreateWithoutPersonInput>>;
  createMany?: InputMaybe<OutflowCreateManyPersonInputEnvelope>;
};

export type OutflowUncheckedCreateWithoutFacilityInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  personId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type OutflowUncheckedCreateWithoutPersonInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  facilityId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type OutflowUncheckedUpdateManyWithoutFacilityInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  personId?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OutflowUncheckedUpdateManyWithoutFacilityNestedInput = {
  connect?: InputMaybe<Array<OutflowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OutflowCreateOrConnectWithoutFacilityInput>>;
  create?: InputMaybe<Array<OutflowCreateWithoutFacilityInput>>;
  createMany?: InputMaybe<OutflowCreateManyFacilityInputEnvelope>;
  delete?: InputMaybe<Array<OutflowWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OutflowScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OutflowWhereUniqueInput>>;
  set?: InputMaybe<Array<OutflowWhereUniqueInput>>;
  update?: InputMaybe<Array<OutflowUpdateWithWhereUniqueWithoutFacilityInput>>;
  updateMany?: InputMaybe<Array<OutflowUpdateManyWithWhereWithoutFacilityInput>>;
  upsert?: InputMaybe<Array<OutflowUpsertWithWhereUniqueWithoutFacilityInput>>;
};

export type OutflowUncheckedUpdateManyWithoutPersonInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  facilityId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OutflowUncheckedUpdateManyWithoutPersonNestedInput = {
  connect?: InputMaybe<Array<OutflowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OutflowCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<OutflowCreateWithoutPersonInput>>;
  createMany?: InputMaybe<OutflowCreateManyPersonInputEnvelope>;
  delete?: InputMaybe<Array<OutflowWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OutflowScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OutflowWhereUniqueInput>>;
  set?: InputMaybe<Array<OutflowWhereUniqueInput>>;
  update?: InputMaybe<Array<OutflowUpdateWithWhereUniqueWithoutPersonInput>>;
  updateMany?: InputMaybe<Array<OutflowUpdateManyWithWhereWithoutPersonInput>>;
  upsert?: InputMaybe<Array<OutflowUpsertWithWhereUniqueWithoutPersonInput>>;
};

export type OutflowUncheckedUpdateWithoutFacilityInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  personId?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OutflowUncheckedUpdateWithoutPersonInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  facilityId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OutflowUpdateInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  facility?: InputMaybe<FacilityUpdateOneRequiredWithoutOutflowNestedInput>;
  person?: InputMaybe<PersonUpdateOneRequiredWithoutOutflowsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OutflowUpdateManyWithWhereWithoutFacilityInput = {
  data: OutflowUncheckedUpdateManyWithoutFacilityInput;
  where: OutflowScalarWhereInput;
};

export type OutflowUpdateManyWithWhereWithoutPersonInput = {
  data: OutflowUncheckedUpdateManyWithoutPersonInput;
  where: OutflowScalarWhereInput;
};

export type OutflowUpdateWithWhereUniqueWithoutFacilityInput = {
  data: OutflowUncheckedUpdateWithoutFacilityInput;
  where: OutflowWhereUniqueInput;
};

export type OutflowUpdateWithWhereUniqueWithoutPersonInput = {
  data: OutflowUncheckedUpdateWithoutPersonInput;
  where: OutflowWhereUniqueInput;
};

export type OutflowUpsertWithWhereUniqueWithoutFacilityInput = {
  create: OutflowUncheckedCreateWithoutFacilityInput;
  update: OutflowUncheckedUpdateWithoutFacilityInput;
  where: OutflowWhereUniqueInput;
};

export type OutflowUpsertWithWhereUniqueWithoutPersonInput = {
  create: OutflowUncheckedCreateWithoutPersonInput;
  update: OutflowUncheckedUpdateWithoutPersonInput;
  where: OutflowWhereUniqueInput;
};

export type OutflowWhereInput = {
  AND?: InputMaybe<Array<OutflowWhereInput>>;
  NOT?: InputMaybe<Array<OutflowWhereInput>>;
  OR?: InputMaybe<Array<OutflowWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  facility?: InputMaybe<FacilityRelationFilter>;
  facilityId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  person?: InputMaybe<PersonRelationFilter>;
  personId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OutflowWhereUniqueInput = {
  AND?: InputMaybe<Array<OutflowWhereInput>>;
  NOT?: InputMaybe<Array<OutflowWhereInput>>;
  OR?: InputMaybe<Array<OutflowWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  facility?: InputMaybe<FacilityRelationFilter>;
  facilityId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  person?: InputMaybe<PersonRelationFilter>;
  personId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Person = {
  __typename?: 'Person';
  _count?: Maybe<PersonCount>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type PersonCount = {
  __typename?: 'PersonCount';
  inflows: Scalars['Int']['output'];
  outflows: Scalars['Int']['output'];
};


export type PersonCountInflowsArgs = {
  where?: InputMaybe<InflowWhereInput>;
};


export type PersonCountOutflowsArgs = {
  where?: InputMaybe<OutflowWhereInput>;
};

export type PersonCreateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  inflows?: InputMaybe<InflowCreateNestedManyWithoutPersonInput>;
  name: Scalars['String']['input'];
  outflows?: InputMaybe<OutflowCreateNestedManyWithoutPersonInput>;
};

export type PersonCreateNestedOneWithoutInflowsInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutInflowsInput>;
  create?: InputMaybe<PersonUncheckedCreateWithoutInflowsInput>;
};

export type PersonCreateNestedOneWithoutOutflowsInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutOutflowsInput>;
  create?: InputMaybe<PersonUncheckedCreateWithoutOutflowsInput>;
};

export type PersonCreateOrConnectWithoutInflowsInput = {
  create: PersonUncheckedCreateWithoutInflowsInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutOutflowsInput = {
  create: PersonUncheckedCreateWithoutOutflowsInput;
  where: PersonWhereUniqueInput;
};

export type PersonRelationFilter = {
  is?: InputMaybe<PersonWhereInput>;
  isNot?: InputMaybe<PersonWhereInput>;
};

export type PersonUncheckedCreateWithoutInflowsInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  outflows?: InputMaybe<OutflowUncheckedCreateNestedManyWithoutPersonInput>;
};

export type PersonUncheckedCreateWithoutOutflowsInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  inflows?: InputMaybe<InflowUncheckedCreateNestedManyWithoutPersonInput>;
  name: Scalars['String']['input'];
};

export type PersonUncheckedUpdateWithoutInflowsInput = {
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  outflows?: InputMaybe<OutflowUncheckedUpdateManyWithoutPersonNestedInput>;
};

export type PersonUncheckedUpdateWithoutOutflowsInput = {
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  inflows?: InputMaybe<InflowUncheckedUpdateManyWithoutPersonNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PersonUpdateOneRequiredWithoutInflowsNestedInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutInflowsInput>;
  create?: InputMaybe<PersonUncheckedCreateWithoutInflowsInput>;
  update?: InputMaybe<PersonUncheckedUpdateWithoutInflowsInput>;
  upsert?: InputMaybe<PersonUpsertWithoutInflowsInput>;
};

export type PersonUpdateOneRequiredWithoutOutflowsNestedInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutOutflowsInput>;
  create?: InputMaybe<PersonUncheckedCreateWithoutOutflowsInput>;
  update?: InputMaybe<PersonUncheckedUpdateWithoutOutflowsInput>;
  upsert?: InputMaybe<PersonUpsertWithoutOutflowsInput>;
};

export type PersonUpdateSimpleInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PersonUpsertWithoutInflowsInput = {
  create: PersonUncheckedCreateWithoutInflowsInput;
  update: PersonUncheckedUpdateWithoutInflowsInput;
  where?: InputMaybe<PersonWhereInput>;
};

export type PersonUpsertWithoutOutflowsInput = {
  create: PersonUncheckedCreateWithoutOutflowsInput;
  update: PersonUncheckedUpdateWithoutOutflowsInput;
  where?: InputMaybe<PersonWhereInput>;
};

export type PersonWhereInput = {
  AND?: InputMaybe<Array<PersonWhereInput>>;
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  OR?: InputMaybe<Array<PersonWhereInput>>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  inflows?: InputMaybe<InflowListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  outflows?: InputMaybe<OutflowListRelationFilter>;
};

export type PersonWhereUniqueInput = {
  AND?: InputMaybe<Array<PersonWhereInput>>;
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  OR?: InputMaybe<Array<PersonWhereInput>>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  inflows?: InputMaybe<InflowListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  outflows?: InputMaybe<OutflowListRelationFilter>;
};

export type PersonWithStatistics = {
  __typename?: 'PersonWithStatistics';
  _count?: Maybe<PersonCount>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  inflowIds: Array<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  outflowIds: Array<Scalars['Int']['output']>;
  totalInflowAmount: Scalars['Float']['output'];
  totalOutflowAmount: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  facilities: Array<Facility>;
  facility?: Maybe<Facility>;
  inflow?: Maybe<Inflow>;
  inflows: Array<Inflow>;
  inflowsByPersonId?: Maybe<Array<Inflow>>;
  job?: Maybe<Job>;
  jobs: Array<Job>;
  outflow?: Maybe<Outflow>;
  outflows: Array<Outflow>;
  outflowsByPersonId?: Maybe<Array<Outflow>>;
  person?: Maybe<Person>;
  persons: Array<Person>;
  personsWithStatistics?: Maybe<Array<PersonWithStatistics>>;
};


export type QueryFacilityArgs = {
  id: Scalars['Int']['input'];
};


export type QueryInflowArgs = {
  id: Scalars['Int']['input'];
};


export type QueryInflowsByPersonIdArgs = {
  personId: Scalars['Int']['input'];
};


export type QueryJobArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOutflowArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOutflowsByPersonIdArgs = {
  personId: Scalars['Int']['input'];
};


export type QueryPersonArgs = {
  id: Scalars['Int']['input'];
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllFacilitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFacilitiesQuery = { __typename?: 'Query', facilities: Array<{ __typename?: 'Facility', id: number, name: string }> };

export type GetFacilityByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetFacilityByIdQuery = { __typename?: 'Query', facility?: { __typename?: 'Facility', id: number, name: string } | null };

export type CreateFacilityMutationVariables = Exact<{
  data: FacilityCreateInput;
}>;


export type CreateFacilityMutation = { __typename?: 'Mutation', createFacility: { __typename?: 'Facility', name: string } };

export type UpdateFacilityMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: FacilityUpdateSimpleInput;
}>;


export type UpdateFacilityMutation = { __typename?: 'Mutation', updateFacility?: { __typename?: 'Facility', id: number, name: string } | null };

export type DeleteFacilityMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteFacilityMutation = { __typename?: 'Mutation', deleteFacility: boolean };

export type GetAllInflowsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllInflowsQuery = { __typename?: 'Query', inflows: Array<{ __typename?: 'Inflow', id: number, personId: number, facilityId: number, jobId?: number | null, amount: number, date: any }> };

export type GetInflowByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetInflowByIdQuery = { __typename?: 'Query', inflow?: { __typename?: 'Inflow', id: number, personId: number, facilityId: number, jobId?: number | null, amount: number, date: any } | null };

export type GetInflowsByPersonIdQueryVariables = Exact<{
  personId: Scalars['Int']['input'];
}>;


export type GetInflowsByPersonIdQuery = { __typename?: 'Query', inflowsByPersonId?: Array<{ __typename?: 'Inflow', id: number, amount: number, date: any, person: { __typename?: 'Person', name: string }, facility: { __typename?: 'Facility', name: string }, job?: { __typename?: 'Job', name: string } | null }> | null };

export type CreateInflowMutationVariables = Exact<{
  data: InflowApiCreateInput;
}>;


export type CreateInflowMutation = { __typename?: 'Mutation', createInflow: { __typename?: 'Inflow', personId: number, facilityId: number, jobId?: number | null, amount: number, date: any } };

export type UpdateInflowMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: InflowUpdateInput;
}>;


export type UpdateInflowMutation = { __typename?: 'Mutation', updateInflow?: { __typename?: 'Inflow', id: number, personId: number, facilityId: number, jobId?: number | null, amount: number, date: any } | null };

export type DeleteInflowMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteInflowMutation = { __typename?: 'Mutation', deleteInflow: boolean };

export type GetAllJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllJobsQuery = { __typename?: 'Query', jobs: Array<{ __typename?: 'Job', id: number, name: string }> };

export type GetJobByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetJobByIdQuery = { __typename?: 'Query', job?: { __typename?: 'Job', id: number, name: string } | null };

export type CreateJobMutationVariables = Exact<{
  data: JobCreateInput;
}>;


export type CreateJobMutation = { __typename?: 'Mutation', createJob: { __typename?: 'Job', name: string } };

export type UpdateJobMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: JobUpdateSimpleInput;
}>;


export type UpdateJobMutation = { __typename?: 'Mutation', updateJob?: { __typename?: 'Job', id: number, name: string } | null };

export type DeleteJobMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteJobMutation = { __typename?: 'Mutation', deleteJob: boolean };

export type GetAllOutflowsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOutflowsQuery = { __typename?: 'Query', outflows: Array<{ __typename?: 'Outflow', id: number, personId: number, facilityId: number, amount: number, date: any }> };

export type GetOutflowByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetOutflowByIdQuery = { __typename?: 'Query', outflow?: { __typename?: 'Outflow', id: number, personId: number, facilityId: number, amount: number, date: any } | null };

export type GetOutflowsByPersonIdQueryVariables = Exact<{
  personId: Scalars['Int']['input'];
}>;


export type GetOutflowsByPersonIdQuery = { __typename?: 'Query', outflowsByPersonId?: Array<{ __typename?: 'Outflow', id: number, amount: number, date: any, person: { __typename?: 'Person', name: string }, facility: { __typename?: 'Facility', name: string } }> | null };

export type CreateOutflowMutationVariables = Exact<{
  data: OutflowApiCreateInput;
}>;


export type CreateOutflowMutation = { __typename?: 'Mutation', createOutflow: { __typename?: 'Outflow', personId: number, facilityId: number, amount: number, date: any } };

export type UpdateOutflowMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: OutflowUpdateInput;
}>;


export type UpdateOutflowMutation = { __typename?: 'Mutation', updateOutflow?: { __typename?: 'Outflow', id: number, personId: number, facilityId: number, amount: number, date: any } | null };

export type DeleteOutflowMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteOutflowMutation = { __typename?: 'Mutation', deleteOutflow: boolean };

export type GetAllPersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPersonsQuery = { __typename?: 'Query', persons: Array<{ __typename?: 'Person', id: number, email?: string | null, name: string }> };

export type GetPersonByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetPersonByIdQuery = { __typename?: 'Query', person?: { __typename?: 'Person', id: number, email?: string | null, name: string } | null };

export type CreatePersonMutationVariables = Exact<{
  data: PersonCreateInput;
}>;


export type CreatePersonMutation = { __typename?: 'Mutation', createPerson: { __typename?: 'Person', email?: string | null, name: string } };

export type UpdatePersonMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: PersonUpdateSimpleInput;
}>;


export type UpdatePersonMutation = { __typename?: 'Mutation', updatePerson?: { __typename?: 'Person', id: number, email?: string | null, name: string } | null };

export type DeletePersonMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeletePersonMutation = { __typename?: 'Mutation', deletePerson: boolean };

export type GetPersonsWithStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonsWithStatisticsQuery = { __typename?: 'Query', personsWithStatistics?: Array<{ __typename?: 'PersonWithStatistics', id: number, name: string, totalInflowAmount: number, inflowIds: Array<number>, totalOutflowAmount: number, outflowIds: Array<number> }> | null };


export const GetAllFacilitiesDocument = gql`
    query GetAllFacilities {
  facilities {
    id
    name
  }
}
    `;

/**
 * __useGetAllFacilitiesQuery__
 *
 * To run a query within a React component, call `useGetAllFacilitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFacilitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFacilitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllFacilitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllFacilitiesQuery, GetAllFacilitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFacilitiesQuery, GetAllFacilitiesQueryVariables>(GetAllFacilitiesDocument, options);
      }
export function useGetAllFacilitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFacilitiesQuery, GetAllFacilitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFacilitiesQuery, GetAllFacilitiesQueryVariables>(GetAllFacilitiesDocument, options);
        }
export function useGetAllFacilitiesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllFacilitiesQuery, GetAllFacilitiesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllFacilitiesQuery, GetAllFacilitiesQueryVariables>(GetAllFacilitiesDocument, options);
        }
export type GetAllFacilitiesQueryHookResult = ReturnType<typeof useGetAllFacilitiesQuery>;
export type GetAllFacilitiesLazyQueryHookResult = ReturnType<typeof useGetAllFacilitiesLazyQuery>;
export type GetAllFacilitiesSuspenseQueryHookResult = ReturnType<typeof useGetAllFacilitiesSuspenseQuery>;
export type GetAllFacilitiesQueryResult = Apollo.QueryResult<GetAllFacilitiesQuery, GetAllFacilitiesQueryVariables>;
export const GetFacilityByIdDocument = gql`
    query GetFacilityById($id: Int!) {
  facility(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useGetFacilityByIdQuery__
 *
 * To run a query within a React component, call `useGetFacilityByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFacilityByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFacilityByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFacilityByIdQuery(baseOptions: Apollo.QueryHookOptions<GetFacilityByIdQuery, GetFacilityByIdQueryVariables> & ({ variables: GetFacilityByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFacilityByIdQuery, GetFacilityByIdQueryVariables>(GetFacilityByIdDocument, options);
      }
export function useGetFacilityByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFacilityByIdQuery, GetFacilityByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFacilityByIdQuery, GetFacilityByIdQueryVariables>(GetFacilityByIdDocument, options);
        }
export function useGetFacilityByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFacilityByIdQuery, GetFacilityByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFacilityByIdQuery, GetFacilityByIdQueryVariables>(GetFacilityByIdDocument, options);
        }
export type GetFacilityByIdQueryHookResult = ReturnType<typeof useGetFacilityByIdQuery>;
export type GetFacilityByIdLazyQueryHookResult = ReturnType<typeof useGetFacilityByIdLazyQuery>;
export type GetFacilityByIdSuspenseQueryHookResult = ReturnType<typeof useGetFacilityByIdSuspenseQuery>;
export type GetFacilityByIdQueryResult = Apollo.QueryResult<GetFacilityByIdQuery, GetFacilityByIdQueryVariables>;
export const CreateFacilityDocument = gql`
    mutation CreateFacility($data: FacilityCreateInput!) {
  createFacility(data: $data) {
    name
  }
}
    `;
export type CreateFacilityMutationFn = Apollo.MutationFunction<CreateFacilityMutation, CreateFacilityMutationVariables>;

/**
 * __useCreateFacilityMutation__
 *
 * To run a mutation, you first call `useCreateFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFacilityMutation, { data, loading, error }] = useCreateFacilityMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFacilityMutation(baseOptions?: Apollo.MutationHookOptions<CreateFacilityMutation, CreateFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFacilityMutation, CreateFacilityMutationVariables>(CreateFacilityDocument, options);
      }
export type CreateFacilityMutationHookResult = ReturnType<typeof useCreateFacilityMutation>;
export type CreateFacilityMutationResult = Apollo.MutationResult<CreateFacilityMutation>;
export type CreateFacilityMutationOptions = Apollo.BaseMutationOptions<CreateFacilityMutation, CreateFacilityMutationVariables>;
export const UpdateFacilityDocument = gql`
    mutation UpdateFacility($id: Int!, $data: FacilityUpdateSimpleInput!) {
  updateFacility(id: $id, data: $data) {
    id
    name
  }
}
    `;
export type UpdateFacilityMutationFn = Apollo.MutationFunction<UpdateFacilityMutation, UpdateFacilityMutationVariables>;

/**
 * __useUpdateFacilityMutation__
 *
 * To run a mutation, you first call `useUpdateFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFacilityMutation, { data, loading, error }] = useUpdateFacilityMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateFacilityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFacilityMutation, UpdateFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFacilityMutation, UpdateFacilityMutationVariables>(UpdateFacilityDocument, options);
      }
export type UpdateFacilityMutationHookResult = ReturnType<typeof useUpdateFacilityMutation>;
export type UpdateFacilityMutationResult = Apollo.MutationResult<UpdateFacilityMutation>;
export type UpdateFacilityMutationOptions = Apollo.BaseMutationOptions<UpdateFacilityMutation, UpdateFacilityMutationVariables>;
export const DeleteFacilityDocument = gql`
    mutation DeleteFacility($id: Int!) {
  deleteFacility(id: $id)
}
    `;
export type DeleteFacilityMutationFn = Apollo.MutationFunction<DeleteFacilityMutation, DeleteFacilityMutationVariables>;

/**
 * __useDeleteFacilityMutation__
 *
 * To run a mutation, you first call `useDeleteFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFacilityMutation, { data, loading, error }] = useDeleteFacilityMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFacilityMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFacilityMutation, DeleteFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFacilityMutation, DeleteFacilityMutationVariables>(DeleteFacilityDocument, options);
      }
export type DeleteFacilityMutationHookResult = ReturnType<typeof useDeleteFacilityMutation>;
export type DeleteFacilityMutationResult = Apollo.MutationResult<DeleteFacilityMutation>;
export type DeleteFacilityMutationOptions = Apollo.BaseMutationOptions<DeleteFacilityMutation, DeleteFacilityMutationVariables>;
export const GetAllInflowsDocument = gql`
    query GetAllInflows {
  inflows {
    id
    personId
    facilityId
    jobId
    amount
    date
  }
}
    `;

/**
 * __useGetAllInflowsQuery__
 *
 * To run a query within a React component, call `useGetAllInflowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllInflowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllInflowsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllInflowsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllInflowsQuery, GetAllInflowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllInflowsQuery, GetAllInflowsQueryVariables>(GetAllInflowsDocument, options);
      }
export function useGetAllInflowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllInflowsQuery, GetAllInflowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllInflowsQuery, GetAllInflowsQueryVariables>(GetAllInflowsDocument, options);
        }
export function useGetAllInflowsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllInflowsQuery, GetAllInflowsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllInflowsQuery, GetAllInflowsQueryVariables>(GetAllInflowsDocument, options);
        }
export type GetAllInflowsQueryHookResult = ReturnType<typeof useGetAllInflowsQuery>;
export type GetAllInflowsLazyQueryHookResult = ReturnType<typeof useGetAllInflowsLazyQuery>;
export type GetAllInflowsSuspenseQueryHookResult = ReturnType<typeof useGetAllInflowsSuspenseQuery>;
export type GetAllInflowsQueryResult = Apollo.QueryResult<GetAllInflowsQuery, GetAllInflowsQueryVariables>;
export const GetInflowByIdDocument = gql`
    query GetInflowById($id: Int!) {
  inflow(id: $id) {
    id
    personId
    facilityId
    jobId
    amount
    date
  }
}
    `;

/**
 * __useGetInflowByIdQuery__
 *
 * To run a query within a React component, call `useGetInflowByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInflowByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInflowByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetInflowByIdQuery(baseOptions: Apollo.QueryHookOptions<GetInflowByIdQuery, GetInflowByIdQueryVariables> & ({ variables: GetInflowByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInflowByIdQuery, GetInflowByIdQueryVariables>(GetInflowByIdDocument, options);
      }
export function useGetInflowByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInflowByIdQuery, GetInflowByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInflowByIdQuery, GetInflowByIdQueryVariables>(GetInflowByIdDocument, options);
        }
export function useGetInflowByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetInflowByIdQuery, GetInflowByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetInflowByIdQuery, GetInflowByIdQueryVariables>(GetInflowByIdDocument, options);
        }
export type GetInflowByIdQueryHookResult = ReturnType<typeof useGetInflowByIdQuery>;
export type GetInflowByIdLazyQueryHookResult = ReturnType<typeof useGetInflowByIdLazyQuery>;
export type GetInflowByIdSuspenseQueryHookResult = ReturnType<typeof useGetInflowByIdSuspenseQuery>;
export type GetInflowByIdQueryResult = Apollo.QueryResult<GetInflowByIdQuery, GetInflowByIdQueryVariables>;
export const GetInflowsByPersonIdDocument = gql`
    query GetInflowsByPersonId($personId: Int!) {
  inflowsByPersonId(personId: $personId) {
    id
    amount
    date
    person {
      name
    }
    facility {
      name
    }
    job {
      name
    }
  }
}
    `;

/**
 * __useGetInflowsByPersonIdQuery__
 *
 * To run a query within a React component, call `useGetInflowsByPersonIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInflowsByPersonIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInflowsByPersonIdQuery({
 *   variables: {
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function useGetInflowsByPersonIdQuery(baseOptions: Apollo.QueryHookOptions<GetInflowsByPersonIdQuery, GetInflowsByPersonIdQueryVariables> & ({ variables: GetInflowsByPersonIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInflowsByPersonIdQuery, GetInflowsByPersonIdQueryVariables>(GetInflowsByPersonIdDocument, options);
      }
export function useGetInflowsByPersonIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInflowsByPersonIdQuery, GetInflowsByPersonIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInflowsByPersonIdQuery, GetInflowsByPersonIdQueryVariables>(GetInflowsByPersonIdDocument, options);
        }
export function useGetInflowsByPersonIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetInflowsByPersonIdQuery, GetInflowsByPersonIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetInflowsByPersonIdQuery, GetInflowsByPersonIdQueryVariables>(GetInflowsByPersonIdDocument, options);
        }
export type GetInflowsByPersonIdQueryHookResult = ReturnType<typeof useGetInflowsByPersonIdQuery>;
export type GetInflowsByPersonIdLazyQueryHookResult = ReturnType<typeof useGetInflowsByPersonIdLazyQuery>;
export type GetInflowsByPersonIdSuspenseQueryHookResult = ReturnType<typeof useGetInflowsByPersonIdSuspenseQuery>;
export type GetInflowsByPersonIdQueryResult = Apollo.QueryResult<GetInflowsByPersonIdQuery, GetInflowsByPersonIdQueryVariables>;
export const CreateInflowDocument = gql`
    mutation CreateInflow($data: InflowApiCreateInput!) {
  createInflow(data: $data) {
    personId
    facilityId
    jobId
    amount
    date
  }
}
    `;
export type CreateInflowMutationFn = Apollo.MutationFunction<CreateInflowMutation, CreateInflowMutationVariables>;

/**
 * __useCreateInflowMutation__
 *
 * To run a mutation, you first call `useCreateInflowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInflowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInflowMutation, { data, loading, error }] = useCreateInflowMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateInflowMutation(baseOptions?: Apollo.MutationHookOptions<CreateInflowMutation, CreateInflowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInflowMutation, CreateInflowMutationVariables>(CreateInflowDocument, options);
      }
export type CreateInflowMutationHookResult = ReturnType<typeof useCreateInflowMutation>;
export type CreateInflowMutationResult = Apollo.MutationResult<CreateInflowMutation>;
export type CreateInflowMutationOptions = Apollo.BaseMutationOptions<CreateInflowMutation, CreateInflowMutationVariables>;
export const UpdateInflowDocument = gql`
    mutation UpdateInflow($id: Int!, $data: InflowUpdateInput!) {
  updateInflow(id: $id, data: $data) {
    id
    personId
    facilityId
    jobId
    amount
    date
  }
}
    `;
export type UpdateInflowMutationFn = Apollo.MutationFunction<UpdateInflowMutation, UpdateInflowMutationVariables>;

/**
 * __useUpdateInflowMutation__
 *
 * To run a mutation, you first call `useUpdateInflowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInflowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInflowMutation, { data, loading, error }] = useUpdateInflowMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateInflowMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInflowMutation, UpdateInflowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInflowMutation, UpdateInflowMutationVariables>(UpdateInflowDocument, options);
      }
export type UpdateInflowMutationHookResult = ReturnType<typeof useUpdateInflowMutation>;
export type UpdateInflowMutationResult = Apollo.MutationResult<UpdateInflowMutation>;
export type UpdateInflowMutationOptions = Apollo.BaseMutationOptions<UpdateInflowMutation, UpdateInflowMutationVariables>;
export const DeleteInflowDocument = gql`
    mutation DeleteInflow($id: Int!) {
  deleteInflow(id: $id)
}
    `;
export type DeleteInflowMutationFn = Apollo.MutationFunction<DeleteInflowMutation, DeleteInflowMutationVariables>;

/**
 * __useDeleteInflowMutation__
 *
 * To run a mutation, you first call `useDeleteInflowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInflowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInflowMutation, { data, loading, error }] = useDeleteInflowMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteInflowMutation(baseOptions?: Apollo.MutationHookOptions<DeleteInflowMutation, DeleteInflowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteInflowMutation, DeleteInflowMutationVariables>(DeleteInflowDocument, options);
      }
export type DeleteInflowMutationHookResult = ReturnType<typeof useDeleteInflowMutation>;
export type DeleteInflowMutationResult = Apollo.MutationResult<DeleteInflowMutation>;
export type DeleteInflowMutationOptions = Apollo.BaseMutationOptions<DeleteInflowMutation, DeleteInflowMutationVariables>;
export const GetAllJobsDocument = gql`
    query GetAllJobs {
  jobs {
    id
    name
  }
}
    `;

/**
 * __useGetAllJobsQuery__
 *
 * To run a query within a React component, call `useGetAllJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllJobsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllJobsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllJobsQuery, GetAllJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllJobsQuery, GetAllJobsQueryVariables>(GetAllJobsDocument, options);
      }
export function useGetAllJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllJobsQuery, GetAllJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllJobsQuery, GetAllJobsQueryVariables>(GetAllJobsDocument, options);
        }
export function useGetAllJobsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllJobsQuery, GetAllJobsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllJobsQuery, GetAllJobsQueryVariables>(GetAllJobsDocument, options);
        }
export type GetAllJobsQueryHookResult = ReturnType<typeof useGetAllJobsQuery>;
export type GetAllJobsLazyQueryHookResult = ReturnType<typeof useGetAllJobsLazyQuery>;
export type GetAllJobsSuspenseQueryHookResult = ReturnType<typeof useGetAllJobsSuspenseQuery>;
export type GetAllJobsQueryResult = Apollo.QueryResult<GetAllJobsQuery, GetAllJobsQueryVariables>;
export const GetJobByIdDocument = gql`
    query GetJobById($id: Int!) {
  job(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useGetJobByIdQuery__
 *
 * To run a query within a React component, call `useGetJobByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetJobByIdQuery(baseOptions: Apollo.QueryHookOptions<GetJobByIdQuery, GetJobByIdQueryVariables> & ({ variables: GetJobByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobByIdQuery, GetJobByIdQueryVariables>(GetJobByIdDocument, options);
      }
export function useGetJobByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobByIdQuery, GetJobByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobByIdQuery, GetJobByIdQueryVariables>(GetJobByIdDocument, options);
        }
export function useGetJobByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetJobByIdQuery, GetJobByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetJobByIdQuery, GetJobByIdQueryVariables>(GetJobByIdDocument, options);
        }
export type GetJobByIdQueryHookResult = ReturnType<typeof useGetJobByIdQuery>;
export type GetJobByIdLazyQueryHookResult = ReturnType<typeof useGetJobByIdLazyQuery>;
export type GetJobByIdSuspenseQueryHookResult = ReturnType<typeof useGetJobByIdSuspenseQuery>;
export type GetJobByIdQueryResult = Apollo.QueryResult<GetJobByIdQuery, GetJobByIdQueryVariables>;
export const CreateJobDocument = gql`
    mutation CreateJob($data: JobCreateInput!) {
  createJob(data: $data) {
    name
  }
}
    `;
export type CreateJobMutationFn = Apollo.MutationFunction<CreateJobMutation, CreateJobMutationVariables>;

/**
 * __useCreateJobMutation__
 *
 * To run a mutation, you first call `useCreateJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJobMutation, { data, loading, error }] = useCreateJobMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateJobMutation(baseOptions?: Apollo.MutationHookOptions<CreateJobMutation, CreateJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJobMutation, CreateJobMutationVariables>(CreateJobDocument, options);
      }
export type CreateJobMutationHookResult = ReturnType<typeof useCreateJobMutation>;
export type CreateJobMutationResult = Apollo.MutationResult<CreateJobMutation>;
export type CreateJobMutationOptions = Apollo.BaseMutationOptions<CreateJobMutation, CreateJobMutationVariables>;
export const UpdateJobDocument = gql`
    mutation UpdateJob($id: Int!, $data: JobUpdateSimpleInput!) {
  updateJob(id: $id, data: $data) {
    id
    name
  }
}
    `;
export type UpdateJobMutationFn = Apollo.MutationFunction<UpdateJobMutation, UpdateJobMutationVariables>;

/**
 * __useUpdateJobMutation__
 *
 * To run a mutation, you first call `useUpdateJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJobMutation, { data, loading, error }] = useUpdateJobMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateJobMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJobMutation, UpdateJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJobMutation, UpdateJobMutationVariables>(UpdateJobDocument, options);
      }
export type UpdateJobMutationHookResult = ReturnType<typeof useUpdateJobMutation>;
export type UpdateJobMutationResult = Apollo.MutationResult<UpdateJobMutation>;
export type UpdateJobMutationOptions = Apollo.BaseMutationOptions<UpdateJobMutation, UpdateJobMutationVariables>;
export const DeleteJobDocument = gql`
    mutation DeleteJob($id: Int!) {
  deleteJob(id: $id)
}
    `;
export type DeleteJobMutationFn = Apollo.MutationFunction<DeleteJobMutation, DeleteJobMutationVariables>;

/**
 * __useDeleteJobMutation__
 *
 * To run a mutation, you first call `useDeleteJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJobMutation, { data, loading, error }] = useDeleteJobMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteJobMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJobMutation, DeleteJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteJobMutation, DeleteJobMutationVariables>(DeleteJobDocument, options);
      }
export type DeleteJobMutationHookResult = ReturnType<typeof useDeleteJobMutation>;
export type DeleteJobMutationResult = Apollo.MutationResult<DeleteJobMutation>;
export type DeleteJobMutationOptions = Apollo.BaseMutationOptions<DeleteJobMutation, DeleteJobMutationVariables>;
export const GetAllOutflowsDocument = gql`
    query GetAllOutflows {
  outflows {
    id
    personId
    facilityId
    amount
    date
  }
}
    `;

/**
 * __useGetAllOutflowsQuery__
 *
 * To run a query within a React component, call `useGetAllOutflowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllOutflowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllOutflowsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllOutflowsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllOutflowsQuery, GetAllOutflowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllOutflowsQuery, GetAllOutflowsQueryVariables>(GetAllOutflowsDocument, options);
      }
export function useGetAllOutflowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllOutflowsQuery, GetAllOutflowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllOutflowsQuery, GetAllOutflowsQueryVariables>(GetAllOutflowsDocument, options);
        }
export function useGetAllOutflowsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllOutflowsQuery, GetAllOutflowsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllOutflowsQuery, GetAllOutflowsQueryVariables>(GetAllOutflowsDocument, options);
        }
export type GetAllOutflowsQueryHookResult = ReturnType<typeof useGetAllOutflowsQuery>;
export type GetAllOutflowsLazyQueryHookResult = ReturnType<typeof useGetAllOutflowsLazyQuery>;
export type GetAllOutflowsSuspenseQueryHookResult = ReturnType<typeof useGetAllOutflowsSuspenseQuery>;
export type GetAllOutflowsQueryResult = Apollo.QueryResult<GetAllOutflowsQuery, GetAllOutflowsQueryVariables>;
export const GetOutflowByIdDocument = gql`
    query GetOutflowById($id: Int!) {
  outflow(id: $id) {
    id
    personId
    facilityId
    amount
    date
  }
}
    `;

/**
 * __useGetOutflowByIdQuery__
 *
 * To run a query within a React component, call `useGetOutflowByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOutflowByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOutflowByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOutflowByIdQuery(baseOptions: Apollo.QueryHookOptions<GetOutflowByIdQuery, GetOutflowByIdQueryVariables> & ({ variables: GetOutflowByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOutflowByIdQuery, GetOutflowByIdQueryVariables>(GetOutflowByIdDocument, options);
      }
export function useGetOutflowByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOutflowByIdQuery, GetOutflowByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOutflowByIdQuery, GetOutflowByIdQueryVariables>(GetOutflowByIdDocument, options);
        }
export function useGetOutflowByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetOutflowByIdQuery, GetOutflowByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOutflowByIdQuery, GetOutflowByIdQueryVariables>(GetOutflowByIdDocument, options);
        }
export type GetOutflowByIdQueryHookResult = ReturnType<typeof useGetOutflowByIdQuery>;
export type GetOutflowByIdLazyQueryHookResult = ReturnType<typeof useGetOutflowByIdLazyQuery>;
export type GetOutflowByIdSuspenseQueryHookResult = ReturnType<typeof useGetOutflowByIdSuspenseQuery>;
export type GetOutflowByIdQueryResult = Apollo.QueryResult<GetOutflowByIdQuery, GetOutflowByIdQueryVariables>;
export const GetOutflowsByPersonIdDocument = gql`
    query GetOutflowsByPersonId($personId: Int!) {
  outflowsByPersonId(personId: $personId) {
    id
    amount
    date
    person {
      name
    }
    facility {
      name
    }
  }
}
    `;

/**
 * __useGetOutflowsByPersonIdQuery__
 *
 * To run a query within a React component, call `useGetOutflowsByPersonIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOutflowsByPersonIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOutflowsByPersonIdQuery({
 *   variables: {
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function useGetOutflowsByPersonIdQuery(baseOptions: Apollo.QueryHookOptions<GetOutflowsByPersonIdQuery, GetOutflowsByPersonIdQueryVariables> & ({ variables: GetOutflowsByPersonIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOutflowsByPersonIdQuery, GetOutflowsByPersonIdQueryVariables>(GetOutflowsByPersonIdDocument, options);
      }
export function useGetOutflowsByPersonIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOutflowsByPersonIdQuery, GetOutflowsByPersonIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOutflowsByPersonIdQuery, GetOutflowsByPersonIdQueryVariables>(GetOutflowsByPersonIdDocument, options);
        }
export function useGetOutflowsByPersonIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetOutflowsByPersonIdQuery, GetOutflowsByPersonIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOutflowsByPersonIdQuery, GetOutflowsByPersonIdQueryVariables>(GetOutflowsByPersonIdDocument, options);
        }
export type GetOutflowsByPersonIdQueryHookResult = ReturnType<typeof useGetOutflowsByPersonIdQuery>;
export type GetOutflowsByPersonIdLazyQueryHookResult = ReturnType<typeof useGetOutflowsByPersonIdLazyQuery>;
export type GetOutflowsByPersonIdSuspenseQueryHookResult = ReturnType<typeof useGetOutflowsByPersonIdSuspenseQuery>;
export type GetOutflowsByPersonIdQueryResult = Apollo.QueryResult<GetOutflowsByPersonIdQuery, GetOutflowsByPersonIdQueryVariables>;
export const CreateOutflowDocument = gql`
    mutation CreateOutflow($data: OutflowApiCreateInput!) {
  createOutflow(data: $data) {
    personId
    facilityId
    amount
    date
  }
}
    `;
export type CreateOutflowMutationFn = Apollo.MutationFunction<CreateOutflowMutation, CreateOutflowMutationVariables>;

/**
 * __useCreateOutflowMutation__
 *
 * To run a mutation, you first call `useCreateOutflowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOutflowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOutflowMutation, { data, loading, error }] = useCreateOutflowMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOutflowMutation(baseOptions?: Apollo.MutationHookOptions<CreateOutflowMutation, CreateOutflowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOutflowMutation, CreateOutflowMutationVariables>(CreateOutflowDocument, options);
      }
export type CreateOutflowMutationHookResult = ReturnType<typeof useCreateOutflowMutation>;
export type CreateOutflowMutationResult = Apollo.MutationResult<CreateOutflowMutation>;
export type CreateOutflowMutationOptions = Apollo.BaseMutationOptions<CreateOutflowMutation, CreateOutflowMutationVariables>;
export const UpdateOutflowDocument = gql`
    mutation UpdateOutflow($id: Int!, $data: OutflowUpdateInput!) {
  updateOutflow(id: $id, data: $data) {
    id
    personId
    facilityId
    amount
    date
  }
}
    `;
export type UpdateOutflowMutationFn = Apollo.MutationFunction<UpdateOutflowMutation, UpdateOutflowMutationVariables>;

/**
 * __useUpdateOutflowMutation__
 *
 * To run a mutation, you first call `useUpdateOutflowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOutflowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOutflowMutation, { data, loading, error }] = useUpdateOutflowMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOutflowMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOutflowMutation, UpdateOutflowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOutflowMutation, UpdateOutflowMutationVariables>(UpdateOutflowDocument, options);
      }
export type UpdateOutflowMutationHookResult = ReturnType<typeof useUpdateOutflowMutation>;
export type UpdateOutflowMutationResult = Apollo.MutationResult<UpdateOutflowMutation>;
export type UpdateOutflowMutationOptions = Apollo.BaseMutationOptions<UpdateOutflowMutation, UpdateOutflowMutationVariables>;
export const DeleteOutflowDocument = gql`
    mutation DeleteOutflow($id: Int!) {
  deleteOutflow(id: $id)
}
    `;
export type DeleteOutflowMutationFn = Apollo.MutationFunction<DeleteOutflowMutation, DeleteOutflowMutationVariables>;

/**
 * __useDeleteOutflowMutation__
 *
 * To run a mutation, you first call `useDeleteOutflowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOutflowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOutflowMutation, { data, loading, error }] = useDeleteOutflowMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOutflowMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOutflowMutation, DeleteOutflowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOutflowMutation, DeleteOutflowMutationVariables>(DeleteOutflowDocument, options);
      }
export type DeleteOutflowMutationHookResult = ReturnType<typeof useDeleteOutflowMutation>;
export type DeleteOutflowMutationResult = Apollo.MutationResult<DeleteOutflowMutation>;
export type DeleteOutflowMutationOptions = Apollo.BaseMutationOptions<DeleteOutflowMutation, DeleteOutflowMutationVariables>;
export const GetAllPersonsDocument = gql`
    query GetAllPersons {
  persons {
    id
    email
    name
  }
}
    `;

/**
 * __useGetAllPersonsQuery__
 *
 * To run a query within a React component, call `useGetAllPersonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPersonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPersonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPersonsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPersonsQuery, GetAllPersonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPersonsQuery, GetAllPersonsQueryVariables>(GetAllPersonsDocument, options);
      }
export function useGetAllPersonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPersonsQuery, GetAllPersonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPersonsQuery, GetAllPersonsQueryVariables>(GetAllPersonsDocument, options);
        }
export function useGetAllPersonsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllPersonsQuery, GetAllPersonsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPersonsQuery, GetAllPersonsQueryVariables>(GetAllPersonsDocument, options);
        }
export type GetAllPersonsQueryHookResult = ReturnType<typeof useGetAllPersonsQuery>;
export type GetAllPersonsLazyQueryHookResult = ReturnType<typeof useGetAllPersonsLazyQuery>;
export type GetAllPersonsSuspenseQueryHookResult = ReturnType<typeof useGetAllPersonsSuspenseQuery>;
export type GetAllPersonsQueryResult = Apollo.QueryResult<GetAllPersonsQuery, GetAllPersonsQueryVariables>;
export const GetPersonByIdDocument = gql`
    query GetPersonById($id: Int!) {
  person(id: $id) {
    id
    email
    name
  }
}
    `;

/**
 * __useGetPersonByIdQuery__
 *
 * To run a query within a React component, call `useGetPersonByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPersonByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPersonByIdQuery, GetPersonByIdQueryVariables> & ({ variables: GetPersonByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonByIdQuery, GetPersonByIdQueryVariables>(GetPersonByIdDocument, options);
      }
export function useGetPersonByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonByIdQuery, GetPersonByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonByIdQuery, GetPersonByIdQueryVariables>(GetPersonByIdDocument, options);
        }
export function useGetPersonByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPersonByIdQuery, GetPersonByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPersonByIdQuery, GetPersonByIdQueryVariables>(GetPersonByIdDocument, options);
        }
export type GetPersonByIdQueryHookResult = ReturnType<typeof useGetPersonByIdQuery>;
export type GetPersonByIdLazyQueryHookResult = ReturnType<typeof useGetPersonByIdLazyQuery>;
export type GetPersonByIdSuspenseQueryHookResult = ReturnType<typeof useGetPersonByIdSuspenseQuery>;
export type GetPersonByIdQueryResult = Apollo.QueryResult<GetPersonByIdQuery, GetPersonByIdQueryVariables>;
export const CreatePersonDocument = gql`
    mutation CreatePerson($data: PersonCreateInput!) {
  createPerson(data: $data) {
    email
    name
  }
}
    `;
export type CreatePersonMutationFn = Apollo.MutationFunction<CreatePersonMutation, CreatePersonMutationVariables>;

/**
 * __useCreatePersonMutation__
 *
 * To run a mutation, you first call `useCreatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPersonMutation, { data, loading, error }] = useCreatePersonMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePersonMutation(baseOptions?: Apollo.MutationHookOptions<CreatePersonMutation, CreatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, options);
      }
export type CreatePersonMutationHookResult = ReturnType<typeof useCreatePersonMutation>;
export type CreatePersonMutationResult = Apollo.MutationResult<CreatePersonMutation>;
export type CreatePersonMutationOptions = Apollo.BaseMutationOptions<CreatePersonMutation, CreatePersonMutationVariables>;
export const UpdatePersonDocument = gql`
    mutation UpdatePerson($id: Int!, $data: PersonUpdateSimpleInput!) {
  updatePerson(id: $id, data: $data) {
    id
    email
    name
  }
}
    `;
export type UpdatePersonMutationFn = Apollo.MutationFunction<UpdatePersonMutation, UpdatePersonMutationVariables>;

/**
 * __useUpdatePersonMutation__
 *
 * To run a mutation, you first call `useUpdatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePersonMutation, { data, loading, error }] = useUpdatePersonMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePersonMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePersonMutation, UpdatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePersonMutation, UpdatePersonMutationVariables>(UpdatePersonDocument, options);
      }
export type UpdatePersonMutationHookResult = ReturnType<typeof useUpdatePersonMutation>;
export type UpdatePersonMutationResult = Apollo.MutationResult<UpdatePersonMutation>;
export type UpdatePersonMutationOptions = Apollo.BaseMutationOptions<UpdatePersonMutation, UpdatePersonMutationVariables>;
export const DeletePersonDocument = gql`
    mutation DeletePerson($id: Int!) {
  deletePerson(id: $id)
}
    `;
export type DeletePersonMutationFn = Apollo.MutationFunction<DeletePersonMutation, DeletePersonMutationVariables>;

/**
 * __useDeletePersonMutation__
 *
 * To run a mutation, you first call `useDeletePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePersonMutation, { data, loading, error }] = useDeletePersonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePersonMutation(baseOptions?: Apollo.MutationHookOptions<DeletePersonMutation, DeletePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePersonMutation, DeletePersonMutationVariables>(DeletePersonDocument, options);
      }
export type DeletePersonMutationHookResult = ReturnType<typeof useDeletePersonMutation>;
export type DeletePersonMutationResult = Apollo.MutationResult<DeletePersonMutation>;
export type DeletePersonMutationOptions = Apollo.BaseMutationOptions<DeletePersonMutation, DeletePersonMutationVariables>;
export const GetPersonsWithStatisticsDocument = gql`
    query GetPersonsWithStatistics {
  personsWithStatistics {
    id
    name
    totalInflowAmount
    inflowIds
    totalOutflowAmount
    outflowIds
  }
}
    `;

/**
 * __useGetPersonsWithStatisticsQuery__
 *
 * To run a query within a React component, call `useGetPersonsWithStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonsWithStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonsWithStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPersonsWithStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<GetPersonsWithStatisticsQuery, GetPersonsWithStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonsWithStatisticsQuery, GetPersonsWithStatisticsQueryVariables>(GetPersonsWithStatisticsDocument, options);
      }
export function useGetPersonsWithStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonsWithStatisticsQuery, GetPersonsWithStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonsWithStatisticsQuery, GetPersonsWithStatisticsQueryVariables>(GetPersonsWithStatisticsDocument, options);
        }
export function useGetPersonsWithStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPersonsWithStatisticsQuery, GetPersonsWithStatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPersonsWithStatisticsQuery, GetPersonsWithStatisticsQueryVariables>(GetPersonsWithStatisticsDocument, options);
        }
export type GetPersonsWithStatisticsQueryHookResult = ReturnType<typeof useGetPersonsWithStatisticsQuery>;
export type GetPersonsWithStatisticsLazyQueryHookResult = ReturnType<typeof useGetPersonsWithStatisticsLazyQuery>;
export type GetPersonsWithStatisticsSuspenseQueryHookResult = ReturnType<typeof useGetPersonsWithStatisticsSuspenseQuery>;
export type GetPersonsWithStatisticsQueryResult = Apollo.QueryResult<GetPersonsWithStatisticsQuery, GetPersonsWithStatisticsQueryVariables>;