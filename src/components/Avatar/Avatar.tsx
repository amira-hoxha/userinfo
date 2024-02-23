import React from "react";

interface AvatarProps {
  height: string;
  width: string;
  imageUrl?: string;
}

const Avatar: React.FC<AvatarProps> = ({ height, width, imageUrl }) => {
  return (
    <img
      className="rounded-full"
      height={height}
      width={width}
      src={imageUrl}
    />
  );
};

export default Avatar;
