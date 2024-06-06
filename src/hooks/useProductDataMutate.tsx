import axios, { AxiosPromise } from "axios";
import { productData } from "../interface/productData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';
const postData = async (data : productData): AxiosPromise<any> => {
    const response = axios.post(API_URL+'/products', data);
    return response;
}

const updateData = async (data: productData): AxiosPromise<any> => {
    const response = await axios.put('${API_URL}/products/${data.id}', data);
    return response;
}

const deleteProduct = async (productId: number) => {
    const response = await axios.delete(`${API_URL}/products/${productId}`);
    return response.data;
  };

export function useProductDataMutate(isUpdate: boolean = false){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['Product-data']})
        }
    });
   return mutate;
}

export function useDeleteProductMutate() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (productId: number) => {
            const response = await axios.delete(`${API_URL}/products/${productId}`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['Product-data'] });
        }
    });
}

