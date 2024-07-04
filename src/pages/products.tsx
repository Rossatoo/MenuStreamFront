import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importe useNavigate
import { useProductData } from "../hooks/useProductData";
import { productData } from "../interface/productData";
import { Navbar } from "../components/navbar/navbar";
import { CreateModal } from "../components/Create-Modal/Create-Modal";
import { UpdateModal } from "../components/Update-Modal/Update-Modal";
import { DeleteModal } from "../components/Delete-Modal/Delete-Modal";
import { Card } from "../components/card";
import './products.css';
import { useCart } from "../context/CartContext";

function Products() { // Corrigir o nome do componente para seguir a convenção PascalCase
    const { data } = useProductData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<productData | null>(null);
    const { addToCart } = useCart(); // Use o contexto do carrinho
    const navigate = useNavigate(); // Use o histórico de navegação

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev);
    };

    const handleOpenUpdateModal = (product: productData) => {
        setSelectedProduct(product);
        setIsUpdateModalOpen(true);
    };

    const handleCloseUpdateModal = () => {
        setIsUpdateModalOpen(false);
        setSelectedProduct(null);
    };

    const handleOpenDeleteModal = (product: productData) => {
        setSelectedProduct(product);
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setSelectedProduct(null);
    };

    const handleAddToCart = (product: productData) => {
        addToCart(product); // Adiciona o produto ao carrinho
        navigate('/cart'); // Redireciona para a página do carrinho
    };

    return (
        <>
            <div className="container-principal">
                <center><h1>MenuStream</h1></center>
                <div className="text-center mt-4">
                    <button onClick={handleOpenModal} className="btn-novo">Cadastrar Novo</button>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        {data?.map(product => (
                            <div key={product.id} className="col-sm-12 col-md-4 mb-4">
                                <div className="card-wrapper">
                                    <Card
                                        price={product.price}
                                        name={product.name}
                                        image={product.image}
                                        description={product.description}
                                        onAddToCart={() => handleAddToCart(product)} // Adiciona o produto ao carrinho
                                    />
                                    <div className="d-flex justify-content-between mt-2 gap-3">
                                        <button onClick={() => handleOpenUpdateModal(product)} className="btn-warning">Update</button>
                                        <button onClick={() => handleOpenDeleteModal(product)} className="btn btn-outline-dark">Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
                {isUpdateModalOpen && selectedProduct && (
                    <UpdateModal
                        closeModal={handleCloseUpdateModal}
                        product={selectedProduct}
                    />
                )}
                {isDeleteModalOpen && selectedProduct && (
                    <DeleteModal
                        closeModal={handleCloseDeleteModal}
                        product={selectedProduct}
                    />
                )}
            </div>
        </>
    );
}

export default Products;
