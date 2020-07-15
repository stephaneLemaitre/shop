import React, {useState, useEffect} from 'react';
import {helpers} from './helpers'
import Accordion from "./components/acordion/accordion";

function App() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        helpers.fetchAPI(data => {
            const newCategories = data.categories.map(category => {
                return {
                    ...category,
                    isExpanded: false
                }
            });
            console.log(newCategories);
            setCategories(newCategories)
        })
    }, []);

    return (
        <div className="container">
            <Accordion data={categories}/>
        </div>
    );
}

export default App;
