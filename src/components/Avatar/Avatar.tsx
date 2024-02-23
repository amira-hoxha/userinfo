import React from "react";

interface AvatarProps {
  height: string;
  width: string;
  imageUrl?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  height,
  width,
  imageUrl,
  className,
}) => {
  return (
    <img
      className={`${className} rounded-full m-auto`}
      src={imageUrl}
      height={height}
      width={width}
    />
  );
};

export default Avatar;
