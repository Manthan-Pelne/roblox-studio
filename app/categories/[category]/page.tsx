// Adjust path as needed
import { getCategories, getCategoryBySlug, getProductsByCategory } from "@/app/actions/category";
import { notFound } from "next/navigation";
import CategoryDetailsPage from "./components/category-page";

interface PageProps {
  params: Promise<{ category: string }>;
}

const CategoryPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const categoryName = resolvedParams.category;

  // Fetch real data from MongoDB
  const products = await getProductsByCategory(categoryName);
  const category = await getCategoryBySlug(categoryName)

  // Optional: If no products exist for a category name that doesn't exist
  if (!products || products.length === 0) {
     // You can either show an empty state or 404
     // return <CategoryDetailsPage initialProducts={[]} categoryName={categoryName} />;
  }

  return (
    <CategoryDetailsPage
     categoryDetails={category}
      initialProducts={products} 
      categoryName={categoryName} 
    />
  );
};

export default CategoryPage;