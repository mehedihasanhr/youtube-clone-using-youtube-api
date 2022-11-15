const Avatar = ({ src, alt }: { src: string; alt?: string }) => {
  return (
    <img
      src={src}
      alt={alt || "avatar"}
      className="object-fit rounded-full w-full h-full"
    />
  );
};

export default Avatar;
