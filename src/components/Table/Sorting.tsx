// components/Sorting/Sorting.tsx

import React from "react";

interface SortingProps {
  fields: string[];
  displayFields: string[];
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

const Sorting: React.FC<SortingProps> = ({
  fields,
  displayFields,
  sortBy,
  onSortChange,
}) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="pl-2">
      <label htmlFor="sortBy" className="text-white mr-2">
        Sort by:
      </label>
      <select
        id="sortBy"
        className="bg-gray-700 text-white border-2 border-gray-600 px-3 py-1 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        value={sortBy}
        onChange={handleSortChange}
      >
        {fields.map((field: string, i: number) => (
          <option key={field} value={field}>
            {displayFields[i]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorting;
