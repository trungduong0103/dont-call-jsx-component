import React from "react";
import "./styles.css";

function HelloComponent() {
  console.log(`${HelloComponent.name} render!`);
  return <div>Hello World</div>;
}

console.log(HelloComponent());
console.log(<HelloComponent />);

export default function App() {
  const [show, setShow] = React.useState(false);
  console.log("App render");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* {show && <HelloComponent />} */}
      {/* <button onClick={() => setShow(!show)}>Show</button> */}
      {/* {HelloComponent()} */}
    </div>
  );
}
