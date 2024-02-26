import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/Action';

export const CreateCompany = () => {
  const [state, setState] = useState({
    companycode: '',
    companyname: '',
    description: '',
    country: '',
    currency: '',
    address01: '',
    address02: '',
    defaultCompany: false
  });

 // const [error, setError] = useState("");

  let dispatch=useDispatch();
  const navigate = useNavigate();

  const {companycode, companyname, description, country, currency, address01, address02, defaultCompany } = state;

  const handleInputChange = (e) =>{
    let{name, value} = e.target;
    setState({...state, [name]:value});
  }
 

const handleSubmit = (e) => {
    e.preventDefault();
    if(!companycode){
            alert("Please fill out the Company Code fields.");
    } else if(!companyname){
      alert("Please fill out Company the Name fields.");
    } else if(!country){
      alert("Please fill out Country the fields.");
    } else if(!currency){
      alert("Please fill out Currency the fields.");
    }  else if(!address01){
      alert("Please fill out the Address 01 fields.");
    }else {
            dispatch(addUser(state));
            navigate('/');
            // setError("");
    }
  };

  return (
    
    <div className='form-container'>
      <div className="form-name">
            Create Company
            </div>
      <div className='form'>
      <form onSubmit={handleSubmit}>

        <div className='form-part1'>
            <label>
          Company Code
          <input type="text" id="companycode" name="companycode" 
          value={companycode} onChange={handleInputChange} />
          {/* {formErrors.companyCode && <span className='error'>{formErrors.companyCode}</span>} */}
          </label>
        </div>

        <br/>

        <div className='form-part2'>
        <label>
          Company Name
          <input type="text" id="companyname" className='companyName' name="companyname" 
          value={companyname} onChange={handleInputChange}/>
          {/* {formErrors.companyName && <span className="error">{formErrors.companyName}</span>} */}
        </label>
        </div>
        
        <br />

        <div className='form-part3'>
        <label>
          Description
          <input type="text" id="description" className='description' name="description" placeholder='optional' 
          value={description} onChange={handleInputChange} />
          {/* {formErrors.description && <span className="error">{formErrors.description}</span>} */}
        </label>
        </div>

        <br />
        
        <div className='form-part4'>
        <label>
          Country
          <select id="country" name="country" 
          value={country}  onChange={handleInputChange}>
           <option value="">Select Country</option>
           <option value="Sri Lanka">Sri Lanka</option>
            <option value="USA">USA</option>                   
          </select>             
        </label>
        </div>
        
        <br />

        <div className='form-part5'>
        <label>
          Currency
          <select name="currency" id="currency" 
          value={currency} onChange={handleInputChange}>
          <option value="">Select Currency</option>
            <option value="Rupees">Rupees</option>
            <option value="USD">USD</option>
          </select>
        </label>
        </div>
        
        <br />

        <div className='form-part6'>
        <label>
          Address 01
          <input type="text" id="address01" name="address01" 
          value={address01} onChange={handleInputChange}/>
          {/* {formErrors.address01 && <span className='error'>{formErrors.address01}</span>} */}
        </label>
        </div>
        
        <br />
        
        <div className='form-part7'>
        <label>
          Address 02
          <input type="text" id="address02" name="address02" placeholder="optional " 
          value={address02} onChange={handleInputChange}/>
        </label>
        </div>
        
        <br />

       <div className='form-part8'>
        <label>
        <input type="checkbox" name="defaultCompany" id="defaultCompany" 
        value={defaultCompany} onChange={handleInputChange}/>
         Default Company
        </label><br />
         </div>

         <br/>

        <div className='button'>
        <button type="submit" className="create-button">Create</button>
        </div>
        <div className='btn_back_createcompany'>
        <Link className="btn_btn-back" to={'/'}>Back</Link>
        </div>

      </form>
      </div>
    </div>
  );
};

export default CreateCompany;
