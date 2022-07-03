
import React from 'react';
import { plantList } from '../datas/plantList'

// const plantList=[
//     'monstera',
//     'focus lyrata',
//     'pothos argente',
//     'yucca',
//     'palmier'
// ]
const listCat = [];
const listPl = [];

plantList.forEach(elt=>listCat.push(elt.category));
plantList.forEach(elt=>listPl.push(elt.name));
console.log([...new Set(listCat)]);

const ShoppingList = () => { 
    return (
        <div>
            <h3>Categories</h3>
            <ul>
            {[...new Set(listCat)].map((cat, index)=>(<li key={`${cat}-${index}`}>{ cat }</li>))}
        </ul>
        <h3>Plantes</h3>
        <ul>
            {listPl.map((plant, index)=>(<li key={`${plant}-${index}`}>{ plant.isBestSale ? <span></span>:<span></span> }</li>))}
        </ul>
        </div>
    );
}

export default ShoppingList;
