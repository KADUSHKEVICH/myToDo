import './App.css';
import {Button, IconButton, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
    return (
         <div className="App">
             <div className="todo-wrapper">
                 <div className="todo-heading">
                     <h3 className="todo-title">
                         Toto title
                     </h3>
                     <p className="todo-task-counter">
                         We have 0 tasks
                     </p>
                 </div>
                 <div className="todo-content">
                     <TextField placeholder="Write you task" variant="outlined" size="small"/>
                     <Button variant="contained" size="medium">Add task</Button>
                 </div>
                 <ul className="todo-list">
                     <li className="todo-task">
                         <div className="todo-task-content">
                             <span>1.</span>
                             <p className="todo-task-text">Text of task</p>
                         </div>
                         <div className="todo-task-edit">
                             <IconButton aria-label="delete">
                                 <DeleteIcon />
                             </IconButton>
                         </div>
                     </li>
                 </ul>
             </div>
         </div>
    );
}

export default App;
