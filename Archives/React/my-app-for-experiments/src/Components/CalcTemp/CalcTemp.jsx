import React from 'react';
import s from './CalcTemp.module.css'

function BoilingVerdict(props) {
    if (props.temp >= 100) {
        return <p className={props.className}> Вода кипит </p>
    } else {
        return <p>Вода не кипит</p>
    }
}

function convertTemp(scale, temp) {
    const temperature = parseFloat(temp) ? temp: NaN;
    if (isNaN(temperature)) return '';
    if (scale == 'f') {
        return Math.round((5/9) * (temperature - 32));
    }
    if (scale == 'c') {
        return Math.round((9/5) * temperature + 32);
    }
}

const scaleNames = {
    c: 'Цельсия',
    f: 'Фаренгейта'
};

class TemperatureInput extends React.Component {
    constructor(props) { //scale 
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler(e) {
        this.props.onChange(e.target.value);
    }
    render() {
        return (
            <fieldset>
                <legend>
                    Введите темпрературу в градусах {scaleNames[this.props.scale]}
                </legend>
                <input 
                    type="number" 
                    value={this.props.value} 
                    onChange={this.onChangeHandler} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};

        this.celsiusChangeHandler = this.celsiusChangeHandler.bind(this);
        this.fahrenheitChangeHandler = this.fahrenheitChangeHandler.bind(this);
    }

    celsiusChangeHandler(temperature) {
        this.setState((state, props) => ({scale: 'c', temperature}));
    }

    fahrenheitChangeHandler(temperature) {
        this.setState((state, props) => ({scale: 'f', temperature}));
    }

    render() {
        const scale = this.state.scale; 
        const temperature = this.state.temperature;
        const celsius = scale == 'f' ? convertTemp(scale, temperature) : temperature;
        const fahrenheit = scale == 'c' ? convertTemp(scale, temperature) : temperature; 

        return (
            <div>
                <TemperatureInput scale="c" value={celsius} onChange={this.celsiusChangeHandler} />
                <TemperatureInput scale="f" value={fahrenheit} onChange={this.fahrenheitChangeHandler} />
                <BoilingVerdict className={s.s} temp={celsius} />
            </div>
        )
    }
}

export default Calculator;