export function TableRowMobile() {
  return (
    <div className={"body--3 w-full border-t border-t-black py-2.5"}>
      Creative Direction
    </div>
  );
}

export function TableRowsMobile() {
  return (
    <div className={"mobile-only body--3 col-span-4 mb-24"}>
      <TableRowMobile />
      <TableRowMobile />
      <TableRowMobile />
      <TableRowMobile />
      <TableRowMobile />
    </div>
  );
}
