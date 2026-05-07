import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';

/**
 * This file is web-only and used to configure the root HTML for every web page during static rendering.
 * The contents of this function only run in Node.js environments and do not have access to the DOM or browser APIs.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/*
          Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
          However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
        */}
        <ScrollViewStyleReset />

        <style dangerouslySetInnerHTML={{ __html: `
          body {
            background-color: #f3f4f6; /* Soft gray background for the overall web page */
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          }
          .device-frame {
            width: 375px;
            height: 812px;
            margin: 2rem auto;
            border: 14px solid #1a1a1a;
            border-radius: 40px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
          }
          .device-notch {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 160px;
            height: 30px;
            background-color: #1a1a1a;
            border-bottom-left-radius: 18px;
            border-bottom-right-radius: 18px;
            z-index: 9999;
          }
          /* Ensure the React Native root takes up the full constrained space */
          #root {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }
        ` }} />
      </head>
      <body>
        <div className="device-frame">
          <div className="device-notch"></div>
          {/* Expo Router injects the app here */}
          {children}
        </div>
      </body>
    </html>
  );
}
