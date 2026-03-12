/**Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books */
      class Book{
      title;
      author;
      pages;
      isAvailable;
      constructor(title,author,pages,isAvailable){
          this.title=title;
          this.author=author;
          this.pages=pages;
          this.isAvailable=isAvailable;
      }
      borrow(){
        
        this.isAvailable=false;
        return "book not available "
      } 
      returnBook() {
        
        this.isAvailable=true;
        return "book is now available"
      }
    getInfo(){
        return`the name of the book is ${this.title}the author ${this.author}the no. of pages ${this.pages}`
    }
      isLongBook() {
        
        if(this.pages>300){
            return true;
        }
        return false
      }
      }
      
      let a=new Book("jk",'Harry Potter',400,true)
      let b=new Book("or",'1986',100,true)
      let c=new Book("ch",'hobbit',300,false)
      let d=new Book("sd",'Harry Potter2',408,true)
      let e=new Book("gh",'Harry Potter3',45,false)
      console.log(a.getInfo());
    console.log(b.getInfo());
      console.log(c.getInfo());console.log(d.getInfo());console.log(e.getInfo());
      console.log(b.borrow())
    
      
