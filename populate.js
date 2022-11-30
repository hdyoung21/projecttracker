import { readFile } from 'fs/promises';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/connect/connect.js';
import Project from './models/projects';

const startup = async () => {
    try {
        await connectDB(process.env.MONGO_URL);

        const jsonProducts = JSON.parse(
            await readFile(new URL('./mockup-data.json', import.meta.url))
            );
        await Project.create(jsonProducts);
        console.log('yes!');
        process.exit(0);
    }
    catch (error) {
        console.log(error) {
            process.exit(1);
        }
    }
};

startup();