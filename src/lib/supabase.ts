import 'react-native-url-polyfill/auto'
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kcifcqwsaduogcpwgnhh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjaWZjcXdzYWR1b2djcHdnbmhoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDQ0OTgyNywiZXhwIjoyMDEwMDI1ODI3fQ.Dl3iWKqSdd57s0qpD3HrAiAZW403sp3C69P6kc65WOM";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth:{
    persistSession:false
  }
});
