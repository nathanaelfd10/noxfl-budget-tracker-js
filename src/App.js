import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {

  const date = Date(2023, 8, 27);

  const expenses = [
    {
      title: "Caramel Macchiato",
      amount: 2.5,
      date: date,
    },
    {
      title: "Caffe Latte",
      amount: 2.5,
      date: new Date(2023, 8, 27),
    },
    {
      title: "Milk Tea",
      amount: 2.5,
      date: new Date(2023, 8, 27),
    },
    {
      title: "Thai Milk Tea",
      amount: 2.5,
      date: new Date(2023, 8, 27),
    },
    {
      title: "Long Black",
      amount: 2.5,
      date: new Date(2023, 8, 27),
    },
  ];

  return (
    <div className="App">
      {expenses.map((expense) => {
        return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>;
      })}
    </div>
  );
}

export default App;
