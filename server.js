const express = require('express');
const app = express();
const path = require('path');
const public = path.join(__dirname + '/public');

app.use(express.static(public));

app.get('/', (req, res)=>{
    res.sendFile(path.join(public + '/index.html'));
});

app.get('/boards/:board', (req, res)=>{
    res.sendFile(path.join(path.join(public + '/boards') + `/${req.params.board}.html`));
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server set up.');
});