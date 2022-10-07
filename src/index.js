import { useState } from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Post from "./components/Post";
import ThreadView from "./pages/ThreadView";
import './index.css'

export default function App() {
  const [currentThreadId, setCurrentThreadId] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="newpost" element={<Post threadId = {currentThreadId}/>} />
          <Route path="threadview" element={<ThreadView onChangeThreadId={(id) => setCurrentThreadId(id)}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));