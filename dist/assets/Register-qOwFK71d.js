import{m as d,f as m,r as p,B as u,j as e,L as x,l as h}from"./index-6Ia52r9R.js";import{u as j,c as b,a as i}from"./index.esm-qOrxiuts.js";import{S as N}from"./Spinner-kc-TDRDk.js";import"./ThemeProvider-daeRrsc-.js";const E=()=>{const[t,{isSuccess:l,isLoading:n}]=d(),o=m(),s=j({enableReinitialize:!0,initialValues:{name:"",email:"",mobile:"",password:""},validationSchema:b({name:i().required("Enter Name"),email:i().required("Enter email"),mobile:i().required("Enter mobile"),password:i().required("Enter mobile")}),onSubmit:(a,{resetForm:c})=>{t(a),c()}}),r=a=>h({"form-control my-2":!0,"is-invalid":s.touched[a]&&s.errors[a],"is-valid":s.touched[a]&&!s.errors[a]});return p.useEffect(()=>{l&&(u.success("register success"),o("/login"))},[l]),n?e.jsxs("div",{children:["Please wait...  ",e.jsx(N,{})]}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-6 offset-3",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header text-center",children:"Register"}),e.jsxs("div",{className:"card-body",children:[e.jsxs("form",{onSubmit:s.handleSubmit,children:[e.jsx("input",{className:r("name"),...s.getFieldProps("name"),type:"text",placeholder:"Name"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.name}),e.jsx("input",{className:r("email"),...s.getFieldProps("email"),type:"email",placeholder:"Email"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.email}),e.jsx("input",{className:r("mobile"),...s.getFieldProps("mobile"),placeholder:"Mobile no"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.mobile}),e.jsx("input",{className:r("password"),...s.getFieldProps("password"),type:"password",placeholder:"Password"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.password}),e.jsx("button",{className:"btn btn-primary w-100",type:"submit",children:"Register"})]}),e.jsx(x,{className:"nav-link text-center p-2",to:"/login",children:"Already have an account? Signin"})]})]})})})})})};export{E as default};
