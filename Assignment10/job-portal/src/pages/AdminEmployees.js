import React, { useState, useEffect } from 'react';
import { Container, Table, Alert } from 'react-bootstrap';
import axios from '../axiosConfig';

const AdminEmployees = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/user/getAll');
        setUsers(response.data.users);
      } catch (err) {
        setError('Failed to fetch users. Please try again.');
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container>
      <h2>Employees</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminEmployees;
