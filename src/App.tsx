import React, {useState} from 'react';
import NewComponent from "./NewComponent";

export type filterType = 'all' | 'rub' | 'dol'

export type moneyType = {
    banknots: string
    value: number
    number: string
}

const App = () => {

    const [money, setMoney] = useState<moneyType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<filterType>('all')

    let filterMoney = [...money]
    if (filter === 'rub') filterMoney = money.filter(filt => filt.banknots === 'RUBLS')
    if (filter === 'dol') filterMoney = money.filter(filt => filt.banknots === 'Dollars')

    const filtredBanknots = (curr: filterType) => {
        setFilter(curr)
    }

    return (
        <NewComponent money={filterMoney} filtred={filtredBanknots}/>
    );
};

export default App;