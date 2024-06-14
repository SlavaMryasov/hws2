import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    // const change = (event: any, value: any) => {
    //     console.log(value)
    //     if (typeof value === 'number') {
    //         setValue1(value)
    //     } else {
    //         setValue1(value[0])
    //         setValue2(value[1])
    //     }

    //     // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
    // }
    const change = (event: any, value: any) => {
        if (event.target.name === 's1') {
            setValue1(value)
        } else if (event.target.name === 's2' && value.length >= 2) {
            if (value[0] < value[1]) {
                console.log('set')
                setValue1(value[0])
                setValue2(value[1])
            } else {
                console.error('Invalid values: The first value should be less than the second value.')
            }
        } else {
            console.error('Invalid input: Expected a number or an array with at least two elements.')
        }
    }

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            // сделать так чтоб value1 изменялось // пишет студент
                            value={value1}
                            onChange={change}
                            name='s1'
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            // сделать так чтоб value1/2 изменялось // пишет студент

                            value={[value1, value2]}
                            onChange={change}
                            name='s2'
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
