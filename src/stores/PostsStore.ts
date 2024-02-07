import { action, makeObservable, observable, runInAction } from "mobx";
import { ICreatePost, IPost, IThread } from "../types/thread";
import { addPost, getPosts } from "../api/posts";

class PostsStore {

    @observable
    currentThreadId: number | undefined;

    @observable
    posts: IPost[] = []

    @observable
    loading: boolean = false;

    postsRefs: { [key: number]: React.MutableRefObject<any> } = {}

    repliesOnPosts: { [key: number]: Set<number> | undefined } = {}

    @observable
    selectedPostId: number | undefined;

    constructor() {
        makeObservable(this);
        this.initRepliesOnPosts();
    }

    @action
    setCurrentThread = (threadId: number) => {
        this.currentThreadId = threadId
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
                this.initRepliesOnPosts();
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
                this.initRepliesOnPosts();
            });
        }
    }

    @action
    clearPostsRefs = () => {
        this.postsRefs = {}
    }

    @action
    selectPost = (postId: number) => {
        this.selectedPostId = postId
    }

    @action
    unselectPost = () => {
        this.selectedPostId = undefined
    }

    @action
    initRepliesOnPosts = () => {

        if (this.currentThreadId) {
            this.repliesOnPosts[this.currentThreadId] = new Set()
        }
        
        this.posts.forEach((post) => {
            this.repliesOnPosts[post.postId] = new Set()
        })
    }
}

const postsStore = new PostsStore();

export default postsStore;