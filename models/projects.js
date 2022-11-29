import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema (
    {
        projectName: {
            type: String, 
            required: [true, 'Please provide project name.'], 
            maxlength: 40
        },
        status: {
            type: String, 
            enum: ['To-Do', 'In-Progress', 'Finished'],
            default: 'To-Do',
        },
        company: {
            type: String, 
            required: false, 
            maxlength: 40,
        },
        codingLanguage: {
            type: String,
            //could later change this to an enum with the languages listed
            required: [true, 'Please provide coding language.'],
            maxlength: 60,
        },
        projectDescription: {
            type: String, 
            required: [true, 'Please include a quick description.'],
            maxlength: 255,
        },
        repoName: {
            type: String, 
            required: [true, 'Please include the name of the repo connected to this project.'], 
            unique: [true, 'Please use a repo name.'],
            //could request a url and use "match:" to validate it or just make the url yourself
            maxlength: 40,
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User', 
            required: [true, 'Please provide user.'],
        },
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
          },
    }, 
    {timestamps: true}
        
)

export default mongoose.model('Project', ProjectSchema)