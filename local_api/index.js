const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());

const content = require('./src/content.json')

app.listen(31030, ()=>{
    console.log('Express started at http://localhost:31030/content')
});


const pdf = require('./src/content.json');
app.get('/content', (req, res) => {
    return res.json(content)
})

