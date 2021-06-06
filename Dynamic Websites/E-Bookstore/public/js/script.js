const saveBtns = document.querySelectorAll(".book-btn");
const deleteBtns = document.querySelectorAll(".book-btn-delete");
const searchFilter = document.querySelector("#search");

setUpDelete();

// Set up filter-search
if (searchFilter) {
    getSavedBooks();
    searchFilter.addEventListener("input", (e) => {
      setTimeout(() => {
        let keyword = searchFilter.value.toLowerCase().trim();
        displayBooks(keyword);
        setUpDelete();
      }, 500);
    });
  }

//Get saved books
function getSavedBooks() {
    let saved = document.querySelectorAll(".book");
    savedBooks = [];
    Array.from(saved).forEach((book) => {
      let title = book.querySelector(".bookName").textContent;
      let author = book.querySelector(".authorName").textContent;
      let id = book.querySelector(".bookId").textContent;
      let review = book.querySelector(".Comments").textContent;
      savedBooks.push({
        title,
        author,
        id,
        review,
      });
    });
  }

//Filter in .5s
function displayBooks(keyword) {
    let filterBooks = savedBooks.filter((book) => {
      if (
        book.author.toLowerCase().includes(keyword) ||
        book.title.toLowerCase().includes(keyword)
      ) 
      {
        return book;
      }
    });
    let place = document.querySelector(".books-content");
    let content = "";
    filterBooks.forEach((book) => {
      content += ` 
      <article class="book">
      <header class="book-header">
          <p class="book-author">
              <span class="high">Author: </span>
              <p class="authorName">${book.author}</p>
          </p>
          <button class="book-btn-edit" onclick="location.href='/edit/${book.id}' "><i class="fas fa-edit fa-2x"></i></button>
          <button class="book-btn-delete-list"><i class="fas fa-minus fa-2x"></i></button>
          </header>
 
          <div class="book-body">
              <p class="book-title">
                  <span class="high">Title: </span>
                  <p class="bookName">${book.title}</p>
                    <span class="high">Review: </span>
                    <p class="Comments">${book.review}</p>                     
              </p>
          </div>
          <footer class="book-footer">
          <!-- <input class="book-comment" placeholder="comment">-->
          <p class="book-id">
              <span class="high">ID: </span>
              <p class="bookId">${book.id}</p>
           </p>
       </footer>
   </article>
      `;
    });
    place.innerHTML = content;
}

//Delete on myList page
function setUpDelete(){
const deleteBtnsMyList=document.querySelectorAll(".book-btn-delete-list");
Array.from(deleteBtnsMyList).forEach((deleteBtnMyList)=>{
    deleteBtnMyList.addEventListener("click",(e)=>{
            let parent = e.target.parentElement.parentElement.parentElement;
            var author = parent.querySelector(".authorName").textContent;
            var title = parent.querySelector(".bookName").textContent;
            var id = parent.querySelector(".bookId").textContent;
            let Book={
               author,
               title,
               id,
            };
           
       let list = fetch("http://localhost:8080/delete",{
        method: "DELETE" ,
        headers: 
        {
            "content-type" : "application/json"
        },
        body: JSON.stringify(Book),
        })
        .then((res)=>{
            if (res.status==200)
             console.log("Book successfuly deleted on MyList with status code : "+ res.status);
            
    });
        let toDelete=deleteBtnMyList.parentElement.parentElement; 
        toDelete.remove();
    })
});
}


//Delete on search page
Array.from(deleteBtns).forEach((deleteBtn)=>{
    deleteBtn.addEventListener("click",(e)=>{
            let parent = e.target.parentElement.parentElement.parentElement;
            var author = parent.querySelector(".authorName").textContent;
            var title = parent.querySelector(".bookName").textContent;
            var id = parent.querySelector(".bookId").textContent;
            let Book={
               author,
               title,
               id,
            };
        
       let list = fetch("http://localhost:8080/delete",{
        method: "DELETE" ,
        headers: 
        {
            "content-type" : "application/json"
        },
        body: JSON.stringify(Book),
        })
        .then((res)=>{
            console.log("Undo was successfuly completed with status code: "+res.status);
            
            

    });
        let saveBtn=deleteBtn.previousElementSibling; 
        saveBtn.classList.remove("saved");
        deleteBtn.style.display="none";
    })
});


//Add book
Array.from(saveBtns).forEach((saveBtn) => {
    saveBtn.addEventListener("click",(e)=>{
        let parent = e.target.parentElement.parentElement.parentElement;
        var author = parent.querySelector(".authorName").textContent;
        var title = parent.querySelector(".bookName").textContent;
        var id = parent.querySelector(".bookId").textContent;

        let Book={
            author,
            title,
            id,
        };
        
        let list = fetch("http://localhost:8080/book",{
            method: "POST" ,
            headers: 
            {
                "content-type" : "application/json"
            },
            body: JSON.stringify(Book),
            })
        .then((res)=>{
            if (res.status==200)
                console.log("Book with id = "+id+" was succesfuly added to MyList. Status code : "+res.status);
            if(res.status==400){
                console.log("Book with id = "+id+" is already added to MyList. Status code : "+res.status);
                document.getElementById("popup").style.display="block";
                let closepopup=document.getElementById("popup-btn");
                closepopup.addEventListener("click",(e)=>{
                    document.getElementById("popup").style.display="none";
                });
           }
        });

        //  Change Color when saved
        saveBtn.classList.add("saved");
        //  Displaying Undo Button
        let deletebutton=saveBtn.parentElement.lastElementChild;      
        deletebutton.style.display="block";

        //  Undo 
    });

}); 