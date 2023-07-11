import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [planets, setPlanets] = useState([])
    const [filterText, setFilterText] = useState("")
    //GET REQUEST
    useEffect(() => {
        fetch("http://localhost:8085/planets")
        .then(response => response.json())
        .then(data => setPlanets(data))
    },[])

    console.log(planets)

    function addNewPlanet(newPlanet){
        setPlanets([...planets, newPlanet])
    }

    function onFilterText(text){
        setFilterText(text)
    }
    console.log(filterText)

    const displayPlanets = planets.filter(planet => {
        return (
            planet.name.toLowerCase().includes(filterText.toLowerCase())
            || planet.climate.toLowerCase().includes(filterText.toLowerCase())
            || planet.terrain.toLowerCase().includes(filterText.toLowerCase())
            || planet.population.toLowerCase().includes(filterText.toLowerCase())
        )
    })

    return(
        <div className="registry">
            <Search onFilterText = {onFilterText}/>
            <div className="content">
                <PlanetList planets = {displayPlanets}/>
                <NewPlanetForm addNewPlanet = {addNewPlanet} />
            </div>
        </div>
    )
}

export default Registry;