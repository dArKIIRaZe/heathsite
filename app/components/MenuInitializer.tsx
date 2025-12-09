'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    jQuery: any;
    $: any;
    SEMICOLON: any;
  }
}

export default function MenuInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    console.log('MenuInitializer: Starting menu initialization');

    const initMenu = () => {
      // Wait for all required dependencies
      if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.superfish) {
        console.log('MenuInitializer: jQuery or Superfish not available yet');
        return false;
      }

      if (!window.SEMICOLON) {
        console.log('MenuInitializer: SEMICOLON not available yet');
        return false;
      }

      try {
        // Destroy existing Superfish instances first
        const $menu = window.jQuery('#primary-menu ul.sf-menu');
        if ($menu.length && $menu.data('sfOptions')) {
          try {
            $menu.superfish('destroy');
            console.log('MenuInitializer: Destroyed existing Superfish instance');
          } catch (e) {
            // Ignore destroy errors
          }
        }

        // Try using SEMICOLON's initialization first
        if (window.SEMICOLON.header) {
          if (typeof window.SEMICOLON.header.superfish === 'function') {
            window.SEMICOLON.header.superfish();
            console.log('MenuInitializer: Called SEMICOLON.header.superfish()');
          }

          if (typeof window.SEMICOLON.header.menufunctions === 'function') {
            window.SEMICOLON.header.menufunctions();
            console.log('MenuInitializer: Called SEMICOLON.header.menufunctions()');
          }
        }

        // Also try direct initialization as fallback
        if ($menu.length) {
          $menu.superfish({
            delay: 200,
            animation: {
              opacity: 'show',
              height: 'show'
            },
            speed: 'fast',
            cssArrows: false,
            autoArrows: false
          });
          console.log('MenuInitializer: Direct Superfish initialization successful');
        }

        return true;
      } catch (e) {
        console.error('MenuInitializer: Error initializing menu:', e);
        return false;
      }
    };

    // Wait for scripts to load, then initialize
    const checkAndInit = () => {
      // Check if scripts are loaded
      const scriptsLoaded = window.jQuery && window.jQuery.fn && window.jQuery.fn.superfish && window.SEMICOLON;
      
      if (scriptsLoaded) {
        // Give it a moment for DOM to be ready
        setTimeout(() => {
          if (initMenu()) {
            console.log('MenuInitializer: Menu initialized successfully');
          }
        }, 300);
      } else {
        // Retry after a short delay
        setTimeout(checkAndInit, 200);
      }
    };

    // Start checking after scripts should have loaded
    const timer = setTimeout(() => {
      checkAndInit();
    }, 1500);

    // Also try on window load
    window.addEventListener('load', () => {
      setTimeout(() => {
        if (initMenu()) {
          console.log('MenuInitializer: Menu initialized on window load');
        }
      }, 500);
    });

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
