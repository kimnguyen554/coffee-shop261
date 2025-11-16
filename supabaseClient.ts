import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://knjpaxlayvnceiyrnedq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuanBheGxheXZuY2VpeXJuZWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NzkwODYsImV4cCI6MjA3NzU1NTA4Nn0.zHrKS-0t3zMoF4oYxY7h_ZFpIAt9xeclEDBkyZURyHM";

export const supabase = createClient(supabaseUrl, supabaseKey);
