import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
function App() {
  //we cannot update UI content , because component function deos not execute again
  //UI update can be handled by state management
  //all functions start with use are react hooks, they are technicall regular functions only  be called inside react component function or other react hooks
  //must be called top level of component function, not inside conditions or loops, or nested functions

  console.log("App component executed");
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
