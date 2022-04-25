import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const nav = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: red; ;
`;
export const Navbar = () => {
  const { token } = useContext(AuthContext);

  // use token to chnage the text from Login to Logout once logged in successfully

  return (
    <>
      <nav
        style={{
          width: "600px",
          height: "50px",
          backgroundColor: "pink",
          margin: "auto",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {/* keep all the NavLinks here */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/books">Books</Link>
        {token ? (
          <Link to="/logout">Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </>
  );
};
