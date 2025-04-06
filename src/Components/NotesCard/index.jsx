import'./NotesCard.css'


export const NotesCard = (props) => {



function onPinClick(){
    let updatedNotes=props.notesArr.map((notes)=>{
        let l=""
        notes.id===props.id?l={...notes,isPinned:!notes.isPinned}:l=notes
        return l;
})
    
     props.setNotesArr(updatedNotes);
}

function onDeleteClick(){
    let updatedNotes=props.notesArr.filter((note)=>note.id!=props.id)
props.setNotesArr(updatedNotes)
}

    return (
        <>
            <div className='Notes-Card'>
                <div className='Notes-container'>
                    <p>{props.title}</p>
                    <button onClick={onDeleteClick}>Delete</button>
                </div>
                <div className='Notes-container'>
                    <p>{props.context}</p>
                    <div className='cta-container'>
                        <button onClick={onPinClick}>{props.isPinned?"Unpin":"pin"}</button>
                        <button>Archieve</button>
                    </div>
                </div>
            </div>
        </>
    )
}