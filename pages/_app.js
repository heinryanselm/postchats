import '../styles/globals.css'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import supabaseClient from '../utils/supabaseClient';
import {useState} from "react";
import TimeAgo from 'javascript-time-ago'


import en from 'javascript-time-ago/locale/en.json';

TimeAgo.addDefaultLocale(en);

function MyApp({ Component, pageProps }) {
  const supabase = createPagesBrowserClient();
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
  //return <Component {...pageProps} />
}

export default MyApp