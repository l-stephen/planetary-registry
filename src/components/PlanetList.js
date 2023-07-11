import React from "react"
import Planet from "./Planet"

function PlanetList({planets}) {
    console.log(planets)
    const planetlist = planets.map((planet) => {
        return <Planet key={planet.id} planet={planet}/>
    })

    // const planetlist = planets.map((planet) => {
    //     console.log(planet)
    //     return <Planet key={planet.id} name = {planet.name} rotation_period ={planet.rotation_period}/>
    // })
    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planetlist}
                {/* {
                   planets.map(planet => {
                    return <Planet key={planet.name} planet={planet}/>
                   }) 
                } */}
            </tbody>
        </table>
    );
}

export default PlanetList;