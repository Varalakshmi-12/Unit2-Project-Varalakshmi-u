import React ,{ useEffect, useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import { getProducts } from "../services/api";
import "./ProductsPage.css";

export default function ProductsPage() {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        getProducts()
        .then(data => setProducts(data))
        .catch(err => console.error("Failed to load products:", err));
    }, []);
    console.log("Products data:", products);
    
    

    const columns = [
        { header: "ID", accessor: "id" },
        { header: "Product Number", accessor: "productNumber" },
        { header: "ProductName", accessor: "name" },
        { header: "Price ($)", accessor: "price" },
    ];

    return (
    <section className="products-section">
      <h2>Available Products</h2>
      <DataTable data={products} columns={columns} />

      <Link to="/">
        <Button label="Back to Home" />
      </Link>
    </section>
  );
}
