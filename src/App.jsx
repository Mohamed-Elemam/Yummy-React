import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Components/Home";
import { Categories } from "./Components/Categories";
import { Countries } from "./Components/Countries";
import ContactUs from "./Components/ContactUs";
import Search from "./Components/Search";
import Ingredients from "./Components/Ingredients";
import MealInfo from "./Components/MealInfo";

export default function App() {
  let routers = createBrowserRouter([
    { path: "",element: <Layout />, children: [
        { index: true , element: <Home /> },
        { path: "/search", element: <Search /> },
        { path: "/categories", element: <Categories /> },
        { path: "/countries", element: <Countries /> },
        { path: "/ingredients", element: <Ingredients /> },
        { path: "/contactUs", element: <ContactUs /> },
        { path: ":id", element: <MealInfo /> },
      ]}
  ]);

  return (

  <RouterProvider router={routers}></RouterProvider>
    
  );
}
