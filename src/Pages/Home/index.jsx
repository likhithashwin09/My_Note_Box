import { Header } from '../../Components/Header'
import { useState } from 'react'
import { NotesInput } from '../../Components/NotesInput'
import { NotesCard } from '../../Components/NotesCard'


export const Home = () => {

    const [notesArr, setNotesArr] = useState([])
    // console.log(notesArr)

    let allPinnedNotes=notesArr.filter((note)=>note.isPinned)

    let allUnpinnedNotes=notesArr.filter((note)=>!note.isPinned)

    
    return (
        <>
            <Header />
            <NotesInput notesArr={notesArr} setNotesArr={setNotesArr} />
            <div className="allNotesCard">
            {
                allPinnedNotes.length>0&&<h3>Pinned Notes</h3>
            }
            <div className='Main-notes'>
                {allPinnedNotes.map((notes) => (
                    <NotesCard
                    key={notes.id}
                    title={notes.NoteTitle}
                    context={notes.notecontext}
                    notesArr={notesArr}
                    setNotesArr={setNotesArr}
                    id={notes.id}
                    isPinned={notes.isPinned} />
                ))}
            </div>
            {
                allUnpinnedNotes.length>0&&<h3> Notes</h3>
            }
            <div className='Main-notes'>
                {allUnpinnedNotes.map((notes) => (
                    <NotesCard
                    key={notes.id}
                    title={notes.NoteTitle}
                    context={notes.notecontext}
                    notesArr={notesArr}
                    setNotesArr={setNotesArr}
                    id={notes.id}
                    isPinned={notes.isPinned} />
                ))}
            </div>

                </div>


        </>
    )
}