import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPerson, editPerson } from '../Redux/action';


const PersonForm = ({ editingPerson }) => {
  const [id, setId] = useState(editingPerson ? editingPerson.id : '');
  const [name, setName] = useState(editingPerson ? editingPerson.name : '');
  const [email, setEmail] = useState(editingPerson ? editingPerson.email : '');
  const [telephone, setTelephone] = useState(
    editingPerson ? editingPerson.telephone : ''
  );
  const [error, setError] = useState('');
  const people = useSelector(state => state.people);
  const dispatch = useDispatch();

  // Validation 
  const handleSubmit = e => {
    e.preventDefault();

    if (!id || !name || !email || !telephone) {
      setError('All fields are required.');
      return;
    }

    if (id.length < 1 || id.length > 7) {
      setError('ID must be between 1 and 7 characters.');
      return;
    }

            // ID shouldn't be repeated.
    const existingPerson = people.find(person => person.id === id);
    if (!editingPerson && existingPerson) {
      setError('ID already exists. Please choose a different one.');
      return;
    }

    if (telephone.length < 10 || telephone.length > 11) {
      setError('Telephone must be between 10 and 11 digits.');
      return;
    }

    setError('');

    const person = {
      id,
      name,
      email,
      telephone
    };

    if (editingPerson) {
      dispatch(editPerson(person));
    } else {
      dispatch(addPerson(person));
    }

    setId('');
    setName('');
    setEmail('');
    setTelephone('');
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <input
      className="form-control mb-3"
        type="text"
        placeholder="ID"
        value={id}
        onChange={e => setId(e.target.value)}
        disabled={!!editingPerson} // Disable ID input when editing
      />
      <input
       className="form-control mb-3"
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
       className="form-control mb-3"
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
       className="form-control mb-3"
        type="tel"
        placeholder="Telephone"
        value={telephone}
        onChange={e => setTelephone(e.target.value)}
      />
      <button className='btn btn-success mt-4' type="submit">{editingPerson ? 'Edit' : 'Add'} Person</button>
      {error && <p>{error}</p>}
    </form>
    </div>
  );
};

export default PersonForm;
