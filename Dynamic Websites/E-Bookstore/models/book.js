let books=[]

class Book{  
    constructor(author,title,id){
        this._author = author;
        this._title = title;
        this._id = id;
        this._review;
    }
}

function create(author,title,id){
    return new Book (author,title,id)
}

function getBook(id){
    let i=0;
    while(i < books.length){
         if (id==books[i]._id)
         return books[i];
         i+=1;
    }
}

function getBooks(){
    return [...books];
}

function save(Book){
    books.push(Book);
}

function checkIfExists(Book){
    let i=0;
   while(i < books.length){
        if (Book._id==books[i]._id)
        return true;
        i+=1;
    }
     return false;
}

function deleteBook(id){
    let i = 0;
    while(i < books.length){
        if (id==books[i]._id){
            books.splice(i,1);
        }
      i += 1;
    }
}

function editBook(author,title,id){
    let i=0;
    while(i < books.length){
         if (id==books[i]._id){
             if(author!="")
             books[i]._author=author;
             if(title!="")
             books[i]._title=title;
         }   
         i+=1;
     }
}

function writeReview(id,review)
{
    let book=getBook(id);
    book._review=review;
}


module.exports = {
    "create" : create,
    "getBooks" : getBooks,
    "save" : save,
    "checkIfExists" :checkIfExists,
    "deleteBook":deleteBook,
    "getBook":getBook,
    "editBook":editBook,
    "writeReview":writeReview,
    "Book" : Book
};
