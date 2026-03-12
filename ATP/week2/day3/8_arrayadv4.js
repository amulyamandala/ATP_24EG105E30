/**ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"

 */
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//1.
let scifi=movies.filter(ele=>ele.genre==="Sci-Fi")
console.log(scifi)

//2.
let titles=movies.map(ele=>ele.title+" ("+ele.rating+")")
console.log(titles)

//3.
let avgRating=movies.reduce((acc,ele)=>acc+ele.rating,0)
console.log(avgRating/movies.length)

//4.
let joker=movies.find(ele=>ele.title==="Joker")
console.log(joker)

//5.
let index3=movies.findIndex(ele=>ele.title==="Avengers")
console.log(index3)
