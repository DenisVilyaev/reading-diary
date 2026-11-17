import { BookList } from './components/BookList'
import styled from "@emotion/styled";
import { Stats } from './components/Stats/Stats';
import { useState } from 'react';
import type { BookType } from './types/book';
import { BookForm } from './components/BookForm/BookForm';
import { HeaderIcon } from './icons/icons';

const Page = styled.div`
  min-height: 100vh;
  padding: 20px 48px;
  background:
    radial-gradient(
      circle at top right,
      rgba(221, 214, 197, 0.35),
      transparent 32%
    ),
    linear-gradient(180deg, #fbfaf7 0%, #f6f1ea 100%);
  color: #24211d;
`;

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const HeaderLeft = styled.div``;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 56px;
  font-weight: 600;
  letter-spacing: -1px;
`;

const Subtitle = styled.p`
  margin: 10px 0 0 90px;
  font-size: 24px;
  color: #756f68;
`;

const Content = styled.main`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;

const BookListColumn = styled.div`
  flex: 1.45 1 0;
  min-width: 0;
`;

const BookFormColumn = styled.div`
  flex: 1 1 0;
  min-width: 0;
`;


export default function App() {

  const [books, setBooks] = useState<BookType[]>([])

  function deleteBook(id: number) {
    setBooks(books => books.filter((book) => book.id !== id))
  }

  function addBook(newBook: Omit<BookType, 'id'>) {
    setBooks(books => [...books, { ...newBook, id: Date.now() }])
  }

  return (
    <Page>
      <Container>
        <Header>
          <HeaderLeft>
            <HeaderTitle>
              <HeaderIcon/>
              <Title>Читательский дневник</Title>
              
            </HeaderTitle>

            <Subtitle>
              Мои книги, мысли и впечатления
            </Subtitle>
          </HeaderLeft>
        </Header>

        {/* <ProfileSettings /> */}

        <Stats books={books} />
        <Content>
          <BookListColumn>
            <BookList books={books} deleteBook={deleteBook} />
          </BookListColumn>

          <BookFormColumn>
            <BookForm addBook={addBook} />
          </BookFormColumn>
        </Content>

      </Container>
    </Page>
  )
}

