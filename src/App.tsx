import { BookList } from './components/BookList'
import styled from "@emotion/styled";
import { Stats } from './components/Stats/Stats';
import { initialBooks } from './data/books';
import { useState } from 'react';
import type { BookType } from './types/book';
import { BookForm } from './components/BookForm/BookForm';
import { ProfileSettings } from './components/ProfileSettings/ProfileSettings';

const Page = styled.div`
  min-height: 100vh;
  padding: 20px 48px;
  background: linear-gradient(#fbfaf7, #f6f1ea);
  color: #24211d;
`;

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

export default function App() {

  const [books, setBooks] = useState<BookType[]>(initialBooks)

  function deleteBook(id: number) {
    setBooks(books => books.filter((book) => book.id !== id))
  }

  function addBook(newBook: Omit<BookType, 'id'>) {
setBooks(books => [...books, { ...newBook, id: Date.now()}])
}

  return (
    <Page>
      <Container>
        <ProfileSettings />
        <Stats books={books} />
        <BookList books={books} deleteBook={deleteBook} />
        <BookForm addBook={addBook} />
      </Container>
    </Page>
  )
}

