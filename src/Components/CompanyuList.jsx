// // import React from 'react';
// // import Company from '../Company/Company';
// // import CompanyService from '../../Services/CompanyService';

// // function CompanyList() {
// //     const companies = CompanyService.getAllCompanies();

// //     return (
// //         <div>
// //           <h2>Company List</h2>
// //           {companies.map((company, index) => (
// //             <Company key={index} company={company} />
// //           ))}
// //         </div>
// //       );
// //     }

// // export default CompanyList;

// function CompanyList() {
//     const [companies, setCompanies] = useState([]);
  
//     useEffect(() => {
//       fetchCompanies();
//     }, []);
  
//     const fetchCompanies = async () => {
//       try {
//         const fetchedCompanies = await CompanyService.getAllCompanies();
//         setCompanies(fetchedCompanies);
//       } catch (error) {
//         console.error('Error fetching companies:', error);
//       }
//     };
  
//     return (
//       <div>
//         <h2>Company List</h2>
//         {companies.map((company) => (
//           <Company key={company.id} company={company} />
//         ))}
//       </div>
//     );
//   }
  
//   export default CompanyList;