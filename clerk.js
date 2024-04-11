import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-react';
import { config } from '@clerk/clerk-react';

config.ignoredRoutes = [
  '/favicon.ico', // Add any other routes you want to ignore here
];

export default function Clerk({ children }) {
  return (
    <ClerkProvider frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}>
      <ClerkLoaded>
        {children}
      </ClerkLoaded>
    </ClerkProvider>
  );
}
