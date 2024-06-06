import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useProductData } from './hooks/useProductData'
import { Card } from './components/Card/card'
import react from 'react';
import { CreateModal } from './components/Create-Modal/Create-Modal';
import { UpdateModal } from './components/Update-Modal/Update-Modal'
import { productData } from './interface/productData'
import { DeleteModal } from './components/Delete-Modal/Delete-Modal'


function App() {
  const { data } = useProductData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<productData | null>(null);
  

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
}

const handleOpenUpdateModal = (product: productData) => {
  setSelectedProduct(product);
  setIsUpdateModalOpen(true);
}

const handleCloseUpdateModal = () => {
  setIsUpdateModalOpen(false);
  setSelectedProduct(null);
}

const handleOpenDeleteModal = (product: productData) => {
  setSelectedProduct(product);
  setIsDeleteModalOpen(true);
}

const handleCloseDeleteModal = () => {
  setIsDeleteModalOpen(false);
  setSelectedProduct(null);
}
  
return (
  <div className="container">
    <h1>Menu</h1>
    <div className="card-grid">
      {data?.map(product => 
        <div key={product.id} className="card-container">
          <Card
            price={product.price}
            name={product.name}
            image={product.image}
            description={product.description}
          />
          <button onClick={() => handleOpenUpdateModal(product)} className="update-button">Update</button>
          <button onClick={() => handleOpenDeleteModal(product)} className="delete-button">Delete</button>
        </div>
      )}
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
    <button onClick={handleOpenModal}>Novo</button>
  </div>
)
}


export default App
