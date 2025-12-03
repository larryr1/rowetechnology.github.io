'use strict';

(function () {
  // Wait until DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const params = new URLSearchParams(window.location.search);

    for (const [key, value] of params.entries()) {
      if (!key.startsWith('set_')) continue; // only process params that begin with set_

      // Replace text content of all elements with class equal to the param name (e.g. set_firstName)
      const els = document.getElementsByClassName(key);
      for (let i = 0; i < els.length; i++) {
        els[i].textContent = value;
      }
    }

    if (params.has('set_contactPhoneNumber')) {
      document.getElementById('contactPhoneNumber').style.display = 'block';
    }
  }
})();