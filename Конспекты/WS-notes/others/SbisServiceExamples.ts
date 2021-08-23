import {RecordSet} from 'Types/collection';
import {SbisService, Query, PrefetchProxy, DataSet} from 'Types/source';
import {Model, adapter} from 'Types/entity';

const NEWS_COUNT = 6;
const PRELOAD_PAGE_SIZE = 20;
const SALE_STATE_ACTIVE = 1;

interface IAboutPreloadCfg {
    uuid: string;
    config: Model;
    contactsFilter: object;
}

export interface IAboutPreloadData {
    contacts: RecordSet;
    galleryItems?: RecordSet;
    certificatesItems?: RecordSet;
    newsItems?: RecordSet;
    coursesItems?: RecordSet;
    stockItems?: RecordSet;
}

export interface IServicesPreloadCfg {
    uuid: string;
    position: string;
    catalogCategory: string;
    catalogNomenclature: string;
}

/**
 * Загружает новости заведения
 * @param {object} filter
 */
export async function getShopNewsData(filter: object): Promise<object> {
    const newsData = {
        items: null,
        hasNews: false
    };

    const dataSet = await new SbisService({
        endpoint: 'Establishment',
        binding: {
            query: 'GetEstNews'
        }
    }).query(
        new Query().where(filter).limit(NEWS_COUNT)
    );

    const result = dataSet.getAll();

    if (result.getCount()) {

        newsData.hasNews = true;
        newsData.items = result;
    }

    return newsData;
}

/**
 * Загружает данные для карусели галереи
 * @param filter
 */
export async function getGalleryData(filter: object): Promise<RecordSet> {
    const model = await import('DOCVIEW3Core/Model');
    const res = await new SbisService({
        endpoint: 'Establishment',
        model
    }).call('AdvertAttachList', filter);
    return res && res.getAll();
}

/**
 * Загружает данные для карусели курсов
 * @param EstUUID
 */
export function getShopCoursesData(EstUUID: string): Promise<RecordSet> {
    return new SbisService({
        endpoint: 'Establishment'
    }).call('GetEduCourses', {EstUUID}).then(
        (courses) => courses?.getAll()
    );
}

/**
 * Загружает данные для карусели акций
 * @param uuid
 */
export function getShopStockData(uuid: string): Promise<RecordSet> {
    return new SbisService({
        endpoint: 'Establishment'
    }).call('GetLoyaltyProgram', {uuid}).then(
        (courses) => courses?.getAll()
    );
}

/**
 * Проверяет начилие новостей у заведения
 * @param {object} filter
 */
export async function checkForNews(filter: object): Promise<boolean> {
    const res = await new SbisService({
        endpoint: 'Establishment'
    }).call('IsGroupWallEmpty', {Фильтр: Model.fromObject(filter, new adapter.Sbis())});
    return res && !res.getScalar();
}

export async function getFeedbackCounter(uuid: string): Promise<object> {
    const res = await new SbisService({
        endpoint: 'Establishment'
    }).call('GetResponseCounters', {uuid});

    return res && res.getScalar();
}

/**
 * Получение данных для каталога
 * @param {Model} record
 */
export async function getServicesData(options: IServicesPreloadCfg): object {
    const { Saby } = await import('WNCSabyGet/Shop/registryView');
    const data = await Saby.loadState(options);
    return data;
}

/**
 * Вычитка записи заведения
 * @param uuid
 * @param model
 */
export async function readShop(uuid: string, model: string | Model): Promise<Model> {
    const result = await new SbisService({
        keyProperty: '@Заведение',
        endpoint: 'Establishment',
        model
    }).call('Прочитать', {
        uuid
    });

    return result.getRow();
}

/**
 * Получение контактов
 * @param uuid
 * @param filter
 * @param model
 */
export async function getContactsData(filter: object, model?: string | Model): Promise<RecordSet> {
    const serviceConfig = {
        endpoint: 'Groups',
        binding: {
            query: 'GetContacts'
        }
    };

    if (model) {
        serviceConfig.model = model;
    }

    const dataSet = await new SbisService(serviceConfig).query(new Query().where(filter));

    return dataSet && dataSet.getAll();
}

/**
 * Получение контактов заведения
 * @param filter
 */
