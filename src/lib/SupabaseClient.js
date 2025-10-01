import { createClient } from "@supabase/supabase-js";

// URL KEY CLIENT
const supabaseUrl = "https://lloisorxwoajdhclaehc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxsb2lzb3J4d29hamRoY2xhZWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMDMzMDAsImV4cCI6MjA3NDc3OTMwMH0.LpPOwDmz-XVW8KUPYXaNMvyprgVBtJHw6WiMeBdbPEM";
export const client = createClient(supabaseUrl, supabaseKey);
