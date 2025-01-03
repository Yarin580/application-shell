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
    country: faker.address.country(),
    city: faker.address.city(),
    department: faker.name.jobArea(),
    hireDate: faker.date.past({ years: 10 }), // Past 10 years
    salary: faker.number.float({ min: 30000, max: 120000, fractionDigits: 2 }),
    managerId: faker.string.uuid(),
    employmentType: faker.helpers.arrayElement([
      "Full-Time",
      "Part-Time",
      "Contract",
      "Intern",
    ]),
    isRemote: faker.datatype.boolean(),
    benefits: faker.helpers.arrayElements(
      [
        "Health Insurance",
        "Retirement Plan",
        "Gym Membership",
        "Paid Time Off",
      ],
      3
    ),
    emergencyContactName: faker.person.fullName(),
    emergencyContactPhone: faker.phone.number(),
    socialSecurityNumber: faker.string.alphanumeric(9),
    taxId: faker.string.alphanumeric(10),
    performanceRating: faker.number.float({
      min: 1,
      max: 5,
      fractionDigits: 1,
    }),
    skills: faker.helpers.arrayElements(
      ["JavaScript", "Python", "SQL", "Java", "React"],
      3
    ),
    languages: faker.helpers.arrayElements(
      ["English", "Spanish", "French", "German", "Chinese"],
      2
    ),
    certifications: faker.helpers.arrayElements(
      ["AWS Certified", "PMP", "Scrum Master", "CCNA"],
      2
    ),
    educationLevel: faker.helpers.arrayElement([
      "High School",
      "Associate",
      "Bachelor",
      "Master",
      "Doctorate",
    ]),
    maritalStatus: faker.helpers.arrayElement([
      "Single",
      "Married",
      "Divorced",
      "Widowed",
    ]),
    dependents: faker.number.int({ min: 0, max: 5 }),
    workSchedule: "9am-5pm",
    vacationDays: faker.number.int({ min: 10, max: 30 }),
    sickDays: faker.number.int({ min: 5, max: 15 }),
    trainingCompleted: faker.datatype.boolean(),
    bio: faker.lorem.paragraph(),
    onboardingStatus: faker.helpers.arrayElement(["Pending", "Completed"]),
    officeLocation: `${faker.address.city()}, ${faker.address.state()}`,
    teamName: faker.company.name(),
    projects: faker.helpers.arrayElements(
      ["Project Alpha", "Project Beta", "Project Gamma"],
      2
    ),
    isActive: faker.datatype.boolean(),
    lastLogin: faker.date.recent(),
    permissions: faker.helpers.arrayElements(["Admin", "Editor", "Viewer"], 2),
    hobbies: faker.helpers.arrayElements(
      ["Reading", "Hiking", "Gaming", "Cooking", "Traveling"],
      2
    ),
    supervisorName: faker.person.fullName(),
    contractEndDate: faker.date.future({ years: 3 }), // Next 3 years
    createdAt: faker.date.past({ years: 5 }), // Past 5 years
    updatedAt: faker.date.recent(), // Recent date
  }));
};

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
