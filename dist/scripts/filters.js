!function(){const e=document.getElementById("stateFilter"),t=document.getElementById("dateFilter"),n=document.querySelectorAll(".event-card"),a=document.querySelectorAll(".date-group"),o=document.getElementById("noEventsMessage");e.addEventListener("change",(()=>{s("state","ALL"===e.value?"":e.value),l()})),t.addEventListener("change",(()=>{s("date","ALL"===t.value?"":t.value),l()}));const c=new URLSearchParams(window.location.search);function l(){const c=e.value,l=t.value;let s=0;n.forEach((e=>{const t=e.getAttribute("data-state"),n="ALL"===c||t===c,a=new Date(e.getAttribute("data-date")+"T00:00:00-08:00");let o=!0;"ALL"!==l&&(o=function(e,t){const n=new Date;switch(e){case"TODAY":return r(t,n);case"TOMORROW":{const e=new Date(n);return e.setDate(e.getDate()+1),r(t,e)}case"WEEKEND":{const e=t.getDay();return 4===e||5===e||6===e}case"WEEK":{const e=function(e,t){const n=new Date(e.getFullYear(),e.getMonth(),e.getDate()),a=new Date(t.getFullYear(),t.getMonth(),t.getDate());return Math.floor((a-n)/864e5)}(n,t);return e>=0&&e<7}default:return!0}}(l,a)),e.style.display=n&&o?"block":"none",n&&o&&s++})),a.forEach((e=>{const t=e.querySelectorAll('.event-card:not([style*="display: none"])');e.style.display=t.length?"block":"none"})),0!==s||"ALL"===c&&"ALL"===l?o.classList.add("hidden"):(o.textContent="No matching events",o.classList.remove("hidden"))}function r(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function s(e,t){const n=new URLSearchParams(window.location.search);t?n.set(e,t):n.delete(e);const a=window.location.pathname+(n.toString()?"?"+n.toString():"");window.history.replaceState({},"",a)}e.value=c.get("state")||"ALL",t.value=c.get("date")||"ALL",l()}();