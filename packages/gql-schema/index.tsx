import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: string;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateNote = {
  __typename?: 'AggregateNote';
  _avg?: Maybe<NoteAvgAggregate>;
  _count?: Maybe<NoteCountAggregate>;
  _max?: Maybe<NoteMaxAggregate>;
  _min?: Maybe<NoteMinAggregate>;
  _sum?: Maybe<NoteSumAggregate>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createNote: Note;
  deleteManyNote: AffectedRowsOutput;
  deleteNote?: Maybe<Note>;
  updateManyNote: AffectedRowsOutput;
  updateNote?: Maybe<Note>;
  upsertNote: Note;
};


export type MutationCreateNoteArgs = {
  data: NoteCreateInput;
};


export type MutationDeleteManyNoteArgs = {
  where?: InputMaybe<NoteWhereInput>;
};


export type MutationDeleteNoteArgs = {
  where: NoteWhereUniqueInput;
};


export type MutationUpdateManyNoteArgs = {
  data: NoteUpdateManyMutationInput;
  where?: InputMaybe<NoteWhereInput>;
};


export type MutationUpdateNoteArgs = {
  data: NoteUpdateInput;
  where: NoteWhereUniqueInput;
};


export type MutationUpsertNoteArgs = {
  create: NoteCreateInput;
  update: NoteUpdateInput;
  where: NoteWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Note = {
  __typename?: 'Note';
  body: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type NoteAvgAggregate = {
  __typename?: 'NoteAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type NoteAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NoteCountAggregate = {
  __typename?: 'NoteCountAggregate';
  _all: Scalars['Int'];
  body: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type NoteCountOrderByAggregateInput = {
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type NoteCreateInput = {
  body: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NoteGroupBy = {
  __typename?: 'NoteGroupBy';
  _avg?: Maybe<NoteAvgAggregate>;
  _count?: Maybe<NoteCountAggregate>;
  _max?: Maybe<NoteMaxAggregate>;
  _min?: Maybe<NoteMinAggregate>;
  _sum?: Maybe<NoteSumAggregate>;
  body: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type NoteMaxAggregate = {
  __typename?: 'NoteMaxAggregate';
  body?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NoteMaxOrderByAggregateInput = {
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type NoteMinAggregate = {
  __typename?: 'NoteMinAggregate';
  body?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NoteMinOrderByAggregateInput = {
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type NoteOrderByWithAggregationInput = {
  _avg?: InputMaybe<NoteAvgOrderByAggregateInput>;
  _count?: InputMaybe<NoteCountOrderByAggregateInput>;
  _max?: InputMaybe<NoteMaxOrderByAggregateInput>;
  _min?: InputMaybe<NoteMinOrderByAggregateInput>;
  _sum?: InputMaybe<NoteSumOrderByAggregateInput>;
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type NoteOrderByWithRelationInput = {
  body?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum NoteScalarFieldEnum {
  Body = 'body',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type NoteScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NoteScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NoteScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NoteScalarWhereWithAggregatesInput>>;
  body?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type NoteSumAggregate = {
  __typename?: 'NoteSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NoteSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NoteUpdateInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NoteUpdateManyMutationInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NoteWhereInput = {
  AND?: InputMaybe<Array<NoteWhereInput>>;
  NOT?: InputMaybe<Array<NoteWhereInput>>;
  OR?: InputMaybe<Array<NoteWhereInput>>;
  body?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type NoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateNote: AggregateNote;
  findFirstNote?: Maybe<Note>;
  groupByNote: Array<NoteGroupBy>;
  note?: Maybe<Note>;
  notes: Array<Note>;
};


export type QueryAggregateNoteArgs = {
  cursor?: InputMaybe<NoteWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NoteWhereInput>;
};


export type QueryFindFirstNoteArgs = {
  cursor?: InputMaybe<NoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<NoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NoteWhereInput>;
};


export type QueryGroupByNoteArgs = {
  by: Array<NoteScalarFieldEnum>;
  having?: InputMaybe<NoteScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NoteOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NoteWhereInput>;
};


export type QueryNoteArgs = {
  where: NoteWhereUniqueInput;
};


export type QueryNotesArgs = {
  cursor?: InputMaybe<NoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<NoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NoteWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NoteFieldsFragment = { __typename?: 'Note', id: number, title: string, body: string, updatedAt: string };

export type UpdateNoteMutationVariables = Exact<{
  id: Scalars['Int'];
  data: NoteUpdateInput;
}>;


export type UpdateNoteMutation = { __typename?: 'Mutation', updateNote?: { __typename?: 'Note', id: number, title: string, body: string, updatedAt: string } | null };

export type NoteByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type NoteByIdQuery = { __typename?: 'Query', note?: { __typename?: 'Note', id: number, title: string, body: string, updatedAt: string } | null };

export type NotesQueryVariables = Exact<{ [key: string]: never; }>;


export type NotesQuery = { __typename?: 'Query', notes: Array<{ __typename?: 'Note', id: number, title: string, body: string, updatedAt: string }> };

export const NoteFieldsFragmentDoc = gql`
    fragment NoteFields on Note {
  id
  title
  body
  updatedAt
}
    `;
export const UpdateNoteDocument = gql`
    mutation UpdateNote($id: Int!, $data: NoteUpdateInput!) {
  updateNote(data: $data, where: {id: $id}) {
    ...NoteFields
  }
}
    ${NoteFieldsFragmentDoc}`;
export type UpdateNoteMutationFn = Apollo.MutationFunction<UpdateNoteMutation, UpdateNoteMutationVariables>;

/**
 * __useUpdateNoteMutation__
 *
 * To run a mutation, you first call `useUpdateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteMutation, { data, loading, error }] = useUpdateNoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateNoteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNoteMutation, UpdateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(UpdateNoteDocument, options);
      }
export type UpdateNoteMutationHookResult = ReturnType<typeof useUpdateNoteMutation>;
export type UpdateNoteMutationResult = Apollo.MutationResult<UpdateNoteMutation>;
export type UpdateNoteMutationOptions = Apollo.BaseMutationOptions<UpdateNoteMutation, UpdateNoteMutationVariables>;
export const NoteByIdDocument = gql`
    query NoteById($id: Int!) {
  note(where: {id: $id}) {
    ...NoteFields
  }
}
    ${NoteFieldsFragmentDoc}`;

/**
 * __useNoteByIdQuery__
 *
 * To run a query within a React component, call `useNoteByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoteByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoteByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNoteByIdQuery(baseOptions: Apollo.QueryHookOptions<NoteByIdQuery, NoteByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoteByIdQuery, NoteByIdQueryVariables>(NoteByIdDocument, options);
      }
export function useNoteByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoteByIdQuery, NoteByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoteByIdQuery, NoteByIdQueryVariables>(NoteByIdDocument, options);
        }
export type NoteByIdQueryHookResult = ReturnType<typeof useNoteByIdQuery>;
export type NoteByIdLazyQueryHookResult = ReturnType<typeof useNoteByIdLazyQuery>;
export type NoteByIdQueryResult = Apollo.QueryResult<NoteByIdQuery, NoteByIdQueryVariables>;
export const NotesDocument = gql`
    query Notes {
  notes {
    ...NoteFields
  }
}
    ${NoteFieldsFragmentDoc}`;

/**
 * __useNotesQuery__
 *
 * To run a query within a React component, call `useNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotesQuery(baseOptions?: Apollo.QueryHookOptions<NotesQuery, NotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotesQuery, NotesQueryVariables>(NotesDocument, options);
      }
export function useNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotesQuery, NotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotesQuery, NotesQueryVariables>(NotesDocument, options);
        }
export type NotesQueryHookResult = ReturnType<typeof useNotesQuery>;
export type NotesLazyQueryHookResult = ReturnType<typeof useNotesLazyQuery>;
export type NotesQueryResult = Apollo.QueryResult<NotesQuery, NotesQueryVariables>;
export type AffectedRowsOutputKeySpecifier = ('count' | AffectedRowsOutputKeySpecifier)[];
export type AffectedRowsOutputFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNoteKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateNoteKeySpecifier)[];
export type AggregateNoteFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createNote' | 'deleteManyNote' | 'deleteNote' | 'updateManyNote' | 'updateNote' | 'upsertNote' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createNote?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNote?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNote?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyNote?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNote?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertNote?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteKeySpecifier = ('body' | 'id' | 'title' | 'updatedAt' | NoteKeySpecifier)[];
export type NoteFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteAvgAggregateKeySpecifier = ('id' | NoteAvgAggregateKeySpecifier)[];
export type NoteAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteCountAggregateKeySpecifier = ('_all' | 'body' | 'id' | 'title' | 'updatedAt' | NoteCountAggregateKeySpecifier)[];
export type NoteCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'body' | 'id' | 'title' | 'updatedAt' | NoteGroupByKeySpecifier)[];
export type NoteGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteMaxAggregateKeySpecifier = ('body' | 'id' | 'title' | 'updatedAt' | NoteMaxAggregateKeySpecifier)[];
export type NoteMaxAggregateFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteMinAggregateKeySpecifier = ('body' | 'id' | 'title' | 'updatedAt' | NoteMinAggregateKeySpecifier)[];
export type NoteMinAggregateFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteSumAggregateKeySpecifier = ('id' | NoteSumAggregateKeySpecifier)[];
export type NoteSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('aggregateNote' | 'findFirstNote' | 'groupByNote' | 'note' | 'notes' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	aggregateNote?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstNote?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByNote?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AffectedRowsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AffectedRowsOutputKeySpecifier | (() => undefined | AffectedRowsOutputKeySpecifier),
		fields?: AffectedRowsOutputFieldPolicy,
	},
	AggregateNote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNoteKeySpecifier | (() => undefined | AggregateNoteKeySpecifier),
		fields?: AggregateNoteFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Note?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteKeySpecifier | (() => undefined | NoteKeySpecifier),
		fields?: NoteFieldPolicy,
	},
	NoteAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteAvgAggregateKeySpecifier | (() => undefined | NoteAvgAggregateKeySpecifier),
		fields?: NoteAvgAggregateFieldPolicy,
	},
	NoteCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteCountAggregateKeySpecifier | (() => undefined | NoteCountAggregateKeySpecifier),
		fields?: NoteCountAggregateFieldPolicy,
	},
	NoteGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteGroupByKeySpecifier | (() => undefined | NoteGroupByKeySpecifier),
		fields?: NoteGroupByFieldPolicy,
	},
	NoteMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteMaxAggregateKeySpecifier | (() => undefined | NoteMaxAggregateKeySpecifier),
		fields?: NoteMaxAggregateFieldPolicy,
	},
	NoteMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteMinAggregateKeySpecifier | (() => undefined | NoteMinAggregateKeySpecifier),
		fields?: NoteMinAggregateFieldPolicy,
	},
	NoteSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteSumAggregateKeySpecifier | (() => undefined | NoteSumAggregateKeySpecifier),
		fields?: NoteSumAggregateFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;