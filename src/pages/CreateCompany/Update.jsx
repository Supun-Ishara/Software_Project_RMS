import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FetchUserObj, FunctionUpdateUser } from '../../store/Action';
import { useDispatch, useSelector } from 'react-redux';

export const Update = () => {
  const [companycode, companycodechange] = useState('');
  const [companyname, companynamechange] = useState('');
  const [description, descriptionchange] = useState('');
  const [country, countrychange] = useState('');
  const [currency, currencychange] = useState('');
  const [address01, address01change] = useState('');
  const [address02, address02change] = useState('');
  const [defaultCompany, defaultCompanychange] = useState('');
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const {code} = useParams();

  const userobj = useSelector((state)=>state.user.userobj)

  const handleSubmit = (e) => {
    e.preventDefault();
    const userobj = {companycode, companyname, description, country, currency, address01, address02, defaultCompany };
    dispatch(FunctionUpdateUser(userobj));
    navigate('/');
  }

  /*delete */
  const handledelete = (code) => {
    // Implement your delete logic here
    console.log(`Deleting company with code: ${code}`);
  }

    /*delete */

  useEffect(() => {
    dispatch(FetchUserObj(code));
  }, []);

  useEffect(() => {
    if(userobj){
      companycodechange(userobj.companycode);
      companynamechange(userobj.companyname);
      descriptionchange(userobj.description);
      countrychange(userobj.country);
      currencychange(userobj.currency);
      address01change(userobj.address01);
      address02change(userobj.address02);
      defaultCompanychange(userobj.defaultCompany);
    }
  }, [userobj]);

  return (
    <div className='form-container-update'>
      <div className="form-name-uptaded">
        <h2>Company</h2>
        <Link to="/create" className='btn-btn-success1'>
          <FontAwesomeIcon icon={faPlus} className="me-11" />
        </Link>
        <button className='btn1'><FaEdit /></button>
        <button className='save-button1' onClick={handleSubmit}><FaSave /></button>
        <button className='btn-delete-update' onClick={() => handledelete(code)}><FaTrash /></button>
      </div>
      <div className="updated-form">
        <h3>General</h3>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <div className='form-part1-updated'>
              <label>
                Company Code
                <input type="text" value={companycode || ''} onChange={e => companycodechange(e.target.value)} />
              </label>
            </div>
            <br />
          <div className='form-part2-updated'>
            <label>
              Company Name
              <input type="text" value={companyname || ''} 
              onChange={e => companynamechange(e.target.value)} />
            </label>
          </div>
          <br />
          <div className='form-part3-updated'>
            <label>
              Description
              <input type="text" placeholder='optional' value={description || ''} 
              onChange={e => descriptionchange(e.target.value)}  />
            </label>
          </div>
          <br />
          <div className='form-part4-updated'>
            <label>
              Country
              <select value={country || ''} 
             onChange={e => countrychange(e.target.value)}>
                <option value="">Select Country</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="USA">USA</option>
              </select>
            </label>
          </div>
          <br />
          <div className='form-part5-updated'>
            <label>
              Currency
              <select value={currency || ''} 
              onChange={e => currencychange(e.target.value)}>
                <option value="">Select Currency</option>
                <option value="Rupees">Rupees</option>
                <option value="USD">USD</option>
              </select>
            </label>
          </div>
          <br />
          <div className='form-part6-updated'>
            <label>
              Address 01
              <input type="text" value={address01 || ''} 
              onChange={e => address01change(e.target.value)} />
            </label>
          </div>
          <br />
          <div className='form-part7-updated'>
            <label>
              Address 02
              <input type="text" placeholder="optional" value={address02 || ''} 
              onChange={e => address02change(e.target.value)}/>
            </label>
          </div>
          <br />
          <div className='form-part8-updated'>
            <label>
              <input type="checkbox" id="defaultCompany" checked={defaultCompany || ''} 
              onChange={e => defaultCompanychange(e.target.value)}  />
              Default Company
            </label><br />
          </div>
          <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;

