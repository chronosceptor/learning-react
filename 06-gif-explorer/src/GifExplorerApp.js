import React, { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExplorerApp = () => {

    const [categories, setCategories] = useState(['Jojo','Berserk','DBZ']);

    // const handleAdd = () => {
    //     setCategories( [...categories, "Ranma"] );
    // }


    return (
        <>
            <h2>GifExplorerApp</h2>

            <AddCategory/>

            <hr />


            <ol>
                {
                    categories.map( category => {
                        return <li key={category}>{category}</li>
                    } )
                }
            </ol>

        </>
    );
};

export default GifExplorerApp;
