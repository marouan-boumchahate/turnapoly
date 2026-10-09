import { useState, useEffect, useCallback } from 'react';
import { AppRoute } from '../types/route';

function getRouteFromHash(): AppRoute {
  const hash = window.location.hash.replace('#/', '').trim();
  if (hash === 'rules' || hash === 'records') {
    return hash;
  }
  return 'home';
}

export function useRouter() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getRouteFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((route: AppRoute) => {
    window.location.hash = route === 'home' ? '#/' : `#/${route}`;
  }, []);

  return { currentRoute, navigate };
}
