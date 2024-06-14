import { useState } from 'react';
import './App.css';
import { useProductData } from './hooks/useProductData';
import { Card } from './components/Card/card';
import { CreateModal } from './components/Create-Modal/Create-Modal';
import { UpdateModal } from './components/Update-Modal/Update-Modal';
import { productData } from './interface/productData';
import { DeleteModal } from './components/Delete-Modal/Delete-Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/navbar/navbar';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  const { data } = useProductData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<productData | null>(null);

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

  return (
    <>
      <Navbar />
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
                  />
                  <div className="d-flex justify-content-between mt-2 gap-3" >
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

export default App;
