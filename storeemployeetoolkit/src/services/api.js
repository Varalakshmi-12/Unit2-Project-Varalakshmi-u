const BASE_URL = "http://localhost:8080/api";

export async function getOrders(){
    try {
        const res = await fetch(`${BASE_URL}/orders`);
        if (!res.ok) throw new Error("Failed to fetch orders: " + res.status);
        return await res.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function getOrdersByPhone(phoneNumber){
    try {
        const res = await fetch(`${BASE_URL}/orders?phone=${encodeURIComponent(phoneNumber)}`);
        if (!res.ok) throw new Error("Failed to fetch orders by phone number: " + res.status);
        return await res.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function getProducts(){
    try {
        const res = await fetch(`${BASE_URL}/products`);
        if (!res.ok) throw new Error("Failed to fetch products: " + res.status);
        return await res.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}