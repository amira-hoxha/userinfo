interface TagProps {
  description: string;
}

const Tag = (props: TagProps) => {
  return (
    <div className="bg-gray-800 text-white px-2 py-1 mr-1 text-xs rounded-2xl text-center flex">
      {props.description}
    </div>
  );
};

export default Tag;
