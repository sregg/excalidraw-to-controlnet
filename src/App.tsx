import "./styles.css";
import { Excalidraw } from "@excalidraw/excalidraw";

export default function App() {
  const onGenerate = () => {};
  return (
    <div className="App">
      <div style={{ height: "500px" }}>
        <Excalidraw />
        <button onClick={onGenerate}>Generate</button>
      </div>
    </div>
  );
}
