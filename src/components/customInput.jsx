const customInput = (label, Value) => {
    return (
        <div className="custom-input-container">
            <input type="text" className="custom input" />

            { label ? (
                <label className={`${Value.length ? "shrink" : ""} custom-input-label`}>

                </label>
            ) : null}

        </div>
    )
};
 
export default customInput;