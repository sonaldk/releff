// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://cftkjhefzrtloqnqbpsp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmdGtqaGVmenJ0bG9xbnFicHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwMjQ5MTUsImV4cCI6MjA1MjYwMDkxNX0.p1U0B0TuLsKBoeJFC63_HYVNXDauvtkjPG7S-eG76_Q";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);