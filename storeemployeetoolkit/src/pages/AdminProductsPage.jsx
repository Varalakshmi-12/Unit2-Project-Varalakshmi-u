import { useEffect, useState } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../services/api";
import "./AdminProductsPage.css";
import Navbar from "../components/Navbar";
export default function AdminProductsPage(){

  const [products,setProducts] = useState([]);
  const [productName,setProductName] = useState("");
  const [price,setPrice] = useState("");
  const [productNumber,setProductNumber] = useState("");
  const [editingId,setEditingId] = useState(null);

  useEffect(()=>{
    const isAdmin = localStorage.getItem("isAdmin");

  if(!isAdmin){
    alert("Unauthorized access");
    window.location.href="/admin-login";
  }
    loadProducts();
  },[])

  const loadProducts = () =>{
    getProducts().then(setProducts);
  }

  const handleSubmit = async () => {

    const product = { productName:productName, productNumber:productNumber ,price:Number(price) };

    if(editingId){
      await updateProduct(editingId, product);
      setEditingId(null);
    }else{
      await addProduct(product);
    }

    setProductName("");
    setPrice("");
    setProductNumber("");
    loadProducts();
    }

  const handleEdit = (product) =>{
    setProductName(product.productName);
    setPrice(product.price);
    setProductNumber(product.productNumber);
    setEditingId(product.id);
  }

  const handleDelete = async (id)=>{
    await deleteProduct(id);
    loadProducts();
  }

  return(

    <div className="admin-products-container"> 
    < Navbar />

      <h2>Product Management</h2>
        <div className="product-form">

      <input
        placeholder="Product Name"
        value={productName}
        onChange={(e)=>setProductName(e.target.value)}
      />
      <input
        placeholder="Product Number"
        type="number"
        value={productNumber}
        onChange={(e)=>setProductNumber(e.target.value)}
      />

      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editingId ? "Update Product" : "Add Product"}
      </button>
      </div>

      <table border="1" cellPadding="10" cellSpacing="0" className="products-table">


        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Product Number</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {products.map(p=>(
            <tr key={p.id}>

              <td>{p.id}</td>
              <td>{p.productName}</td>
              <td>${p.price}</td>
              <td>{p.productNumber}</td>

              <td>
                <button className="edit-button" onClick={()=>handleEdit(p)}>Edit</button>
                <button className="delete-button" onClick={()=>handleDelete(p.id)}>Delete</button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}

    
