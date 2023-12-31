import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';
import Layout from '../src/Layout';

import App, {Container} from 'next/app';

export default class MyApp extends App {
  
    render(){
        const {Component, pageProps} = this.props;
        return (
           
            <div >
               <Layout>
               <Component {...pageProps} />
               </Layout>
            </div>
           
        );
    }
}