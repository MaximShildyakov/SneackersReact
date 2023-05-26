import React from "react";
import { useState } from "react";


export default function UserForm() {
    const [content, setContent] = useState("");
    const [selectedItem, setSelectedItem] = useState("Shops");
const handlerTextAreaChanged = event => {
    setContent(event.target.value);
 };
 const handlerSelectChanged = event => {
    setSelectedItem(event.target.value);
 };
 const handlerSubmit = event => {
    event.preventDefault();
    const msg = 'Your feedback about ${selectedItem}:\n${content}';
    alert(msg);
 };
    return (
    < div>
        <form 
         onSubmit={handlerSubmit}>
        <label>
            Please choose category of your feedback
        <select value={selectedItem}
        onChange={handlerSelectChanged}>
            <option>Service</option>
            <option>Products</option>
            <option>Shops</option>
        </select>
        </label>
        <textarea
            value={content}
            onChange={handlerTextAreaChanged}
            placeholder="Please enter your feedback"
            required
    />
        <input type="submit" value="Send feedback" />
        </form>
        </div>
 )}

 