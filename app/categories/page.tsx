"use server"

import { getCategories } from "../actions/category";
import Categories from "./components/categories";

const CategoriesPage = async() => {
  const allCategories = await getCategories() 

  return (
   <Categories allCategories = {allCategories} />
  );
};

export default CategoriesPage;