import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "./Accordion";
const accordin = [
  { id: 1, title: "Hello World", content: "How you guys are doing" },
  { id: 2, title: "Hello World", content: "How you guys are doing" },
  { id: 3, title: "Hello World", content: "How you guys are doing" },
  { id: 5, title: "Hello World", content: "How you guys are doing" },
  { id: 4, title: "Hello World", content: "How you guys are doing" },
];
const App = () => {
  const [index, setIndex] = useState(null);
  const handleClick = (id) => {
    setIndex(index === id ? null : id);
  };
  return (
    <>
      <div className="container">
        {accordin.map((data) => (
          <Accordion
            title={data.title}
            content={data.content}
            key={data.id}
            onClick={() => handleClick(data.id)}
            open={index === data.id}
          />
        ))}
      </div>
    </>
  );
};

const Button = styled.button`
  font-size: 2rem;
`;

export default App;
