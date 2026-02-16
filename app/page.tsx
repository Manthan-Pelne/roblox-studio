
import HomePage from "./components/homePage";

export default function Home({ searchParams }: { searchParams: any }){
  return (
    <HomePage searchParams={searchParams}/>
  );
}
