import{f as a,r as c,j as e}from"./index-BGVeWMuk.js";import{B as i}from"./Button-QFH1YXFs.js";import"./ThemeProvider-APOfhwN-.js";import"./Button-NbFY0hHp.js";const x=()=>{const t=a(),[n,o]=c.useState(5);return c.useEffect(()=>{const s=setInterval(()=>{o(r=>{if(r===0)t("/test");else return r-1})},1e3);return()=>clearInterval(s)},[]),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{children:"order placed success"}),e.jsxs("p",{children:["You will redirected in ",n]}),e.jsx(i,{onClick:s=>t("/"),children:"Shop More"})]})};export{x as default};