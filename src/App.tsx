import nodeLogo from "./assets/node.svg";
import { useState } from "react";
import Update from "@/components/update";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./page/Header";
// import test from "./page/test";
import Dashboard from "./page/Dashboard";
import Password from "./page/Password";
import Index from "./page/Index";

import "./App.scss";
import User from "./page/User";
import Rest from "./page/Rest";
import Id from "./page/Id";

console.log(
  "[App.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:courses" element={<Id />} />
          <Route path="/user" element={<User />} />
          <Route path="/password" element={<Password />}>
            <Route path="reset" element={<Rest />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
