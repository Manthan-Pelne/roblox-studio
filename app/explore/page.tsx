import { GetHomePageData } from "../actions/cardAction";
import ExploreClient from "./components/exporeClient";


export default async function ExplorePage({ searchParams }: { searchParams: Promise<{ page?: string }>}) {
    // Get the page number from the URL (defaults to 1)
const params = await searchParams;
// 1. Convert to number, but fallback to 1 if it's undefined or not a number
  const rawPage = parseInt(params.page || '1');
  const page = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

  // 2. Fetch data (passing a guaranteed valid number)
  const data = await GetHomePageData(page);
  return <ExploreClient initialProducts={data.cards}
  currentPage={page} 
  totalPages={data.totalPages}
  />;
}