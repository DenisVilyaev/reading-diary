import type { BookType } from "../types/book";
import { BookCard } from "./BookCard/BookCard";
import styled from "@emotion/styled";

const BoookList = styled.section`
  padding: 24px;
  background-color: rgba(255, 255, 255, 0.82);
  border: 1px solid #e7dfd4;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(82, 68, 52, 0.1);
`;

const EmptyText = styled.section`
  margin: 50px 0 0 0;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #756f68;
`;

const BoookListTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 20px;
  font-size: 26px;
  font-weight: 600;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface BookListProp {
  books: BookType[];
  deleteBook: (id: number) => void;
}

export function BookList({ books, deleteBook }: BookListProp) {
  return (
    <>
      {books.length !== 0 ? (
        <BoookList>
          <BoookListTitle>Мои книги</BoookListTitle>
          <List>
            {books.map((book) => (
              <BookCard key={book.id} book={book} deleteBook={deleteBook} />
            ))}
          </List>
        </BoookList>
      ) : (
        <EmptyText>Книг нет</EmptyText>
      )}
    </>
  );
}
