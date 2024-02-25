import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaInfo, FaEdit, FaTrash } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; 
import { deleteUser, loadUsers } from '../../store/Action';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

    export const Home = () => {
        let dispatch = useDispatch(); 
        const { users } =useSelector(state => state.data)

        useEffect(() =>{
            dispatch(loadUsers());
            // props.loaduser();
        }, [])

    const handleDelete = (id) => {
        if(window.confirm("Would you like to delete?")){
            dispatch(deleteUser(id))
        // props.removeuser(code);
        // props.loaduser();
        toast.success('Çompany delete successfully.')
        }
    };


  return (
    <div className='Table1'>
        <div className='table2'>
            <div className='table-name'>
        Companies
        <div className='buttons-container1'>
        <Link to="/create" className='btn-btn-success'>
    <FontAwesomeIcon icon={faPlus} className="me-1" />
</Link>
</div>
</div>

<div className="table-container">
<table className='main-table'>
    <thead>
        <tr>
        <th></th>
            <th>CompanyCode</th>
            <th>CompanyName</th>
            <th>Country</th>
            <th>Currency</th>    
        </tr>
    </thead>
    <tbody>
        {
            users && users.map((user) => (
            // props.user.userlist && props.user.userlist.map(item =>
                <tr key={user.id}>
                    <td>      
                    <Link to={`/read/${user.id}`} className='btn-btn-sm-btn-info-me-2'><FaInfo /> </Link> 
                    <Link to={`/overview/${user.id}`} className='btn'><FaEdit /></Link>
                    <button className='btn-delete' onClick={() => handleDelete(user.id)}><FaTrash /></button>
                    </td>
                    <td>{user.companycode}</td>
                    <td>{user.companyname}</td>
                    <td>{user.country}</td>
                    <td>{user.currency}</td>      
                </tr>
            ))
        }
    </tbody>
</table>
</div>
        </div>
        </div>
  );

}

// const mapStateToProps = (state) => {
//     return{
//         user: state.user
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return{
//         loaduser:() =>dispatch(FetchUserList()),
//         removeuser:(code)=>dispatch(Removeuser(code))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Home);
export default Home;