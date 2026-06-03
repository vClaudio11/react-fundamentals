import { useState } from "react";

export default function TextList() {
    const [text, setText] = useState("")
    const [items, setItems] = useState<string[]>([])

    function handleSave() {
        setItems([...items, text])
        setText("")
    }

    return (
        <div className="flex flex-col items-center pt-20 min-h-screen bg-gray-800">
            <input className="flex rounded-xl bg-red-400 px-2 py-3 border-2 mb-4"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text"
            />
            <button className="flex rounded-sm bg-blue-200 hover:bg-blue-400 px-2 mb-4" 
                    onClick={handleSave}>Save text
            </button>
            <div className="flex flex-col gap-2 mt-4">
                {items.map((item, index) => (
                    <p className="flex flex-col px-3 bg-red-300" key={index}>{item}</p>
                ))}
            </div>
        </div>
    )
}

