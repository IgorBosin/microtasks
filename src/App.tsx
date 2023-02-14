import React, {useState} from 'react';
import Button from "./components/Button";

type moneyType = {
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

        function button1Foo(name: string, age: number) {
            console.log(name, age)
        }

        function button2Foo(name: string) {
            console.log(name)
        }

        function stupidButton() {
            console.log('stupid button')
        }

        let moneyFilter: moneyType[] = [...money]

        let [filt, setFilt] = useState('all')
        if (filt === 'Dollars') {
            moneyFilter = money.filter(el => el.banknots === 'Dollars')
        }
        if (filt === 'RUBLS') {
            moneyFilter = money.filter(el => el.banknots === 'RUBLS')
        }

        function changeBanknots(curr:string) {
            setFilt(filt=curr)
        }

        return (
            <div>
                {moneyFilter.map(el => {
                    return (
                        <div>
                            {el.value} {el.banknots}
                        </div>
                    )
                })}
                <Button name={'chanel1'} callBack={() => button1Foo('igor', 28)}/>
                <Button name={'chanel2'} callBack={() => button2Foo('masha')}/>
                <Button name={'stupid button'} callBack={stupidButton}/>
                <Button name={'dollar'} callBack={()=>changeBanknots('Dollars')}/>
                <Button name={'rub'} callBack={()=>changeBanknots('RUBLS')}/>
                <Button name={'all'} callBack={()=>changeBanknots('all')}/>
            </div>
        );
    }
;

export default App;