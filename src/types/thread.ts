export interface IPost {
    id: number,
    date: Date,
    text: string
}

export interface IThread extends IPost {
    replies?: number[];
}