import axios, { CancelTokenSource } from 'axios';

export interface PreInitAxiosPromiseWithCancelToken<T> extends Promise<T> {
  cancel?: () => void;
}

export interface AxiosPromiseWithCancelToken<T> extends Promise<T> {
  cancel: () => void;
}

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
});

export const generateCancelTokenSource = (): CancelTokenSource =>
  axios.CancelToken.source();

export default instance;
