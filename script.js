function redirectTo(site) {
  if (site.includes(".html")) {
  window.location.assign(`${site}`);
  } else {
   window.parent.location.assign(`${site}.html`); 
  }
}