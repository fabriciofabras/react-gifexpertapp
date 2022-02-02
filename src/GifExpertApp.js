import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //const categories = ['One punch', 'Samurai', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One punch']);

    /*    const handleAdd=()=>{
           // hunter
   
   
           setCategories([...categories,'Hunter']);
       } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr />

            <button >Agregar</button>
            <ol>
                {categories.map(category =>
                    <GifGrid key={category} category={category} />
                )}
            </ol>
        </>
    )
}