import'./NotesCard.css'


export const NotesCard = (props) => {

    return (
        <>
            <div className='Notes-Card'>
                <div className='Notes-container'>
                    <p>{props.title}</p>
                    <button>Delete</button>
                </div>
                <div className='Notes-container'>
                    <p>{props.context}</p>
                    <div className='cta-container'>
                        <button>pin</button>
                        <button>Archieve</button>
                    </div>
                </div>
            </div>
        </>
    )
}