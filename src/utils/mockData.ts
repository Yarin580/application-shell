import { faker } from "@faker-js/faker";
import { Employee, Product } from "../types/models";

export const generateMockEmployees = (count: number): Employee[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    nickname: faker.person.firstName(),
    address: faker.address.streetAddress(),
    age: faker.number.int({ min: 18, max: 65 }),
    position: faker.name.jobTitle(),
    updatedAt: faker.date.recent(),
  }));
};

export const generateMockProducts = (count: number): Product[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    sku: faker.commerce.productMaterial(),
    category: faker.commerce.department(),
    price: Number(faker.commerce.price()),
    cost: Number(faker.commerce.price()),
    stockLevel: faker.number.int({ min: 0, max: 1000 }),
    supplier: faker.company.name(),
    weight: faker.number.float({ min: 0.1, max: 10 }),
    dimensions: `${faker.number.int({ min: 1, max: 10 })}x${faker.number.int({
      min: 1,
      max: 10,
    })}x${faker.number.int({ min: 1, max: 10 })}`,
    description: faker.commerce.productDescription(),
    status: faker.helpers.arrayElement([
      "in-stock",
      "low-stock",
      "out-of-stock",
    ]),
    reorderPoint: faker.number.int({ min: 10, max: 100 }),
    leadTime: faker.number.int({ min: 1, max: 30 }),
    lastOrderDate: faker.date.recent(),
    updatedAt: faker.date.recent(),
  }));
};
