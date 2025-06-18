import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Breadcrumb = ({ breadcrumbItems, currentPage, searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  const handleBreadcrumbClick = (item) => {
    if (item === 'Home') {
      navigate('/javapage');
    } else if (item === 'DBMS') {
      navigate('/dbmsoverview');
    } else if (item === 'MySQL') {
      navigate('/mysql');
    }
  };

  // Function to format currentPage into readable placeholder
  const formatPageTitle = (title) => {
    return title.replace(/([A-Z])/g, ' $1').trim(); // e.g. JavaJDBC => Java JDBC
  };

  return (
    <div style={styles.container}>
      {/* Breadcrumb Items */}
      <div style={styles.breadcrumbs}>
        {breadcrumbItems.map((item, index) => (
          <span key={index}>
            <span
              onClick={() => handleBreadcrumbClick(item)}
              style={{
                color: index === breadcrumbItems.length - 1 ? '#2c3e50' : '#16a085',
                fontWeight: index === breadcrumbItems.length - 1 ? 'bold' : 'normal',
                cursor: 'pointer',
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

      {/* Search Box */}
      <input
        type="text"
        placeholder={`Search in ${formatPageTitle(currentPage)}`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchInput}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '10px',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '5px 15px',
    width: '100%',
  },
  breadcrumbs: {
    flex: 1,
    minWidth: '200px',
  },
  searchInput: {
    padding: '8px 12px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
    minWidth: '180px',
  },
};

export default Breadcrumb;
