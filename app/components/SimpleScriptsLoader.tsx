'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    jQuery: any;
    $: any;
    SEMICOLON: any;
  }
}

export default function SimpleScriptsLoader() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    console.log('SimpleScriptsLoader: Starting script loading sequence');

    // Function to load a script and return a promise
    const loadScript = (src: string, id?: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        if (id && document.getElementById(id)) {
          console.log(`SimpleScriptsLoader: ${id} already loaded`);
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src + '?v=' + Date.now();
        script.async = false;
        script.defer = false;
        if (id) script.id = id;

        script.onload = () => {
          console.log(`SimpleScriptsLoader: Loaded ${src}`);
          resolve();
        };

        script.onerror = () => {
          console.error(`SimpleScriptsLoader: Failed to load ${src}`);
          reject(new Error(`Failed to load ${src}`));
        };

        document.head.appendChild(script);
      });
    };

    // Load scripts in sequence
    const loadAllScripts = async () => {
      try {
        // Wait for jQuery to be available (loaded by blocking script)
        let attempts = 0;
        while ((!window.jQuery && !(window as any).$) && attempts < 50) {
          await new Promise(resolve => setTimeout(resolve, 100));
          attempts++;
        }

        if (window.jQuery || (window as any).$) {
          const jq = window.jQuery || (window as any).$;
          if (!window.jQuery) window.jQuery = jq;
          if (!(window as any).$) (window as any).$ = jq;
          console.log('SimpleScriptsLoader: jQuery confirmed available');
        } else {
          console.warn('SimpleScriptsLoader: jQuery not found, but continuing anyway');
        }

        // Load jQuery UI
        await loadScript('/assets/js/jquery-ui.min.js', 'jquery-ui');
        
        // Load plugins (includes Superfish)
        await loadScript('/assets/js/plugins.js', 'plugins');
        
        // Wait a bit for Superfish to initialize
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Load functions.js via wrapper
        await loadScript('/assets/js/functions-loader.js', 'functions-loader');
        
        console.log('SimpleScriptsLoader: All scripts loaded successfully');
      } catch (error) {
        console.error('SimpleScriptsLoader: Error loading scripts:', error);
      }
    };

    // Start loading after a short delay to ensure jQuery blocking script has run
    const timer = setTimeout(() => {
      loadAllScripts();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
}


