import React, { useState } from "react";
import RowDetails from "./RowDetails";

interface TableRowProps {
  items: any[];
  showRowDetails?: (id: number) => Promise<any>;
  detailsVisibleText: string;
  detailsInvisibleText: string;
  id: number;
}

const TableRow: React.FC<TableRowProps> = ({
  items,
  showRowDetails,
  id,
  detailsVisibleText,
  detailsInvisibleText,
}) => {
  const [details, setDetails] = useState<any>(null);
  const [detailsVisible, toggleDetails] = useState<boolean>(false);

  const handleButtonClick = () => {
    toggleDetails(!detailsVisible);
    if (showRowDetails) {
      showRowDetails(id)
        .then((res: any) => {
          setDetails(res);
        })
        .catch((error: any) => {
          console.error("Error fetching details:", error);
        });
    }
  };

  return (
    <>
      <tr
        className={`${
          detailsVisible ? "border-0" : "border-gray-600 border-b"
        } bg-gray-700   hover:bg-gray-600 text-center`}
      >
        {items.map((item, index) => (
          <td key={index} className="px-6 py-4 whitespace-nowrap text-sm">
            {item}
          </td>
        ))}
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <button
            className="text-white bg-indigo-500 hover:bg-indigo-600 border border-indigo-500 hover:border-transparent rounded-full px-4 py-2 transition-colors duration-300"
            onClick={handleButtonClick}
          >
            {detailsVisible ? detailsInvisibleText : detailsVisibleText}
          </button>
        </td>
      </tr>
      {/* Add a new row for details */}
      {details && (
        <tr className="bg-gray-700">
          <td colSpan={items.length + 1}>
            {/* Render details data */}
            {detailsVisible &&
              details.length > 1 &&
              details.map((item: any, index: number) => (
                <RowDetails
                  title={item.title}
                  body={item.body}
                  tags={item.tags}
                  key={item.id}
                />
              ))}
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
