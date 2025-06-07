import React from 'react';
import DSAOverview from '../../pages/dsapages/DSAOverview';
import String from '../../pages/dsapages/String';
import Array from '../../pages/dsapages/Array';
import ArrayList from '../../pages/dsapages/ArrayList';
import StringBuilder from '../../pages/dsapages/StringBuilder';
import LinkedList from '../../pages/dsapages/LinkedList';
import HashMap from '../../pages/dsapages/HashMap';
import Tree from '../../pages/dsapages/Tree';
import BinaryTree from '../../pages/dsapages/BinaryTree';
import BinarySearchTree from '../../pages/dsapages/BinarySearchTree';
import CreationalPatterns from '../../pages/dsapages/DesignPatterns/CreationalPatterns';
import StructuralPatterns from '../../pages/dsapages/DesignPatterns/StructuralPatterns';
import BehavioralPatterns from '../../pages/dsapages/DesignPatterns/BehavioralPatterns';
import LinearSearch from '../../pages/dsapages/SearchAlgorithms/LinearSearch';
import BinarySearch from '../../pages/dsapages/SearchAlgorithms/BinarySearch';

import Recursion from '../../pages/dsapages/Recursion';
import Backtracking from '../../pages/dsapages/Backtracking';

const DsaCurrentPage = ({ currentPage }) => {
    const renderContent = () => {
        switch (currentPage) {
            case 'DsaOverview':
                return <DSAOverview />;
            case 'Recursion':
                return <Recursion />
            case 'Backtracking':
                return <Backtracking/>
            case 'String':
                return <String/>
            case 'Array':
              return <Array/>
            case 'ArrayList':
              return <ArrayList/>
            case 'StringBuilder':
                return <StringBuilder/>
            case 'LinkedList':
                return <LinkedList/>
            case 'HashMap':
                return <HashMap />
            case 'Tree':
                return <Tree/>
            case 'BinaryTree':
                return <BinaryTree/>
            case 'BinarySearchTree':
                return <BinarySearchTree />
            case 'LinearSearch':
                return <LinearSearch />
            case 'BinarySearch':
                return <BinarySearch/>
            case 'CreationalPatterns':
                return <CreationalPatterns />
            case 'StructuralPatterns':
                return <StructuralPatterns />
            case 'BehavioralPatterns':
                return <BehavioralPatterns/>
            default:
                return <DSAOverview />;
        }
    };

    return <div>{renderContent()}</div>;
};

export default DsaCurrentPage;
