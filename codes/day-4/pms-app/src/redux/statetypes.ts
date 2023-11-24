import { Product } from "../models/product";

export interface ProductRecordsState {
    fetchCompleted: boolean;
    errorMessage: string;
    productRecords: Product[] | undefined
}