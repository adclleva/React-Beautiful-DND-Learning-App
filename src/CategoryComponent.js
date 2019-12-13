import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4"; // this is to create the unique id's
import { render } from "@testing-library/react";
import JobComponent from "./JobComponent"

function CategoriesComponent({categoryId, category, index}) {

    // this will iterate through the columns
    // we need the key to be passed down through the component
    const jobs = category.jobs.map((job, index) => {
        return (
                <JobComponent 
                    job={job}
                    index={index}
                    key={job.id}
                />
        )
    })

    // Note droppableId has to be strings
    // you always need a key for the Droppable
    return (
        <Droppable droppableId={categoryId} key={categoryId}>
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
                        {jobs}
                        {provided.placeholder}
                    </div>
                )
                }

            }
            {/** we need aplaceholder */}
        
        </Droppable> 
    )
}

export default CategoriesComponent