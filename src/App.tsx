import React from 'react';
import { useRouter } from './hooks/useRouter';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { HomeView } from './components/home/HomeView';
import { RulesView } from './components/rules/RulesView';
import { RecordsView } from './components/records/RecordsView';

export const App: React.FC = () => {
  const { currentRoute, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="monopoly-app-root">
      <Navbar
        currentRoute={currentRoute}
        theme={theme}
        onNavigate={navigate}
        onToggleTheme={toggleTheme}
      />

      {currentRoute === 'home' && <HomeView onNavigate={navigate} />}
      {currentRoute === 'rules' && <RulesView />}
      {currentRoute === 'records' && <RecordsView />}
    </div>
  );
};

export default App;
