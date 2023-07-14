import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePerson } from '../Redux/action'; // Remove the editPerson import
import { Modal, Button } from 'react-bootstrap';

const PeopleList = () => {
  const searchQuery = useSelector(state => state.searchQuery);
  const people = useSelector(state => state.people);
  const dispatch = useDispatch();
  const [editPerson, setEditPerson] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedTelephone, setEditedTelephone] = useState('');

  const handleDelete = id => {
    dispatch(deletePerson(id));
  };

  const handleEdit = person => {
    setEditPerson(person);
    setEditedName(person.name);
    setEditedEmail(person.email);
    setEditedTelephone(person.telephone);
  };

  const handleSave = () => {
    const updatedPerson = {
      ...editPerson,
      name: editedName,
      email: editedEmail,
      telephone: editedTelephone
    };
    dispatch({ type: 'EDIT_PERSON', payload: updatedPerson }); // Dispatch the editPerson action directly
    setEditPerson(null);
  };

  const handleClose = () => {
    setEditPerson(null);
  };

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.telephone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredPeople.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone#</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredPeople.map(person => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.telephone}</td>
                <td>
                  <button className='btn btn-danger me-2' onClick={() => handleDelete(person.id)}>Delete</button>
                  <button className='btn btn-warning' onClick={() => handleEdit(person)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No results found.</p>
      )}

      {/* Modal */}
      {editPerson && (
        <Modal show={true} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form id="editForm">
              <p className="text-warning">ID cannot be changed!</p>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={editedEmail}
                onChange={e => setEditedEmail(e.target.value)}
                required
              />
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                value={editedName}
                onChange={e => setEditedName(e.target.value)}
                required
              />
              <input
                className="form-control"
                type="tel"
                placeholder="Telephone"
                value={editedTelephone}
                onChange={e => setEditedTelephone(e.target.value)}
                required
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default PeopleList;
