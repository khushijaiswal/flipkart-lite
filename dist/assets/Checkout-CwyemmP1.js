import{d as f,c as y,y as v,f as g,r as o,g as b,j as e,l as N}from"./index-CzqpCvZk.js";import{u as C,c as S,a}from"./index.esm-DHyKoTuT.js";import{a as m,F as i}from"./Form-B8BLdHWm.js";import{a as w}from"./index-D0K6UXki.js";import{O as F}from"./OrderSummary-smCCfkNj.js";import{S as k}from"./Spinner-DrH1wwue.js";import{C as t}from"./Container-gHkvcKBa.js";import"./ThemeProvider-Cjrecpqd.js";import"./index-BzKBOeNY.js";import"./ElementChildren-gCQKxHTL.js";import"./Col-DBhqGCIT.js";import"./iconBase-CchBOALa.js";const G=()=>{const{cart:c}=f(r=>r.bag),p=y(),[h,{isSuccess:d,isLoading:x}]=v(),l=g(),s=C({initialValues:{address:"",city:"",payment:""},validationSchema:S({address:a().required("Enter address"),city:a().required("Enter city"),payment:a().required("Choose  payment")}),onSubmit:(r,{resetForm:u})=>{h({...r,products:c.map(j=>j._id)}),u()}}),n=r=>N({"form-control my-2":!0,"is-invalid":s.touched[r]&&s.errors[r],"is-valid":s.touched[r]&&!s.errors[r]});return o.useEffect(()=>{c.length==0&&l("/")},[]),o.useEffect(()=>{d&&(p(b()),l("/success"))},[d]),x?e.jsxs("div",{children:["Please wait... ",e.jsx(k,{})]}):e.jsx(t,{children:e.jsx("form",{onSubmit:s.handleSubmit,children:e.jsxs("div",{className:"d-flex justify-content-between gap-5 ",children:[e.jsx(t,{className:"bg-light my-5",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"row py-4",children:[e.jsx(m,{...s.getFieldProps("address"),className:n("address"),placeholder:"Enter address"}),e.jsx(m,{...s.getFieldProps("city"),className:n("city"),placeholder:"Enter city"}),e.jsx(i.Check,{type:"radio",name:"payment",...s.getFieldProps("payment"),id:"cod",value:"cod",label:"COD"}),e.jsx(i.Check,{type:"radio",name:"payment",...s.getFieldProps("payment"),id:"online",value:"online",label:"online"})]})})}),e.jsxs(t,{className:"mx-0",children:[e.jsx("h5",{className:"mt-3",children:"Order Summary"}),e.jsxs("div",{class:"card w-75",children:[e.jsx("div",{class:"card-header d-flex",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-end container",children:[e.jsx("div",{children:e.jsx("img",{src:"https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",alt:"",height:200,width:200})}),e.jsxs("div",{children:[e.jsx("p",{children:"Basic Tee"}),e.jsx("p",{children:"Black"}),e.jsx("p",{className:"mb-5",children:"Large"}),e.jsx("p",{className:"mt-2",children:"$32.00"})]}),e.jsxs("div",{children:[e.jsx("span",{children:e.jsx(w,{})}),e.jsxs(i.Select,{className:"form-select-sm",children:[e.jsx("option",{selected:!0,value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"}),e.jsx("option",{value:"3",children:"3"})]})]})]})}),e.jsx(F,{showCheckout:!1}),e.jsx("div",{class:"card-footer",children:e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Confirm Order"})})]})]})]})})})};export{G as default};
