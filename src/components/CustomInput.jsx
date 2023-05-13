import './CustomInput.scss';

//Component do input de adicionar tarefa
const CustomInput = ({label, value, onChange, onEnterPress}) => {

    const handleKeyDonw = (e) => {
        if(e.key === "Enter"){
            onEnterPress();
        }
    }

    return (
        //div com classe custon-input-container
        <div className="custom-input-container">    
            <input
             type="text" 
             className="custom-input" 
             value={value} 
             onChange={(e) => onChange(e)} 
             onKeyDown={(e) => handleKeyDonw(e)}/>

            { label ? (
                <label className={`${value ? "shrink" : ""} custom-input-label`}>
                    {label}
                </label>
            ) : null}

        </div>
    )
};
 
export default CustomInput;
