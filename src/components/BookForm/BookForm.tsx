import styled from "@emotion/styled";
import { useState } from "react";
import type { BookStatusType, BookType } from "../../types/book";


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

const Input = styled.input<{hasError: string}>`
height: 50px;
  padding: 0 16px;
  color: #24211d;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid ${({ hasError }) => (hasError ? '#ca3d3d;' : '#ded6cc;')};
  border-radius: 12px;

  &::placeholder {
    color: #9b938a;
  }

  &:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? '#ca3d3d;' : '#9f8b76;')}
    box-shadow: 0 0 0 3px ${({ hasError }) => (hasError ? 'rgba(255, 0, 0, 0.15);' : 'rgba(159, 139, 118, 0.15);')}
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

const Hint = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 4px 0 30px;
  padding: 18px;
  border-radius: 12px;
  background: #f3eee8;
  color: #4f4943;
  font-size: 16px;
  line-height: 1.55;
`;

const AddButton = styled.button<{hasError: string}>`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 12px;
  background: ${({ hasError }) => (hasError ? '#ca3d3d;' : '#242424;')} 
  color: white;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(36, 36, 36, 0.18);
  margin: 30px 0 0 0;
  transition: background 0.2s;

  &:hover {
    background: ${({ hasError }) => (hasError ? '#a61d1d;' : '#111111;')}
  }
`;


// задача на потом: сделать обложку опциональной (по задаче возможно и заметку)

interface BookFormProps {
  addBook: (book: Omit<BookType, 'id'>) => void
}

export function BookForm({ addBook }: BookFormProps) {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [status, setStatus] = useState<BookStatusType>("want")
  const [rating, setRating] = useState(1)
  const [note, setNote] = useState('')
  const [cover, setCover] = useState('')
  const [error, setError] = useState('')

  console.log(cover)
  // function getTitle(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>): void {
  //     setTitle(e.target.value)
  // }


  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!title.trim() || !author.trim()) {
      setError('Заполните обязательные поля');
      setTimeout(setError, 2000, '');
      return
    }

    const bookData = {
      title,
      author,
      status,
      rating,
      note,
      cover,
    }

    addBook(bookData)

    setTitle('')
    setAuthor('')
    setStatus("want")
    setRating(1)
    setNote('')
    setCover('')
    setError('')
  }



  return (
    <Form onSubmit={handleSubmit}>
      <Title>Добавить книгу</Title>

      <FormField>Название<Input  hasError={error} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Укажите название" /></FormField>

      <FormField>Автор<Input  hasError={error} value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Укажите автора" /></FormField>

      <FormField>Статус<Select onChange={(e) => setStatus(e.target.value as BookStatusType)} value={status}>
        <option value="want">Запланированно</option>
        <option value="reading">В процессе</option>
        <option value="done">Прочитано</option>
      </Select></FormField>

      {status === 'done' ? (
        <>
         <FormField>Рейтинг
        <Select onChange={(e) => setRating(Number(e.target.value))} value={rating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormField>

        <FormField>Заметка<FormTextArea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Укажите ваши заметки здесь" /></FormField>

        </>
      ) : (
        <Hint>Поля для оценки и заметок появятся для прочитанной книги</Hint>
      )}

       <FormField>Обложка <Input hasError={''} type="url" value={cover} onChange={(e) => setCover(e.target.value)} placeholder="Укажите ссылку на обложку" /></FormField>
     
      <AddButton type="submit" hasError={error}>{error ? error : "Добавить"}</AddButton>

    </Form>
  )
}