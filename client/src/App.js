import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import All Component
import Username from "./components/Username";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import Reset from "./components/Reset";
import PageNotFound from "./components/PageNotFound";

/* root router */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: <Password></Password>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
