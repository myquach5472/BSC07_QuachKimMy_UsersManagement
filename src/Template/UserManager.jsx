import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from '../Components/Form';
import SearchBar from '../Components/SearchBar';
import List from '../Components/List';

export default class UserManager extends Component {
  render() {
    return (
      <div>
        <div className='row w-100'>
          <div className='col-4 bg-light text-center vh-100 fixed'>
            <div className="container m-3 pt-5">
              <h1 className='text-success fs-1 mb-4'>New User</h1>
              <Form />
            </div>
          </div>
          <div className='col-8 bg-white text-center vh-100'>
            <div className="container m-3">
              <h1 className='text-success fs-1 mb-4'>Users</h1>
              <SearchBar />
              <List />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
