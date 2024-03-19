import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserObj,
  updateUser,
  fetchCountries,
  fetchCurrencies,
} from "../store/Action";
import { deleteUser } from "../store/Action";

export const CompanyOverview = ({
  FaEdit,
  FaTrash,
  FaSave,
  FontAwesomeIcon,
  faPlus,
}) => {
  const [editable, setEditable] = useState(false); // State to control edit mode
  const [state, setState] = useState({
    companycode: "",
    companyname: "",
    description: "",
    country: "",
    currency: "",
    address01: "",
    address02: "",
    defaultCompany: false,
  });

  let { id } = useParams();
  const { user } = useSelector((state) => state.data);
  const countries = useSelector((state) => state.data.countries);
  const currencies = useSelector((state) => state.data.currencies);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    companycode,
    companyname,
    description,
    country,
    currency,
    address01,
    address02,
    defaultCompany,
  } = state;

  useEffect(() => {
    dispatch(updateUser(id));
    const searchParams = new URLSearchParams(location.search);
    setEditable(searchParams.get("edit") === "true");
  }, [dispatch, id, location.search]);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchCurrencies());
  }, [dispatch]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companycode) {
      alert("Please fill out the Company Code fields.");
    } else if (!companyname) {
      alert("Please fill out Company the Name fields.");
    } else if (!country) {
      alert("Please fill out Country the fields.");
    } else if (!currency) {
      alert("Please fill out Currency the fields.");
    } else if (!address01) {
      alert("Please fill out the Address 01 fields.");
    } else {
      dispatch(getUserObj(state, id));
      navigate("/");
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Would you like to delete?")) {
      dispatch(deleteUser(id));
      navigate("/");
    }
  };

  return (
    <div className="form-container-update">
      <div className="form-name-uptaded">
        <div className="Companyoverview_description">Company</div>

        <Link to="/create" className="btn-btn-success1">
          <FontAwesomeIcon icon={faPlus} className="me-11" />
        </Link>

        {editable ? (
          <>
            <button className="btn1">
              <FaEdit onClick={() => setEditable(false)} />
            </button>
          </>
        ) : (
          <button className="btn1" onClick={() => setEditable(true)}>
            <FaEdit />
          </button>
        )}

        <button className="save-button1" onClick={handleSubmit}>
          <FaSave />
        </button>

        <button
          className="btn-delete-update"
          onClick={() => handleDelete(id)}
          disabled={!editable} // Disable delete button in read-only mode
        >
          <FaTrash />
        </button>
      </div>
      <div className="updated-form">
        <h3>General</h3>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-part1-updated">
              <label>
                Company Code
                <input
                  type="text"
                  id="companycode"
                  className="companyCode"
                  name="companycode"
                  value={companycode || ""}
                  onChange={handleInputChange}
                  readOnly={!editable} // Make input readonly in read-only mode
                />
              </label>
            </div>
            <br />
            <div className="form-part2-updated">
              <label>
                Company Name
                <input
                  type="text"
                  id="companyname"
                  className="companyName"
                  name="companyname"
                  value={companyname || ""}
                  onChange={handleInputChange}
                  readOnly={!editable}
                />
              </label>
            </div>
            <br />
            <div className="form-part3-updated">
              <label>
                Description
                <input
                  type="text"
                  id="description"
                  className="description"
                  name="description"
                  placeholder="optional"
                  value={description || ""}
                  onChange={handleInputChange}
                  readOnly={!editable}
                />
              </label>
            </div>
            <br />
            <div className="form-part4-updated">
              <label>
                Country
                <select
                  name="country"
                  id="country"
                  value={country || ""}
                  onChange={handleInputChange}
                  disabled={!editable} // Disable select in read-only mode
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.Cname}>
                      {country.Cname}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <br />
            <div className="form-part5-updated">
              <label>
                Currency
                <select
                  name="currency"
                  id="currency"
                  value={currency || ""}
                  onChange={handleInputChange}
                  disabled={!editable}
                >
                  <option value="">Select Currency</option>
                  {currencies.map((currency) => (
                    <option key={currency.id} value={currency.C_name}>
                      {currency.C_name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <br />
            <div className="form-part6-updated">
              <label>
                Address 01
                <input
                  type="text"
                  name="address01"
                  id="address01"
                  value={address01 || ""}
                  onChange={handleInputChange}
                  readOnly={!editable}
                />
              </label>
            </div>
            <br />
            <div className="form-part7-updated">
              <label>
                Address 02
                <input
                  type="text"
                  id="address02"
                  name="address02"
                  placeholder="optional "
                  value={address02 || ""}
                  onChange={handleInputChange}
                  readOnly={!editable}
                />
              </label>
            </div>
            <br />
            <div className="form-part8-updated">
              <label>
                <input
                  type="checkbox"
                  name="defaultCompany"
                  id="defaultCompany"
                  checked={defaultCompany}
                  onChange={handleInputChange}
                  disabled={!editable} // Disable checkbox in read-only mode
                />
                Default Company
              </label>
              <br />
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
