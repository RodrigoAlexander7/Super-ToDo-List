import { Routes, Route } from "react-router-dom";
import Layout from "./app/layout";
import { TextEditor } from "./components/TextEditor";
import { Timer } from "./components/Timer";

function App() {
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<div>Wellcome to Awesome TDList</div>} />
        <Route path="/editor" element={<TextEditor />} />
        <Route path="/timer" element={<Timer startTime={12}/>} />
    </Routes>
    </Layout>


  );
}

export default App;
