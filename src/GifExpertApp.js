import React, {useState} from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['Dragon Ball']);
   
    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories = {setCategories} />

            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = {category}
                            category = {category}
                        />
                    ))
                }
            </ol>
            
        </>
    )
}


export default GifExpertApp
