import * as React from 'react';
import { useNavigate } from 'react-router-dom';
// import './style.css';

export default function Registration() {
  const navigate = useNavigate();
  const [list, setList] = React.useState([]);
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    mobile: '',
    age: null,
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      name: '',
      email: '',
      mobile: '',
      age: null,
      password: '',
    });
    setList([...list, user]);
  };

  const changeHandle = (e, type = '') => {
    switch (type) {
      case 'name':
        setUser({ ...user, ['name']: e.target.value });
        break;
      case 'email':
        setUser({ ...user, ['email']: e.target.value });
        break;
      case 'mobile':
        setUser({ ...user, ['mobile']: e.target.value });
        break;
      case 'age':
        setUser({ ...user, ['age']: e.target.value });
        break;
      case 'password':
        setUser({ ...user, ['password']: e.target.value });
        break;
    }
    console.log(user);
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-3 mb-3 align-items-center justify-content-between">
          <div className="col-6">
            <h3>Registration Page</h3>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button
              onClick={() => navigate('/')}
              className="btn btn-primary default"
            >
              Login
            </button>
          </div>
          <hr />
        </div>
        <div className="row mb-2">
          <div className="col-12">
            <div className="card">
              <div className="card-title">
                <h5 className="text-center">User Registration</h5>
              </div>
              <div className="card-body">
                <form className=" p-5  form-group">
                  <div className="form-row mb-2">
                    <div className="col-6 form-group">
                      <label htmlFor="user">User Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="user"
                        id="user"
                        value={user.name}
                        onChange={(event) => changeHandle(event, 'name')}
                      />
                    </div>
                    <div className="col-6 form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={(event) => changeHandle(event, 'email')}
                      />
                    </div>
                  </div>
                  <div className="form-row mb-2">
                    <div className="col-6 form-group">
                      <label htmlFor="mob">Mobile</label>
                      <input
                        className="form-control"
                        type="tel"
                        name="mob"
                        id="mob"
                        value={user.mobile}
                        onChange={(event) => changeHandle(event, 'mobile')}
                      />
                    </div>
                    <div className="col-6 form-group">
                      <label htmlFor="age">Age</label>
                      <input
                        className="form-control"
                        type="number"
                        name="age"
                        id="age"
                        value={user.age}
                        onChange={(event) => changeHandle(event, 'age')}
                      />
                    </div>
                  </div>
                  <div className="form-row mb-2">
                    <div className="col-6 form-group">
                      <label htmlFor="pass">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        name="pass"
                        id="pass"
                        value={user.password}
                        onChange={(event) => changeHandle(event, 'password')}
                      />
                    </div>
                    <div className="col-6 form-group">
                      <label htmlFor="cnfrm">Confirm Password</label>
                      <input
                        className="form-control"
                        type="password"
                        name="cnfrm"
                        id="cnfrm"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12 form-group">
                      <button
                        onClick={handleSubmit}
                        className="btn btn-primary default"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <h3>User List</h3>
                  <ul>
                    {list.map((val, index) => {
                      return <li key={index}>{val?.name}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
