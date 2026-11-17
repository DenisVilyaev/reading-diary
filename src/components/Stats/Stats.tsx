import styled from "@emotion/styled";
import type { BookType } from "../../types/book";

import booksIcon from "../../assets/books.png";
import checkIcon from "../../assets/check.png";
import bookOpenIcon from "../../assets/book-open.png";
import bookmarkIcon from "../../assets/bookmark.png";


const StatsSection = styled.section`
 position: relative;
  margin-bottom: 28px;
`;

const StatsWrapper = styled.div`
  display: flex;
  padding: 28px 36px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid #e7dfd4;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(82, 68, 52, 0.1);
  backdrop-filter: blur(10px);
`;

const StatCard = styled.div`
   display: flex;
  flex: 1 1 0;
  align-items: center;
  gap: 18px;
  min-width: 0;
  padding: 0 28px;
  border-right: 1px solid #e6ded3;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
    border-right: none;
  }
`;

const Label = styled.div`
  font-size: 18px;
`;

const Value = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const IconContainer = styled.div<{ value: 'total' | "done" | "reading" | "want" }>`

background-color: ${({ value }) => {
        if (value === "done") return "#e3ffe4;"
        if (value === "reading") return "#e2ecff;"
        if (value === "want") return "#f9eaff;"
        return "#fff9ea;"
    }}

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 58px;
  height: 58px;
  border-radius: 16px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
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
                    <IconContainer value="total">
                        <Icon src={booksIcon} alt="" />
                    </IconContainer>
                    <Label>Всего:</Label>
                    <Value>{total}</Value>

                </StatCard>

                <StatCard>
                    <IconContainer value="done">
                        <Icon src={checkIcon} alt="" />
                    </IconContainer>
                    <Label>Прочитано:</Label>
                    <Value>{done}</Value>

                </StatCard>

                <StatCard>
                    <IconContainer value="reading">
                        <Icon src={bookOpenIcon} alt="" />
                    </IconContainer>
                    <Label>Читаю:</Label>
                    <Value>{reading}</Value>

                </StatCard>

                <StatCard>
                    <IconContainer value="want">
                        <Icon src={bookmarkIcon} alt="" />
                    </IconContainer>
                    <Label>Хочу:</Label>
                    <Value>{want}</Value>

                </StatCard>
            </StatsWrapper>
        </StatsSection>
    )
}