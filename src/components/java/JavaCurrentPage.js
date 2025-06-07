import React from 'react';
import JavaInfoHomePage from '../../pages/javapages/JavaOverviewPage';
import AccessModifiers from '../../pages/javapages/AcessModifiers';
import Variables from '../../pages/javapages/Variables';
import Constructor from '../../pages/javapages/Constructor';
import DataTypes from '../../pages/javapages/DataTypes';
import ConditionalStatements from '../../pages/javapages/ConditionalStatements';
import History from '../../pages/javapages/History';
import InnerClass from'../../pages/javapages/InnerClass';
import MemoryManagement from '../../pages/javapages/MemoryManagement';
import Java8  from '../../pages/javapages/Java8';
import Packages from '../../pages/javapages/Packages';
import Inheritance from '../../pages/javapages/Inheritance';
import Polymorphism from '../../pages/javapages/Polymorphism';
import LegacyClasses from '../../pages/javapages/LegacyClasses';
import JdkJreJvm from '../../pages/javapages/JdkJreJvm';
import ComparableAndComparatorPage from '../../pages/javapages/ComparableandComparatorInterface';
import SerializationandDeserialization from '../../pages/javapages/SerializationandDeserialization';
import Multithreading from '../../pages/javapages/Multithreading';
import ExceptionHandling from '../../pages/javapages/ExceptionHandling';
import Abstraction from '../../pages/javapages/Abstraction';
import Encapsulation from '../../pages/javapages/Encapsulation';
import JavaOverviewPage from '../../pages/javapages/JavaOverviewPage';
import FileHandling from '../../pages/javapages/FileHandling';
import Class from '../../pages/javapages/Class';
import Object from '../../pages/javapages/Object';
import Interface from '../../pages/javapages/Interface';
import LambdaExpressions from '../../pages/javapages/java8/LambdaExpressions';
import FunctionalInterfaces from '../../pages/javapages/java8/FunctionalInterfaces';
import MethodReferences from '../../pages/javapages/java8/MethodReferences';
import StreamsAPI from '../../pages/javapages/java8/StreamsAPI';
import OptionalClass from '../../pages/javapages/java8/OptionalClass';
import DefaultMethods from '../../pages/javapages/java8/DefaultMethods';
import NewDateTimeAPI from '../../pages/javapages/java8/NewDateTimeAPI';
import CollectorClass from '../../pages/javapages/java8/CollectorClass';
import Operators from '../../pages/javapages/Operators';
import JDBC from '../../pages/javapages/JDBC';
import TypeCasting from '../../pages/javapages/TypeCasting';

const JavaCurrentPage = ({ currentPage }) => {
    const renderContent = () => {
        switch (currentPage) {
            case 'JavaOverview':
                return <JavaInfoHomePage />;
            case 'History':
                return <History />
            case 'Class':
                return <Class/>
            case 'Object':
                return <Object />
            case 'Interface':
                return <Interface/>
            case 'JdkJreJvm':
                return <JdkJreJvm/>
            case 'Packages':
                return <Packages />
            case 'Operators':
                return <Operators/>
            case 'AccessModifiers':
                return <AccessModifiers />;
            case 'Variables':
                return <Variables />;
            case 'Constructor':
                return <Constructor/>
            case 'DataTypes':
                return <DataTypes/>
            case 'ConditionalStatements':
                return <ConditionalStatements/>
            case 'Inheritance':
                return <Inheritance/>
            case 'Polymorphism':
                return <Polymorphism />
            case 'Abstraction':
                return <Abstraction />
            case 'Encapsulation':
                return <Encapsulation/>
            case 'ComparableandComparatorInterface':
                return <ComparableAndComparatorPage/>
            case 'MemoryManagement':
                return <MemoryManagement/>
            case 'SerializationandDeserialization':
                return <SerializationandDeserialization/>
            case 'LegacyClasses':
                return <LegacyClasses/>
            case 'InnerClass':
                return <InnerClass />
            case 'TypeCasting':
                return <TypeCasting/>
            case 'Java8':
                return <Java8 />
            case 'Multithreading':
                return <Multithreading />
            case 'ExceptionHandling':
                return <ExceptionHandling />
            case 'FileHandling':
                return <FileHandling />
            case 'JDBC':
                return <JDBC/>
            case 'LambdaExpressions':
                return <LambdaExpressions />
            case 'FunctionalInterfaces':
                return <FunctionalInterfaces />
            case 'MethodReferences':
                return <MethodReferences />
            case 'StreamsAPI':
                return <StreamsAPI />
            case 'OptionalClass':
                return <OptionalClass />
            case 'DefaultMethods':
                return <DefaultMethods />
            case 'CollectorClass':
                return <CollectorClass/>
            case 'DateTimeAPI':
                return <NewDateTimeAPI/>
            default:
                return <JavaOverviewPage />;
        }
    };

    return <div>{renderContent()}</div>;
};

export default JavaCurrentPage;
