import{d as t,i as l,j as r,L as e,O as c}from"./index-6Ia52r9R.js";import{C as m}from"./Container-i-Ck948s.js";import{N as s,a}from"./Navbar-N4Lph2Ke.js";import{N as d}from"./NavDropdown-DRWGm_k1.js";import{B as u}from"./Button-BlCinYPr.js";import"./ThemeProvider-daeRrsc-.js";import"./TransitionWrapper-BhCPmCe5.js";import"./Button--PmmvZdY.js";import"./CardHeaderContext-Bu5f5K-I.js";import"./index-tThlM7Ih.js";function x(){const{customer:n}=t(i=>i.auth),[o,{isSuccess:p}]=l();return r.jsx(s,{expand:"lg",className:"bg-primary navbar-dark",children:r.jsxs(m,{children:[r.jsx(s.Brand,{href:"#home",children:"User panel"}),r.jsx(s.Toggle,{"aria-controls":"basic-navbar-nav"}),r.jsx(s.Collapse,{id:"basic-navbar-nav",children:r.jsxs(a,{className:"me-auto",children:[r.jsx(a.Link,{children:r.jsx(e,{to:"/",className:"nav-link",children:"Shop"})}),r.jsx(a.Link,{children:r.jsx(e,{to:"/user",className:"nav-link",children:"Order Hisrtory"})}),r.jsx(a.Link,{children:r.jsx(e,{to:"/user/profile",className:"nav-link",children:"Profile"})}),r.jsx(d,{title:`Welcome ${n.name}`,id:"basic-nav-dropdown",children:r.jsx(u,{className:"nav-link text-danger",onClick:o,children:"Logout"})})]})})]})})}const y=()=>r.jsxs(r.Fragment,{children:[r.jsx(x,{}),r.jsx(c,{})]});export{y as default};