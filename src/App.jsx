import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from "./components/MiApi";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100px",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <h1 style={{ textAlign: "center", color: "white" }}>
          Personajes de Harry Potter
        </h1>
      </div>
      <MiApi></MiApi>
    </>
  );
}

export default App;
