import React, { useState, useEffect } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "auto",
      marginTop: "50px",
      background: "rgb(222, 188, 231)",
      width: "800px",
      height:"500px",
      borderRadius: "20px"
    }}>
      <div style={{ padding: "50px 100px", color: "rgb(0, 0, 0)", fontSize: "32px", textAlign: "center" }}>
        <h2 style={{fontFamily: "monsterrat"}}>
          <b>"{quote}"</b>
        </h2>
        <div style={{ width: "680px", height: "1.5px", background: "white" }}></div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "30px 0px"
        }}>
          <p style={{ color: "white", fontSize: "25px", fontWeight: "500" }}><b>- {author}</b></p>
          <div style={{ display: "flex", gap: "40px" }}>
          </div>
        </div>
      </div>
      <button onClick={fetchQuote} style={{ fontSize:"20px",padding: "15px", marginTop: "10px", marginBottom:"30px",cursor: "pointer" }}>
        New Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;
