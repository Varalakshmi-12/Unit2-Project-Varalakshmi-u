const BASE_URL = "http://localhost:8080/api";

export async function getOrders(){
    try {
        const res = await fetch(`${BASE_URL}/orders`);
        if (!res.ok) throw new Error("Failed to fetch orders: " + res.status);
        return await res.json();
    } catch (err) {
        //console.error(err);
        throw err;
    }
}

export async function getOrdersByPhone(phoneNumber){
    try {
        const res = await fetch(`${BASE_URL}/orders/phone/${phoneNumber}`);
        if (!res.ok) throw new Error("Failed to fetch orders by phone number: " + res.status);
        return await res.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function getProducts(){
    try {
        const res = await fetch(`${BASE_URL}/Products`);
        if (!res.ok) throw new Error("Failed to fetch products: " + res.status);
        return await res.json();
    } catch (err) {
        //console.error(err);
        throw err;
    }
}

export async function getProductById(productId){
    try {
        const res = await fetch(`${BASE_URL}/Products/${productId}`);
        if (!res.ok) throw new Error("Failed to fetch product by ID: " + res.status);
        return await res.json();
    } catch (err) {
        //console.error(err);
        throw err;
    }
}


export async function addProduct(product){
    const res = await fetch(`${BASE_URL}/Products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "ProductNumber already exists: " );
    }

    return data;
}


export async function updateProduct(id,product){

    const res = await fetch(`${BASE_URL}/Products/${id}`,{
        method:"PUT",
        headers:{ "Content-Type":"application/json"},
        body:JSON.stringify(product)
    });

    const data = await res.json();

    if(!res.ok){
        throw new Error(data.message || "Failed to update product: " + res.status);
    }

    return data;
}




export async function deleteProduct(id) {
  await fetch(`${BASE_URL}/Products/${id}`, {
    method: "DELETE"
  });
}


