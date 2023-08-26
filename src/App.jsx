import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Home } from "./Components/Home/Home";
import { Categories } from "./Components/Categories/Categories";
import { Countries } from "./Components/Countries/Countries";
import ContactUs from "./Components/ContactUs/ContactUs";
import Search from "./Components/Search/Search";
import Ingredients from "./Components/Ingredients/Ingredients";
import MealInfo from "./Components/MealInfo/MealInfo";
import IngredientMeals from "./Components/IngredientMeals/IngredientMeals.jsx";
import CategoryMeals from "./Components/categoryMeals/categoryMeals .jsx";
import CountryMeals from "./Components/CountryMeals/CountryMeals.jsx";

export default function App() {
  let routers = createBrowserRouter([
    { path: "",element: <Layout />, children: [
        { index: true , element: <Home /> },
        { path: "/search", element: <Search /> },
        { path: "/categories", element: <Categories /> },
        { path: "/categories/:id", element: <CategoryMeals/> },
        { path: "/countries", element: <Countries /> },
        { path: "/countries/:id", element: <CountryMeals /> },
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
