import type { BookStatusType, BookType } from "../../types/book";
import styled from "@emotion/styled";

const Card = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 22px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.72);
  border: 1px solid #e6ded3;
  border-radius: 14px;
`;
const Cover = styled.img<{propsStatus: BookStatusType}>`
  height: 150px;
  aspect-ratio: 2/3;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 8px 18px rgba(47, 39, 31, 0.22);
  background: ${({ propsStatus }) => {
      if (propsStatus === "done") return "linear-gradient(135deg, #d8ffb1, #282f25);"
      if (propsStatus === "reading") return "linear-gradient(135deg, #c8e5e9, #283846);"
      if (propsStatus === "want") return "linear-gradient(135deg, #e8b1ff, #332d4b);"
    }
  }
`;

// const CoverTitle = styled.div<{propsLength: number}>`
// font-size: ${({ propsLength }) => {
//   if (propsLength > 40) return "8px;"
//   if (propsLength > 28) return "10px;"
//   if (propsLength > 16) return "12px;"
//   if (propsLength < 16) return "16px;"
//   console.log(propsLength)
// }};
// color: #000000;
// `

const CardInfo = styled.div`
  padding: 10px 10px 10px 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.h3`
  margin: 8px 0;
  font-size: 24px;
  font-weight: 600;
`;

const Author = styled.p`
  margin: 0 0 12px;
  font-size: 18px;
  color: #5f5750;
`;

const Status = styled.span<{propsStatus: BookStatusType}>`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  width: fit-content;
  padding: 5px 12px;
  font-size: 15px;
  color: ${({ propsStatus }) => {
    if (propsStatus === "done") return "#006033;"
    if (propsStatus === "reading") return "#2d3778;"
    if (propsStatus === "want") return "#5e4668;"
  }};
  background-color: ${({ propsStatus }) => {
    if (propsStatus === "done") return "#e3ffe4;"
    if (propsStatus === "reading") return "#e2ecff;"
    if (propsStatus === "want") return "#f9eaff;"
  }};
  border-radius: 999px;

  &::before {
   content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ propsStatus }) => {
    if (propsStatus === "done") return "#00ff1a;"
    if (propsStatus === "reading") return "#0022ff;"
    if (propsStatus === "want") return "#b300ff;"
  }};
  }
`;

const Info = styled.p`
  margin: 12px 0 0;
  font-size: 17px;
  color: #5f5750;
`;

const Stars = styled.span`
  color: #e6b24c;
  letter-spacing: 1px;
`;

const DeleteBtn = styled.button`
width: 38px;
height: 38px;
padding: 0;
font-size: 18px;
background-color: #fffaf4;
border: 1px solid #ded6cc;
border-radius: 10px;
cursor: pointer;
flex-shrink: 0;
margin-left: auto;
&:hover {
background-color: #f3e9dd;
}
&:active{
background-color: #e8d8c6;
}
&:focus-visible{
outline: 2px solid #8b735f;
outline-offset: 2px;
}
&:disabled{
opacity: 0.5;
cursor: not-allowed;
}
`

interface BookCardProps {
  book: BookType;
  deleteBook: (id:number) => void
}

const formatStatus = {
  want: "Запланированно",
  reading: "В процессе",
  done: "Прочитано",
};

export function BookCard({ book, deleteBook }: BookCardProps) {
  return (
    <>
      <Card>
        <Cover propsStatus={book.status} src={book.cover} alt={book.title}>
          {/* <CoverTitle propsLength={book.title.length}>{book.title}</CoverTitle> */}
        </Cover>
        <CardInfo>
          <Title>{book.title}</Title>
          <Author>{book.author}</Author>
          <Status propsStatus={book.status}>{formatStatus[book.status]}</Status>
          {book.status === "done" ? (
            <>
              <Info>
                Оценка: <Stars>{"★".repeat(book.rating || 0)}</Stars>{" "}
                {book.rating}/5
              </Info>
              {book.note && <Info>{book.note}</Info>}
            </>
          ) : (
            <Info>Оценка появится после прочтения</Info>
          )}
        </CardInfo>
        <DeleteBtn onClick={() => deleteBook(book.id)} type="button" aria-label="Удалить книгу">🗑️</DeleteBtn>
      </Card>
    </>
  );
}
