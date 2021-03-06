import TableCell from "./table-cell";

const TableRow = ({starship}) => {
  const {
    cargo_capacity,
    cost_in_credits,
    max_atmosphering_speed,
    name,
    vehicle_class
  } = starship


  return (
    <div className="table__row">
      <TableCell item={cargo_capacity} />
      <TableCell item={cost_in_credits} />
      <TableCell item={max_atmosphering_speed} />
      <TableCell item={name} />
    </div>
  )
};

export default TableRow;