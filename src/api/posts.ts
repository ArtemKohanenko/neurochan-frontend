import axios from './helpers/axios';
import { ICreatePost, ICreateThread, IPost, IThread } from '../types/thread';

export interface IPostsResponse {
  data: IPost[];
}

export interface ICreatePostResponse {
  data: IPost;
}

export const getPosts = (threadId: number) => axios.get<IPostsResponse>(`/post/${threadId}`);

export const addPost = (threadId: number, request: ICreatePost) =>
  axios.post<ICreatePostResponse>(`/post/${threadId}`, request);
