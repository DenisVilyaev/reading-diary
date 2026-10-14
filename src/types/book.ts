import { initialBooks } from "../data/books"

export interface BookType {
    id: number,
    title: string,
    author: string,
    status: BookStatusType,
    rating: number | undefined,
    note?: string,
    cover?: string
}

export type BookStatusType = "want" | "reading" | "done"