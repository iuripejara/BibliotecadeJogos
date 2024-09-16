import PropTypes from "prop-types"
import { useState } from "react"
import TextInput from "./TextInput"
NewGameForm.PropTypes = {
    addGame: PropTypes.func
}

export default function NewGameForm({ addGame }){
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")


    const handleSubimit = (ev) =>{
        ev.preventDefault()
        addGame({title,cover})
        setTitle("")
        setCover("")
      }
    return(
        <form onSubmit={handleSubimit} >
        <TextInput
            id="tittle"
            labal="titulo"
            value={title}
            setValue={setTitle}
        />
        <TextInput 
            id="cover"
            labal="capa"
            value={cover}  
            setValue={setCover}
        />

        <button type="submit">Adicionar a Biblioteca</button>
        
      </form>
    )
}