(()=>{var e={374:()=>{document.getElementById("generate-btn-eng").addEventListener("click",(function(){const e=document.getElementById("haiku-output");e.classList.remove("vertical-text"),e.innerHTML="✴︎",e.classList.add("blink"),speechSynthesis.cancel(),fetch("/api/haiku-serverless-eng",{method:"POST",headers:{"Content-Type":"application/json"}}).then((n=>{if(!n.ok)throw new Error("Network response was not ok");return e.innerHTML="",n.json()})).then((n=>{e.classList.remove("blink"),e.innerText=n.haiku,console.log(n.haiku),function(e){const n=document.getElementById("haiku-output").innerHTML;console.log(n);const t=n.split("<br>"),s=[];t.forEach(((e,n)=>{const o=new SpeechSynthesisUtterance(e);o.lang="ja-JP",o.rate=.8,o.pitch=.8,-1!=navigator.userAgent.indexOf("Chrome")?o.voice=speechSynthesis.getVoices()[33]:-1!=navigator.userAgent.indexOf("Safari")?o.voice=speechSynthesis.getVoices()[32]:o.voice=speechSynthesis.getVoices()[33],n<t.length-1&&(o.onboundary=n=>{"word"===n.name&&n.charIndex+n.charLength===e.length&&setTimeout((()=>{const e=new SpeechSynthesisUtterance(" ");window.speechSynthesis.speak(e)}),3e3)}),s.push(o)})),s.reduce(((e,n)=>e.then((()=>new Promise((e=>{window.speechSynthesis.speak(n),n.onend=e}))))),Promise.resolve())}(n.haiku)})).catch((e=>{console.error("Error:",e)}))}))},550:()=>{document.getElementById("generate-btn-jp").addEventListener("click",(function(){const e=document.getElementById("haiku-output");e.classList.add("vertical-text"),e.innerHTML="✴︎",e.classList.add("blink"),speechSynthesis.cancel(),fetch("/api/haiku-serverless-jp",{method:"POST",headers:{"Content-Type":"application/json"}}).then((n=>{if(!n.ok)throw new Error("Network response was not ok");return e.innerHTML="",n.json()})).then((n=>{e.classList.remove("blink");const t=n.haiku.replace(/\s/g,"\n");e.innerText=t,console.log(n.haiku),function(e){const n=new SpeechSynthesisUtterance(e);n.lang="ja-JP";const t=window.speechSynthesis.getVoices().find((e=>"ja-JP"===e.lang));t&&(n.voice=t),n.rate=.6,window.speechSynthesis.speak(n)}(n.haiku)})).catch((e=>{console.error("Error:",e)}))}))}},n={};function t(s){var o=n[s];if(void 0!==o)return o.exports;var r=n[s]={exports:{}};return e[s](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";t(374),t(550)})()})();