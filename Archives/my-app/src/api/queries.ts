import axios, {AxiosResponse, AxiosRequestConfig} from "axios";

const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://asos2.p.rapidapi.com/products/v2/list',
    params: {
        store: 'US',
        offset: '0',
        categoryId: '4209',
        limit: '48',
        country: 'US',
        sort: 'freshness',
        currency: 'USD',
        sizeSchema: 'US',
        lang: 'en-US'
    },
    headers: {
        'X-RapidAPI-Key': 'af845de72bmshfd8fdcdc39438cdp189d88jsna3b5fd9ecb27',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};

export const fetchPosts = async (): Promise<AxiosResponse> => {
    const response = await axios.request(options);
    return response;
}