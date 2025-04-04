import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../redux/jobSlice';
import { Alert, Spinner, Container, Card, Button } from 'react-bootstrap';
import './Jobs.css'; // Custom CSS file for modern design

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return (
      <Container className="my-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Available Jobs</h2>
      <div className="jobs-grid-container">
        {jobs.map((job) => (
          <Card key={job._id} className="jobs-card shadow-sm">
            <Card.Body>
              <Card.Title className="job-title">{job.jobTitle}</Card.Title>
              <Card.Subtitle className="job-company">{job.companyName}</Card.Subtitle>
              <hr />
              <Card.Text>
                <span className="job-label">Description:</span>
                <span className="job-description">{job.description}</span>
              </Card.Text>
              <Card.Text>
                <span className="job-label">Salary:</span> 
                <span className="job-salary">${job.salary.toLocaleString()}</span>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="primary" size="sm">Apply Now</Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Jobs;
