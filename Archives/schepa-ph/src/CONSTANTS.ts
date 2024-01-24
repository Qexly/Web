interface IAdvantage {
    getImg: Function;
    text: string;
}

interface ICard {
    fraction: string;
    displacement: string;
    getImg: Function; 
}

interface IAboutItem {
    getImg: Function;
    text: string;
}

interface INavItem {
    title: string;
    href: string;
}

interface IPhotos {
    getImg: Function
}

const PHONE = '+7 (921) 069-43-44';
const MAIL = 'vozr35@mail.ru';

const FULL_HEIGHT_CLASS = 'fullHeight';

const ADVANTAGES: IAdvantage[] = [
    {
        getImg: () => require('Assets/imgs/advanteges/tree.png'),
        text: 'Отборная древесина из лесов Северо-запада'
    },
    {
        getImg: () => require('Assets/imgs/advanteges/ecology.png'),
        text: 'Экологически чистый продукт без пыли и примесей'
    },
    {
        getImg: () => require('Assets/imgs/advanteges/warm.png'),
        text: 'Качественная сушка'
    },
    {
        getImg: () => require('Assets/imgs/advanteges/factory.png'),
        text: 'Контроль процесса производства на всех этапах'
    },
    {
        getImg: () => require('Assets/imgs/advanteges/price.png'),
        text: 'Приятные цены'
    }
];

const CARDS: ICard[] = [
    {
        fraction: '3-5 мм', 
        displacement: '90 л',
        getImg: () => require('Assets/imgs/cads/3-5.jpg')
    },
    {
        fraction: '5-7 мм',
        displacement: '90 л',
        getImg: () => require('Assets/imgs/cads/5-7.jpg')
    },
    {
        fraction: '8-12 мм',
        displacement: '90 л',
        getImg: () => require('Assets/imgs/cads/8-12.jpg')
    }
];

const PHOTOS: IPhotos[] = [
    {
        getImg: () => require('Assets/imgs/photos/1.jpg')
    },
    {
        getImg: () => require('Assets/imgs/photos/2.jpg')
    },
    {
        getImg: () => require('Assets/imgs/photos/3.jpg')
    },
    {
        getImg: () => require('Assets/imgs/photos/4.jpg')
    }
];

const ABOUT_ITEMS: IAboutItem[] = [
    {
        text: 'Для нашей щепы используется только свежеспиленная отборная древесина без гнили из экологически чистых лесов Северо-Запада.',
        getImg: () => require('Assets/imgs/about/tree.png')
    },
    {
        text: 'Мы строго контролируем производственный процесс, поэтому вся наша продукция соответствует наивысшим стандартам качества.',
        getImg: () => require('Assets/imgs/about/quality.png')
    },
    {
        text: 'При производстве не используются добавки или химические обработки.',
        getImg: () => require('Assets/imgs/about/ecology.png')
    },
    {
        text: 'Ольховая щепа подходит для копчения мяса, рыбы, птицы, сыров, сала и колбас.',
        getImg: () => require('Assets/imgs/about/magic.png')
    }
];

const NAV_ITEMS: INavItem[] = [
    {
        title: 'Главная',
        href: '/'
    },
    {
        title: 'Фото',
        href: '/photos'
    }
];

export {
    PHONE,
    MAIL,
    FULL_HEIGHT_CLASS,
    ADVANTAGES,
    CARDS,
    ABOUT_ITEMS,
    NAV_ITEMS,
    PHOTOS,
    type IAdvantage,
    type ICard,
    type IAboutItem,
    type INavItem,
    type IPhotos
}

