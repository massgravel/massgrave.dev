(function() {
  for (const link of document.getElementsByTagName('a')) {
    if (/^(https?:)?\/\//.test(link.getAttribute('href'))) link.target = '_blank';
  }
})();