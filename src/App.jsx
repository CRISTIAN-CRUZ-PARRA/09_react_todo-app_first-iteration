import Header from './components/Header';
import Subheader from './components/Subheader';
import ListContainer from './components/ListContainer';
import ListHeader from './components/ListHeader';
import ItemsList from './components/ItemsList';

function App() {
  const todos = [
    {
      title: "Buy groceries",
      description: "Purchase milk, eggs, and bread from the supermarket.",
      status: "PENDING"
    },
    {
      title: "Finish project report",
      description: "Complete the final draft of the quarterly report.",
      status: "IN PROGRESS"
    },
    {
      title: "Call plumber",
      description: "Fix the leaking sink in the kitchen.",
      status: "PENDING"
    },
    {
      title: "Schedule dentist appointment",
      description: "Book a check-up for next week.",
      status: "DONE"
    },
    {
      title: "Workout",
      description: "Go to the gym for an hour of cardio and strength training.",
      status: "PENDING"
    }
  ];

  return (
    <div className="app">
      <Header />
      <Subheader subtitle="Todo List Manager" />
      <ListContainer>
        <ListHeader content="Todo List" />
        <ItemsList itemsList={todos} />
      </ListContainer>
    </div>
  );
}

export default App;
