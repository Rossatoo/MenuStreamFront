import { useEffect, useState } from "react";
import { useDeleteProductMutate } from "../../hooks/useProductData";
import * as productData_1 from "../../interface/productData";

import "./Delete-Modal.css"

interface ModalProps {
  closeModal: () => void;
  product: productData_1.productData;
}

export function DeleteModal({ closeModal, product }: ModalProps) {
  const { mutate, isSuccess } = useDeleteProductMutate();

  const handleDelete = () => {
    mutate(product.id);
  };

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  return (
    <div className="modal-overlay">
      <div className="principal">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete the product: <strong>{product.name}</strong>?</p>
        <div className="button-group">
          <button onClick={handleDelete} className="btn-danger">Delete</button>
          <button onClick={closeModal} className="btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
}
