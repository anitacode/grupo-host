import React from "react";
import { Route } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import ContactUs from '../components/ContactUs';
import Legalities from '../components/Legalities';
import Services from '../components/Services';
import Domains from '../components/Domains';
import Domain from '../components/Domain';
import DomainCheck from '../components/DomainCheck';
import NotFound from '../components/NotFound';

export const routesItems = [
  <Route key={1} path="/" element={<Home />} />,
  <Route key={2} path="/sobre-nosotros" element={<About />} />,
  <Route key={3} path="/about-us" element={<About />} />,
  <Route key={4} path="/servicios" element={<Services />} />,
  <Route key={5} path="/services" element={<Services />} />,
  <Route key={6} path="/contactar" element={<ContactUs />} />,
  <Route key={7} path="/contact" element={<ContactUs />} />,
  <Route key={8} path="/legalities" element={<Legalities />} />,
  <Route key={9} path="/legalidades" element={<Legalities />} />,
  <Route key={10} path="/legalities/:alias" element={<Legalities />} />,
  <Route key={11} path="/legalidades/:alias" element={<Legalities />} />,
  <Route key={12} path="/dominios" element={<Domains />} />,
  <Route key={13} path="/domains" element={<Domains />} />,
  <Route key={14} path="/dominios/:extension" element={<Domain />} />,
  <Route key={15} path="/domains/:extension" element={<Domain />} />,
  <Route key={16} path="/domaincheck" element={<DomainCheck />} />,
  <Route key={17} path="*" element={<NotFound />} />,
]

export const routes2 = [
    {
      component: async () => {
        const module = await import('../components/Home');
        return module.Home;
      },
      path: '/',
    },
    {
      component: async () => {
        const module = await import('../components/About');
        return module.About;
      },
      path: '/sobre-nosotros',
    },
    {
      component: async () => {
        const module = await import('../components/About');
        return module.About;
      },
      path: '/about-us',
    },
    {
      component: async () => {
        const module = await import('../components/Services');
        return module.Services;
      },
      path: '/services',
    },
    {
      component: async () => {
        const module = await import('../components/Services');
        return module.Services;
      },
      path: '/servicios',
    },
    {
      component: async () => {
        const module = await import('../components/ContactUs');
        return module.ContactUs;
      },
      path: '/contactar',
    },
    {
      component: async () => {
        const module = await import('../components/ContactUs');
        return module.ContactUs;
      },
      path: '/contact',
    },
    {
      component: async () => {
        const module = await import('../components/Legalities');
        return module.Legalities;
      },
      path: '/legalities',
    },
    {
      component: async () => {
        const module = await import('../components/Legalities');
        return module.Legalities;
      },
      path: '/legalidades',
    },
    {
      component: async () => {
        const module = await import('../components/Legalities');
        return module.Legalities;
      },
      path: '/legalidades/:alias',
    },
    {
      component: async () => {
        const module = await import('../components/Legalities');
        return module.Legalities;
      },
      path: '/legalities/:alias',
    },
    {
      component: async () => {
        const module = await import('../components/Domains');
        return module.Domains;
      },
      path: '/dominios',
    },
    {
      component: async () => {
        const module = await import('../components/Domains');
        return module.Domains;
      },
      path: '/domains',
    },
    {
      component: async () => {
        const module = await import('../components/Domain');
        return module.Domain;
      },
      path: '/dominios/:extension',
    },
    {
      component: async () => {
        const module = await import('../components/Domain');
        return module.Domain;
      },
      path: '/dominios/:extension',
    },
    {
      component: async () => {
        const module = await import('../components/DomainCheck');
        return module.DomainCheck;
      },
      path: '/domaincheck',
    },
    {
      component: async () => {
        const module = await import('../components/NotFound');  
        return module.NotFound;
      },
      path: '*',
    },
  ];
  