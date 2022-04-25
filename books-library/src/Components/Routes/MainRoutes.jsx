import react from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import { BookCard } from "../pages/BookCard";
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { SingleBook } from "../pages/SingleBook";
import { RequiredAuth } from "./RequiredAuth";

const Mainroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* keep all the routes here  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<BookCard />} />
        <Route path="/" element={<EditBookData />} />
        <Route path="/" element={<SingleBook />} />

        {/* /books/* route need to be protected */}
      </Routes>
    </>
  );
};
export default Mainroutes;
