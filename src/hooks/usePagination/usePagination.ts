import { useEffect , useState } from "react"

type PaginationInfo = {
    totalPage : number,
    currentPage : number
}

export default function usePagination<T>( datas : T [] , maxPerPage : number  ){

    const [ paginatedDatas , setPaginatedDatas ] = useState<T[]>([]);
    const [ paginationInfo , setPaginationInfo ] = useState<PaginationInfo>({
        totalPage :  0, 
        currentPage : 1
    });
    
    const calculateTotalPage = () => {
        setPaginationInfo( prevPaginationInfo => {
            return { ...prevPaginationInfo , totalPage : Math.ceil(datas.length/maxPerPage) }
        });
    }

    const calculatePaginatedDatas = () => {
        setPaginatedDatas(() => {
            const start = ( paginationInfo.currentPage - 1) *  maxPerPage;
            return datas.slice( start , start + maxPerPage );
        });
    }

    const goToPage = ( pageNumber : number ) => {
        setPaginationInfo( prevPaginationInfo => {
            const nextPage = pageNumber < 0 
                             ? prevPaginationInfo.currentPage + pageNumber
                             : pageNumber;
            return nextPage > prevPaginationInfo.totalPage || nextPage <= 0 
                  ? { ...prevPaginationInfo }
                  : { ...prevPaginationInfo , currentPage : nextPage }
        });
    }

    const goNext = () => {
        goToPage( paginationInfo.currentPage + 1 );
    }

    const goPrev = () => {
        goToPage( paginationInfo.currentPage -1 );
    }

    useEffect(() => {
        calculateTotalPage();
        calculatePaginatedDatas();
    },[]);

    useEffect(() => {
        calculatePaginatedDatas();
    },[paginationInfo.currentPage,paginationInfo.totalPage]);

    return {
        datas : paginatedDatas,
        totalPage : paginationInfo.totalPage,
        currentPage : paginationInfo.currentPage,
        next : goNext,
        prev : goPrev,
        go : goToPage
    }
}