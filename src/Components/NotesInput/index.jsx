import { useState } from 'react';
import './NotesInput.css'
import { v4 as uuid } from "uuid";


export const NotesInput = (props) => {

    const [title, setTitle] = useState("")
    const [context, setcontext] = useState("")


    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    function onChangeContext(event) {
        setcontext(event.target.value)
    }

    function onClickAdd() {
        props.setNotesArr([...props.notesArr, { id: uuid(), NoteTitle: title, notecontext: context }])

    }



    return (
        <>
            <div className='notes-main'>
                <div className="notes-input">
                    <input type="text" placeholder='Title' className='title1' value={title} onChange={onChangeTitle} />
                    <textarea name="" id="" placeholder='Enter Notes ' className='notees' value={context} onChange={onChangeContext}></textarea>
                    <button onClick={onClickAdd}>Add Notes!</button>
                </div>
            </div>
        </>
    )
}