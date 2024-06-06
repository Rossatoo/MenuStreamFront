import { useEffect, useState } from "react";
import { useProductDataMutate } from "../../hooks/useProductDataMutate";
import * as productData_1 from "../../interface/productData";

import "./Update-Modal.css"

interface InputProps{
    label: string,
    value: any,
    updateValue(value: any):void
}

interface ModalProps{
    closeModal(): void;
    product: productData_1.productData;
}

const Input = ({label, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value ={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}


export function UpdateModal ({ closeModal, product }: ModalProps & {product: productData_1.productData }){
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);
    const [availability, setAvailability] = useState(product.availability);
    const [image, setImage] = useState(product.image);

    const { mutate, isSuccess } = useProductDataMutate(true);

    const submit = () => {
        const updateProductData: productData_1.productData = {
            ...product,
            name,
            description,
            price,
            category,
            availability,
            image
        };
        mutate(updateProductData);
    }

    useEffect(() => {
        if (!isSuccess) return;
        closeModal();
    }, [isSuccess]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
            <button className="close-button" onClick={closeModal}>X</button>
                <h2>Update item</h2>
                <form className="input-container">
                    <Input label="Name" value={name} updateValue={setName} />
                    <Input label="Description" value={description} updateValue={setDescription} />
                    <Input label="Price" value={price} updateValue={setPrice} />
                    <Input label="Category" value={category} updateValue={setCategory} />
                    <Input label="Availability" value={availability} updateValue={setAvailability} />
                    <Input label="Image" value={image} updateValue={setImage} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    Update
                </button>
            </div>
        </div>
    );
}
