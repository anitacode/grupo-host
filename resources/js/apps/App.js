import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { SetupContext, Loader } from './../utils/generals';
import { routesItems } from './../utils/routes';
import { Layout } from './../utils/Layout';
import './../../css/app.css';

const globalValues = {
  domainBackEnd: document.location.protocol + '//' + document.location.hostname + ':3000/api/',
  domainBackEndFile: document.location.protocol + '//' + document.location.hostname + ':3000/',
  domainFiles: document.location.protocol + '//grupo.host/'
}

function App() {
    const [ loadingMain, setLoadingMain ] = useState(true);
    const [ main, setMain ] = useState( JSON.parse(localStorage.getItem('main')) );
    const [loadLang, setLoadLang ] = useState(true);
    const [ global, ] = useState(globalValues);
    
    let getlocalConfig = localStorage.getItem('config');
    let getlocalTranslation = JSON.parse(localStorage.getItem('translations'));

    const getTranslation = () => {
      let url = globalValues.domainBackEndFile + 'translations/'+ getlocalConfig.lang +'_translations.json';
      fetch( url )
      .then(response => response.text())
      .then(re => {
        localStorage.setItem('translations', re);
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


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);