import { Drink } from '@/types/drink';
import axios, { AxiosResponse } from 'axios'
import useSWR from 'swr'

export function useFetchDrinks() {
    const fetcher = (url: string) =>
        axios(url).then((res: AxiosResponse<Array<Drink>>) => {
            console.log("url");
            console.log(url);
            return res.data
        });

    const { data, error, isValidating } = useSWR<Array<Drink>, Error>(
        '/api/drinks',
        fetcher,
        {
            revalidateOnFocus: false
        });
    // console.log("api useCocktail");
    // console.log(data?.drinks);
    return { data, error, isValidating }
}

export async function useCreateDrinks(request: string) {
    console.log(JSON.parse(request));
    await axios
        .post("/api/drinks", JSON.parse(request))
        .then((res: AxiosResponse<number>) => {
            return res.data
        })
        .catch((error) => {
            return error;
        });

}