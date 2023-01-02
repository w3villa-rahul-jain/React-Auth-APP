import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* root router */
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main Page</div>,
  },
  {
    path: "/login",
    element: <div>Login Page</div>,
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
