import React from "react";
import SpringbootIntroduction from "../../../pages/springbootpages/SpringBootIntroduction";
import SpringBootAnnotations from "../../../pages/springbootpages/SpringBootAnnotations";
import DependencyInjection from "../../../pages/springbootpages/DependencyInjection";
import SpringbootConfiguration from "../../../pages/springbootpages/SpringbootConfiguration";
import StarterDependencies from "../../../pages/springbootpages/StarterDependencies";
import ConnectingToDatabase from "../../../pages/springbootpages/ConnectingToDatabase";
import CRUDWithJPA from "../../../pages/springbootpages/CRUDWithJPA";
import HibernateWithSpringBoot from "../../../pages/springbootpages/HibernateWithSpringBoot";
import SpringDataJPA from "../../../pages/springbootpages/SpringDataJPA";
import IoCContainer from "../../../pages/springbootpages/IoCContainer";
import HTTPStatusCodes from "../../../pages/springbootpages/HTTPStatusCodes";
import RestApi from "../../../pages/springbootpages/RestApi";


const SpringbootCurrentPage = ({ currentPage }) => {
    const renderContent = () => {
        switch (currentPage) {
            case 'SpringbootIntroduction':
                return <SpringbootIntroduction />;
            case 'REST API':
                return <RestApi/>
            case 'HTTPStatusCodes':
                return <HTTPStatusCodes/>
            case 'IoCContainer':
                return <IoCContainer/>
            case 'SpringBoot Annotations':
                return <SpringBootAnnotations />
            case 'Springboot Configuration':
                return <SpringbootConfiguration/>
            case 'Dependency Injection':
                return <DependencyInjection />
            case 'Starter Dependencies':
                return <StarterDependencies />
            case 'ConnectingToDatabase':
                return <ConnectingToDatabase />
            case 'SpringDataJPA':
                return <SpringDataJPA/>
            case 'CRUDWithJPA':
                return <CRUDWithJPA />
            case 'HiberanteWithSpringBoot':
                return <HibernateWithSpringBoot/>
            default:
                return <SpringbootIntroduction />;  // Default page, e.g., "Introduction to Hibernate"
        }
    };

    return <div>{renderContent()}</div>;
};

export default SpringbootCurrentPage;

