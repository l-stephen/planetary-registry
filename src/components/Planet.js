import React from "react"

function Planet({planet}) {
    console.log(planet)
    // const {name, climate, population, terrain} = planet
    return(
        // <tr>
        //     <td>{name}</td>
        //     <td>{climate}</td>
        //     <td>{terrain}</td>
        //     <td>{population}</td>
        // </tr>
        <tr>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.terrain}</td>
            <td>{planet.population}</td>
        </tr>
    );
}

export default Planet;