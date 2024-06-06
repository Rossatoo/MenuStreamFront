import axios, { AxiosPromise } from "axios";
import { productData } from "../interface/productData";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async(): AxiosPromise<productData[]> => {
    const response = axios.get(API_URL+'/products');
    return response;
}

const updateProduct = async (product: productData) => {
    const response = await axios.put(`${API_URL}/products/${product.id}`, product);
    return response.data;
}

const deleteProduct = async (productId: number) => {
    const response = await axios.delete(`${API_URL}/products/${productId}`);
    return response.data;
};

export function useProductDataMutate(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['Product-data'] });
        }
    });
}

export function useDeleteProductMutate() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['Product-data'] });
        }
    });
}

export function useProductData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['Product-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}

