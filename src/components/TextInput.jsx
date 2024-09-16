import PropTypes from "prop-types"

TextInput.PropTypes = 
{   
    id : PropTypes.string,
    labal : PropTypes.string,
    value : PropTypes.string,
    setValue: PropTypes.func
}

export default function TextInput({id,labal,value,setValue}){
    return(
        <div>
          <label htmlFor={id}>{labal}:</label>
          <input 
            type="text"
            id={id}
            value={value}
            onChange={(e) => setValue (e.target.value) }
          />
        </div>
    )
}