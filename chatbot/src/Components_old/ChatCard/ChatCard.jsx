import { Grid } from "@mui/material";

export default function CharCard() {
  const ChatCarddata = [
    {
      question: "Hi, What is the weather",
      answer: "Get Immediate AI Response Data",
    },
    {
      question: "Hi, What is the weather",
      answer: "Get Immediate AI Response Data",
    },
    {
      question: "Hi, What is the weather",
      answer: "Get Immediate AI Response Data",
    },
    {
      question: "Hi, What is the weather",
      answer: "Get Immediate AI Response Data",
    },
  ];

  return (
    <Grid
    container
    xs={12}
    md={4}
    lg={6}
    spacing={2}
    style={{ justifyContent: "center", display: "flex" }}
  >
    {ChatCarddata.map((item, index) => (
      <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
        <div style={{ padding: "10px", border: "1px solid gray", borderRadius: "8px", textAlign: "center" }}>
          <h1>{item.question}</h1>
          <p>{item.answer}</p>
        </div>
      </Grid>
    ))}
  </Grid>
  );
}
