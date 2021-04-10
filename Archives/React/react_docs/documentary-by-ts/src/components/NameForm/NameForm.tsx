import React, {useState} from 'react';

const NameForm: React.FC = () => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        console.log(value);
        
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        console.log(e);
        alert('Отправленное имя: ' + value);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type='text' value={value} onChange={handleChange} />
            </label>
        </form>
    )
}

export default NameForm;