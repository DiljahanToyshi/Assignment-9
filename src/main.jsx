import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import Statistics from './Components/Statistics'
import AppliedJobs from './Components/Navbar/AppliedJobs'
import Blogs from './Components/Navbar/Blogs'
import JobDetails from './Components/JobDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("jobhunt.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/:jobid",
        element: <JobDetails></JobDetails>,
        // loader: ({ params }) => fetch("/jobhunt.json"),
      },

      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>,
)
