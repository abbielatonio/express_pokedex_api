import express from 'express';
import router from './routes/pokemons.js';

const app = express();
const PORT = '5000';

app.use('/pokemons', router); // all requests here starts with '/pokemons'



app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));