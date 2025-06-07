
import React from 'react';

import History from '../pages/javapages/History';
import InnerClasses from '../pages/javapages/InnerClasses.js';
import JavaHomePage from '../pages/javapages/JavaOverviewPage.js';
import DataTypes from '../pages/javapages/DataTypes.js';
import Variables from '../pages/javapages/Variables.js';
import Constructor from '../pages/javapages/Constructor.js';
import AccessModifiers from '../pages/javapages/AcessModifiers.js';
import Java8 from '../pages/javapages/Java8.js';
import ConditionalStatements from '../pages/javapages/ConditionalStatements.js';
import SiteHomePage from '../pages/javapages/SiteHomePage.js'

const WorkPage = ({ currentPage }) => {
    const renderPage = () => {
        switch (currentPage) {
            case 'JavaHomePage':
                return <JavaHomePage/>
            case 'History':
                return <History />;
            case 'Data Types':
                return <DataTypes/>;
            case 'Variables':
                return <Variables/>
            case 'Constructor':
                return <Constructor/>
            case 'Access Modifiers':
                return <AccessModifiers/>
            case 'Conditional Statement':
                return <ConditionalStatements/>
            case 'InnerClasses':
                return <InnerClasses />;
            case 'Java8':
                return <Java8/>
            default:
                return <JavaHomePage/>; // Default content
        }
    };

    return (
        <div>
            {renderPage()}
        </div>
    );
};

export default WorkPage;