export async function getShopContacts(filter: object): Promise<RecordSet> {
    const contacts = await import('SabyGetCore/contacts');
    const result = await getContactsData(filter, contacts.Model);
    return result;
}

export async function getBonusRecord(filter: object): Promise<Model> {
    const result = await new SbisService({
        endpoint: 'BonusCard'
    }).call('GetCardInfoByEst', filter);
    return result.getRow();
}

/**
 * Получение списка абонементов и сертификатов
 * @param uuid
 */
export async function getCertificatesData(uuid: string): Promise<RecordSet> {
    const dataSet = await new SbisService({
        endpoint: 'ShowcasePublic',
        binding: {
            query: 'GetCSNomenclatureList'
        }
    }).query(new Query().where({
        EstDomain: uuid,
        PublicationSaleState: SALE_STATE_ACTIVE
    }));

    return dataSet && dataSet.getAll();
}

/**
 * Получение данных по заказам пользователя в заведении
 */
export async function getCustomerOrderData(qrUuid: string): Promise<RecordSet> {
    const dataSet = await new SbisService({
        endpoint: {
            contract: 'PrestoAPI',
            address: '/qr/service/'
        }
    }).call(
        'SaleList',
        {
            identifier: qrUuid
        }
    );

    const result = dataSet.getAll();
    return result.getCount() ? result : null;
}

/**
 * Чтение группы
 * @param group
 */
export async function readGroup(group: string): Promise<Model> {
    const data = await new SbisService({
        endpoint: 'Group',
        binding: {
            read: 'Read'
        }
    }).read(group);
    return data.getRow();
}

/**
 * Получение списка мастеров
 * @param idSpp
 */
export async function getMastersListData(IdSpp: number): Promise<RecordSet> {

    const masters = await import('SabyGetCore/masters');

    const result = await new SbisService({
        endpoint: 'ShowcasePublic',
        binding: {
            query: 'GetEmployees'
        },
        model: masters.Model
    }).query(new Query().where(
        {
            IdSpp
        }
    ).limit(PRELOAD_PAGE_SIZE));

    return result.getAll();
}

/**
 * Получение списка филиалов сети
 * @param filter
 */
export async function getChainListData(filter: object): Promise<RecordSet> {
    const result = await new SbisService({
        keyProperty: '@Заведение',
        endpoint: 'Establishment',
        binding: {
            query: 'NetBranchesList'
        },
        model: 'ChainModel'
    }).query(new Query().where(filter).limit(PRELOAD_PAGE_SIZE));

    return result.getAll();
}

/**
 * Получение данных покупки
 * @param saleId
 * @param account
 */
export async function getSaleData(Sale: string, Account: number): Promise<Model> {
    const result = (await new SbisService({
        endpoint: 'ShowcaseOrder'
    }).call(
        'ReadBySaleAndAccount',
        {
            Sale,
            Account
        }
    )).getRow();

    return result;
}

/**
 * Предзагрузка данных для для основной вкладки карточки заведения
 */
export async function getShopAboutData(params: IAboutPreloadCfg): Promise<IAboutPreloadData> {
    const [contacts, newsData, galleryItems, certificatesItems, coursesItems, stockItems] = await Promise.all([
        getShopContacts(params.contactsFilter),
        params.config.get('News') ? getShopNewsData({uuid: params.uuid}) : null,
        params.config.get('Gallery') ? getGalleryData({uuid: params.uuid}) : null,
        params.config.get('Certs') ? getCertificatesData(params.uuid) : null,
        params.config.get('Courses') ? getShopCoursesData(params.uuid) : null,
        params.config.get('Stock') ? getShopStockData(params.uuid) : null
    ]);

    return {
        contacts,
        galleryItems,
        certificatesItems,
        coursesItems,
        stockItems,
        newsItems: newsData?.items
    };
}

/**
 * Запрос данных об отзывах
 * @param group
 */
export async function getFeedbackData(group: string): Promise<PrefetchProxy> {
    const feedbackUtils = await import('MessageFeedback/utils');
    const result = await feedbackUtils.Helpers.getPrefetchViewConfig({
        group,
        my: false
    });
    return new PrefetchProxy({
        target: result.source,
        data: {
            query: result.items
        }
    });
}
