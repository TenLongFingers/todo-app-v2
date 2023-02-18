import "./App.css";
import TaskBank from "./components/TaskBank/TaskBank";
import TaskCard from "./components/TaskCard/TaskCard";
<script
  src="https://kit.fontawesome.com/894172578c.js"
  crossorigin="anonymous"
></script>;

function App() {
  return (
    <div className="App">
      <TaskCard></TaskCard>
      <TaskBank></TaskBank>
    </div>
  );
}

export default App;
