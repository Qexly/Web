import React, {useState} from 'react';

const ReservationForm: React.FC = () => {

    const [isGoing, setIsGoing] = useState<boolean>(false);
    const [number, setNumber] = useState<number>(0);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handler');
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        name === 'isGoing' ? setIsGoing((isGoing) => !isGoing) : setNumber(() => +value);
    }

    return (
        <form>
            <label>
                Пойдут:
                <input type="checkbox" name="isGoing" checked={isGoing} onChange={onChangeHandler} />
            </label>
            <label>
                Количество гостей:
                <input type="number" name="number" value={number} onChange={onChangeHandler} />
            </label>
        </form>
    )
}

export default ReservationForm;