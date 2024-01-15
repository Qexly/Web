interface IAdvantage {
    img: string;
    text: string;
}

interface ICard {
    fraction: string;
    displacement: string;
    img: string; 
}

const FULL_HEIGHT_CLASS = 'fullHeight';

const ADVANTAGES: IAdvantage[] = [
    {
        img: require('Assets/imgs/advanteges/tree.png'),
        text: 'Отборная древесина из лесов Северо-запада'
    },
    {
        img: require('Assets/imgs/advanteges/ecology.png'),
        text: 'Экологически чистый продукт без пыли и примесей'
    },
    {
        img: require('Assets/imgs/advanteges/warm.png'),
        text: 'Качественная сушка'
    },
    {
        img: require('Assets/imgs/advanteges/factory.png'),
        text: 'Контроль процесса производства на всех этапах'
    },
    {
        img: require('Assets/imgs/advanteges/price.png'),
        text: 'Приятные цены'
    }
];

const CARDS: ICard[] = [
    {
        fraction: '3-5 мм', 
        displacement: '17 литров',
        img: require('Assets/imgs/cads/3-5.jpg')
    },
    {
        fraction: '5-7 мм',
        displacement: '17 литров',
        img: require('Assets/imgs/cads/5-7.jpg')
    },
    {
        fraction: '8-12 мм',
        displacement: '17 литров',
        img: require('Assets/imgs/cads/8-12.jpg')
    }
];

export {
    FULL_HEIGHT_CLASS,
    ADVANTAGES,
    CARDS,
    type IAdvantage,
    type ICard
}

