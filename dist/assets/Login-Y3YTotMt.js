import{k as o,f as d,r as m,B as u,j as s,L as p,l as h}from"./index-DmY6XXr2.js";import{u as x,c as j,a as t}from"./index.esm-eKrD_c4E.js";const N=()=>{const[c,{isSuccess:i}]=o(),n=d(),e=x({enableReinitialize:!0,initialValues:{password:"",email:""},validationSchema:j({password:t().required("Enter Name"),email:t().required("Enter email")}),onSubmit:(a,{resetForm:l})=>{c(a),l()}}),r=a=>h({"form-control my-2":!0,"is-invalid":e.touched[a]&&e.errors[a],"is-valid":e.touched[a]&&!e.errors[a]});return m.useEffect(()=>{i&&(u.success("login success"),n("/checkout"))},[i]),s.jsx(s.Fragment,{children:s.jsx("div",{className:"container",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-sm-6 offset-3",children:s.jsxs("div",{className:"card my-2",children:[s.jsx("div",{className:"card-header text-center",children:"Login"}),s.jsxs("div",{className:"card-body",children:[s.jsxs("form",{onSubmit:e.handleSubmit,children:[s.jsx("input",{className:r("email"),...e.getFieldProps("email"),type:"email",placeholder:"Email"}),s.jsx("span",{className:"invalid-feedback",children:e.errors.email}),s.jsx("input",{className:r("password"),...e.getFieldProps("password"),type:"password",placeholder:"Password"}),s.jsx("span",{className:"invalid-feedback",children:e.errors.password}),s.jsx("button",{className:"btn btn-primary w-100",type:"submit",children:"Login"})]}),s.jsx(p,{className:"nav-link text-center p-2",to:"/register",children:"Don't have an account? Signup"})]})]})})})})})};export{N as default};
