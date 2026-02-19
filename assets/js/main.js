(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.site-nav a').forEach(a=>{
    const href = (a.getAttribute('href')||'').split('/').pop().toLowerCase();
    if(href && href === path){ a.setAttribute('aria-current','page'); }
  });
})();