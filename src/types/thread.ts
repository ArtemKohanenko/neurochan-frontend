export interface IPost {
    postId: number,
    date: string,
    text: string
}

export interface ICreatePost {
    text: string,
    isRequireReply: boolean,
    captchaValue: string
}

export interface IThread {
    threadId: number,
    date: string,
    text: string,
    lastActivityDate: Date,
    posts?: number[],
    lastPosts: IPost[]
}

export interface ICreateThread {
    text: string,
    captchaValue: string,
    isRequireReply?: boolean
  }