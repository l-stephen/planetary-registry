import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {

    const [planets, setPlanets] = useState([])
    const [search, setSearch] = useState("")
    console.log(search)

    useEffect(()=> {
        fetch("http://localhost:8085/planets")
        .then(res => res.json())
        .then((planet) => setPlanets(planet))
    }, [])

    function updatePlanets(planet){
        setPlanets([...planets, planet])
    }

    const displayPlanets = planets.filter((planet)=> {
        return (
            planet.name.toLowerCase().includes(search.toLowerCase()) || 
            planet.climate.toLowerCase().includes(search.toLowerCase()) ||
            planet.terrain.toLowerCase().includes(search.toLowerCase()) ||
            planet.population.toLowerCase().includes(search.toLowerCase())
        )
    })

    return(
        <div className="registry">
            <Search search = {search} setSearch = {setSearch}/>
            <div className="content">
                <PlanetList planets = {displayPlanets}/>
                <NewPlanetForm updatePlanets={updatePlanets}/>
            </div>
        </div>
    )
}

export default Registry;