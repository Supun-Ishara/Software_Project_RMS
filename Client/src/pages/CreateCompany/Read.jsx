import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../store/Action';
import { fetchDataSuccess } from '../../store/Action';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


export function Read(){
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
  let dispatch=useDispatch();
  //  const [state, setState] = useState([])
    let {id} = useParams();
   // const [error, setError] = useState("");

   const {companycode, companyname, description, country, currency, address01, address02, defaultCompany } = state;

   const { user } = useSelector(state => state.data) ;

  useEffect(() => {
       dispatch(fetchDataSuccess(id));
  }, [])  ;

  useEffect(() => {
    if(user) {
        setState({...user});
    }
  }, [user]);

  const handleDelete = (id) => {
    if(window.confirm("Would you like to delete?")){
        dispatch(deleteUser(id))
    }
};

  return (
    <div className='form-container-read'>
          <div className="form-name-read">
        <div className='read_description'>
        Details of Company</div>
        <Link to="/create" className='btn-btn-success2'>
          <FontAwesomeIcon icon={faPlus} className="me-12" />
        </Link>
        <Link to={'/overview/${user.id}'} className='btn2'><FaEdit /></Link>
        <button className='btn-delete-read' onClick={() => handleDelete(id)} ><FaTrash /></button> 
      </div>
<div className='read-form'>

            <form>
            <div className='form-part1-read'>
              <label>
                Company Code
                <input type="text" value={companycode} />
              </label>
            </div>
            <br />
          <div className='form-part2-read'>
            <label>
              Company Name
              <input type="text" value={companyname}/>
            </label>
          </div>
          <br />
          <div className='form-part3-read'>
            <label>
              Description
              <input type="text" placeholder='optional' value={description} />
            </label>
          </div>
          <br />
          <div className='form-part4-read'>
            <label>
              Country
              <select value={country}>
                <option value="">Select Country</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="USA">USA</option>
              </select>
            </label>
          </div>
          <br />
          <div className='form-part5-read'>
            <label>
              Currency
              <select value={currency}>
                <option value="">Select Currency</option>
                <option value="Rupees">Rupees</option>
                <option value="USD">USD</option>
              </select>
            </label>
          </div>
          <br />
          <div className='form-part6-read'>
            <label>
              Address 01
              <input type="text" value={address01}/>
            </label>
          </div>
          <br />
          <div className='form-part7-read'>
            <label>
              Address 02
              <input type="text" placeholder="optional" value={address02}/>
            </label>
          </div>
          <br />
           <div className='form-part8-read'>
             <label>
              <input type="checkbox"  checked={defaultCompany}/>
              Default Company
            </label><br />  
              {/* <div className='detail8'>
            <strong>Default Company: {state.defaultCompany}</strong>
            </div>  */}
            </div> 
          </form>
            <div className='back_button_read'>
            <Link className="btn_btn-back-read" to={'/'}>Back</Link>
            </div>
        </div>

    </div>
  )
}

export default Read;
