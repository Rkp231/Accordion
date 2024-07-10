import { useState } from "react";
import Question from "./components/Question";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600">
        <div className="p-4">
          <Question />
        </div>
      </div>
    </>
  );
}

export default App;
