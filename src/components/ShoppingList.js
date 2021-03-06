
import React from 'react';
// import CareScale from './CareScale'
import PlantItem from './PlantItem';
import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';


const listCat = [];
const listPl = [];
plantList.forEach(elt=>listCat.push(elt.category));
plantList.forEach(elt=>listPl.push(elt.name));

const ShoppingList = () => { 
    return (
        <div>
        
            <ul>
                    {[...new Set(listCat)].map((cat, index)=>(<li key={`${cat}-${index}`}>{ cat }</li>))}
             </ul>
          <ul className='lmj-plant-list'>
             {/* {plantList.map((plant)=>(<li key={`${plant.id}`}> {plant.name} {plant.isBestSale && <span> 🔥</span> }</li>))}
                 {plantList.map((plant)=>(<li key={`${plant.id}`}> {plant.name} {plant.isBestSale && plant.category === "classique" && <span> 🔥</span> }</li>))} */}
                    {plantList.map(({id, cover, name, water, light}) => (
                        // <li key={plant.id} className='lmj-plant-item'>
                        //     {plant.isBestSale && <span>🔥</span>}
                        //     {plant.name}
                        //     <CareScale careType='water' scaleValue={plant.water} />
                        //     <CareScale careType='light' scaleValue={plant.light} />
                        // </li>
                        <PlantItem 
                                    id={id}
                                    cover={cover}
                                    name={name}
                                    water={water}
                                    light={light}
                        />

                    ))}
             </ul>
        </div>
    );
}

export default ShoppingList;
