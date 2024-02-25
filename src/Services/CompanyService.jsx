// // const CompanyService = {
// //     companies: [],
  
// //     createCompany: (companyData) => {
// //       CompanyService.companies.push(companyData);
// //     },
  
// //     getAllCompanies: () => {
// //       return CompanyService.companies;
// //     },
// //   };
  
// //   export default CompanyService;
  


// const API_ENDPOINT = 'http://localhost:5000/api/companies';

// const CompanyService = {
//   getAllCompanies: async () => {
//     try {
//       const response = await fetch(API_ENDPOINT);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching companies:', error);
//       return [];
//     }
//   },
//   getCompanyById: async (companyId) => {
//     try {
//       const response = await fetch(`${API_ENDPOINT}/${companyId}`);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(`Error fetching company with ID ${companyId}:`, error);
//       return null;
//     }
//   },
//   createCompany: async (companyData) => {
//     try {
//       const response = await fetch(API_ENDPOINT, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(companyData),
//       });
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error creating company:', error);
//       return null;
//     }
//   },
//   updateCompany: async (companyId, updatedData) => {
//     try {
//       const response = await fetch(`${API_ENDPOINT}/${companyId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedData),
//       });
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(`Error updating company with ID ${companyId}:`, error);
//       return null;
//     }
//   },
//   deleteCompany: async (companyId) => {
//     try {
//       const response = await fetch(`${API_ENDPOINT}/${companyId}`, {
//         method: 'DELETE',
//       });
//       return response.ok; // Returns true if successful
//     } catch (error) {
//       console.error(`Error deleting company with ID ${companyId}:`, error);
//       return false;
//     }
//   },
// };

// export default CompanyService;
