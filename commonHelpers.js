import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c="/practice-js-vite/assets/javascript-8dac5379.svg",l={email:"user@mail.com",password:"secret"},f="login-form",g=document.querySelector(".login-form"),p=document.querySelector(".login-btn"),u=document.querySelector('input[name="email"]'),d=document.querySelector('input[name="password"]');g.addEventListener("submit",y);function y(r){r.preventDefault();const{email:o,password:n}=r.target.elements,s=o.value.trim(),e=n.value.trim();if(!s||!e){a.warning({message:"fill all fields",iconUrl:c});return}if(s!==l.email||e!==l.password){a.error({message:"uncorrect data",iconUrl:c});return}localStorage.setItem(f,JSON.stringify({email:s,password:e})),p.textContent="Logout",o.setAttribute("readonly",!0),n.setAttribute("readonly",!0)}const m=localStorage.getItem(f);if(m){const r=JSON.parse(m);u.value=r.email||"",d.value=r.password||"",p.textContent="Logout",u.setAttribute("readonly",!0),d.setAttribute("readonly",!0)}
//# sourceMappingURL=commonHelpers.js.map