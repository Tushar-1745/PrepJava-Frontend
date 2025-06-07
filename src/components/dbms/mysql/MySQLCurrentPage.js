// MySQLCurrentPage.js
import React from 'react';
import MySQLOverview from '../../../pages/dbmspages/mysqlpages/MySQLOverview';
import MySQLInstallation  from '../../../pages/dbmspages/mysqlpages/MySQLInstallation';
import MySQLCommands from '../../../pages/dbmspages/mysqlpages/MySQLCommands';
import MySQLIntro from '../../../pages/dbmspages/mysqlpages/MySQLOverview';
import MySQLClauses from '../../../pages/dbmspages/mysqlpages/MySQLClauses';
import AggregateFunctions from '../../../pages/dbmspages/mysqlpages/functions/AggregateFunctions';
import StringFunctions from '../../../pages/dbmspages/mysqlpages/functions/StringFunctions.js';
import UserDefinedFunctions from '../../../pages/dbmspages/mysqlpages/functions/UserdefinedFunctions';
import DateTimeFunctions from '../../../pages/dbmspages/mysqlpages/functions/DateTimeFunctions';
import SystemFunctions from '../../../pages/dbmspages/mysqlpages/functions/SystemFunctions';
import NumericFunctions from '../../../pages/dbmspages/mysqlpages/functions/NumericFunctions';
import MySQLDataTypes from '../../../pages/dbmspages/mysqlpages/DataTypes';
import Constraints from '../../../pages/dbmspages/mysqlpages/Constraints.js';
import Keys from '../../../pages/dbmspages/mysqlpages/Keys.js';
import MySQLViews from '../../../pages/dbmspages/mysqlpages/MySQLViews.js';
import Triggers from '../../../pages/dbmspages/mysqlpages/Triggers.js';
import SQL from '../../../pages/dbmspages/mysqlpages/SQL.js';
import InnerJoin from '../../../pages/dbmspages/mysqlpages/joins/InnerJoin.js';
import LeftJoin from '../../../pages/dbmspages/mysqlpages/joins/LeftJoin.js';
import JoinIntro from '../../../pages/dbmspages/mysqlpages/joins/JoinIntro.js';
import RightJoin from '../../../pages/dbmspages/mysqlpages/joins/RightJoin.js';
import FullJoin from '../../../pages/dbmspages/mysqlpages/joins/FullJoin.js';

const MySQLCurrentPage = ({ currentPage }) => {
    switch (currentPage) {
        case 'Understand MySQL':
            return <MySQLIntro/>;
        case 'Installation':
            return <MySQLInstallation />;
        case 'Commands':
            return <MySQLCommands />;
        case 'SQL':
            return <SQL/>
        case 'MySQLDataTypes':
            return <MySQLDataTypes/>
        case 'Clauses':
            return <MySQLClauses />
        case 'AggregateFunctions':
            return <AggregateFunctions />
        case 'StringFunctions':
            return <StringFunctions />
        case 'NumericFunctions':
            return <NumericFunctions/>
        case 'DateTimeFunctions':
            return <DateTimeFunctions />
        case 'SystemFunctions':
            return <SystemFunctions/>
        case 'UserdefinedFunctions':
            return <UserDefinedFunctions />
        case 'Constraints':
            return <Constraints />;
        case 'Keys':
            return <Keys />
        case 'Views':
            return <MySQLViews />
        case 'JoinIntro':
            return <JoinIntro/>
        case 'InnerJoin':
            return <InnerJoin />
        case 'LeftJoin':
            return <LeftJoin />
        case 'RightJoin':
            return <RightJoin />
        case 'FullJoin':
            return <FullJoin/>
        case 'Triggers':
            return <Triggers/>
        default:
            return <MySQLOverview />;
    }
};

export default MySQLCurrentPage;
