import React from 'react';
import {StudentsType, TopCarsType} from "./App";

type NewComponentType = {
    // students: Array<StudentsType>
    students: StudentsType[]
    topCars: TopCarsType[]
}

export const NewComponent = (props: NewComponentType) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            <table>
                {topCars.map((el) => {
                    return (
                        <div>
                            <tr>
                                <th>{el.manufacturer}</th>
                            </tr>
                            <tr>
                                <td>{el.model}</td>
                            </tr>
                        </div>
                    )
                })}
            </table>
            <ul>
                {props.students.map((el) => {
                    return (
                        <li key={el.id}>
                            {el.name}, age: {el.age}
                        </li>
                    )
                })}
            </ul>
        </div>

    );
};

export default NewComponent;