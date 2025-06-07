import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation


const Breadcrumb = ({ breadcrumbItems }) => {
  const navigate = useNavigate();

  // Function to handle breadcrumb item click
  const handleBreadcrumbClick = (item) => {
    if (item === 'Home') {
      navigate('/javapage'); // Navigate to home page
    } else if (item === 'DBMS') {
      navigate('/dbmsoverview'); // Navigate to DBMS page
    } else if (item === 'MySQL') {
      navigate('/mysql'); // Navigate to MySQL page
    }
  };

  return (
    <div style={{ padding: '10px 15px', backgroundColor: 'white'}}>
      {breadcrumbItems.map((item, index) => (
        <span key={index}>
          <span
            onClick={() => handleBreadcrumbClick(item)} // Make breadcrumb items clickable
            style={{
              color: index === breadcrumbItems.length - 1 ? '#2c3e50' : '#16a085',
              fontWeight: index === breadcrumbItems.length - 1 ? 'bold' : 'normal',
              cursor: 'pointer', // Adding pointer cursor to indicate clickable items
            }}
          >
            {item}
          </span>
          {index < breadcrumbItems.length - 1 && (
            <FaChevronRight style={{ margin: '0 5px' }} />
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
