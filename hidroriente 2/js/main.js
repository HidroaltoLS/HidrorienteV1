document.addEventListener('DOMContentLoaded',()=>{
  const header=document.querySelector('.site-header');
  if(header){const s=()=>header.classList.toggle('scrolled',window.scrollY>60);window.addEventListener('scroll',s,{passive:true});s();}
  const ham=document.querySelector('.nav-hamburger'),mob=document.querySelector('.nav-mobile'),cls=document.querySelector('.nav-mobile-close');
  if(ham&&mob)ham.addEventListener('click',()=>mob.classList.add('open'));
  if(cls&&mob)cls.addEventListener('click',()=>mob.classList.remove('open'));
  if(mob)mob.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',()=>mob.classList.remove('open')));
  const anim=document.querySelectorAll('.fade-up,.stagger');
  if(anim.length){const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -40px 0px'});anim.forEach(el=>obs.observe(el));}
  const counters=document.querySelectorAll('[data-count]');
  if(counters.length){const co=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){animCount(e.target);co.unobserve(e.target);}});},{threshold:.5});counters.forEach(el=>co.observe(el));}
  function animCount(el){const t=parseFloat(el.dataset.count),suf=el.dataset.suffix||'',pre=el.dataset.prefix||'',dec=el.dataset.decimals?parseInt(el.dataset.decimals):0,dur=1800,st=performance.now();const tick=now=>{const el2=el,prog=Math.min((now-st)/dur,1),ease=1-Math.pow(1-prog,3),cur=(t*ease).toFixed(dec);el2.textContent=pre+cur+suf;if(prog<1)requestAnimationFrame(tick);};requestAnimationFrame(tick);}
  document.querySelectorAll('.accordion-trigger').forEach(t=>{t.addEventListener('click',()=>{const it=t.closest('.accordion-item'),open=it.classList.contains('open');document.querySelectorAll('.accordion-item.open').forEach(i=>i.classList.remove('open'));if(!open)it.classList.add('open');});});
  document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){const t=document.querySelector(this.getAttribute('href'));if(t){e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-80,behavior:'smooth'});}});});
  document.querySelectorAll('.video-placeholder').forEach(vp=>{vp.addEventListener('click',function(){const url=this.dataset.videoUrl;if(url){const i=document.createElement('iframe');i.src=url+'?autoplay=1';i.allow='autoplay; fullscreen';i.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:none;border-radius:inherit;';this.innerHTML='';this.appendChild(i);}});});
  document.querySelectorAll('[data-milestone-scroll]').forEach(section=>{
    const steps=[...section.querySelectorAll('[data-milestone-step]')],images=[...section.querySelectorAll('[data-milestone-image]')],tabs=[...section.querySelectorAll('[data-milestone-jump]')],current=section.querySelector('[data-milestone-current]'),caption=section.querySelector('[data-milestone-caption]');
    let active=-1;
    const setActive=i=>{if(i===active||!steps[i])return;active=i;steps.forEach((el,idx)=>el.classList.toggle('active',idx===i));images.forEach((el,idx)=>el.classList.toggle('active',idx===i));tabs.forEach((el,idx)=>el.classList.toggle('active',idx===i));if(current)current.textContent=String(i+1).padStart(2,'0');if(caption)caption.textContent=steps[i].dataset.caption||'';};
    const update=()=>{const max=section.offsetHeight-window.innerHeight;if(max<=0){setActive(0);return;}const rect=section.getBoundingClientRect(),progress=Math.min(Math.max(-rect.top/max,0),.999),idx=Math.min(steps.length-1,Math.floor(progress*steps.length));setActive(idx);};
    tabs.forEach(tab=>tab.addEventListener('click',()=>{const idx=parseInt(tab.dataset.milestoneJump,10)||0,max=section.offsetHeight-window.innerHeight,target=section.offsetTop+(max*(idx/steps.length))+2;window.scrollTo({top:target,behavior:'smooth'});}));
    window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
  });
  const page=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-link').forEach(l=>{const h=l.getAttribute('href');if(h&&page.includes(h.replace('../pages/','').replace('pages/','')))l.classList.add('active');});
});
