document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');
    document.querySelectorAll('.accordion-item').forEach(i => {
      if(i !== item){
        i.classList.remove('active');
        i.querySelector('.accordion-content').style.maxHeight = null;
      }
    });
    item.classList.toggle('active');
    if(item.classList.contains('active')){
      content.style.maxHeight = content.scrollHeight + "px";
    } else { content.style.maxHeight = null; }
  });
});
document.querySelectorAll('.toc a`').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      window.scrollTo({top: target.offsetTop -10, behavior:'smooth'});
    }
  });
});