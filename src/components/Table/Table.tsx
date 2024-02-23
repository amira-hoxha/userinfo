import "./table.css";

import React, { useState } from "react";
import TableRow from "./TableRow";
import Pagination from "./Pagination";
import Sorting from "./Sorting";
import Filtering from "./Filter";
import { filterData } from "../../utils/filteringUtil.js";
import { sortData } from "../../utils/sortingUtil.js";

interface TableColumn {
  field: string;
  header: string;
}

interface TableProps {
  data: any[];
  columns: TableColumn[];
  showRowDetails?: (id: number) => any;
  detailsVisibleText?: string;
  detailsInvisibleText?: string;
}

const Table: React.FC<TableProps> = ({
  data,
  columns,
  showRowDetails,
  detailsVisibleText = "Show details",
  detailsInvisibleText = "Hide details",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState(columns[0].field);
  const [filterBy, setFilterBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSortChange = (sortBy: string) => {
    setSortBy(sortBy);
  };

  const handleFilterChange = (filterBy: string) => {
    setFilterBy(filterBy);
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  // Filter and sort the data
  const filteredData = filterData(data, filterBy, searchTerm);
  const sortedData = sortData(filteredData, sortBy);

  const currentItemPage = sortedData.slice(firstItemIndex, lastItemIndex);

  return (
    <div className="overflow-x-auto text-white mx-4 table-container">
      <Sorting
        fields={columns.map((column) => column.field)}
        displayFields={columns.map((column) => column.header)}
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />
      <Filtering
        fields={columns.map((column) => column.field)}
        displayFields={columns.map((column) => column.header)}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
      />
      <div className="shadow-lg rounded-lg overflow-x-auto table-responsive">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border-b-2 border-gray-600 text-center" // Align header content to center
                >
                  {column.header}
                </th>
              ))}
              <th className="px-4 py-2 border-b-2 border-gray-600"></th>
            </tr>
          </thead>
          <tbody className="table-responsive">
            {currentItemPage.map((item: any, i: number) => (
              <TableRow
                key={i}
                items={columns.map((column) => item[column.field])}
                showRowDetails={showRowDetails} // Pass fetchData as a prop
                id={item.id}
                detailsVisibleText={detailsVisibleText}
                detailsInvisibleText={detailsInvisibleText}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Table;
