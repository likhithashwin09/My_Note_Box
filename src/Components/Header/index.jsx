import logo from '../../assets/note.png'
import './header.css'
export const Header=()=>{
    return(
         <header className="header">
            <div className="img-container">
                <img className="img"src={logo} alt="" />
            </div>
             <h1>My Notes App </h1>
         </header>
    )
}