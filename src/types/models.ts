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
  department?: string;
  hireDate?: Date;
  salary?: number;
  managerId?: string;
  employmentType?: "Full-Time" | "Part-Time" | "Contract" | "Intern";
  isRemote?: boolean;
  benefits?: string[];
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  socialSecurityNumber?: string;
  taxId?: string;
  performanceRating?: number;
  skills?: string[];
  languages?: string[];
  certifications?: string[];
  educationLevel?:
    | "High School"
    | "Associate"
    | "Bachelor"
    | "Master"
    | "Doctorate";
  maritalStatus?: "Single" | "Married" | "Divorced" | "Widowed";
  dependents?: number;
  workSchedule?: string; // e.g., "9am-5pm"
  vacationDays?: number;
  sickDays?: number;
  trainingCompleted?: boolean;
  bio?: string;
  onboardingStatus?: "Pending" | "Completed";
  officeLocation?: string;
  teamName?: string;
  projects?: string[];
  isActive?: boolean;
  lastLogin?: Date;
  permissions?: string[];
  hobbies?: string[];
  supervisorName?: string;
  contractEndDate?: Date;
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
  nextOrderDate: Date;
  isDiscontinued: boolean;
  discontinuedDate?: Date;
  manufacturer: string;
  brand: string;
  model: string;
  color: string;
  size: string;
  warranty: string;
  rating: number;
  reviews: number;
  promotion: string;
  tax: number;
  shippingCost: number;
  totalCost: number;
  totalRevenue: number;
  totalProfit: number;
}
