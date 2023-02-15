const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();
app.set('view engine', 'ejs');
app.set('views', './views')
app.get('/', (req, res) => {
    res.render('blog')
});
const arrayBlog = [];
app.post('/blog', upload.none(),(req, res) => {
    if (req.body.title) {
        let blog = {
            title : req.body.title,
            content : req.body.content
        }
        arrayBlog.push(blog);
        console.log(blog)
        res.render('view', {blog: blog})

     }else {
    res.render('err')
}
})

app.listen(3001, () => {
    console.log('http://localhost:3001')
});
