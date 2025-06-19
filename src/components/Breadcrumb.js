import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Breadcrumb = ({
  breadcrumbItems,
  currentPage,
  searchQuery,
  setSearchQuery,
  showSearch = true,
}) => {
  const navigate = useNavigate();

  const handleBreadcrumbClick = (item) => {
    if (item === 'Home') navigate('/javapage');
    else if (item === 'DBMS') navigate('/dbmsoverview');
    else if (item === 'MySQL') navigate('/mysql');
  };

  const formatPageTitle = (title) => {
    return title.replace(/([A-Z])/g, ' $1').trim(); // JavaJDBC => Java JDBC
  };

  return (
    <div style={styles.wrapper}>
      {/* Line 1: Hamburger + Breadcrumb */}
      <div style={styles.lineOne}>
        {breadcrumbItems.map((item, index) => (
          <span key={index} style={styles.breadcrumbItem}>
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

      {/* Line 2: Search box (only visible if showSearch is true) */}
      {showSearch && (
        <div style={styles.lineTwo}>
          <input
            type="text"
            placeholder={`Search in ${formatPageTitle(currentPage)}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  lineOne: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
  },
  lineTwo: {
    width: '100%',
  },
  breadcrumbItem: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '8px 12px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
    width: '100%',
  },
};

export default Breadcrumb;
