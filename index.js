import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './src/routes/routes';

const app = express();//esta vá para routes como argumento
const PORT = 4000;

// mongoose connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productsdb', {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// routes
routes(app);

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
