import { Suspense } from "react";
import { SearchBar } from "../ui/SearchBar";
import VolunteerContainer from "../ui/VolunteerContainer";



export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    district?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const district = searchParams?.district || 'all';
  
  return (
    <div className="flex h-screen p-20">
      <main className="flex-1">
        <SearchBar />
        <Suspense key={query+currentPage} fallback={<div>Loading...</div>}>
        <VolunteerContainer query={query}  currentPage={currentPage} district={district}/>
        </Suspense>
      </main>
    </div>
  );
}
