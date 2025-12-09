import type { Metadata } from 'next';
import './globals.css';
import SimpleScriptsLoader from './components/SimpleScriptsLoader';
import MenuInitializer from './components/MenuInitializer';

export const metadata: Metadata = {
  title: 'Heath Primary School',
  description: 'Heath Primary School, Slack Lane, Chesterfield, S44 5RH',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/swiper.css" />
        <link rel="stylesheet" href="/assets/css/dark.css" />
        <link rel="stylesheet" href="/assets/css/font-icons.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/bs-switches.css" />
        <link rel="stylesheet" href="/assets/css/szwebstyle.css?v=1.0" />
        <link rel="stylesheet" href="/assets/css/content.css" />
        <link rel="stylesheet" href="/school-colours.css?skin_id=3?v=1.0" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="//www.schoolzineplus.co.uk/schoolzine/global.css" />
        <link rel="stylesheet" href="/website/custom.css?skin=3" />
        <link rel="stylesheet" href="/assets/css/lightbox.css" />
        <link rel="stylesheet" href="/assets/css/-1.12.1.custom.min.css" />
        <link rel="stylesheet" href="/assets/css/timepicki.css" />
      </head>
      <body className="stretched">
        {/* Remove Schoolzine footer logo immediately - runs before any other scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function removeSchoolzineLogo() {
                  // Remove by class
                  var logos = document.querySelectorAll('.footer-logo, a.footer-logo, a[href*="schoolzine.co.uk"]');
                  for (var i = 0; i < logos.length; i++) {
                    logos[i].remove();
                  }
                  // Also check footer specifically
                  var footer = document.getElementById('footer');
                  if (footer) {
                    var footerLogos = footer.querySelectorAll('a[href*="schoolzine.co.uk"], .footer-logo');
                    for (var j = 0; j < footerLogos.length; j++) {
                      footerLogos[j].remove();
                    }
                  }
                }
                // Run immediately
                removeSchoolzineLogo();
                // Run when DOM is ready
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', removeSchoolzineLogo);
                } else {
                  removeSchoolzineLogo();
                }
                // Run after a delay
                setTimeout(removeSchoolzineLogo, 100);
                setTimeout(removeSchoolzineLogo, 500);
                setTimeout(removeSchoolzineLogo, 1000);
              })();
            `,
          }}
        />
        {/* Load jQuery synchronously and blocking - MUST be first */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window.jQuery === 'undefined' && typeof window.$ === 'undefined') {
                  var script = document.createElement('script');
                  script.src = '/assets/js/jquery.js?v=' + Date.now();
                  script.async = false;
                  script.defer = false;
                  // Make it blocking by using document.write in head, or append to head and wait
                  var loaded = false;
                  script.onload = script.onreadystatechange = function() {
                    if (!loaded && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
                      loaded = true;
                      // Ensure jQuery is set
                      if (window.$ && !window.jQuery) {
                        window.jQuery = window.$;
                      }
                      if (window.jQuery && !window.$) {
                        window.$ = window.jQuery;
                      }
                      // Force both to be available
                      if (window.jQuery) {
                        window.$ = window.jQuery;
                      }
                      console.log('jQuery loaded in blocking script');
                    }
                  };
                  document.head.insertBefore(script, document.head.firstChild);
                } else {
                  // jQuery already loaded
                  if (window.$ && !window.jQuery) window.jQuery = window.$;
                  if (window.jQuery && !window.$) window.$ = window.jQuery;
                }
              })();
            `,
          }}
        />
        {/* Load all scripts in sequence using blocking script tags */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                console.log('ScriptLoader: Starting script loading sequence');
                
                // Function to load script and return promise
                function loadScript(src, id) {
                  return new Promise(function(resolve, reject) {
                    // Check if already loaded
                    if (id && document.getElementById(id)) {
                      console.log('ScriptLoader: ' + id + ' already loaded');
                      resolve();
                      return;
                    }
                    
                    var script = document.createElement('script');
                    script.src = src + '?v=' + Date.now();
                    script.async = false;
                    script.defer = false;
                    if (id) script.id = id;
                    
                    script.onload = function() {
                      console.log('ScriptLoader: Loaded ' + src);
                      resolve();
                    };
                    
                    script.onerror = function() {
                      console.error('ScriptLoader: Failed to load ' + src);
                      reject(new Error('Failed to load ' + src));
                    };
                    
                    document.head.appendChild(script);
                  });
                }
                
                // Wait for jQuery, then load other scripts
                function waitForJQuery() {
                  var attempts = 0;
                  var maxAttempts = 100; // Increased to 10 seconds
                  var checkInterval = setInterval(function() {
                    attempts++;
                    var jq = null;
                    try {
                      jq = window.jQuery || window.$;
                    } catch(e) {
                      // Ignore errors
                    }
                    
                    if (jq && typeof jq === 'function') {
                      clearInterval(checkInterval);
                      // Ensure both are set
                      if (!window.jQuery) window.jQuery = jq;
                      if (!window.$) window.$ = jq;
                      console.log('ScriptLoader: jQuery confirmed available');
                      
                      // Now load other scripts in sequence
                      loadScript('/assets/js/jquery-ui.min.js', 'jquery-ui')
                        .then(function() {
                          return loadScript('/assets/js/plugins.js', 'plugins');
                        })
                        .then(function() {
                          return new Promise(function(resolve) {
                            setTimeout(resolve, 100);
                          });
                        })
                        .then(function() {
                          return loadScript('/assets/js/functions-loader.js', 'functions-loader');
                        })
                        .then(function() {
                          console.log('ScriptLoader: All scripts loaded successfully');
                        })
                        .catch(function(error) {
                          console.error('ScriptLoader: Error loading scripts:', error);
                        });
                    } else if (attempts >= maxAttempts) {
                      clearInterval(checkInterval);
                      console.warn('ScriptLoader: jQuery not found after', maxAttempts * 100, 'ms');
                      // Try to continue anyway - maybe jQuery will load later
                      setTimeout(function() {
                        if (window.jQuery || window.$) {
                          console.log('ScriptLoader: jQuery found after timeout, retrying...');
                          waitForJQuery();
                        }
                      }, 1000);
                    }
                  }, 100);
                }
                
                // Start waiting for jQuery after a short delay to let the jQuery loading script start
                setTimeout(waitForJQuery, 50);
              })();
            `,
          }}
        />
        <MenuInitializer />
        {children}
      </body>
    </html>
  );
}
