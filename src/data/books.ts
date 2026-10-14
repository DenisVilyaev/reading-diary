import type { BookType } from "../types/book";

export const initialBooks:BookType[] = [
    {
    id: 1,
    title: "1984",
    author: "Джордж Оруэлл",
    // pages: 328,
    status: "want",
    rating: 4,
    note: "незаменимая классика",
    cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.lOeu_3b8P9Ztzf_23_GxoQHaL2%3Fpid%3DApi&f=1&ipt=f4521ec957eded3880353cc980b7aa1c30076cc5cb74b6cfd96159b636b393cd&ipo=images"
},
{
    id: 2,
    title: "Гарри Поттер",
    author: "Роулинг",
    // pages: 432,
    status: "reading",
    rating: undefined,
    note: "невероятная история",
    cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.98ie9maNnqSSptykFFgSFwHaL2%3Fr%3D0%26pid%3DApi&f=1&ipt=c65f85caa07a0213016ba1a8225dfc2defa5e48bb4bcd8d56297f5de028bd305&ipo=images"
},
{
    id: 3,
    title: "Евгений Онегин",
    author: "Пушкин",
    // pages: 200,
    status: "done",
    rating: 5,
    note: "Гениальное творение выдающегося русского поэта А. Пушкина",
    cover: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%2Fid%2FOIP.qHS20FPUlRNV7KCKsmKjjwHaKS%3Fr%3D0%26pid%3DApi&f=1&ipt=4530c8b4d6947e87ac31a121b34d70d7ca680949235187bd99b25a92dde8edaf&ipo=images"
}]