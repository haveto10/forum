import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  Container,
  Paper,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
      },
  },
}));

export default function Post( {threadId} ) {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let thread;

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClick = (e) => {
    e.preventDefault();
    thread = threadId;
    console.log(threadId);
    console.log(thread);
    const post = { title, body, image, category, thread };
    console.log(post);
    fetch("http://localhost:8080/post/addpost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      console.log("New post added");
    });
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Add Post</u>
        </h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="title"
            label="title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="body"
            label="body"
            variant="outlined"
            fullWidth
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <TextField
            id="image"
            label="image"
            variant="outlined"
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Category
            </InputLabel>
            <Select
              labelId="category"
              id="category"
              fullWidth
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={category}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Suggestion"}>Suggestion</MenuItem>
              <MenuItem value={"Question"}>Question</MenuItem>
              <MenuItem value={"Clarification"}>Clarification</MenuItem>
            </Select>
          </FormControl>
          <br />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </Paper>

  {/*     <Paper elevation={3} style={paperStyle}>
        {posts.map((post) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={post.id}
          >
            Id:{post.id}
            <br />
            First Name:{post.title}
            <br />
            thread:{post.category}
            <br />
            {console.log(post)}
          </Paper>
        ))}
      </Paper> */}

    </Container>
  );
}
