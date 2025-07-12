import { Routes, Route } from "react-router-dom";
import Layout from "./app/layout";
import { TextEditor } from "./components/TextEditor";

function App() {
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<div>Wellcome to Awesome TDList</div>} />
        <Route path="/editor" element={<TextEditor />} />
    </Routes>
    </Layout>


  );
}

export default App;
