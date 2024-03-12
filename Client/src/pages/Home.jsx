import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser, loadUsers } from "../store/Action";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

export const Home = ({ FaInfo, FaEdit, FaTrash, FontAwesomeIcon, faPlus }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.companycode.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  const handleDelete = (id) => {
    if (window.confirm("Would you like to delete?")) {
      dispatch(deleteUser(id));
      toast.success("Company deleted successfully.");
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="Table1">
      <div className="table2">
        <div className="table-name">
          Companies
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by CompanyCode"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="buttons-container1">
            <Link to="/create" className="btn-btn-success">
              <FontAwesomeIcon icon={faPlus} className="me-1" />
            </Link>
          </div>
        </div>

        <div className="table-container">
          <table className="main-table">
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
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <Link
                      to={`/overview/${user.id}`}
                      className="btn-btn-sm-btn-info-me-2"
                    >
                      <FaInfo />{" "}
                    </Link>

                    <Link to={`/overview/${user.id}?edit=true`} className="btn">
                      <FaEdit />
                    </Link>

                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(user.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                  <td>{user.companycode}</td>
                  <td>{user.companyname}</td>
                  <td>{user.country}</td>
                  <td>{user.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
