import React, { useState } from 'react';
import './style.css';

const MaterialTable = () => {
  const [materials, setMaterials] = useState([]);
  const [newMaterial, setNewMaterial] = useState({
    material: '',
    quantity: '',
    availability: '',
    status: '',
    dateOrder: '',
  });

  const handleEditStatus = (index, newStatus) => {
    const updatedMaterials = [...materials];
    updatedMaterials[index].status = newStatus;
    setMaterials(updatedMaterials);
  };

  const handleAddMaterial = () => {
    setMaterials([...materials, newMaterial]);
    setNewMaterial({
      material: '',
      quantity: '',
      availability: '',
      status: '',
      dateOrder: '',
    });
  };

  const handleSortByQuantity = () => {
    const sortedMaterials = [...materials].sort((a, b) => a.quantity - b.quantity);
    setMaterials(sortedMaterials);
  };

  return (
    <div>
      <h2>Material List</h2>
      <button onClick={handleSortByQuantity}>Sort by Quantity</button>
      <h2>Add New Material</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Material"
                value={newMaterial.material}
                onChange={(e) =>
                  setNewMaterial({ ...newMaterial, material: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Quantity"
                value={newMaterial.quantity}
                onChange={(e) =>
                  setNewMaterial({ ...newMaterial, quantity: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Availability"
                value={newMaterial.availability}
                onChange={(e) =>
                  setNewMaterial({ ...newMaterial, availability: e.target.value })
                }
              />
            </td>
            <td>
              <select
                value={newMaterial.status}
                onChange={(e) =>
                  setNewMaterial({ ...newMaterial, status: e.target.value })
                }
              >
                <option value="shipping">Shipping</option>
                <option value="delivered">Delivered</option>
              </select>
            </td>
            <td>
              <input
                type="text"
                placeholder="Date Order"
                value={newMaterial.dateOrder}
                onChange={(e) =>
                  setNewMaterial({ ...newMaterial, dateOrder: e.target.value })
                }
              />
            </td>
            <td>
              <button onClick={handleAddMaterial}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Material</th>
            <th>Quantity</th>
            <th>Availability</th>
            <th>Status</th>
            <th>Date Order</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material, index) => (
            <tr key={index}>
              <td>{material.material}</td>
              <td>{material.quantity}</td>
              <td>{material.availability}</td>
              <td>
                <select
                  value={material.status}
                  onChange={(e) => handleEditStatus(index, e.target.value)}
                >
                  <option value="shipping">Shipping</option>
                  <option value="delivered">Delivered</option>
                </select>
              </td>
              <td>{material.dateOrder}</td>
              <td>
                <button
                  onClick={() => {
                    const updatedMaterials = materials.filter(
                      (m, i) => i !== index
                    );
                    setMaterials(updatedMaterials);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialTable;
