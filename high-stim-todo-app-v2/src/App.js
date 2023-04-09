import "./App.css";
import TaskBank from "./components/TaskBank/TaskBank";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag } from "react-dnd";

//fonts
<script
  src="https://kit.fontawesome.com/894172578c.js"
  crossorigin="anonymous"
></script>;

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <TaskBank></TaskBank>
      </div>
    </DndProvider>
  );
}

export default App;
