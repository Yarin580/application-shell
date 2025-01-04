import { faker } from "@faker-js/faker";
import { Employee } from "../../types/models";

export const generateMockEmployees = (count: number): Employee[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    nickname: faker.person.firstName(),
    address: faker.location.streetAddress(),
    age: faker.number.int({ min: 18, max: 65 }),
    position: faker.person.jobTitle(),
    country: faker.location.country(),
    city: faker.location.city(),
    department: faker.person.jobArea(),
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
    officeLocation: `${faker.location.city()}, ${faker.location.state()}`,
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
