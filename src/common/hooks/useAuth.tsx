import { AuthContext } from 'common/providers/AuthProvider';
import { useContext } from 'react';

function useAuth() {
  const { user, signed, loading, signIn, signOut } = useContext(AuthContext);
  return { user, signed, loading, signIn, signOut };
}

export default useAuth;