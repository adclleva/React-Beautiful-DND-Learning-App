import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4"; // this is to create the unique id's
import { render } from "@testing-library/react";

function JobComponent({job, index}) {
    console.log("job index", index)

    // Note draggableId has to be strings
    // the index tells us where we are draggin from and dropping to
    // we have the useSelect to be none because we don't want to drag the color everywhere
    // padding for styling improvement
    // margin so the components wont touch each other
    // for the blackground color we use the snapshot.isDragging 
    // https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md

    // we may not need the key={job.id} for Draggable
    return (
        <Draggable draggableId={job.id} index={index}>
            {(provided, snapshot) => {
                return (
                    <div 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            userSelect: 'none',
                            padding: 16,
                            margin: '0 0 8ppx 0',
                            minHeight: '50px',
                            backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                            color: 'white',
                            ...provided.draggableProps.style
                        }}
                    >
                        {job.content}
                    </div>
                )
            }

            }
        </Draggable>        
    )
}

export default JobComponent