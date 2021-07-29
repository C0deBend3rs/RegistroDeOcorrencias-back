const express = require('express');
const routes = require('./routes');
var cors = require('cors')

require('./database');

const app = express();

app.use(express.json());

app.use(cors())

app.get("/teste", (req, res) => {res.json({status: 'okay'})})

app.use(routes);

app.listen(3333);
