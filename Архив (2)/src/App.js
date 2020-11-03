// import React, {useState} from 'react';
// import Header from './Components/Header/Header';
// import Navbar from './Components/Navbar/Navbar';
// import Main from './Components/Main/Main';
// // import Button from './Components/Button/Button';
// import './App.css'
// import { BrowserRouter} from 'react-router-dom'
// // import Exercise1 from './Components/Exercise1/Exercise1';
// // import Exercise2 from './Components/Exercise2/Exercise2'


// const myPosts = [
//   {id:0, post: 'Мой первый пост'},
//   {id:1, post: 'Хочу написать о чем-то важном'},
//   {id:2, post: 'Изучаю React'},

// ]

// function App() {
//   const [posts, setPosts] = useState(myPosts)
//   const addPost = (text)=>{
//     let arr = [...posts]
//     arr.push({id: 3, post: text})
//     setPosts(arr)
//   }

//   const deletePost = (id)=>{
//     let ind = myPosts.findIndex((element)=>{
//       // console.log(id)
//       return element.id === id;
//     })

//     if(ind !== -1){
//       myPosts.splice(ind, 1)
//       let newArr=[...myPosts]
//       setPosts(newArr)
//     }
//     // console.log("delete", myPosts)

//   }

//   console.log(posts)
//   return (
//     <BrowserRouter>
//       <div className='container'>
//         <Header className='header' text="Hello from App.js" />
//         <Navbar className='navbar' text="MyButton" altText="alt" />
//         <Main className='main' posts = {posts} addPost={addPost} deletePost={deletePost}/>
//         {/* <Exercise1/>
//         <Exercise2/> */}
//         <footer className="footer" style={
//           {background: 'yellow'}}></footer>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// ? TODO APP(Alex)
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Routers from './Components/Routers';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container pt-4">
          <Routers />
        </div>
      </Router>
    </div>
  )
}

export default App
