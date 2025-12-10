// Wrapper to ensure jQuery is loaded before functions.js
(function() {
  console.log('functions-loader: Script started');
  var maxAttempts = 200;
  var attempts = 0;
  
  function loadFunctions() {
    attempts++;
    
    // Check for jQuery in all possible ways
    var jq = null;
    try {
      jq = window.jQuery || window.$;
    } catch(e) {
      // Ignore
    }
    
    if (!jq || typeof jq !== 'function') {
      if (attempts < maxAttempts) {
        // jQuery not available yet, wait and retry
        setTimeout(loadFunctions, 50);
        return;
      } else {
        console.error('functions-loader: jQuery failed to load after', maxAttempts * 50, 'ms');
        console.error('functions-loader: window.jQuery =', typeof window.jQuery);
        console.error('functions-loader: window.$ =', typeof window.$);
        return;
      }
    }
    
    // Ensure both jQuery and $ are set on window
    if (!window.jQuery) {
      window.jQuery = jq;
    }
    if (!window.$) {
      window.$ = jq;
    }
    
    console.log('functions-loader: jQuery confirmed available, loading functions.js');
    
    // Now load functions.js - but only if it's not already loaded
    if (document.getElementById('functions-js-loaded')) {
      console.log('functions-loader: functions.js already loaded');
      return;
    }
    
    var script = document.createElement('script');
    script.id = 'functions-js-loaded';
    // Use aggressive cache busting - add timestamp and random to force reload
    var cacheBuster = '?v=' + Date.now() + '&_=' + Math.random().toString(36).substring(7) + '&nocache=' + Math.random().toString(36).substring(7) + '&t=' + performance.now();
    script.src = '/assets/js/functions.js' + cacheBuster;
    script.setAttribute('data-cache-bust', cacheBuster);
    console.log('functions-loader: Loading functions.js with cache buster:', cacheBuster);
    script.async = false;
    script.defer = false;
    script.onerror = function() {
      console.error('functions-loader: Failed to load functions.js');
    };
    script.onload = function() {
      console.log('functions-loader: functions.js loaded successfully');
    };
    document.head.appendChild(script);
  }
  
  // Start checking after a short delay to let jQuery load
  setTimeout(loadFunctions, 100);
})();

