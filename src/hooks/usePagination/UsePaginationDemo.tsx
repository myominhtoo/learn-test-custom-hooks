import usePagination from "./usePagination"

export default function UsePaginationDemo(){

    const numberPagination = usePagination<number>( [1,2,3] ,1 );

    return (
        <>
         <h1>Testing Use Pagination </h1>
         <ul>
           {numberPagination.datas.map((data,idx) => {
            return <li key={idx}>{data}</li>
           })}
         </ul>
         <button onClick={numberPagination.prev}>Prev</button>
         <span>{numberPagination.currentPage}</span>
         <button onClick={numberPagination.next}>Next</button>
        </>
    )
}