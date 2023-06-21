import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://zwoddnoseluzavmisaxp.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3b2Rkbm9zZWx1emF2bWlzYXhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzM3ODc1NCwiZXhwIjoyMDAyOTU0NzU0fQ.fe56UTBLSn8gbPIkqJ5qi8UDgdp-Mg22wN9G_jSPeZI",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3b2Rkbm9zZWx1emF2bWlzYXhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzM3ODc1NCwiZXhwIjoyMDAyOTU0NzU0fQ.fe56UTBLSn8gbPIkqJ5qi8UDgdp-Mg22wN9G_jSPeZI"
    }
    
})