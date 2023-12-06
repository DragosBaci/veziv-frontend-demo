import { Route, Routes } from 'react-router-dom';
import Login from '../ui/Login/Login';
import React from 'react';
import PageContent from '../ui/PageContent/PageContent';
import Dashboard from '../ui/Dashboard/Dashboard';
import Edit from '../ui/Edit/Edit';
import CardEdit from '../components/CardEdit/CardEdit';
import formData from '../utils/FormData';

const RoutesMapping = () => {
    return (
        <Routes>
            <Route path="/" element={<PageContent />} />
            <Route path="/:id" element={<PageContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path={'/admin/edit/:id'} element={<Edit />} />
            <Route path={'/admin/edit/cardEdit/:id'} element={<CardEdit formData={formData.card} />} />
        </Routes>
    );
};

export default RoutesMapping;
