export function TableHeader({ number, title, description }) {
  return (
    <div
      className={
        "col-span-4 w-full border-t border-t-black pt-2.5 text-left md:col-span-3 md:border-none md:pt-0"
      }
    >
      <h2 className={"mobile-only heading--2 mb-10"}>{number}</h2>
      <h3 className={"heading--2 mb-5"}>{title}</h3>
      <p className={"body--3 mb-6"}>{description}</p>
    </div>
  );
}
