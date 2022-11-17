import './CustomInput.scss'

//Component do input de adicionar tarefa
const CustomInput = ({label, value, onChange}) => {
    return (
        //div com classe custon-input-container
        <div className="custom-input-container">    
            <input type="text" className="custom-input" value={value} onChange={(e) => onChange(e)} />

            { label ? (
                <label className={`${value ? "shrink" : ""} custom-input-label`}>
                    {label}
                </label>
            ) : null}

        </div>
    )
};
 
export default CustomInput;