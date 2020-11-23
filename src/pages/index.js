import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Open Source Low-Code Development Platform`}
      description="">

    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
        <div class="text-center">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block">Open Source </span>
            <span class="block text-indigo-600">Low-Code Development Platform</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          You do not have to be a developer to build apps using the Steedos Platform. <br/>
          With drag-and-drop simplicity, just about anyone can create apps that automate business processes.
          </p>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="absolute inset-0 flex flex-col" aria-hidden="true">
        <div class="flex-1"></div>
        <div class="flex-1 w-full bg-gray-800"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <img class="relative rounded-lg shadow-lg" src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg" alt="App screenshot"/>
      </div>
    </div>
     
    </Layout>
  );
}

export default Home;
