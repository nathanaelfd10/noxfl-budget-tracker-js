import "./ExpenseDate";

function ExpenseDate(props) {
  const year = props.date.toLocaleString("en-us", { year: "numeric" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div>
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
