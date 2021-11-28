import React from 'react';
import { useState } from 'react';

const AddToList = () => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        note: ""
    });

    return(
        <div className="AddToList">
            <input 
                type="text" 
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
            />
            <input 
                type="text" 
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
            />
            <input 
                type="text" 
                placeholder="Image Url"
                className="AddToList-input"
                value={input.img}
            />
            <textarea 
                placeholder="Note"
                className="AddToList-input"
                value={input.note}
            />
        </div>
    )
}

export default AddToList;