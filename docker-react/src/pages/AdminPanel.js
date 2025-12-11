import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/adminpanel.css";

const API_URL = "http://localhost:8082/api/products";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    category: "",
    price: "",
    stock: "",
    image_url: "",
    description: "", 
  });
  const [editing, setEditing] = useState(false);

  const fetchProducts = () => {
    axios.get(API_URL)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const payload = { ...form };

  try {
    let response;

    if (editing && form.id) {
      response = await axios.put(`${API_URL}/${form.id}`, payload);
      setProducts(prev =>
        prev.map(p => (p.id === form.id ? response.data : p))
      );
      alert("Product updated successfully!");
    } else {
      response = await axios.post(API_URL, payload);
      setProducts(prev => [...prev, response.data]);
      alert("Product added successfully!");
    }

    resetForm();
  } catch (err) {
    console.error("Failed to add/update product:", err);
    alert(
      err.response?.data?.message ||
      "Failed to add/update product. Check console for details."
    );
  }
};


  const resetForm = () => {
    setForm({ id: null, name: "", category: "", price: "", stock: "", image_url: "", description: "" });
    setEditing(false);
  };

  const editProduct = (product) => {
    setForm({ ...product });
    setEditing(true);
  };

  const deleteProduct = async (id) => {
  if (!window.confirm("Are you sure you want to delete this product?")) return;

  try {
    await axios.delete(`${API_URL}/${id}`);
    setProducts((prev) => prev.filter((p) => p.id !== id));
    alert("Product deleted successfully!");
  } catch (err) {
    console.error("Failed to delete product:", err);

    alert(
      err.response?.data?.message ||
      "Failed to delete product. Check console for details."
    );
  }
};



  return (
    <div className="admin-panel">
  
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
        <input name="price" type="number" step="0.01" placeholder="Price" value={form.price} onChange={handleChange} required />
        <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} required />
        <input name="image_url" placeholder="Image filename (e.g., SalmonDelight.png)" value={form.image_url} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <button type="submit">{editing ? "Update" : "Add"} Product</button>
        {editing && <button type="button" onClick={resetForm}>Cancel</button>}
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Image</th>
            <th>Description</th> {/* new column */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 && (
            <tr>
              <td colSpan="7">No products found</td>
            </tr>
          )}
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>₱{parseFloat(p.price || 0).toFixed(2)}</td>
              <td>{p.stock}</td>
              <td>
                <img src={p.image_full_url || "https://via.placeholder.com/50"} alt={p.name} width="50" />
              </td>
              <td>{p.description || "-"}</td> {/* description displayed */}
              <td>
                <button onClick={() => editProduct(p)}>Edit</button>
                <button onClick={() => deleteProduct(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
