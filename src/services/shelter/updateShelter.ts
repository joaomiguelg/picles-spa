import {IUpdateShelterRequest, IUpdateShelterResponse } from "../../Interfaces/shelter";
import httpClient from "../api/http.Client";

export async function updateShelter(params: IUpdateShelterRequest): Promise<IUpdateShelterResponse> {

    try {

        const response = await httpClient.put<IUpdateShelterResponse>('/shelter', params)
        return response.data

    } catch (error) {
        console.error('Erro ao atualizar abrigo:', error)
        throw error
    }

}