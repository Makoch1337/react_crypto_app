import React from 'react';
import { Layout } from 'antd';
import { calc } from 'antd/es/theme/internal';
import AppHeader from './Components/Layout/AppHeader';
import AppSider from './Components/Layout/AppSider';
import AppContent from './Components/Layout/AppContent';


export default function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  )
}