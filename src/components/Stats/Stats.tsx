import styled from "@emotion/styled";
import type { BookType } from "../../types/book";

const StatsSection = styled.section`
  margin: 0 0 30px 0;
`;

const StatsWrapper = styled.div`
  display: flex;
  padding: 28px 36px;
  background-color: rgba(255, 255, 255, 0.82);
  border: 1px solid #e7dfd4;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(82, 68, 52, 0.1);
`;

const StatCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 0 28px;
  border-right: 1px solid #e6ded3;


`;

const Label = styled.div`
  font-size: 18px;
`;

const Value = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

interface StatsProps {
    books: BookType[]
}

export function Stats({ books }: StatsProps) {
    const total = books.length
    const done = books.filter((book) => book.status === "done").length
    const reading = books.filter((book) => book.status === "reading").length
    const want = books.filter((book) => book.status === "want").length
    return (
        <StatsSection>
            <StatsWrapper>
                <StatCard>
                    <Label>Всего:</Label>
                    <Value>{total}</Value>
                </StatCard>

                <StatCard>
                    <Label>Прочитано:</Label>
                    <Value>{done}</Value>
                </StatCard>

                <StatCard>
                    <Label>Читаю:</Label>
                    <Value>{reading}</Value>
                </StatCard>

                <StatCard>
                    <Label>Хочу:</Label>
                    <Value>{want}</Value>
                </StatCard>
            </StatsWrapper>
        </StatsSection>
    )
}