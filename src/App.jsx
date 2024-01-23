import { Outlet } from 'react-router-dom';

import "./App.css";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Project />
      <Outlet />
      <Footer />
    </div>
  );
}
