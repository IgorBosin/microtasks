import React from 'react';
import {filterType, moneyType} from "./App";

type NewComponentType = {
    money: Array<moneyType>
    filtred: (curr: filterType) => void
}

const NewComponent = (props:NewComponentType) => {
    return (
        <div>
            {props.money.map((el, index) => {
                return (
                    <li key={index}>
                        {el.banknots} {el.value} {el.number}
                    </li>
                )
            })}
            <button onClick={() => props.filtred('all')}>All</button>
            <button onClick={() => props.filtred('dol')}>$</button>
            <button onClick={() => props.filtred('rub')}>RUB</button>
        </div>
    );
};

export default NewComponent;