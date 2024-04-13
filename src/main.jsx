import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Users from './Pages/Users/Users.jsx';
import Posts from './Pages/Posts/Posts.jsx';
import ShowDetails from './Pages/ShowDetails/ShowDetails.jsx';
import UserDetails from './Pages/UserDetails/UserDetails.jsx';
import Todos from './Pages/Todos/Todos.jsx';
import ShowTodos from './Pages/ShowTodos/ShowTodos.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      },
      {
        path: '/Usres',
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        path:"/user5/:userId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path: '/Posts',
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>
      },
      {
        path: "/post1/:postId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <ShowDetails></ShowDetails>
      },
      {
        path:"/todos",
        loader:()=>fetch("https://jsonplaceholder.typicode.com/todos"),
        element:<Todos></Todos>
      },
      {
        path:"/todo/:todoId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`),
        element:<ShowTodos></ShowTodos>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
