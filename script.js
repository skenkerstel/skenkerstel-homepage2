function redirectTo(site) {
  if (site.includes(".html")) {
  window.location.assign(`${site}`);
  } else {
   window.location.assign(`${site}.html`); 
  }
}