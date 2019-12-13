import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4"; // this is to create the unique id's
import CategoriesComponent from "./CategoriesComponent"

const jobsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" }
];

const categoriesFromBackend = {
  [uuid()]: {
    name: "Requested",
    items: jobsFromBackend
  },
  [uuid()]: {
    name: "To do",
    items: []
  },
  [uuid()]: {
    name: "In Progress",
    items: []
  },
  [uuid()]: {
    name: "Done",
    items: []
  }
};

function App() {
  const [categories, setColumns] = useState(categoriesFromBackend);
  
  const onDragEnd = (result => {
      console.log(result)
    })
    
  
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext onDragEnd={onDragEnd}> {/* this will have our children in it*/}
        {/** we use entries becuase we use the key of the columns from the backend and the values from the font end 
         * each droppable will have it's own key and that has to be unique as well
        */} 

          <CategoriesComponent categories={categories}/>
        </DragDropContext>

    </div>
  );
}

export default App;
