import React from "react";

interface FilteringProps {
  fields: string[];
  displayFields: string[];
  onFilterChange: (filterBy: string) => void;
  onSearch: (searchTerm: string) => void;
}

const Filtering: React.FC<FilteringProps> = ({
  fields,
  displayFields,
  onFilterChange,
  onSearch,
}) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="py-4 flex items-center">
      <select
        className="bg-gray-700 text-white px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-gray-300 mr-2"
        onChange={handleFilterChange}
      >
        <option value="">Select Field to Filter</option>
        {fields.map((field: string, i: number) => (
          <option key={field} value={field}>
            {displayFields[i]}
          </option>
        ))}
      </select>
      <input
        className="text-white px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        placeholder="Search by selected filter"
        type="text"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Filtering;
