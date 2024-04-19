import { GetPetResponse, GetPetsRequest } from '../../Interfaces/pets'
import httpClient from '../api/http.Client'

export async function getPets(params?: GetPetsRequest): Promise<GetPetResponse> {

    try{
        await new Promise((resolve) => setTimeout(resolve, 2000))
        const response = await httpClient.get('/pet', { params })

        return response.data

    } catch(error) {
        console.log('erro ao buscar pets', error)
        throw error
    }

    

}