const FormRow = ({ type, name, value, handleChange, labelText, firstName}) => {
    return (
        <div>
            <label htmlFor={firstName}>
                    {labelText || firstName}
            </label>
            <input 
                type={type}
                name={name}
                value={value} 
                handleChange={handleChange}
            />
        </div>
    )
}

export default FormRow

