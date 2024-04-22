import { IPet } from "../../Interfaces/pets";
import httpClient from "../api/http.Client";

export async function getPetById(id: string): Promise<IPet> {
    try {
        const response = await httpClient.get(`/pet/${id}`)
        return response.data

    } catch (error) {
        console.error('erro ao buscar pet por id')
        throw error
    }
}