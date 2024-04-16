import React, { useState } from 'react';

const Form = ({ onAddItem }) => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if(!name) return;

        const newItem = {name, quantity, id: Date.now(), isChecked: false};
        setName("");
        setQuantity(1);
        onAddItem(newItem);
    }

    return (
        <div>
            <h1 className="center">Enter it Below</h1>
            <form className="center" onSubmit={handleSubmit}>
                <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                    {Array.from({length : 30}, (_, n) => n+1).map((num)=>(<option value={num} key={num}>{num}</option>))}      
                </select>
                <input type="text" value={name} 
                placeholder="Enter here." 
                onChange={(e) => setName(e.target.value)}>
                </input>
                <button type="submit">
                    Enter!
                </button>
            </form>
        </div>
    );
}

export default Form;
