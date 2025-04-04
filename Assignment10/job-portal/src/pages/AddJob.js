import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createJob } from '../redux/jobSlice';
import { Alert, Button, Form, Container, Card} from 'react-bootstrap';

const AddJob = () => {
  const [jobData, setJobData] = useState({
    companyName: '',
    jobTitle: '',
    description: '',
    salary: '',
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.jobs);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createJob(jobData))
      .unwrap()
      .then(() => {
        alert('Job successfully posted!');
        setJobData({ companyName: '', jobTitle: '', description: '', salary: '' });
      })
      .catch(() => {
        alert('Failed to post the job. Please try again.');
      });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="shadow-sm p-4" style={{ width: '100%', maxWidth: '500px', borderRadius: '12px' }}>
        <Card.Body>
          <h2 className="text-center mb-4 text-primary">Add Job</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="companyName" className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                name="companyName"
                value={jobData.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                required
              />
            </Form.Group>

            <Form.Group controlId="jobTitle" className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                name="jobTitle"
                value={jobData.jobTitle}
                onChange={handleChange}
                placeholder="Enter job title"
                required
              />
            </Form.Group>

            <Form.Group controlId="description" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={jobData.description}
                onChange={handleChange}
                placeholder="Enter job description"
                required
              />
            </Form.Group>

            <Form.Group controlId="salary" className="mb-3">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="number"
                name="salary"
                value={jobData.salary}
                onChange={handleChange}
                placeholder="Enter salary amount"
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={loading}
              style={{ borderRadius: '20px' }}
            >
              {loading ? 'Saving...' : 'Add Job'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};


export default AddJob;
