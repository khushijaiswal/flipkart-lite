import{r as t,j as r,u as Ae,L as He}from"./index-6Ia52r9R.js";import{u as $e,a as Le,b as ie,t as Be,A as ce,T as Oe,c as _e}from"./TransitionWrapper-BhCPmCe5.js";import{u as X,c as S,a as Ge}from"./ThemeProvider-daeRrsc-.js";import{f as Pe,m as le}from"./ElementChildren-McZCL9W6.js";import{C as We}from"./Container-i-Ck948s.js";import{R as Fe}from"./Row-Cx2apOoC.js";import{C as Ue}from"./Col-F-oShksX.js";import{C as M}from"./Card-DUWs7oGB.js";import"./Button--PmmvZdY.js";import"./CardHeaderContext-Bu5f5K-I.js";function Xe(s,n){const i=t.useRef(!0);t.useEffect(()=>{if(i.current){i.current=!1;return}return s()},n)}function Ve(){const s=t.useRef(!0),n=t.useRef(()=>s.current);return t.useEffect(()=>(s.current=!0,()=>{s.current=!1}),[]),n.current}function Ye(s){const n=t.useRef(s);return n.current=s,n}function qe(s){const n=Ye(s);t.useEffect(()=>()=>n.current(),[])}const U=2**31-1;function ue(s,n,i){const l=i-Date.now();s.current=l<=U?setTimeout(n,l):setTimeout(()=>ue(s,n,i),U)}function Ke(){const s=Ve(),n=t.useRef();return qe(()=>clearTimeout(n.current)),t.useMemo(()=>{const i=()=>clearTimeout(n.current);function l(h,c=0){s()&&(i(),c<=U?n.current=setTimeout(h,c):ue(n,h,Date.now()+c))}return{set:l,clear:i,handleRef:n}},[])}const de=t.forwardRef(({className:s,bsPrefix:n,as:i="div",...l},h)=>(n=X(n,"carousel-caption"),r.jsx(i,{ref:h,className:S(s,n),...l})));de.displayName="CarouselCaption";const fe=t.forwardRef(({as:s="div",bsPrefix:n,className:i,...l},h)=>{const c=S(i,X(n,"carousel-item"));return r.jsx(s,{ref:h,...l,className:c})});fe.displayName="CarouselItem";const Qe=40;function ze(s){if(!s||!s.style||!s.parentNode||!s.parentNode.style)return!1;const n=getComputedStyle(s);return n.display!=="none"&&n.visibility!=="hidden"&&getComputedStyle(s.parentNode).display!=="none"}const me=t.forwardRef(({defaultActiveIndex:s=0,...n},i)=>{const{as:l="div",bsPrefix:h,slide:c=!0,fade:he=!1,controls:pe=!0,indicators:k=!0,indicatorLabels:A=[],activeIndex:p,onSelect:x,onSlide:g,onSlid:w,interval:y=5e3,keyboard:V=!0,onKeyDown:H,pause:b="hover",onMouseOver:$,onMouseOut:L,wrap:D=!0,touch:Y=!0,onTouchStart:B,onTouchMove:O,onTouchEnd:_,prevIcon:xe=r.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:q="Previous",nextIcon:ve=r.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:K="Next",variant:Q,className:Ce,children:G,...be}=$e({defaultActiveIndex:s,...n},{activeIndex:"onSelect"}),f=X(h,"carousel"),j=Ge(),N=t.useRef(null),[z,J]=t.useState("next"),[je,T]=t.useState(!1),[R,Z]=t.useState(!1),[o,Ne]=t.useState(p||0);t.useEffect(()=>{!R&&p!==o&&(N.current?J(N.current):J((p||0)>o?"next":"prev"),c&&Z(!0),Ne(p||0))},[p,R,o,c]),t.useEffect(()=>{N.current&&(N.current=null)});let v=0,ee;Pe(G,(e,a)=>{++v,a===p&&(ee=e.props.interval)});const te=Le(ee),u=t.useCallback(e=>{if(R)return;let a=o-1;if(a<0){if(!D)return;a=v-1}N.current="prev",x==null||x(a,e)},[R,o,x,D,v]),d=ie(e=>{if(R)return;let a=o+1;if(a>=v){if(!D)return;a=0}N.current="next",x==null||x(a,e)}),P=t.useRef();t.useImperativeHandle(i,()=>({element:P.current,prev:u,next:d}));const ne=ie(()=>{!document.hidden&&ze(P.current)&&(j?u():d())}),C=z==="next"?"start":"end";Xe(()=>{c||(g==null||g(o,C),w==null||w(o,C))},[o]);const Re=`${f}-item-${z}`,ge=`${f}-item-${C}`,we=t.useCallback(e=>{Be(e),g==null||g(o,C)},[g,o,C]),ye=t.useCallback(()=>{Z(!1),w==null||w(o,C)},[w,o,C]),De=t.useCallback(e=>{if(V&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),j?d(e):u(e);return;case"ArrowRight":e.preventDefault(),j?u(e):d(e);return}H==null||H(e)},[V,H,u,d,j]),Ee=t.useCallback(e=>{b==="hover"&&T(!0),$==null||$(e)},[b,$]),Me=t.useCallback(e=>{T(!1),L==null||L(e)},[L]),re=t.useRef(0),I=t.useRef(0),se=Ke(),Se=t.useCallback(e=>{re.current=e.touches[0].clientX,I.current=0,b==="hover"&&T(!0),B==null||B(e)},[b,B]),Te=t.useCallback(e=>{e.touches&&e.touches.length>1?I.current=0:I.current=e.touches[0].clientX-re.current,O==null||O(e)},[O]),Ie=t.useCallback(e=>{if(Y){const a=I.current;Math.abs(a)>Qe&&(a>0?u(e):d(e))}b==="hover"&&se.set(()=>{T(!1)},y||void 0),_==null||_(e)},[Y,b,u,d,se,y,_]),ae=y!=null&&!je&&!R,W=t.useRef();t.useEffect(()=>{var e,a;if(!ae)return;const m=j?u:d;return W.current=window.setInterval(document.visibilityState?ne:m,(e=(a=te.current)!=null?a:y)!=null?e:void 0),()=>{W.current!==null&&clearInterval(W.current)}},[ae,u,d,te,y,ne,j]);const oe=t.useMemo(()=>k&&Array.from({length:v},(e,a)=>m=>{x==null||x(a,m)}),[k,v,x]);return r.jsxs(l,{ref:P,...be,onKeyDown:De,onMouseOver:Ee,onMouseOut:Me,onTouchStart:Se,onTouchMove:Te,onTouchEnd:Ie,className:S(Ce,f,c&&"slide",he&&`${f}-fade`,Q&&`${f}-${Q}`),children:[k&&r.jsx("div",{className:`${f}-indicators`,children:le(G,(e,a)=>r.jsx("button",{type:"button","data-bs-target":"","aria-label":A!=null&&A.length?A[a]:`Slide ${a+1}`,className:a===o?"active":void 0,onClick:oe?oe[a]:void 0,"aria-current":a===o},a))}),r.jsx("div",{className:`${f}-inner`,children:le(G,(e,a)=>{const m=a===o;return c?r.jsx(Oe,{in:m,onEnter:m?we:void 0,onEntered:m?ye:void 0,addEndListener:_e,children:(E,ke)=>t.cloneElement(e,{...ke,className:S(e.props.className,m&&E!=="entered"&&Re,(E==="entered"||E==="exiting")&&"active",(E==="entering"||E==="exiting")&&ge)})}):t.cloneElement(e,{className:S(e.props.className,m&&"active")})})}),pe&&r.jsxs(r.Fragment,{children:[(D||p!==0)&&r.jsxs(ce,{className:`${f}-control-prev`,onClick:u,children:[xe,q&&r.jsx("span",{className:"visually-hidden",children:q})]}),(D||p!==v-1)&&r.jsxs(ce,{className:`${f}-control-next`,onClick:d,children:[ve,K&&r.jsx("span",{className:"visually-hidden",children:K})]})]})]})});me.displayName="Carousel";const F=Object.assign(me,{Caption:de,Item:fe});function Je(){const s=[{hero:"https://images.unsplash.com/photo-1723965024428-90c09c80bcfe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",caption:"Nulla vitae elit libero, a pharetra augue mollis interdum."},{hero:"https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",caption:"Nulla vitae elit libero, a pharetra augue mollis interdum."},{hero:"https://images.unsplash.com/photo-1723965024428-90c09c80bcfe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",caption:"Nulla vitae elit libero, a pharetra augue mollis interdum."}];return r.jsx(F,{children:s.map(n=>r.jsxs(F.Item,{children:[r.jsx("img",{src:n.hero,style:{height:"400px",width:"100%",objectFit:"cover"}}),r.jsx(F.Caption,{children:r.jsx("p",{children:n.caption})})]}))})}const Ze=()=>{const{data:s}=Ae();return r.jsx(r.Fragment,{children:r.jsx(We,{children:r.jsx(Fe,{children:s&&s.result.map(n=>r.jsx(Ue,{sm:4,children:r.jsx(He,{to:`/details/${n._id}`,className:"text-decoration-none",children:r.jsxs(M,{className:"my-3",children:[r.jsx(M.Img,{src:n.productImg[0],variant:"top"}),r.jsxs(M.Body,{children:[r.jsx(M.Title,{children:n.name}),r.jsxs(M.Text,{children:[" Starting from ",n.price]})]})]})})}))})})})},ut=()=>r.jsxs(r.Fragment,{children:[r.jsx(Je,{}),r.jsx(Ze,{})]});export{ut as default};
