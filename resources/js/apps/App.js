import React, { useState } from 'react';
import { BrowserRouter, Routes } from "react-router-dom";
import axios from 'axios';
import { SetupContext, Loader } from './../utils/generals';
import { routesItems } from './../utils/routes';
import { Layout } from './../utils/Layout';
import './../../stylesheets/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const env = process.env.APP_ENV
let port
console.log(env)
env === 'local' ? port = ':3000' : port = ''

console.log('port', port)
const globalValues = {
  domainBackEnd: document.location.protocol + '//' + document.location.hostname + port + '/api/',
  domainBackEndFile: document.location.protocol + '//' + document.location.hostname + port + '/',
  domainFiles: document.location.protocol + '//grupo.host/'
}


const App = () => {
    const [ loadingMain, setLoadingMain ] = useState(true);
    const [ main, setMain ] = useState( JSON.parse(localStorage.getItem('main')) );
    const [loadLang, setLoadLang ] = useState(true);
    const [ global, ] = useState(globalValues);
    
    let getlocalConfig = localStorage.getItem('config');
    let getlocalTranslation = JSON.parse(localStorage.getItem('translations'));

    console.log(globalValues)

    const getTranslation = () => {
      let url = globalValues.domainBackEndFile + 'translations/'+ getlocalConfig.lang +'_translations.json';
      axios.get( url )
      .then(re => {
        localStorage.setItem('translations', JSON.stringify(re.data));
        setLoadLang(false);
      });
    }

    if(getlocalConfig === null){
        getlocalConfig = {
          lang: 1,
          currency: 3,
          country: 11,
        };
    }else{
      getlocalConfig = JSON.parse(getlocalConfig);
    }

    if(getlocalTranslation === null ){
      getTranslation();
    }else if (getlocalTranslation !== null && loadLang === true){
      setLoadLang(false);
    }

    return (
      <div data-testid='main'>
      {!loadLang ?
        <SetupContext.Provider value={
          { 
            global,
            loading: loadingMain,
            setLoadingMain,
            config : getlocalConfig,
            main,
            setMain,
          }
        }>
            <Layout>
              <BrowserRouter>
                  <Routes>
                    { routesItems.map( (route) => route ) }
                  </Routes>
              </BrowserRouter>
            </Layout>
      </SetupContext.Provider>
      :
      <Loader/>
    }
    </div>
    );
}

export default App;