import React, { useState } from 'react';

const JobSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Java Developer Intern',
      company: 'eQ Technologic',
      location: 'Pune, India',
      type: 'Internship',
      description: 'Looking for Java developers with Spring Boot knowledge.',
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Tech Solutions',
      location: 'Remote',
      type: 'Full-Time',
      description: 'Work with React and Spring Boot on enterprise apps.',
    },
    {
      id: 3,
      title: 'Backend Developer',
      company: 'StartupX',
      location: 'Bangalore, India',
      type: 'Part-Time',
      description: 'Develop REST APIs using Java and Hibernate.',
    },
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    job.location.toLowerCase().includes(location.toLowerCase()) &&
    job.type.toLowerCase().includes(jobType.toLowerCase())
  );

  const styles = {
    container: {
      width: '100%',
      padding: '40px 20px',
      boxSizing: 'border-box',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, sans-serif',
    },
    header: {
      fontSize: '32px',
      fontWeight: '600',
      marginBottom: '30px',
      textAlign: 'center',
      color: '#333',
    },
    filters: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      justifyContent: 'center',
      marginBottom: '30px',
    },
    input: {
      padding: '12px',
      fontSize: '16px',
      width: '250px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      outline: 'none',
    },
    select: {
      padding: '12px',
      fontSize: '16px',
      width: '250px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      outline: 'none',
    },
    jobCard: {
      backgroundColor: '#fff',
      padding: '20px',
      margin: '15px auto',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
      transition: 'transform 0.2s ease',
      maxWidth: '800px',
    },
    jobCardHover: {
      transform: 'scale(1.02)',
    },
    jobTitle: {
      fontSize: '22px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '5px',
    },
    company: {
      color: '#666',
      marginBottom: '8px',
    },
    badge: {
      display: 'inline-block',
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '4px 10px',
      fontSize: '13px',
      borderRadius: '6px',
      marginBottom: '10px',
    },
    description: {
      fontSize: '15px',
      color: '#444',
    },
    noJobs: {
      textAlign: 'center',
      color: '#c00',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Explore Java Job Opportunities</h1>

      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search job title..."
          style={styles.input}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location..."
          style={styles.input}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <select
          style={styles.select}
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Internship">Internship</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
        </select>
      </div>

      <div>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              style={{
                ...styles.jobCard,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.02)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
              <h2 style={styles.jobTitle}>{job.title}</h2>
              <p style={styles.company}>
                {job.company} - {job.location}
              </p>
              <span style={styles.badge}>{job.type}</span>
              <p style={styles.description}>{job.description}</p>
            </div>
          ))
        ) : (
          <p style={styles.noJobs}>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobSearchPage;
