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
- `jest.config.js`: Jest configuration.
- `package.json`: Project dependencies and scripts.

### **Src**

- **`api/`**:

  - `baseFunctions.ts`: Base functions for API.
  - `employee.ts`: Mock API for employee data.
  - `product.ts`: Mock API for product data.

- **`components/`**:

  - **`CustomDataGrid/`**:
    - `CustomDataGrid.tsx`: Custom data grid component (using Data Grid Premuim by MaterialUI).
    - `DataGridSearch.tsx`: Search bar for data grid.
  - **`layout/`**:
    - `DetailesPanel.tsx`: Bottom panel displaying extended details of selected data rows.
    - `MainContent.tsx`: Wrapper for page content.
    - `SideBar.tsx`: Sidebar for app navigation.
    - `TopNavBar.tsx`: App top navbar.

- **`hooks/`**:

  - `useDataGrid.tsx`: Custom hook for managing data grid logic and state.

- **`pages/`**:

  - `EmployeesPage.tsx`: Page displaying the employee data grid.
  - `ProductsPage.tsx`: Page displaying the product data grid.

- **`types/`**:

  - `dataGridModels.ts`: TypeScript models for data grid.
  - `models.ts`: TypeScript models for defining the structure of the datasets.

- **`utils/`**:

  - `dataUtils.ts`: Utility functions for data operations.
  - **`mockData/`**:
    - `mockEmployees.ts`: Utility functions to generate mock employee data.
    - `mockProducts.ts`: Utility functions to generate mock product data.

- `App.tsx`: Application root component.
- `index.css`: Base styles for the app.
- `main.tsx`: Application bootstrapper.

---

## Running the App

To start the development server, run:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Testing

Run unit tests with:

```bash
npm test
```

---

## **Usage**

1. Navigate between pages using the **Sidebar**.
2. Use the **Search Box** to filter data in the grid.
3. Select a row to view extended details in the **Details Panel**.

---
