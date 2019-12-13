import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4"; // this is to create the unique id's
import { render } from "@testing-library/react";
import CategoryComponent from "./CategoryComponent"

function CategoriesComponent({columns}) {

    const displayColumns = Object.entries(columns).map(([columnId, column], index) => {
            return (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                    key={columnId}
                >
                    <h2>{column.name}</h2>
                    <div style={{ margin: 8}}>
                        <CategoryComponent 
                            columnId={columnId}
                            column={column}
                            index={index}
                        />
                    </div>
                 </div>
            )
        })
    

    return (
        <div>
            {displayColumns}
        </div>
       
    )
}

export default CategoriesComponent