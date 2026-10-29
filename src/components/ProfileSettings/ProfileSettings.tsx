import { useState, type ChangeEvent } from "react"

type themeType = 'dark' | 'light'

export function ProfileSettings() {
    const [username, setUsername] = useState('')
    const [theme, setTheme] = useState<themeType>('light')
    const [fontSize, setFontSize] = useState(16)
    const [desc, setDesc] = useState('')
    const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(true)

    function resetSettings() {
        setUsername('')
        setTheme('light')
        setFontSize(16)
        setDesc('')
        setIsPreviewVisible(true)
    }

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setDesc(e.target.value)
    }

    return (
        <section>
            {isPreviewVisible && (
                <div>
                    <div>{username ? username : 'Имя не указано'}</div>
                    <div>{theme}</div>
                    <div>{desc ? desc : 'Описание не добавлено'}</div>
                    <div>{fontSize}</div>
                </div>
            )}
            <input type="text" placeholder="Имя пользователя" value={username ?? ""} onChange={e => setUsername(e.target.value)} />

            <select value={theme} onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                <option value="light">Светлая</option>
                <option value="dark">Темная</option>
            </select>

            <input type="number" min={12} max={30} placeholder="Размер текста" value={fontSize} onChange={e => setFontSize(Number(e.target.value))} />

            <textarea placeholder="О вас" value={desc} onChange={e => handleChange(e)}></textarea>

            <button onClick={() => setIsPreviewVisible(prev => !prev)}>{isPreviewVisible ? 'Скрыть просмотр' : 'Показать просмотр'}</button>

            <button onClick={resetSettings}>Сбросить настройки</button>
        </section>
    )
}