import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../ui/Login/Login';
import { LayoutGroup } from 'framer-motion';
import React from 'react';
import PageContent from '../ui/PageContent/PageContent';

const RoutesMapping = () => {
    return (
        <LayoutGroup>
            <Router>
                <Routes>
                    <Route path="/" element={<PageContent />} />
                    <Route path="/:id" element={<PageContent />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </LayoutGroup>
    );
};

export default RoutesMapping;
