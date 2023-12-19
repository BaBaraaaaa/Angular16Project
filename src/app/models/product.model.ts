import { FileHandle } from "./file-handle.model";

export interface Product {

  productName: string,
  price: number,
  description: string,
  quantity: number,
  category_id: number,
  productImage: FileHandle[]

}
