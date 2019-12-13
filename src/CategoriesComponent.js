import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4"; // this is to create the unique id's
import { render } from "@testing-library/react";
import CategoryComponent from "./CategoryComponent"

function CategoriesComponent({categories}) {

    // we always use a key whenever we do a map

    const displayCategories = Object.entries(categories).map(([categoryId, category], index) => { 
        // you can iterate through each object 
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
            return (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                    key={categoryId}
                >
                    <h2>{category.name}</h2>
                    <div style={{ margin: 8}}>
                        <CategoryComponent 
                            categoryId={categoryId}
                            category={category}
                            index={index}
                        />
                    </div>
                 </div>
            )
        })
    

    return (
        <div>
            {displayCategories}
        </div>
       
    )
}

export default CategoriesComponent