const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');

const app = express();

mongoose.connect('mongodb://localhost/simple-blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.redirect('/posts');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
