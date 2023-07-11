import React, {useState} from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({addNewPlanet}) {
    const [name, setName] = useState("")
    const [climate, setClimate] = useState("")
    const [terrain, setTerrain] = useState("")
    const [population, setPopulation] = useState("")


    function handleSubmit(event){
        event.preventDefault()

        const planetData = {
            name: name,
            climate: climate,
            terrain: terrain,
            population: population
        }

        fetch("http://localhost:8085/planets", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(planetData)
        })
        .then((res) => res.json())
        .then(data => {
            addNewPlanet(data)
            event.target.elements.name.value = ""
        })


        //Dynamic Solution
        // const formElement = event.target

        // const planetData = {
        //     id: uuid(),
        //     name: formElement["name"].value,
        //     climate: formElement["climate"].value,
        //     terrain: formElement["terrain"].value,
        //     population: formElement["population"].value
        // }
        // //POST REQUEST
        // fetch("http://localhost:8085/planets",{
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(planetData)
        // })
        // .then(response => response.json())
        // .then(data => addNewPlanet(data))

        // formElement.reset()

    }

    return(
        <form onSubmit ={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" name="climate" placeholder="Climate" value={climate} onChange={(e)=> setClimate(e.target.value)} />
            <input type="text" name="terrain" placeholder="Terrain" value={terrain} onChange={(e) => setTerrain(e.target.value)}/>
            <input type="text" name="population" placeholder="Population" value={population} onChange={(e) => setPopulation(e.target.value )}/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;