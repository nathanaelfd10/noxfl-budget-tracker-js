import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card.js"
import Expenses from "./components/Expenses"

function App() {

  const expenses = [
    {
      title: "Caramel Macchiato",
      amount: 2.5,
      date: new Date(2023, 8, 27),
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
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
