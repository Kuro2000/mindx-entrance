const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const Authors = require('./models/authorModels')
const Books = require('./models/bookModels')

app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('listening on 3000')
})

app.use(bodyParser.urlencoded({ extended: true }))

const mongoose = require('mongoose');
const db = mongoose.connection;

// Establish Database connection
const url = 'mongodb://127.0.0.1:27017/mindx'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((client=>{
    console.log('Database: Connected!')
})) 
db.on('error', err=>{
	console.log(`Database: connection error: ${err.message}`);
});

app.get('/', (req,res) => {
    db.collection('books').find().toArray()
      .then(results => {
        res.render('index.ejs',{books: results})
      })
      .catch(error => console.error(error))    
})

app.post('/submitbook', (req,res)=>{
    console.log(req.body)
    Books.findOne({bookName:req.body.bookName},(book)=>{
        if(book == null) {
            book = new Books({
                _id: mongoose.Types.ObjectId(),
                bookName: req.body.bookName,
                authorName: req.body.authorName,
                archived: false
            });

            book.save()
                .then(result => {
                    res.redirect('/')
                    console.log(`Database: ${result}`);
                })
                .catch(err => console.log(err));
        }
    })
})

app.post('/submitauthor', (req,res)=>{
    console.log(req.body)
    Authors.findOne({authorName:req.body.authorName},(author)=>{
        if(author == null) {
            author = new Authors({
                _id: mongoose.Types.ObjectId(),
                authorName: req.body.authorName
            });

            author.save()
                .then(result => {
                    res.redirect('/')
                    console.log(`Database: ${result}`);
                })
                .catch(err => console.log(err));
        }
    })
})

app.post('/archive', (req,res)=>{
    Books.findById(req.body.bookID, (book)=>{
        book.archived = true
        book.save()
            .then(result => {
                res.redirect('/')
                console.log(`Database: ${result}`);
            })
            .catch(err => console.log(err));
    })
})
