import{r as l,w as h,x,B as j,j as s}from"./index-6Ia52r9R.js";import{C as p}from"./Container-i-Ck948s.js";import{B as i}from"./Button-BlCinYPr.js";import"./ThemeProvider-daeRrsc-.js";import"./Button--PmmvZdY.js";const b=()=>{const[c,r]=l.useState({skip:0,limit:2}),[d,{data:t}]=h(),[n,{isSuccess:o}]=x();return l.useEffect(()=>{d(c)},[c]),l.useEffect(()=>{o&&j.success("user block success")},[o]),s.jsxs(p,{children:[s.jsxs("select",{className:"form-control mt-2",onChange:e=>r({skip:0,limit:e.target.value}),children:[s.jsx("option",{selected:!0,children:"Open this select menu"}),s.jsx("option",{value:"2",children:"2"}),s.jsx("option",{value:"5",children:"5"}),s.jsx("option",{value:"10",children:"10"})]}),t&&s.jsxs("table",{className:"table table-light table-striped table-hover",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:"#"}),s.jsx("th",{scope:"col",children:"NAme"}),s.jsx("th",{scope:"col",children:"Email"}),s.jsx("th",{scope:"col",children:"Mobile"}),s.jsx("th",{scope:"col",children:"Action"})]})}),s.jsx("tbody",{children:t.result.map(e=>s.jsxs("tr",{className:`
                                ${!e.isActive&&"table-danger"}
                        `,children:[s.jsx("td",{children:e._id}),s.jsx("td",{children:e.name}),s.jsx("td",{children:e.email}),s.jsx("td",{children:e.mobile}),s.jsx("td",{children:e.isActive?s.jsx(i,{onClick:a=>n({...e,isActive:!1}),variant:"danger",children:"Block"}):s.jsx(i,{onClick:a=>n({...e,isActive:!0}),variant:"success",children:"unBlock"})})]},e._id))})]}),t&&[...Array(Math.ceil(t.total/c.limit)).keys()].map(e=>s.jsx(i,{className:"me-1",onClick:a=>r({...c,skip:e*c.limit}),children:e+1}))]})};export{b as default};