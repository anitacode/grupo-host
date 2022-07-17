
import React, { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { SetupContext } from './../utils/generals';

import '@testing-library/jest-dom'
import { Layout } from './Layout';

describe('Loading layout features', () => {

  const getlocalConfig = {
    lang: 1,
    currency: 3,
    country: 11,
  };
  render(
    <SetupContext.Provider value={
        { 
          global,
          loading: false,
          setLoadingMain: () => null,
          config : getlocalConfig,
          main: {"main":{"logo":"img/logo-host.svg","websitename":"Grupo Host"},"selected_country":{"id":11,"name":"Internacional","currencyid":3,"languageid":1,"get_currency":{"id":3,"name":"US Dollars","symbol":"US$","main":1,"exchange":"1","code":"USD","countryid":6,"active":1}},"languages":[{"id":1,"name":"Español","img":"img/general/2017/08/02/1/spain-icon77564.png","langtag":"es"},{"id":2,"name":"English","img":"img/general/2017/07/07/1/usa-icon10614.png","langtag":"en"}],"currencies":[{"id":1,"symbol":"RD$","code":"RD$"},{"id":3,"symbol":"US$","code":"USD"},{"id":4,"symbol":"$","code":"MEX"},{"id":5,"symbol":"$","code":"COP"},{"id":6,"symbol":"$","code":"CLP"},{"id":7,"symbol":"$","code":"ECS"},{"id":8,"symbol":"S/","code":"Soles"},{"id":9,"symbol":"Q","code":"GTQ"},{"id":10,"symbol":"$","code":"CRC"},{"id":12,"symbol":"Bs","code":"BS"},{"id":13,"symbol":"₲ ","code":"PYG"}],"countries":[{"id":1,"name":"República Dominicana","img":"img/general/2017/07/07/1/dominican-republic-1821135158.png"},{"id":2,"name":"Mexico","img":"img/general/2017/07/07/1/mexico-icon50099.png"},{"id":3,"name":"Ecuador","img":"img/general/2017/07/07/1/ecuador-icon212.png"},{"id":4,"name":"Colombia","img":"img/general/2017/07/07/1/colombia-icon88277.png"},{"id":5,"name":"El Salvador","img":"img/general/2017/07/07/1/el-salvador-icon1934.png"},{"id":6,"name":"United States","img":"img/general/2017/07/07/1/usa-icon10614.png"},{"id":7,"name":"Guatemala","img":"img/general/2017/07/07/1/guatemala-icon68411.png"},{"id":8,"name":"Costa Rica","img":"img/general/2017/07/11/1/costa-rica-icon31190.png"},{"id":9,"name":"Chile","img":"img/general/2017/07/11/1/chile-1829332686.png"},{"id":10,"name":"Perú","img":"img/general/2017/07/11/1/peru-icon90556.png"},{"id":11,"name":"Internacional","img":"img/general/2017/08/10/1/globe-icon-bb50741.png"},{"id":12,"name":"España","img":"img/general/2017/08/02/1/spain-icon77564.png"},{"id":13,"name":"Venezuela","img":"img/general/2017/09/18/1/venezuela-flag-icon76018.png"},{"id":14,"name":"Honduras","img":"img/general/2017/09/18/1/hondura-flag-icon23631.png"},{"id":16,"name":"Panamá","img":"img/general/2019/03/10/1/panama-icon-png48157.png"},{"id":17,"name":"Nicaragua","img":"img/general/2019/11/15/1/nicaragua39955.png"},{"id":18,"name":"Bolivia","img":"img/general/2019/11/17/1/bolivia-icon32633.png"},{"id":19,"name":"Puerto Rico","img":"img/general/2019/12/24/1/bandera-pr53362.png"},{"id":20,"name":"Paraguay","img":"img/general/2020/04/10/1/paraguay-flag73321.png"}],"main_menu":[{"id":1,"name":"menu_items-1-name","link":"menu_items-1-link","parent_id":0},{"id":2,"name":"menu_items-2-name","link":"menu_items-2-link","parent_id":0},{"id":3,"name":"menu_items-3-name","link":"menu_items-3-link","parent_id":0},{"id":19,"name":"menu_items-19-name","link":"menu_items-19-link","parent_id":2},{"id":20,"name":"menu_items-20-name","link":"menu_items-20-link","parent_id":2},{"id":21,"name":"menu_items-21-name","link":"menu_items-21-link","parent_id":2},{"id":22,"name":"menu_items-22-name","link":"menu_items-22-link","parent_id":2},{"id":23,"name":"menu_items-23-name","link":"menu_items-23-link","parent_id":2},{"id":24,"name":"menu_items-24-name","link":"menu_items-24-link","parent_id":2},{"id":25,"name":"menu_items-25-name","link":"menu_items-25-link","parent_id":2},{"id":26,"name":"menu_items-26-name","link":"menu_items-26-link","parent_id":2},{"id":27,"name":"menu_items-27-name","link":"menu_items-27-link","parent_id":2},{"id":28,"name":"menu_items-28-name","link":"menu_items-28-link","parent_id":2},{"id":29,"name":"menu_items-29-name","link":"menu_items-29-link","parent_id":2},{"id":30,"name":"menu_items-30-name","link":"menu_items-30-link","parent_id":2},{"id":31,"name":"menu_items-31-name","link":"menu_items-31-link","parent_id":2}],"menus_footer":[{"id":2,"name":"menu-2-name","links":[{"link":"menu_items-4-link","name":"menu_items-4-name","id":4},{"link":"menu_items-5-link","name":"menu_items-5-name","id":5},{"link":"menu_items-6-link","name":"menu_items-6-name","id":6},{"link":"menu_items-7-link","name":"menu_items-7-name","id":7},{"link":"menu_items-8-link","name":"menu_items-8-name","id":8}]},{"id":3,"name":"menu-3-name","links":[{"link":"menu_items-9-link","name":"menu_items-9-name","id":9},{"link":"menu_items-10-link","name":"menu_items-10-name","id":10},{"link":"menu_items-11-link","name":"menu_items-11-name","id":11},{"link":"menu_items-12-link","name":"menu_items-12-name","id":12},{"link":"menu_items-13-link","name":"menu_items-13-name","id":13},{"link":"menu_items-14-link","name":"menu_items-14-name","id":14}]},{"id":4,"name":"menu-4-name","links":[{"link":"menu_items-15-link","name":"menu_items-15-name","id":15},{"link":"menu_items-16-link","name":"menu_items-16-name","id":16}]},{"id":5,"name":"menu-5-name","links":[{"link":"menu_items-17-link","name":"menu_items-17-name","id":17},{"link":"menu_items-18-link","name":"menu_items-18-name","id":18}]}],"domains":[{"id":2,"extension":".com","catid":1,"img":"img/general/2017/08/03/1/com-logo64473.png"},{"id":3,"extension":".net","catid":1,"img":"img/general/2017/08/03/1/net-logo11113.png"},{"id":4,"extension":".org","catid":1,"img":"img/general/2017/08/03/1/org-logo4527.png"}]},
          setMain: () => null
        }
      }>
        <Layout />
     </SetupContext.Provider>
    )

  test('renders layout', () => {
    const mainElement = screen.getByTestId('layout');
    expect(mainElement).toBeInTheDocument();
  });  
});


