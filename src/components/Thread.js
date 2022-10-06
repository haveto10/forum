import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Thread() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [threads, setThreads] = useState([]);
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    const thread = { id, name };
    console.log(thread);
    fetch("http://localhost:8080/thread/addthread", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(thread),
    }).then(() => {
      console.log("New Thread added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/thread/getallthread")
      .then((res) => res.json())
      .then((result) => {
        setThreads(result);
      });
  }, []);
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Add Thread</u>
        </h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Thread First Name"
            variant="outlined"
            fullWidth
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Thread Last Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </Paper>
      <h1>Threads</h1>

      <Paper elevation={3} style={paperStyle}>
        {threads.map((thread) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={thread.id}
          >
            Id:{thread.id}
            <br />
            First Name:{thread.name}
            <br />
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
