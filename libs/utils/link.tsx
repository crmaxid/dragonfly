export const Link = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children?: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex text-stone-500 transition duration-200 hover:scale-110 hover:text-[#F86800]"
    >
      {children}
    </a>
  );
};
