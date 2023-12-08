export interface GetProductByIdParams {
  itemId: string;
}

export interface UpdateProductsParams {
    itemId: string;
    newDescription: string;
}

export interface GetSimilarProductsParams {
    itemId: string;
}