import { Suspense } from "react";
import { SearchBar } from "../ui/SearchBar";
import VolunteerContainer from "../ui/VolunteerContainer";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"




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
        <Pagination>
          <PaginationPrevious>
            <PaginationLink href={`?query=${query}&page=${currentPage - 1}&district=${district}`}>Previous</PaginationLink>
          </PaginationPrevious>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href={`?query=${query}&page=1&district=${district}`}>1</PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
            <PaginationItem>
              <PaginationLink href={`?query=${query}&page=${currentPage}&district=${district}`}>{currentPage}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`?query=${query}&page=${currentPage + 1}&district=${district}`}>{currentPage + 1}</PaginationLink>
            </PaginationItem>
          </PaginationContent>
          <PaginationNext>
            <PaginationLink href={`?query=${query}&page=${currentPage + 1}&district=${district}`}>Next</PaginationLink>
          </PaginationNext>
        </Pagination>
      </main>
    </div>
  );
}
