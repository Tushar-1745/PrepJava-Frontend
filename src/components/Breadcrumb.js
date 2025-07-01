// import React from 'react';
// import { FaChevronRight } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const Breadcrumb = ({
//   breadcrumbItems,
//   currentPage,
//   searchQuery,
//   setSearchQuery,
//   isMobile = false,
//   toggleSidebar,
// }) => {
//   const navigate = useNavigate();

//   const handleBreadcrumbClick = (item) => {
//     if (item === 'Home') navigate('/javapage');
//     else if (item === 'DBMS') navigate('/dbmsoverview');
//     else if (item === 'MySQL') navigate('/mysql');
//   };

//   const formatPageTitle = (title) => {
//     return title.replace(/([A-Z])/g, ' $1').trim(); // JavaJDBC → Java JDBC
//   };

//   return (
//     <div
//       style={{
//         ...styles.wrapper,
//         flexDirection: isMobile ? 'column' : 'row',
//         alignItems: isMobile ? 'flex-start' : 'center',
//         justifyContent: 'space-between',
//         gap: isMobile ? '8px' : '0',
//       }}
//     >
//       {/* Left: Hamburger + Breadcrumb */}
//       <div style={styles.breadcrumbLine}>
//         {isMobile && (
//           <button onClick={toggleSidebar} style={styles.hamburger}>
//             &#9776;
//           </button>
//         )}
//         <div style={styles.breadcrumbs}>
//           {breadcrumbItems.map((item, index) => (
//             <span key={index} style={styles.breadcrumbItem}>
//               <span
//                 onClick={() => handleBreadcrumbClick(item)}
//                 style={{
//                   color: index === breadcrumbItems.length - 1 ? '#2c3e50' : '#16a085',
//                   fontWeight: index === breadcrumbItems.length - 1 ? 'bold' : 'normal',
//                   cursor: 'pointer',
//                 }}
//               >
//                 {item}
//               </span>
//               {index < breadcrumbItems.length - 1 && (
//                 <FaChevronRight style={{ margin: '0 5px' }} />
//               )}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Right: Search */}
//       <input
//         type="text"
//         placeholder={`Search in ${formatPageTitle(currentPage)}`}
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         style={styles.searchInput}
//       />
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     display: 'flex',
//     width: '100%',
//     padding: '1px 15px',
//     backgroundColor: '#fff',
//     flexWrap: 'wrap',
//   },
//   breadcrumbLine: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     flexWrap: 'wrap',
//   },
//   breadcrumbs: {
//     display: 'flex',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     fontSize: '14px',
//     gap: '5px',
//     color: '#2c3e50',
//   },
//   breadcrumbItem: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   hamburger: {
//     fontSize: '20px',
//     padding: '8px 12px',
//     cursor: 'pointer',
//     backgroundColor: '#2c3e50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//   },
//   searchInput: {
//     padding: '8px 12px',
//     fontSize: '14px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     outline: 'none',
//     minWidth: '180px',
//     flexShrink: 0,
//   },
// };

// export default Breadcrumb;


import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Breadcrumb = ({
  breadcrumbItems,
  currentPage,
  searchQuery,
  setSearchQuery,
  isMobile = false,
  toggleSidebar,
}) => {
  const navigate = useNavigate();

  const handleBreadcrumbClick = (item) => {
    if (item === 'Home') navigate('/javapage');
    else if (item === 'DBMS') navigate('/dbmsoverview');
    else if (item === 'MySQL') navigate('/mysql');
    else if (item === 'Java Overview') navigate('/javaoverview');
    // add more routes as needed
  };

  const formatPageTitle = (title) => {
    return title.replace(/([A-Z])/g, ' $1').trim();
  };

  return (
    <div
      style={{
        ...styles.wrapper,
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '8px' : '0',
      }}
    >
      {/* Left: Hamburger + Breadcrumb Trail */}
      <div style={styles.breadcrumbLine}>
        {isMobile && (
          <button onClick={toggleSidebar} style={styles.hamburger}>
            &#9776;
          </button>
        )}
        <div style={styles.breadcrumbs}>
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
      </div>

      {/* Right: Search Input */}
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
  wrapper: {
    display: 'flex',
    width: '100%',
    padding: '10px 15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    marginBottom: '15px',
    flexWrap: 'wrap',
  },
  breadcrumbLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  breadcrumbs: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    gap: '5px',
    color: '#2c3e50',
  },
  breadcrumbItem: {
    display: 'flex',
    alignItems: 'center',
  },
  hamburger: {
    fontSize: '20px',
    padding: '8px 12px',
    cursor: 'pointer',
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
  searchInput: {
    padding: '8px 12px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
    minWidth: '180px',
    flexShrink: 0,
  },
};

export default Breadcrumb;
