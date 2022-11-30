const FormRow = ({ type, name, value, handleChange, labelText}) => {
    return (
        <div>
            <label htmlFor={name}>
                    {labelText || name}
            </label>
            <input 
                type={type}
                name={name}
                value={value} 
                // handleChange={handleChange} ---- I think it's suppose to be onChange={handleChange}
                onChange={handleChange}
            />
        </div>
    )
}

export default FormRow

