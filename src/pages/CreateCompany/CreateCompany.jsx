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

  const [error, setError] = useState("");

  let dispatch=useDispatch();
  const navigate = useNavigate();

  const {companycode, companyname, description, country, currency, address01, address02, defaultCompany } = state;

  const handleInputChange = (e) =>{
    let{name, value} = e.target;
    setState({...state, [name]:value});
  }
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!companycode || !companyname || !country || !currency || !address01){
            setError("Please input all input field");
    } else {
            dispatch(addUser(state));
            navigate('/');
            setError("");
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
          {/* <input type="text" id="companycode"  className="companyCode" name='companycode' value={companycode} onChange={handleInputChange}/> */}
          <input type="text" id="companycode" name="companycode" 
          value={companycode} onChange={handleInputChange} />

         {/* // onChange = {e => companycodechange( e.target.value) */}
          {/* <input type="text" name='companycode' className="companyCode" 
          onChange = {e => setValues({...values, companycode: e.target.value})}/> */}
          {/* {formErrors.companyCode && <span className='error'>{formErrors.companyCode}</span>} */}
          </label>
        </div>

        <br/>

        <div className='form-part2'>
        <label>
          Company Name
          <input type="text" id="companyname" className='companyName' name="companyname" 
          value={companyname} onChange={handleInputChange}/>
          {/* onChange = {e => companynamechange(e.target.value)} */}
          {/* <input type="text" name="companyname" className='companyName'  
          onChange = {e => setValues({...values, companyname: e.target.value})}/> */}
          {/* {formErrors.companyName && <span className="error">{formErrors.companyName}</span>} */}
        </label>
        </div>
        
        <br />

        <div className='form-part3'>
        <label>
          Description
          <input type="text" id="description" className='description' name="description" placeholder='optional' 
          value={description} onChange={handleInputChange} />
          {/* onChange = {e => descriptionchange(e.target.value)} /> */}
          {/* <input type="text" name="description" className='description' placeholder='optional' 
          onChange = {e => setValues({...values, description: e.target.value})} /> */}
          {/* {formErrors.description && <span className="error">{formErrors.description}</span>} */}
        </label>
        </div>

        <br />
        
        <div className='form-part4'>
        <label>
          Country
          <select id="country" name="country" 
          value={country}  onChange={handleInputChange}>
          {/* onChange = {e => countrychange(e.target.value)}> */}
          {/* <select name="country"  
          onChange = {e => setValues({...values, country: e.target.value})}> */}
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
           {/* onChange = {e => currencychange(e.target.value)}> */}
          {/* <select name="currency" 
           onChange = {e => setValues({...values, currency: e.target.value})}> */}
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
          {/* onChange = {e => address01change(e.target.value)} /> */}
          {/* <input type="text" name="address01" 
          onChange = {e => setValues({...values, address01: e.target.value})} /> */}
          {/* {formErrors.address01 && <span className='error'>{formErrors.address01}</span>} */}
        </label>
        </div>
        
        <br />
        
        <div className='form-part7'>
        <label>
          Address 02
          <input type="text" id="address02" name="address02" placeholder="optional " 
          value={address02} onChange={handleInputChange}/>
          {/* onChange = {e => address02change(e.target.value)} /> */}
          {/* <input type="text" name="address02" placeholder="optional "
          onChange = {e => setValues({...values, address02: e.target.value})} /> */}
        </label>
        </div>
        
        <br />

       <div className='form-part8'>
        <label>
        <input type="checkbox" name="defaultCompany" id="defaultCompany" 
        value={defaultCompany} onChange={handleInputChange}/>
          {/* onChange = {e => defaultCompanychange(e.target.value)} /> */}
          {/* <input type="checkbox" id="defaultCompany" name="defaultCompany" 
          onChange = {e => setValues({...values, defaultCompany: e.target.value})} /> */}
         Default Company
        </label><br />
         </div>

         <br/>

        <div className='button'>
        {/* <Link to={`/${user.id}`} className='button_create'>Create</Link> */}
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
