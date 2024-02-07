import { action, makeObservable, observable, runInAction } from "mobx";
import { ICreateThread, IThread } from "../types/thread";
import { addThread, getThreads } from "../api/threads";

class ThreadsStore {
    @observable
    threads: IThread[] = []

    @observable
    loading: boolean = false;

    constructor() {
        makeObservable(this);
    }

    @action
    loadThreads = async (number: number): Promise<void> => {
        try {
            this.loading = true;
            const { data } = await getThreads(number);

            runInAction(() => {
                this.threads = data.data;
              });
        } catch (error) {
            console.error(error);
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }

    @action
    addThread = async (request :ICreateThread): Promise<void> => {
        try {
            this.loading = true;
            const { data } = await addThread(request);

            runInAction(() => {
                this.threads.push(data.data);
              });
        } catch (error) {
            console.error(error);
        } finally {
            runInAction(() => {
                this.loading = false;
                this.loadThreads(10)
            });
        }
    }
}

const threadsStore = new ThreadsStore();

export default threadsStore;