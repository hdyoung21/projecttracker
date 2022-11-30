import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
//come back to this when you finished that file
import Wrapper from '../../assets/'

const addProject = () => {
const {
    isEditing,
    showAlert, 
    displayAlert, 
    projectName,
    company, 
    codingLanguage, 
    projectDescription, 
    repoName,
    status, 
    statusChoices
} = useAppContext ()

const projectInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    
    console.log(`${name}: ${value}`);
}

const submitInput = e => {
    e.preventDefault();

    if(!projectName || !codingLanguage || !repoName || !projectDescription || !company) {
        displayAlert()
        return
    }
}

return <Wrapper>
    <form className='addProjectForm'>
        <h3> {isEditing ? 'edit project' : 'add project'} </h3>
        {showAlert && <Alert />}
        <div className='form-center'> 
        {/* TAKING PROJECT NAME */}
        <FormRow type="text" name="projectName" value={projectName} handleChange={projectInput} labelText='Project Name'/>

        <FormRow type="text" name="codingLanguage" value={codingLanguage} handleChange={projectInput} labelText='Coding Language' />

        <FormRow type="text" name="repoName" value={repoName} handleChange={projectInput} labelText='Repository Name' />

        <FormRow type="text" name="projectDescription" value={projectDescription} handleChange={projectInput} labelText='Project Description' />

        <FormRow type="text" name="company" value={company} handleChange={projectInput} labelText='Company'/>

        {/* come back for staus  */}
        <div className='form-row'>
            <label htmlFor="status" className='form-label'>Status</label>
            <select name='status' value={status} handleChange={projectInput} className='form-select'>
                {statusChoices.map((statusValue, index) => {
                    return <option key={index} value={statusValue}>{statusValue}</option>
                })}
            </select>
        </div>

        <div className='btn-container'>
            <button type='submit' className='btn btn-block submit-btn' onClick={submitInput}>Submit</button>
        </div>

        </div>
    </form>
     </Wrapper>
}

export default addProject