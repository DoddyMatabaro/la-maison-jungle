import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName){
    alert(`Vous vulez acheter 1 ${plantName} ? Tres bo choix `)
}
function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={()=>handleClick(name)}> 
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem;