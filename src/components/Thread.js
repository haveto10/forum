import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PostsList from "./PostsList";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Thread(props) {
  const [threads, setThreads] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClickList = () => {
    setOpen(!open);
  };

  useEffect(() => {
    fetch("http://localhost:8080/thread/getallthread")
      .then((res) => res.json())
      .then((result) => {
        setThreads(result);
      });
  }, []);

  const buttonHandle = (thread) => {
    console.log(thread);
    props.onChangeThreadId(thread);
  };

  return (
    <Container>
      {threads.map((thread) => (
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          key={thread.id}
          className={classes.root}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => buttonHandle(thread)}
          >
            <Link to="../newpost" style={{ textDecoration: 'none' }}>
              Add new post to {thread.name}
            </Link>
          </Button>
          <ListItem button onClick={handleClickList}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={thread.name} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <PostsList thread_id={thread.id} />
              </ListItem>
            </List>
          </Collapse>
        </List>
      ))}
    </Container>
  );
}
