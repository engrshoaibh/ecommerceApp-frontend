import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';

import { usePagination, useSortBy, useTable } from 'react-table';
function TableHOC(columns, data, containerClassname, heading, showPagination = false) {
    return function HOC() {
      const options = {
        columns,
        data,
        initialState: {
          pageSize: 5,
        }
      };
  
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        pageCount,
        state: { pageIndex },
        previousPage,
        canNextPage,
        canPreviousPage,
      } = useTable(options, useSortBy, usePagination);
  
      return (
        <div className={containerClassname}>
          <h2 className="text-3xl font-bold mb-4">{heading}</h2>
  
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {column.render("Header")}
                      {column.isSorted && (
                        <span className="ml-1">
                          {column.isSortedDesc ? (
                            <AiOutlineSortDescending />
                          ) : (
                            <AiOutlineSortAscending />
                          )}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200" {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
  
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap">
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
  
          {showPagination && (
            <div className="flex justify-center mt-4">
              <button
                disabled={!canPreviousPage}
                onClick={previousPage}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
              >
                Prev
              </button>
              <span>{`${pageIndex + 1} of ${pageCount}`}</span>
              <button
                disabled={!canNextPage}
                onClick={nextPage}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-2"
              >
                Next
              </button>
            </div>
          )}
        </div>
      );
    };
  }
  export default TableHOC;