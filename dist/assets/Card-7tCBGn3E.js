import{u as c,c as l}from"./ThemeProvider-APOfhwN-.js";import{r as o,j as t}from"./index-BGVeWMuk.js";import{c as I,d as f}from"./CardHeaderContext-CcfEOpbM.js";const i=o.forwardRef(({className:d,bsPrefix:a,as:r="div",...e},s)=>(a=c(a,"card-body"),t.jsx(r,{ref:s,className:l(d,a),...e})));i.displayName="CardBody";const C=o.forwardRef(({className:d,bsPrefix:a,as:r="div",...e},s)=>(a=c(a,"card-footer"),t.jsx(r,{ref:s,className:l(d,a),...e})));C.displayName="CardFooter";const N=o.forwardRef(({bsPrefix:d,className:a,as:r="div",...e},s)=>{const m=c(d,"card-header"),n=o.useMemo(()=>({cardHeaderBsPrefix:m}),[m]);return t.jsx(I.Provider,{value:n,children:t.jsx(r,{ref:s,...e,className:l(a,m)})})});N.displayName="CardHeader";const p=o.forwardRef(({bsPrefix:d,className:a,variant:r,as:e="img",...s},m)=>{const n=c(d,"card-img");return t.jsx(e,{ref:m,className:l(r?`${n}-${r}`:n,a),...s})});p.displayName="CardImg";const u=o.forwardRef(({className:d,bsPrefix:a,as:r="div",...e},s)=>(a=c(a,"card-img-overlay"),t.jsx(r,{ref:s,className:l(d,a),...e})));u.displayName="CardImgOverlay";const y=o.forwardRef(({className:d,bsPrefix:a,as:r="a",...e},s)=>(a=c(a,"card-link"),t.jsx(r,{ref:s,className:l(d,a),...e})));y.displayName="CardLink";const T=f("h6"),j=o.forwardRef(({className:d,bsPrefix:a,as:r=T,...e},s)=>(a=c(a,"card-subtitle"),t.jsx(r,{ref:s,className:l(d,a),...e})));j.displayName="CardSubtitle";const v=o.forwardRef(({className:d,bsPrefix:a,as:r="p",...e},s)=>(a=c(a,"card-text"),t.jsx(r,{ref:s,className:l(d,a),...e})));v.displayName="CardText";const $=f("h5"),x=o.forwardRef(({className:d,bsPrefix:a,as:r=$,...e},s)=>(a=c(a,"card-title"),t.jsx(r,{ref:s,className:l(d,a),...e})));x.displayName="CardTitle";const R=o.forwardRef(({bsPrefix:d,className:a,bg:r,text:e,border:s,body:m=!1,children:n,as:g="div",...w},h)=>{const H=c(d,"card");return t.jsx(g,{ref:h,...w,className:l(a,H,r&&`bg-${r}`,e&&`text-${e}`,s&&`border-${s}`),children:m?t.jsx(i,{children:n}):n})});R.displayName="Card";const O=Object.assign(R,{Img:p,Title:x,Subtitle:j,Body:i,Link:y,Text:v,Header:N,Footer:C,ImgOverlay:u});export{O as C};
