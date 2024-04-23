import { IShelter } from "../../Interfaces/shelter";
import httpClient from "../api/http.Client";

export async function getShelter(): Promise<IShelter> {
    try{
        const response = await httpClient.get('/shelter')
        return response.data

    } catch(error) {
        console.error('Erro ao buscar abrio', error)
        throw error
    }
}