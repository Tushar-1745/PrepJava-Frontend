import React from "react";

// Importing page components for various sections of Hibernate
import HibernateOverview from "../../../pages/hibernatepages/HibernateOverview";
import HibernateMappings from "../../../pages/hibernatepages/HibernateMappings";
import HibernateAnnotations from "../../../pages/hibernatepages/HibernateAnnotations";
import HibernateHistory from "../../../pages/hibernatepages/HibernateHistory";
import HibernateArchitecture from "../../../pages/hibernatepages/HibernateArchitecture";
import HibernateConfiguration from "../../../pages/hibernatepages/HibernateConfiguration";


const HibernateCurrentPage = ({ currentPage }) => {
    const renderContent = () => {
        switch (currentPage) {
            case 'HibernateOverview':
                return <HibernateOverview />;
            case 'HibernateMappings':
                return <HibernateMappings/>;
            case 'HibernateAnnotations':
                return <HibernateAnnotations/>
            case 'HibernateHistory':
                return <HibernateHistory/>
            case 'HibernateArchitecture':
                return <HibernateArchitecture/>
            case 'HibernateConfiguration':
                return <HibernateConfiguration/>
            default:
                return <HibernateOverview />;  // Default page, e.g., "Introduction to Hibernate"
        }
    };

    return <div>{renderContent()}</div>;
};

export default HibernateCurrentPage;

