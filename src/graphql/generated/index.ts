import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents a date and time following the ISO 8601 standard */
  DateTime: any;
  _Any: any;
  _FieldSet: any;
};

export type Comment = {
  __typename?: 'Comment';
  _boolean: Scalars['Boolean'];
  _float: Scalars['Float'];
  _int: Scalars['Int'];
  _nest: Comment;
  _string: Scalars['String'];
  id: Scalars['ID'];
  post: Post;
  text: Scalars['String'];
  user: User;
};


export type Comment_FloatArgs = {
  fixed?: InputMaybe<Scalars['Int']>;
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};


export type Comment_IntArgs = {
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
};


export type Comment_StringArgs = {
  casing?: InputMaybe<Scalars['String']>;
  full?: InputMaybe<Scalars['Boolean']>;
  length?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  nationality?: InputMaybe<Scalars['String']>;
  pool?: InputMaybe<Scalars['String']>;
  sentences?: InputMaybe<Scalars['Int']>;
  syllables?: InputMaybe<Scalars['Int']>;
  template?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  words?: InputMaybe<Scalars['Int']>;
};


export type CommentTextArgs = {
  length?: InputMaybe<Scalars['Int']>;
};

export type CommentsWhere = {
  and?: InputMaybe<Array<CommentsWhere>>;
  id_eq?: InputMaybe<Scalars['Float']>;
  id_ge?: InputMaybe<Scalars['Float']>;
  id_gt?: InputMaybe<Scalars['Float']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_le?: InputMaybe<Scalars['Float']>;
  id_lt?: InputMaybe<Scalars['Float']>;
  id_neq?: InputMaybe<Scalars['Float']>;
  id_nin?: InputMaybe<Array<Scalars['ID']>>;
  like?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<Array<CommentsWhere>>;
  or?: InputMaybe<Array<CommentsWhere>>;
  post_and?: InputMaybe<Array<PostsWhere>>;
  post_date_contains?: InputMaybe<Scalars['String']>;
  post_date_endswith?: InputMaybe<Scalars['String']>;
  post_date_eq?: InputMaybe<Scalars['String']>;
  post_date_exists?: InputMaybe<Scalars['Boolean']>;
  post_date_in?: InputMaybe<Array<Scalars['String']>>;
  post_date_neq?: InputMaybe<Scalars['String']>;
  post_date_nin?: InputMaybe<Array<Scalars['String']>>;
  post_date_startswith?: InputMaybe<Scalars['String']>;
  post_id_eq?: InputMaybe<Scalars['Float']>;
  post_id_exists?: InputMaybe<Scalars['Boolean']>;
  post_id_ge?: InputMaybe<Scalars['Float']>;
  post_id_gt?: InputMaybe<Scalars['Float']>;
  post_id_in?: InputMaybe<Array<Scalars['ID']>>;
  post_id_le?: InputMaybe<Scalars['Float']>;
  post_id_lt?: InputMaybe<Scalars['Float']>;
  post_id_neq?: InputMaybe<Scalars['Float']>;
  post_id_nin?: InputMaybe<Array<Scalars['ID']>>;
  post_like?: InputMaybe<Scalars['String']>;
  post_not?: InputMaybe<Array<PostsWhere>>;
  post_or?: InputMaybe<Array<PostsWhere>>;
  post_search?: InputMaybe<Scalars['String']>;
  post_title_contains?: InputMaybe<Scalars['String']>;
  post_title_endswith?: InputMaybe<Scalars['String']>;
  post_title_eq?: InputMaybe<Scalars['String']>;
  post_title_exists?: InputMaybe<Scalars['Boolean']>;
  post_title_in?: InputMaybe<Array<Scalars['String']>>;
  post_title_neq?: InputMaybe<Scalars['String']>;
  post_title_nin?: InputMaybe<Array<Scalars['String']>>;
  post_title_startswith?: InputMaybe<Scalars['String']>;
  post_user_id_exists?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_endswith?: InputMaybe<Scalars['String']>;
  text_eq?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<Scalars['String']>>;
  text_neq?: InputMaybe<Scalars['String']>;
  text_nin?: InputMaybe<Array<Scalars['String']>>;
  text_startswith?: InputMaybe<Scalars['String']>;
  user_age_eq?: InputMaybe<Scalars['Int']>;
  user_age_exists?: InputMaybe<Scalars['Boolean']>;
  user_age_ge?: InputMaybe<Scalars['Int']>;
  user_age_gt?: InputMaybe<Scalars['Int']>;
  user_age_in?: InputMaybe<Array<Scalars['Int']>>;
  user_age_le?: InputMaybe<Scalars['Int']>;
  user_age_lt?: InputMaybe<Scalars['Int']>;
  user_age_neq?: InputMaybe<Scalars['Int']>;
  user_age_nin?: InputMaybe<Array<Scalars['Int']>>;
  user_and?: InputMaybe<Array<UsersWhere>>;
  user_firstname_contains?: InputMaybe<Scalars['String']>;
  user_firstname_endswith?: InputMaybe<Scalars['String']>;
  user_firstname_eq?: InputMaybe<Scalars['String']>;
  user_firstname_exists?: InputMaybe<Scalars['Boolean']>;
  user_firstname_in?: InputMaybe<Array<Scalars['String']>>;
  user_firstname_neq?: InputMaybe<Scalars['String']>;
  user_firstname_nin?: InputMaybe<Array<Scalars['String']>>;
  user_firstname_startswith?: InputMaybe<Scalars['String']>;
  user_id_eq?: InputMaybe<Scalars['Float']>;
  user_id_exists?: InputMaybe<Scalars['Boolean']>;
  user_id_ge?: InputMaybe<Scalars['Float']>;
  user_id_gt?: InputMaybe<Scalars['Float']>;
  user_id_in?: InputMaybe<Array<Scalars['ID']>>;
  user_id_le?: InputMaybe<Scalars['Float']>;
  user_id_lt?: InputMaybe<Scalars['Float']>;
  user_id_neq?: InputMaybe<Scalars['Float']>;
  user_id_nin?: InputMaybe<Array<Scalars['ID']>>;
  user_like?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Array<UsersWhere>>;
  user_or?: InputMaybe<Array<UsersWhere>>;
  user_search?: InputMaybe<Scalars['String']>;
};

