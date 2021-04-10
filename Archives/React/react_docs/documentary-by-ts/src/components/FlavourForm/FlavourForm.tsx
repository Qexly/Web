import React, {useState} from 'react';

const FlavourForm: React.FC = () => {

    const [value, setValue] = useState<string>('lime');

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(() => e.target.value);
    }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        alert('Ваш любимый вкус: ' + value);
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <select value={value} onChange={onChangeHandler}>
                <option value="grapefruit">Грейпфрут</option>
                <option value="lime">Лайм</option>
                <option value="coconut">Кокос</option>
                <option value="mango">Манго</option>
            </select>
            <button type="submit">Отправить</button>
        </form>
    )
}

export default FlavourForm;