export interface BaseModel {
  id: string;
  createdAt?: Date;
  updatedAt: Date;
}

export interface Employee extends BaseModel {
  fullName: string;
  email: string;
  phone: string;
  nickname: string;
  address: string;
  age: number;
  position?: string;
  country?: string;
  city?: string;
}

export interface Customer extends BaseModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position?: string;
  address?: string;
  city?: string;
  country?: string;
  creditLimit?: number;
  status: "active" | "inactive";
  lastPurchaseDate: Date;
  totalPurchases: number;
  customerSegment?: string;
}

export interface Product extends BaseModel {
  name: string;
  sku: string;
  category: string;
  price: number;
  cost: number;
  stockLevel: number;
  supplier: string;
  weight: number;
  dimensions: string;
  description: string;
  status: "in-stock" | "low-stock" | "out-of-stock";
  reorderPoint: number;
  leadTime: number;
  lastOrderDate: Date;
}
