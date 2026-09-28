export interface Book {
    id: number,
    title: string,
    author: string,
    status: 'planned' | 'inProgress' | 'complete',
    rating: number | undefined,
    note?: string,
    cover?: string
}