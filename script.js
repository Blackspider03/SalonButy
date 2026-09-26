const menu=document.querySelector(".menu");
const nav=document.querySelector("#nav");

menu.addEventListener("click",()=>{
  nav.classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(a=>{
  a.addEventListener("click",()=>nav.classList.remove("open"));
});

window.addEventListener("resize",()=>{
  if(window.innerWidth>900) nav.classList.remove("open");
});

document.querySelector("#bookingForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.querySelector("#name").value.trim();
  const phone=document.querySelector("#phone").value.trim();
  const service=document.querySelector("#service").value;
  const msg=`Hi LuxeAura, I would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}`;
  window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`,"_blank");
});
