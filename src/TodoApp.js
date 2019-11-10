import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import TodoList from "./TodoList"

export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "pet dog", completed: false },
    { id: 2, task: "watch tv", completed: true },
    { id: 3, task: "play a game", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos)
  return (
    <>
      <CssBaseline />
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa"
        }}
        elavation={0}
      >
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color="inherit">TODOS WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <TodoList todos={todos} />
      </Paper>
    </>
  );
}
