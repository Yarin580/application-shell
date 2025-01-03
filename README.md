# React Shell Application

## **Features**

- **Master-Detail Layout**: Each page includes a data grid, search bar, and a bottom details panel for presenting extended data.
- **Two Pages**:
  - **Employees Page**: Displays employee data.
  - **Products Page**: Displays product data.
- **Mock Data**: The application uses mocked datasets, simulating a backend API.
- **Performance Optimized**: Capable of handling \~10k rows of data with 10-15 columns per grid.
- **Reusable Components**: Modular structure with reusable layouts and data grid components.

---

## **Tech Stack**

- **Frontend**: React 18 with TypeScript
- **Component Library**: Material-UI 5.x.x
- **Data Grid**: MUI X Data Grid Premium 7.x.x
- **Bundler**: Vite

---

## **File Structure**

### **Root**

- `index.html`: Entry point of the application.
- `main.tsx`: Application bootstrapper.
- `App.tsx`: Application root component.

### **Src**

- **`api/`**:

  - `employee.ts`: Mock API for employee-related data.
  - `product.ts`: Mock API for product-related data.

- **`components/`**:

  - `core/CustomDataGrid.tsx`: A Custom data grid components, include search bar.

- **`layout/`**:

  - `TopNavBar.tsx`: App top navbar.
  - `SideBar.tsx`: Sidebar for app navigation.
  - `MainContent.tsx`: Wrapper for page content.
  - `DetailesPanel.tsx`: Bottom panel displaying extended details of selected data rows.

- **`hooks/`**:

  - `useDataGrid.tsx`: Custom hook for managing data grid logic and state.

- **`pages/`**:

  - `EmployeesPage.tsx`: Page displaying the employee data grid.
  - `ProductsPage.tsx`: Page displaying the product data grid.

- **`types/`**:

  - `models.ts`: TypeScript models for defining the structure of the datasets.

- **`utils/`**:

  - `mockData.ts`: Utility functions or static data to generate mock datasets.

- **`App.css`**: Global styles for the app.

- **`index.css`**: Base styles for the app.

---

## **Getting Started**

### **1. Installation**

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd <project-folder>
npm install
```

### **2. Run Development Server**

Start the Vite development server:

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

### **3. Build for Production**

Generate a production build:

```bash
npm run build
```

### **4. Linting**

Run ESLint for code quality checks:

```bash
npm run lint
```

---

## **Usage**

1. Navigate between pages using the **Sidebar**.
2. Use the **Search Box** to filter data in the grid.
3. Select a row to view extended details in the **Details Panel**.

---
