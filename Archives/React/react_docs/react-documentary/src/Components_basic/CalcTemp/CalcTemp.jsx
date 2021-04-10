import React from 'react';
import s from './CalcTemp.module.css';

const scaleNames = {
    c: 'Цельсия',
    f: 'Фаренгейта',
}

class Caclulator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 0,
            scale: 'c',
        }
    }

    onChangeTemp(scale, e) {
        
        this.setState((state, props) => ({
            temperature: e.target.value,
            scale, 
        }));
    }

    render() {
        let celsius, fahrenheit; 
        if (this.state.scale === 'c') {
             celsius = this.state.temperature;
             fahrenheit = 9 / 5 * celsius + 32;  
        } else {
            fahrenheit = this.state.temperature;
            celsius = 5 / 9 * (fahrenheit - 32);
        }

        return (
            <div>
                <TemperatureInput scale="c" value={celsius} onChange={this.onChangeTemp.bind(this)} />
                <TemperatureInput scale="f" value={fahrenheit} onChange={this.onChangeTemp.bind(this)}/>
                <BoilingVerdict temp={celsius} />
            </div>
        )
    }
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    tempOnChangeHandler(e) {
        this.props.onChange(this.props.scale, e);
    }

    render() {
        return (
            <form>
                <fieldset>
                    <legend>Введите температуру в градусах {scaleNames[this.props.scale]}</legend>
                    <input type='number' value={this.props.value} onChange={this.tempOnChangeHandler.bind(this)}/>
                </fieldset>
            </form>
        )
    }
}

function BoilingVerdict(props) {
    if (props.temp >= 100) {
        return (
            <div>
                <p className={s.s}>Вода кипит</p>
            </div>
        )
    } else {
        return <p> Вода не кипит </p>
    }
}

export default Caclulator;