import React, {useState} from 'react';

interface IBoilingVerdict {
    celsius: number,
}

const BoilingVerdict: React.FC<IBoilingVerdict> = (props) => {
    const {celsius} = props;
    if (celsius >= 100) {
        return <p style={{color: 'red'}}>Вода кипит</p>
    } else {
        return <p style={{color: 'blue'}}>Вода не кипит</p>
    }
}

///
type scaleNamesFields = 'c' | 'f';

const scaleNames = {
    c: 'Цельсия',
    f: 'Фаренгейта'
};

interface ITemperatureInputProps {
    scale: scaleNamesFields,
    onChange(e: React.ChangeEvent<HTMLInputElement>, scale: scaleNamesFields): void,
    value: number,
}

const TemperatureInput: React.FC<ITemperatureInputProps> = (props) => {

    const {scale, onChange, value} = props;

    return (
        <fieldset>
            <legend>Введите температуру в градусах {scaleNames[scale]}</legend>
            <input type="number" value={value} onChange={(e) => onChange(e, scale)}/>
        </fieldset>
    )
}
///
const Calculator: React.FC = () => {

    const [value, setValue] = useState<number>(0);
    const [scale, setScale] = useState<string>('c');

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, scale: scaleNamesFields) => {
        setValue(() => +e.target.value);
        setScale(() => scale);
    }

    const fahrenheit = scale === 'f' ? value : +((value * 9 / 5) + 32).toFixed(2);
    const celsius = scale === 'c' ? value : +((value - 32) * 5 / 9).toFixed(2);

    return (
        <>
            <TemperatureInput scale="c" onChange={onChangeHandler} value={celsius} />
            <TemperatureInput scale="f" onChange={onChangeHandler} value={fahrenheit} />
            <BoilingVerdict celsius={999} />
        </>
    )
}

export default Calculator;