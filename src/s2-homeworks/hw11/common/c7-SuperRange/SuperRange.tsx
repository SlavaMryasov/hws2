import React from 'react'
import { Slider, SliderProps } from '@mui/material'

type PropsType = {
    value: string
    name: string
    onChange: () => void
}

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '200px'
            }}
            value={props.value} name={props.name} onChange={props.onChange} color='secondary'// отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
