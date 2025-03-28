import React from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'; // For optional Bootstrap styling
import './JobListings.css'; // Import custom CSS

const jobPosts = [
    {
      id: 1,
      title: 'Full Stack Developer',
      description: 'Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.',
      applyLink: 'https://example.com/apply/full-stack-developer',
    },
    {
      id: 2,
      title: 'Digital Marketing Specialist',
      description: 'Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.',
      applyLink: 'https://example.com/apply/digital-marketing-specialist',
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      description: 'Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.',
      applyLink: 'https://example.com/apply/ux-ui-designer',
    },
    {
      id: 4,
      title: 'Data Scientist',
      description: 'Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.',
      applyLink: 'https://example.com/apply/data-scientist',
    },
    {
      id: 5,
      title: 'Customer Support Representative',
      description: 'Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.',
      applyLink: 'https://example.com/apply/customer-support-representative',
    },
    {
      id: 6,
      title: 'Data Analyst',
      description: 'Discover hidden insights from unstructured data and solve business problems. Prior experience in Python, SQL and Tableau required.',
      applyLink: 'https://example.com/apply/data-analyst',
    }
];

const JobListings = () => (
  <Container>
    <Typography variant="h4" gutterBottom className="text-center my-4">Job Listings</Typography>
    <div className="grid-container">
      {jobPosts.map(job => (
        <Card key={job.id} className="grid-item shadow-sm">
          <CardContent>
            <Typography variant="h5" component="div" className="mb-2">{job.title}</Typography>
            <Typography variant="body2" color="textSecondary" className="mb-4">{job.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={job.applyLink}>Apply Now</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  </Container>
);

export default JobListings;
