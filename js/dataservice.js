const productsList = async () => {
    try {
        const response = await fetch("https://66888a670ea28ca88b857450.mockapi.io/products/products");
        if (!response.ok) {
            throw new Error('No es posible obtener la lista de productos');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener la lista de productos: ', error.message);
        throw error;
    }
};

const createNewElement = async (name, value, image) => {
    try {
        const response = await fetch("https://66888a670ea28ca88b857450.mockapi.io/products/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                value,
                image,
            })
        });
        if (!response.ok) {
            throw new Error('No es posible crear un nuevo producto.');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al crear un nuevo producto: ', error.message);
        throw error;
    }
}

const deleteProduct = async (id) => {
    try {
        const response = await fetch(`https://66888a670ea28ca88b857450.mockapi.io/products/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error('No fue posible eliminar el producto');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al eliminar el producto: ', error.message);
        throw error;
    }
}

export const myProducts = {
    productsList,
    createNewElement,
    deleteProduct,
};
