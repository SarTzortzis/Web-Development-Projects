const express = require('express')
const path = require('path')
const app = express()
const port = 8080
const fetch = require('node-fetch')
const handlebars = require("express-handlebars");
let Book=require('./models/book');
const { response } = require('express')


/* 
    Serve static content from directory "public",
    it will be accessible under path /static, 
    e.g. http://localhost:8080/static/index.html
*/
app.use('/public', express.static(__dirname + '/public'))

// parse url-encoded content from body
app.use(express.urlencoded({ extended: false }))

// parse application/json content from body
app.use(express.json())

/*  SETUP HANDLEBARS   */
app.engine(
    "hbs",
    handlebars({
      layoutsDir: `${__dirname}/views/layouts`,
      extname: "hbs",
      defaultLayout: "index",
      partialsDir: `${__dirname}/views/partials`,
    })
  );
  
app.set("view engine", "hbs");


/*    RENDER HOMEPAGE   */
app.get('/',(req,res)=>{
    res.status(200).render("home",);
});

/*    SEARCH BOOK   */
app.get('/results',(req,res,next)=>{

    const {searchBook} = req.query;
    if(!searchBook) return next(new ErrorHandler("Book title is missing.",400));
     
    const books =  fetch(
        `https://reststop.randomhouse.com/resources/works?search=${searchBook}`,
        {
            method:"GET",
            headers:{
            accept: "application/json",
            },
        }
    )
    .then(result=>{
        return result.json();
    })
    .then(data=>{
        res.status(200).render("books", { layout: "index", works: data.work });
    })
    .catch(error=>{
        console.error()
        res.status(500).json({
            message:"Internal server error"
        });
    })
});

/*     SAVE BOOK       */
app.post('/book',(req,res)=>{
    //klhsh save
    const {author, title, id}=req.body;
    let book = Book.create(author,title,id);    
    if(Book.checkIfExists(book)==false){
        
        book = Book.save(book);
        res.status(200).send();
    }
    else{
        console.log("Den tha to balo");
        res.status(400).send();
    }
});


/*   DELETE BOOK   */
app.delete('/delete',(req,res)=>{
    if(req.body.id){
        Book.deleteBook(req.body.id);
        res.status(200).send();
    }
    else{
        res.status(400).send();
    }
});

/*   RENDER MYLIST PAGE   */
app.get('/myList',(req,res)=>{
    let books= Book.getBooks();
    res.status(200).render("list", { layout: "index", works: books});    
});

/*   EDIT A BOOK  PAGE  */
app.get('/edit/:workid',(req,res)=>{

    let book = Book.getBook(req.params.workid);  
    
    res.status(200).render("edit", { layout: "index", book});
})

/*   EDIT    */
app.post('/edited',(req,res)=>{
    let author=req.body.authorname;
    let title=req.body.titlename;
    let id=req.body.id;
    let review=req.body.review;
    if (review!=""){
        Book.writeReview(id,review);
    }
    Book.editBook(author,title,id);  

    //let books= Book.getBooks();
    //diaforetiko layout gia okay rendered
    res.status(200).render("edited", { layout: "index"}); 
});

app.listen(port, () => {
    console.log('Server is listening on port : '+port);
    console.log(`Application's URL:  http://localhost:${port}/`);
  });