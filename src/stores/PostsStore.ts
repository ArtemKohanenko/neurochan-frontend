import { action, makeObservable, observable, runInAction } from "mobx";
import { ICreatePost, IPost } from "../types/thread";
import { addPost, getPosts } from "../api/posts";

class PostsStore {
    @observable
    posts: IPost[] = []

    @observable
    loading: boolean = false;

    constructor() {
        makeObservable(this);
    }

    @action
    loadPosts = async (threadId: number): Promise<void> => {
        try {
            this.loading = true;
            const { data } = await getPosts(threadId);

            runInAction(() => {
                this.posts = data.data;
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
    addPost = async (threadId: number, request :ICreatePost): Promise<void> => {
        try {
            this.loading = true;
            const { data } = await addPost(threadId, request);

            runInAction(() => {
                this.posts.push(data.data);
              });
        } catch (error) {
            console.error(error);
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }
}

const postsStore = new PostsStore();

export default postsStore;