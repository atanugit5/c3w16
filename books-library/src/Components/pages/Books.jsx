import React from "react";
import { useEffect, useState } from "react";

import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 add required style here
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    try {
      fetch("http://localhost:8080/books")
        .then((res) => res.json())
        .then((json) => setData(json));
    } catch (err) {
      console.log("error:", err);
    }
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
        }*/}
        {data.map((el, index) => {
          return <BookCard key={el.id} {...el} />;
        })}
      </Grid>
    </>
  );
};
export default Books;
