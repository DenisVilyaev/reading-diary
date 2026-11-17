import { useState } from "react"



type eventFormatType = 'online' | 'offline'
type eventTitleType = string | undefined


export function EventForm() {
const [title, setTitle] = useState<eventTitleType>('')
const [format, setFormat] = useState<eventFormatType>('online')
const [count, setCount] = useState(0)
const [desc, setDesc] = useState('')
console.log(title, format, count, desc)


    return (
        <>
        <input type="text" value={title ?? ''} onChange={e => setTitle(e.target.value as eventTitleType)}/>
        <select value={format} onChange={e => setFormat(e.target.value as eventFormatType)}>
            <option value="online">Онлайн</option>
            <option value="offline">Офлайн</option>
        </select>
        <input type="number" value={count} onChange={e => setCount(Number(e.target.value))} />
        <textarea value={desc} onChange={e => setDesc(e.target.value)}></textarea>
        </>
    )
}