import styled from "@emotion/styled";
import { useState } from "react";
import type { BookStatusType } from "../../types/book";


const Form = styled.form`
  margin: 50px 0 0 0;
  padding: 28px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid #e7dfd4;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(82, 68, 52, 0.1);
`;

const Title = styled.h2`
  margin: 0 0 26px;
  font-size: 26px;
  font-weight: 600;
`;

const FormField = styled.label`
display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 22px;
  font-size: 18px;

`

const Input = styled.input`
height: 50px;
  padding: 0 16px;
  color: #24211d;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid #ded6cc;
  border-radius: 12px;

  &::placeholder {
    color: #9b938a;
  }

  &:focus {
    outline: none;
    border-color: #9f8b76;
    box-shadow: 0 0 0 3px rgba(159, 139, 118, 0.15);
  }
`

const Select = styled.select`
 height: 50px;
  padding: 0 16px;
  color: #24211d;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid #ded6cc;
  border-radius: 12px;

  &:focus {
    outline: none;
    border-color: #9f8b76;
    box-shadow: 0 0 0 3px rgba(159, 139, 118, 0.15);
  }
`

const FormTextArea = styled.textarea`
  min-height: 96px;
  padding: 14px 16px;
  color: #24211d;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid #ded6cc;
  border-radius: 12px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #9f8b76;
    box-shadow: 0 0 0 3px rgba(159, 139, 118, 0.15);
  }
`

const Optional = styled.div`
background: rgba(239, 239, 239, 0.82);
border-radius: 12px;
padding: 1px 10px 10px 10px;`

const OptionalTitle = styled.h3`
color: #9b938a;
font-weight: 300;
font-size: 16px;
padding: 0 0 10px 0;`

// задача на потом: сделать обложку опциональной (по задаче возможно и заметку)

export function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [status, setStatus] = useState<BookStatusType>("want")
  const [rating, setRating] = useState(0)
  const [note, setNote] = useState('')
  const [cover, setCover] = useState('')

  console.log(cover)
  // function getTitle(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>): void {
  //     setTitle(e.target.value)
  // }





  return (
    <Form>
      <Title>Добавить книгу</Title>

      <FormField>Название<Input onChange={(e) => setTitle(e.target.value)} placeholder="Укажите название"/></FormField>

      <FormField>Автор<Input onChange={(e) => setAuthor(e.target.value)} placeholder="Укажите автора"/></FormField>

      <FormField>Статус<Select onChange={(e) => setStatus(e.target.value as BookStatusType)} value={status}>
        <option value="want">Запланированно</option>
        <option value="reading">В процессе</option>
        <option value="done">Прочитано</option>
      </Select></FormField>

      <FormField>Рейтинг
        <Select onChange={(e) => setRating(Number(e.target.value))}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormField>

      <Optional>
        <OptionalTitle>Опционально</OptionalTitle>
        <FormField>Заметка<FormTextArea onChange={(e) => setNote(e.target.value)} placeholder="укажите ваши заметки здесь"/></FormField>

      <FormField>Обложка <Input type="url" onChange={(e) => setCover(e.target.value)} placeholder="Укажите ссылку на обложку" /></FormField>

      </Optional>

      

    </Form>
  )
}