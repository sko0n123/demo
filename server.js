const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/demo'));
app.get('/*', function(req,res) {
res.sendFile('index.html', {root: 'dist/demo/browser'});});
app.listen(process.env.PORT || 8080);