import React from "react"

function Planet({planet}) {
    //const {name, climate, terrain, population} = planet
    return(
        <tr>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.terrain}</td>
            <td>{planet.population}</td>
        </tr>
    );
}

export default Planet;