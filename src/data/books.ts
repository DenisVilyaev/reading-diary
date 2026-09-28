import type { Book } from "../types/book";

export const initialBooks:Book[] = [
    {
    id: 1,
    title: "1984",
    author: "Джордж Оруэлл",
    // pages: 328,
    status: "planned",
    rating: 6,
    note: "книжечка читабельна",
    cover: "example.com"
},
{
    id: 2,
    title: "Гарри Поттер",
    author: "Роулинг",
    // pages: 432,
    status: "inProgress",
    rating: undefined,
},
{
    id: 3,
    title: "Евгений Онегин",
    author: "Пушкин",
    // pages: 200,
    status: "complete",
    rating: 9,
}]