import { useState } from "react";

export default function TextList() {
    const [text, setText] = useState("")
    const [items, setItems] = useState<string[]>([])

    function handleSave() {
        setItems([...items, text])
        setText("")
    }

    return (
        <div>
            <input 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text"
            />
            <button onClick={handleSave}>Save text</button>
            {items.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}

