(()=>{var e={374:()=>{document.getElementById("generate-btn-eng").addEventListener("click",(function(){speechSynthesis.cancel();const n=document.querySelector("#loader");n.style.display="block";const t=document.querySelector("#haiku-output");t.innerHTML="",t.classList.remove("vertical-text"),t.classList.remove("fade-blur"),t.classList.add("flipped-text"),fetch("/api/haiku-serverless-eng",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((o=>{console.log(o.haiku),n.style.display="none",t.classList.add("fade-blur");const r=function(e){return e.split("\n").slice(0,3).join("\n")}(o.haiku);t.innerText=r,function(n){let t="";const o=document.querySelector("#current-word"),r=document.getElementById("haiku-output").innerHTML.split("<br>"),s=[];r.forEach(((n,c)=>{const i=new SpeechSynthesisUtterance(n);i.rate=.8,i.pitch=.8,-1!==navigator.userAgent.indexOf("Chrome")?i.voice=e[33]:-1!==navigator.userAgent.indexOf("Safari")?i.voice=e[28]:i.voice=e[33],i.onboundary=e=>{"word"===e.name&&(t=n.substring(e.charIndex,e.charIndex+e.charLength),o.innerHTML=t),c<r.length-1&&"word"===e.name&&e.charIndex+e.charLength===n.length&&setTimeout((()=>{const e=new SpeechSynthesisUtterance(" ");window.speechSynthesis.speak(e)}),3e3)},s.push(i)})),s.reduce(((e,n)=>e.then((()=>new Promise((e=>{window.speechSynthesis.speak(n),n.onend=e}))))),Promise.resolve()).then((()=>{o.innerHTML=""}))}()})).catch((e=>{console.error("Error:",e)}))}));let e=null;window.onload=function(){e=window.speechSynthesis.getVoices(),0===e.length&&(window.speechSynthesis.onvoiceschanged=()=>{e=window.speechSynthesis.getVoices()})}},550:()=>{document.getElementById("generate-btn-jp").addEventListener("click",(function(){speechSynthesis.cancel();const e=document.querySelector("#loader");e.style.display="block";const n=document.querySelector("#haiku-output");n.innerHTML="",n.classList.add("vertical-text"),n.classList.remove("fade-blur"),n.classList.remove("flipped-text"),document.querySelector("#current-word").innerHTML="",fetch("/api/haiku-serverless-jp",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((t=>{e.style.display="none",n.classList.add("fade-blur");const o=t.haiku.replace(/\s/g,"\n");n.innerText=o,console.log(t.haiku),function(e){let n="";const t=document.querySelector("#current-word"),o=new SpeechSynthesisUtterance(e);o.lang="ja-JP";const r=window.speechSynthesis.getVoices().find((e=>"ja-JP"===e.lang));r&&(o.voice=r),o.rate=.6,o.onboundary=o=>{"word"===o.name&&(n=e.substring(o.charIndex,o.charIndex+o.charLength),t.innerHTML=n,console.log("Currently speaking:",n))},o.onend=()=>{t.innerHTML=""},window.speechSynthesis.speak(o)}(t.haiku)})).catch((e=>{console.error("Error:",e)}))}))}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var s=n[o]={exports:{}};return e[o](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";t(374),t(550)})()})();