import axios, { AxiosResponse } from 'axios'
import useSWR from 'swr'

export function useCocktail() {
    const fetcher = (url: string) =>
        axios(url).then((res: AxiosResponse<CocktailDrinks>) => {
            return res.data
        });

    const { data, error, isValidating } = useSWR<CocktailDrinks, Error>(
        '/api/cocktail',
        fetcher,
        {
            revalidateOnFocus: false
        });
    // console.log("api useCocktail");
    // console.log(data?.drinks);
    return { data, error, isValidating }
}