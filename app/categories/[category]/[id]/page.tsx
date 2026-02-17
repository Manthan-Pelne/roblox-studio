import { getSingleCard } from "@/app/actions/cardAction";
import ProductDetailsPage from "./components/product-details";

export default async function Page({ params }: { params: Promise<{ category: string, id: string }> }) {

  const resolvedParams = await params;
  
  // 2. Decode the ID (handles %20 and other special characters)
  const decodedId = decodeURIComponent(resolvedParams.id);
 console.log("decodedId",decodedId)
  // 3. Fetch data using the decoded ID
  const data = await getSingleCard(decodedId);
  return (
    <ProductDetailsPage
      initialProduct={data?.template} 
      relatedProducts={data?.relatedCards} 
    />
  );
}