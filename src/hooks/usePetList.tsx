import { useQuery } from "@tanstack/react-query"
import { GetPetResponse, GetPetsRequest } from "../Interfaces/pets"
import { getPets } from "../services/pets/get.Pets"

interface IUsePetList {
    data?: GetPetResponse
    isLoading: boolean
}

export function usePetList(params: GetPetsRequest): IUsePetList {

    const { data, isLoading } = useQuery({
        queryKey: ['get-pets', params],
        queryFn: () => getPets(params),
       
    })

    return { data, isLoading }

}