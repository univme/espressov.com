// Static, dependency-free bootstrap runs in the head before the page paints.
// Stored values are allowlisted; no data is interpolated into executable code.
export const themeBootstrap = `(function(){var theme;try{theme=localStorage.getItem('espressov-theme')}catch(e){}if(theme!=='light'&&theme!=='dark'){theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=theme})();`;
