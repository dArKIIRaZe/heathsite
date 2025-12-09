'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    jQuery: any;
    $: any;
    SEMICOLON: any;
  }
}

// Component to load functions.js - jQuery is already loaded by blocking script
function FunctionsLoader() {
  // jQuery is already loaded by blocking script, so just load the wrapper
  const cacheBuster = `${Date.now()}_${Math.random().toString(36).substring(7)}`;
  return (
    <Script
      src={`/assets/js/functions-loader.js?v=${cacheBuster}`}
      strategy="afterInteractive"
      id="functions-loader"
      onLoad={() => {
        console.log('FunctionsLoader: functions-loader.js loaded, which will load functions.js');
      }}
    />
  );
}

export default function ScriptsLoader() {
  // Simplified approach: Load scripts directly in order
  // jQuery is already loaded by blocking script in layout.tsx

  useEffect(() => {
    // Ensure menu initializes after all scripts load
    const initMenu = () => {
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.superfish) {
        if (window.SEMICOLON && window.SEMICOLON.header) {
          try {
            window.SEMICOLON.header.superfish();
            window.SEMICOLON.header.menufunctions();
          } catch (e) {
            console.log('Menu initialization:', e);
          }
        }
      }
    };

    // Try to initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initMenu();
      } else {
        window.addEventListener('load', initMenu);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* jQuery is already loaded by blocking script in layout.tsx */}
      {/* Load jQuery UI - after jQuery */}
      <Script
        src={`/assets/js/jquery-ui.min.js?v=${Date.now()}`}
        strategy="afterInteractive"
        id="jquery-ui"
        onLoad={() => {
          console.log('ScriptsLoader: jQuery UI loaded');
        }}
      />
      {/* Load plugins (includes Superfish) - after jQuery UI */}
      <Script
        src={`/assets/js/plugins.js?v=${Date.now()}_${Math.random().toString(36).substring(7)}`}
        strategy="afterInteractive"
        id="plugins"
        onLoad={() => {
          console.log('ScriptsLoader: Plugins loaded (includes Superfish)');
        }}
      />
      {/* Load functions (initializes menu) - must load after jQuery and plugins */}
      <FunctionsLoader />
    </>
  );
}

