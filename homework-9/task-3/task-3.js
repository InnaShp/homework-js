$('h3').each(function() {
  const nextElement = $(this).next();
  if(nextElement.is('div')) $(this).before(nextElement);
})
