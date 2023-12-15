import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const SessionProvider = ({ children, user }) => {
  console.log('userId in SessionProvider:', user?.id); // Add this line
  queryClient.setQueryData('user', user);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default SessionProvider;
