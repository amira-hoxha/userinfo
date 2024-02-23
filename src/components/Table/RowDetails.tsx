import React from "react";
import Tag from "../tag/Tag";

export interface RowDetailsProps {
  id?: number;
  title: string;
  body: string;
  className?: string;
  tags: string[];
}

const RowDetails: React.FC<RowDetailsProps> = ({
  title,
  body,
  className,
  tags,
}) => {
  return (
    <>
      <div className={`${className} text-white `}>
        <div className="bg-slate-600 rounded-lg my-2 mx-3 p-3 ">
          <div className="text-[18px] font-semibold pb-2">{title}</div>
          <div className="text-sm">{body}</div>
          <div className="flex space-x-2 mt-2 items-center">
            <p className="text-white">Tags:</p>
            {tags.map((item, i: number) => (
              <Tag description={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RowDetails;
