import { Header } from '../../Components/Header'
import { useState } from 'react'
import { NotesInput } from '../../Components/NotesInput'
import { NotesCard } from '../../Components/NotesCard'


export const Home = () => {

    const [notesArr, setNotesArr] = useState([])


    return (
        <>
            <Header />
            <NotesInput notesArr={notesArr} setNotesArr={setNotesArr} />
            <div className='Main-notes'>
                {notesArr.map((notes)=>(
                    <NotesCard key={notes.id} title={notes.NoteTitle} context={notes.notecontext}/>
                ))}
            </div>



        </>
    )
}