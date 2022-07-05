import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName){
    alert(`Vous vulez acheter 1 ${plantName} ? Tres bo choix \n `)
}
function handleClick2(type,etat){
    alert(` Cette plante requiert ${type === "light" ?(etat < 2 ? "peu de soleil" : etat === 2 ? "ensoleiment modere" : "beacoup de solei") : 
    (etat < 2 ? "peu d'arrosage" : etat === 2 ? " un arrosage modere" : "un arrosage exessif") }`)
}
function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={()=>handleClick(name)}> 
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} 
                    onClick={((e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            handleClick2();
                    })}
                />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem;