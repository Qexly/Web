interface IAdvantage {
    img: string;
    text: string;
}

interface ICard {
    fraction: string;
    displacement: string;
    img: string; 
}

interface IAboutItem {
    img: string;
    text: string;
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
        displacement: '17 кг',
        img: require('Assets/imgs/cads/3-5.jpg')
    },
    {
        fraction: '5-7 мм',
        displacement: '17 кг',
        img: require('Assets/imgs/cads/5-7.jpg')
    },
    {
        fraction: '8-12 мм',
        displacement: '17 кг',
        img: require('Assets/imgs/cads/8-12.jpg')
    }
];

const ABOUT_ITEMS: IAboutItem[] = [
    {
        text: 'Для щепы используется только свежеспиленная отборная древесина без гнили из экологически чистых лесов Северо-Запада.',
        img: require('Assets/imgs/about/tree.png')
    },
    {
        text: 'Мы строго контролируем производственный процесс, поэтому вся наша продукция соответствует наивысшим стандартам качества.',
        img: require('Assets/imgs/about/quality.png')
    },
    {
        text: 'При производстве не используются никакие добавки или химические обработки.',
        img: require('Assets/imgs/about/ecology.png')
    },
    {
        text: 'Ольховая щепа подходит для копчения мяса, рыбы, птицы, сыров, сала и колбас.',
        img: require('Assets/imgs/about/magic.png')
    }
];

export {
    FULL_HEIGHT_CLASS,
    ADVANTAGES,
    CARDS,
    ABOUT_ITEMS,
    type IAdvantage,
    type ICard,
    type IAboutItem
}

