import { faker } from "@faker-js/faker";
import { Product } from "../../types/models";

export const generateMockProducts = (count: number): Product[] => {
  return Array.from({ length: count }, () => {
    const price = faker.number.float({ min: 10, max: 1000, fractionDigits: 2 });
    const cost = faker.number.float({
      min: 5,
      max: price - 1,
      fractionDigits: 2,
    });
    const stockLevel = faker.number.int({ min: 0, max: 500 });
    const status =
      stockLevel === 0
        ? "out-of-stock"
        : stockLevel < 10
        ? "low-stock"
        : "in-stock";

    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      sku: faker.string.alphanumeric(10).toUpperCase(),
      category: faker.commerce.department(),
      price,
      cost,
      stockLevel,
      supplier: faker.company.name(),
      weight: faker.number.float({ min: 0.1, max: 50, fractionDigits: 2 }),
      dimensions: `${faker.number.float({
        min: 10,
        max: 100,
        fractionDigits: 2,
      })}x${faker.number.float({
        min: 10,
        max: 100,
        fractionDigits: 2,
      })}x${faker.number.float({ min: 10, max: 100, fractionDigits: 2 })} cm`,
      description: faker.commerce.productDescription(),
      status,
      reorderPoint: faker.number.int({ min: 5, max: 20 }),
      leadTime: faker.number.int({ min: 1, max: 30 }),
      lastOrderDate: faker.date.past({ years: 1 }),
      nextOrderDate: faker.date.future({ years: 1 }),
      isDiscontinued: faker.datatype.boolean(),
      discontinuedDate: faker.datatype.boolean()
        ? faker.date.past({ years: 1 })
        : undefined,
      manufacturer: faker.company.name(),
      brand: faker.commerce.productAdjective(),
      model: faker.string.alphanumeric(8).toUpperCase(),
      color: faker.color.human(),
      size: faker.helpers.arrayElement([
        "Small",
        "Medium",
        "Large",
        "Extra Large",
      ]),
      warranty: `${faker.number.int({ min: 1, max: 5 })} years`,
      rating: faker.number.float({ min: 1, max: 5, fractionDigits: 2 }),
      reviews: faker.number.int({ min: 0, max: 5000 }),
      promotion: faker.helpers.arrayElement([
        "None",
        "10% Off",
        "Buy One Get One Free",
        "Free Shipping",
      ]),
      tax: faker.number.float({ min: 0.05, max: 0.2, fractionDigits: 2 }),
      shippingCost: faker.number.float({ min: 5, max: 50, fractionDigits: 2 }),
      totalCost:
        cost + faker.number.float({ min: 5, max: 50, fractionDigits: 2 }), // Cost + ShippingCost
      totalRevenue: price * stockLevel,
      totalProfit: (price - cost) * stockLevel,
      createdAt: faker.date.past({ years: 2 }),
      updatedAt: faker.date.recent(),
    };
  });
};
