import axios from './helpers/axios';
import { ICreateThread, IThread } from '../types/thread';

export interface IThreadsResponse {
  data: IThread[];
}

export interface ICreateThreadResponse {
  data: IThread;
}

export const getThreads = (number: number) => axios.get<IThreadsResponse>(`/thread/${number}`);

export const addThread = (request: ICreateThread) =>
  axios.post<ICreateThreadResponse>('/thread', request);