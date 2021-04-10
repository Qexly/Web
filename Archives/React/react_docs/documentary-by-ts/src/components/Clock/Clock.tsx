import { clearTimeout } from 'node:timers';
import {useState, useEffect, useRef} from 'react';
import { NavLink } from 'react-router-dom';

interface IClockProps {
    startDate: Date,
}

const Clock: React.FC<IClockProps> = (props) => {
    let { startDate } = props;

    const [date, setDate] = useState<Date>(() => new Date());
    const timer = useRef<number>();

    useEffect(() => {
        tick();
        return () => {
            window.clearTimeout(timer.current);
            console.log('сброс');
        }
    }, [])

    const tick = () => {
        console.log(new Date());
        setDate(() => new Date());
        timer.current = window.setTimeout(tick, 1000);
    }

    return (
        <div>
            <h1>Привет, мир!</h1>
            <h2>Сейчас {date.toLocaleTimeString()}</h2>
            <NavLink to="/welcome"> to Welcome </ NavLink>
        </div>
    )
}

export default Clock; 