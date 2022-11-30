import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});