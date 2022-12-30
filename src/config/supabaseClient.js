 
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://seqahkdnzhhrqlolhtsl.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlcWFoa2RuemhocnFsb2xodHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA5ODUzNDMsImV4cCI6MTk4NjU2MTM0M30.oMTAlY-7ryOZtHohZfp0821ICEeMQPJO1DoYsUYQ4oc"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;