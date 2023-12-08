"use server";

import {
  GetProductByIdParams,
  GetSimilarProductsParams,
  UpdateProductsParams,
} from "@/types/share.types";

export async function getProducts() {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    });

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategories() {
  try {
    const response = await fetch(" http://localhost:3000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    });

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.log(error);
  }
}

export async function getTopProducts() {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    });

    const responseData = await response.json();
    const topProducts = responseData.slice(0, 5);

    return topProducts;
  } catch (error) {
    console.log(error);
  }
}

export async function getRecentProducts() {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    });

    const responseData = await response.json();
    const topProducts = responseData.slice(10, 15);

    return topProducts;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsById(params: GetProductByIdParams) {
  try {
    const { itemId } = params;

    const response = await fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    });

    const responseData = await response.json();
    const productsById = responseData.find((item: any) => item.id === itemId);

    return productsById;
  } catch (error) {
    console.log(error);
  }
}

export async function updateDescription(params: UpdateProductsParams) {
  try {
    const { itemId, newDescription } = params;

    const response = await fetch(`http://localhost:3000/products/${itemId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: newDescription,
      }),
    });

    if (response.ok) {
      console.log("Product description updated successfully");
    } else {
      console.log("Failed to update product description");
    }

    return { ok: true};
  } catch (error) {
    console.log(error);
  }
}

export async function getSimilarProducts(params: GetSimilarProductsParams) {
  try {
    const { itemId } = params;

    const response = await fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    });

    const responseData = await response.json();
    const selectedProject = responseData.find((item: any) => item.id === itemId);
    const selectedCategory = selectedProject ? selectedProject.category : null;

    const similarProjects = selectedCategory ? responseData.filter((item: any) => item.category === selectedCategory && item.id !== itemId) : [];

    return similarProjects;
  } catch (error) {
    console.log(error);
  }
}