export type CreateCommentInput = {
  post_id: Scalars['ID'];
  text: Scalars['String'];
  user_id: Scalars['ID'];
};

export type CreatePostInput = {
  date: Scalars['String'];
  title: Scalars['String'];
  user_id: Scalars['ID'];
};

export type CreateUserInput = {
  age: Scalars['Int'];
  firstname: Scalars['String'];
};

export enum MathOptions {
  Ceil = 'CEIL',
  Floor = 'FLOOR',
  Round = 'ROUND'
}

export type Mutation = {
  __typename?: 'Mutation';
  _createSnapshot: Scalars['Boolean'];
  createComment: Comment;
  createPost: Post;
  createUser: User;
  decrementUserAge?: Maybe<Scalars['Int']>;
  deleteComment: Scalars['ID'];
  deletePost: Scalars['ID'];
  deleteUser: Scalars['ID'];
  incrementUserAge?: Maybe<Scalars['Int']>;
  updateComment: Comment;
  updatePost: Post;
  updateUser: User;
};


export type Mutation_CreateSnapshotArgs = {
  key: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDecrementUserAgeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationIncrementUserAgeArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  input: UpdateCommentInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  input: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  _boolean: Scalars['Boolean'];
  _float: Scalars['Float'];
  _int: Scalars['Int'];
  _nest: Post;
  _string: Scalars['String'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  date: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  user: User;
};


export type Post_FloatArgs = {
  fixed?: InputMaybe<Scalars['Int']>;
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};


export type Post_IntArgs = {
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
};


export type Post_StringArgs = {
  casing?: InputMaybe<Scalars['String']>;
  full?: InputMaybe<Scalars['Boolean']>;
  length?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  nationality?: InputMaybe<Scalars['String']>;
  pool?: InputMaybe<Scalars['String']>;
  sentences?: InputMaybe<Scalars['Int']>;
  syllables?: InputMaybe<Scalars['Int']>;
  template?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  words?: InputMaybe<Scalars['Int']>;
};


export type PostCommentsArgs = {
  dir?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<CommentsWhere>;
};


export type PostDateArgs = {
  length?: InputMaybe<Scalars['Int']>;
};


export type PostTitleArgs = {
  length?: InputMaybe<Scalars['Int']>;
};

export type PostsWhere = {
  and?: InputMaybe<Array<PostsWhere>>;
  date_contains?: InputMaybe<Scalars['String']>;
  date_endswith?: InputMaybe<Scalars['String']>;
  date_eq?: InputMaybe<Scalars['String']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_in?: InputMaybe<Array<Scalars['String']>>;
  date_neq?: InputMaybe<Scalars['String']>;
  date_nin?: InputMaybe<Array<Scalars['String']>>;
  date_startswith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['Float']>;
  id_ge?: InputMaybe<Scalars['Float']>;
  id_gt?: InputMaybe<Scalars['Float']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_le?: InputMaybe<Scalars['Float']>;
  id_lt?: InputMaybe<Scalars['Float']>;
  id_neq?: InputMaybe<Scalars['Float']>;
  id_nin?: InputMaybe<Array<Scalars['ID']>>;
  like?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<Array<PostsWhere>>;
  or?: InputMaybe<Array<PostsWhere>>;
  search?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_endswith?: InputMaybe<Scalars['String']>;
  title_eq?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_neq?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<Scalars['String']>>;
  title_startswith?: InputMaybe<Scalars['String']>;
  user_age_eq?: InputMaybe<Scalars['Int']>;
  user_age_exists?: InputMaybe<Scalars['Boolean']>;
  user_age_ge?: InputMaybe<Scalars['Int']>;
  user_age_gt?: InputMaybe<Scalars['Int']>;
  user_age_in?: InputMaybe<Array<Scalars['Int']>>;
  user_age_le?: InputMaybe<Scalars['Int']>;
  user_age_lt?: InputMaybe<Scalars['Int']>;
  user_age_neq?: InputMaybe<Scalars['Int']>;
  user_age_nin?: InputMaybe<Array<Scalars['Int']>>;
  user_and?: InputMaybe<Array<UsersWhere>>;
  user_firstname_contains?: InputMaybe<Scalars['String']>;
  user_firstname_endswith?: InputMaybe<Scalars['String']>;
  user_firstname_eq?: InputMaybe<Scalars['String']>;
  user_firstname_exists?: InputMaybe<Scalars['Boolean']>;
  user_firstname_in?: InputMaybe<Array<Scalars['String']>>;
  user_firstname_neq?: InputMaybe<Scalars['String']>;
  user_firstname_nin?: InputMaybe<Array<Scalars['String']>>;
  user_firstname_startswith?: InputMaybe<Scalars['String']>;
  user_id_eq?: InputMaybe<Scalars['Float']>;
  user_id_exists?: InputMaybe<Scalars['Boolean']>;
  user_id_ge?: InputMaybe<Scalars['Float']>;
  user_id_gt?: InputMaybe<Scalars['Float']>;
  user_id_in?: InputMaybe<Array<Scalars['ID']>>;
  user_id_le?: InputMaybe<Scalars['Float']>;
  user_id_lt?: InputMaybe<Scalars['Float']>;
  user_id_neq?: InputMaybe<Scalars['Float']>;
  user_id_nin?: InputMaybe<Array<Scalars['ID']>>;
  user_like?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Array<UsersWhere>>;
  user_or?: InputMaybe<Array<UsersWhere>>;
  user_search?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _aggregation: Scalars['Float'];
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  _typeDefs: Scalars['String'];
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type Query_AggregationArgs = {
  field?: InputMaybe<Scalars['String']>;
  ref?: InputMaybe<Scalars['String']>;
  stat: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryCommentsArgs = {
  dir?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<CommentsWhere>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  dir?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<PostsWhere>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  dir?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<UsersWhere>;
};

export type UpdateCommentInput = {
  post_id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['ID']>;
};

export type UpdatePostInput = {
  date?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  age?: InputMaybe<Scalars['Int']>;
  firstname?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _boolean: Scalars['Boolean'];
  _float: Scalars['Float'];
  _int: Scalars['Int'];
  _nest: User;
  _string: Scalars['String'];
  age: Scalars['Int'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  firstname: Scalars['String'];
  id: Scalars['ID'];
  posts?: Maybe<Array<Maybe<Post>>>;
};


export type User_FloatArgs = {
  fixed?: InputMaybe<Scalars['Int']>;
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};


export type User_IntArgs = {
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
};


export type User_StringArgs = {
  casing?: InputMaybe<Scalars['String']>;
  full?: InputMaybe<Scalars['Boolean']>;
  length?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  nationality?: InputMaybe<Scalars['String']>;
  pool?: InputMaybe<Scalars['String']>;
  sentences?: InputMaybe<Scalars['Int']>;
  syllables?: InputMaybe<Scalars['Int']>;
  template?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  words?: InputMaybe<Scalars['Int']>;
};


export type UserAgeArgs = {
  math?: InputMaybe<MathOptions>;
};


export type UserCommentsArgs = {
  dir?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<CommentsWhere>;
};


export type UserFirstnameArgs = {
  length?: InputMaybe<Scalars['Int']>;
};


export type UserPostsArgs = {
  dir?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<PostsWhere>;
};

export type UsersWhere = {
  age_eq?: InputMaybe<Scalars['Int']>;
  age_exists?: InputMaybe<Scalars['Boolean']>;
  age_ge?: InputMaybe<Scalars['Int']>;
  age_gt?: InputMaybe<Scalars['Int']>;
  age_in?: InputMaybe<Array<Scalars['Int']>>;
  age_le?: InputMaybe<Scalars['Int']>;
  age_lt?: InputMaybe<Scalars['Int']>;
  age_neq?: InputMaybe<Scalars['Int']>;
  age_nin?: InputMaybe<Array<Scalars['Int']>>;
  and?: InputMaybe<Array<UsersWhere>>;
  firstname_contains?: InputMaybe<Scalars['String']>;
  firstname_endswith?: InputMaybe<Scalars['String']>;
  firstname_eq?: InputMaybe<Scalars['String']>;
  firstname_exists?: InputMaybe<Scalars['Boolean']>;
  firstname_in?: InputMaybe<Array<Scalars['String']>>;
  firstname_neq?: InputMaybe<Scalars['String']>;
  firstname_nin?: InputMaybe<Array<Scalars['String']>>;
  firstname_startswith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['Float']>;
  id_ge?: InputMaybe<Scalars['Float']>;
  id_gt?: InputMaybe<Scalars['Float']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_le?: InputMaybe<Scalars['Float']>;
  id_lt?: InputMaybe<Scalars['Float']>;
  id_neq?: InputMaybe<Scalars['Float']>;
  id_nin?: InputMaybe<Array<Scalars['ID']>>;
  like?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<Array<UsersWhere>>;
  or?: InputMaybe<Array<UsersWhere>>;
  search?: InputMaybe<Scalars['String']>;
};

export type _Entity = Comment | Post | User;

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type DeletePostMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: string };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, title: string } | null | undefined> | null | undefined };


export const DeletePostDocument = `
    mutation DeletePost($id: ID!) {
  deletePost(id: $id)
}
    `;
export const useDeletePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeletePostMutation, TError, DeletePostMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeletePostMutation, TError, DeletePostMutationVariables, TContext>(
      'DeletePost',
      (variables?: DeletePostMutationVariables) => fetcher<DeletePostMutation, DeletePostMutationVariables>(client, DeletePostDocument, variables, headers)(),
      options
    );
export const PostsDocument = `
    query Posts {
  posts {
    id
    title
  }
}
    `;
export const usePostsQuery = <
      TData = PostsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: PostsQueryVariables,
      options?: UseQueryOptions<PostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<PostsQuery, TError, TData>(
      variables === undefined ? ['Posts'] : ['Posts', variables],
      fetcher<PostsQuery, PostsQueryVariables>(client, PostsDocument, variables, headers),
      options
    );