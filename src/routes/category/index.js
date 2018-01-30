import React from 'react';
import Category from './Category';
import CategoryForm from './CategoryForm';
import Layout from '../../components/Layout';

/* eslint-disable no-unused-vars */
export default async function loadCategory(context, params) {
  return {
    title: 'React Starter Kit',
    component: (
      <Layout pathname={context.pathname}>
        <Category />
      </Layout>
    ),
  };
}

/* eslint-disable no-unused-vars */
export async function newOne(context, params) {
  return {
    title: 'React Starter Kit',
    component: (
      <Layout pathname={context.pathname}>
        <CategoryForm />
      </Layout>
    ),
  };
}

/* eslint-disable no-unused-vars */
export async function editOne(context, params) {
  return {
    title: 'React Starter Kit',
    component: (
      <Layout pathname={context.pathname}>
        <CategoryForm />
      </Layout>
    ),
  };
}
