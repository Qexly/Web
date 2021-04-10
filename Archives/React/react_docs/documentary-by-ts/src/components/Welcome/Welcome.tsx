interface IWelcomeProps {
    name: string,
}

const Welcome: React.FC<IWelcomeProps> = (props) => {
    let { name } = props;
    return (
        <h1>Привет, {name}</h1>
    )
}

export default Welcome;