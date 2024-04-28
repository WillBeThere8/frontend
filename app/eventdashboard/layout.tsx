 "use client";

 import React, { useEffect, useState } from "react";
function EventDashboardLayout ({ children }: { children: React.ReactNode }) {
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
     setIsClient(true);
   }, []);

    return (
    <div>
          {children}

    </div>
  )
}

export default EventDashboardLayout
