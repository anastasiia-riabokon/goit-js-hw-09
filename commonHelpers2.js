import"./assets/styles-c728dd79.js";import{i as l}from"./assets/vendor-8f59b444.js";let t={email:"",message:""};const s="feedback-form-state",m={form:document.querySelector(".feedback-form")},{form:o}=m;o.addEventListener("input",()=>{if(t={email:o.elements.email.value.trim(),message:o.elements.message.value.trim()},n(s,t),t.email.trim()!==""||t.message.trim()!==""){const e=document.querySelector(".iziToast");e&&l.hide({},e)}});o.addEventListener("submit",e=>{e.preventDefault(),t.email.trim()===""||t.message.trim()===""?l.error({title:"Error",message:"Fill please all fields",position:"topCenter",closeOnEscape:!0}):(console.log(t),g(s),t.email="",t.message="",o.reset())});function i(){const e=c(s)||{};o.elements.email.value=e.email||"",o.elements.message.value=e.message||""}i();function n(e,a){try{const r=JSON.stringify(a);localStorage.setItem(e,r)}catch(r){console.log(r.message)}}function c(e){try{const a=localStorage.getItem(e);return a===null?void 0:JSON.parse(a)}catch(a){console.log(a.message)}}function g(e){try{localStorage.removeItem(e)}catch(a){console.log(a.message)}}
//# sourceMappingURL=commonHelpers2.js.map