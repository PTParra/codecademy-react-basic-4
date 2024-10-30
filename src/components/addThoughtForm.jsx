import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from '../info/utilities';

export const AddThoughtForm = (props) => {

    const [thoughtFieldValue, setThoughtFieldValue] = useState("");

    const handleTextChange = (event) => {
        setThoughtFieldValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (thoughtFieldValue.length > 0) {
            const newThought = {
                id: generateId(),
                text: thoughtFieldValue,
                expiresAt: getNewExpirationTime()
            };

            props.addThought(newThought);

            setThoughtFieldValue("");
        }


    }

    return (
        <form onSubmit={handleSubmit} className="AddThoughtForm">
            <input
                value={thoughtFieldValue}
                onChange={handleTextChange}
                type="text"
                aria-label="What's on your mind?"
                placeholder="What's on your mind?"
            />
            <input type="submit" value="Add" />
        </form>
    );
}
