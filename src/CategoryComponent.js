import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4"; // this is to create the unique id's
import { render } from "@testing-library/react";

function CategoriesComponent({columnId, column, index}) {

    return (
        <Droppable droppableId={columnId}>
            {(provided, snapshot) => {
                return (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef} 
                        style={{
                            background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                            padding: 4,
                            width: 250,
                            minHeight: 500
                        }}
                    >
                        
                    </div>
                )
                }

            }

        </Droppable> 
    )
}

export default CategoriesComponent