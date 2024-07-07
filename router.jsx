import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import SingleProducts from "./src/pages/home/SingleProducts";
// import SingleProducts from "./src/pages/home/SingleProducts";

export const router = createBrowserRouter([
    {path:"/", element:<App />},
    {path:"/shop/:id", element:<SingleProducts />}

])