import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Components/Home";
import { Categories } from "./Components/Categories";
import { Countries } from "./Components/Countries";
import ContactUs from "./Components/ContactUs";
import Search from "./Components/Search";
import Ingredients from "./Components/Ingredients";
import MealInfo from "./Components/MealInfo";
import IngredientMeals from "./Components/IngredientMeals/IngredientMeals.jsx";
import CategoryMeals from "./Components/categoryMeals/categoryMeals .jsx";

export default function App() {
  let routers = createBrowserRouter([
    { path: "",element: <Layout />, children: [
        { index: true , element: <Home /> },
        { path: "/search", element: <Search /> },
        { path: "/categories", element: <Categories /> },
        { path: "/categories/:id", element: <CategoryMeals/> },
        { path: "/countries", element: <Countries /> },
        { path: "/ingredients", element: <Ingredients /> },
        { path: "/ingredients/:id", element: <IngredientMeals /> },
        { path: "/contactUs", element: <ContactUs /> },
        { path: "/recipe/:id", element: <MealInfo /> },
      ]}
  ]);

  return (

  <RouterProvider router={routers}></RouterProvider>
    
  );
}
