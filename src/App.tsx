import './App.css';
import Layout from './components/layout/DesktopLayout';
import { useEffect, useState } from 'react';
import { supabase } from './utils/supabase';
import { fetchLocations } from './services/locations';
import DesktopLayout from './components/layout/DesktopLayout';
import { screen } from '@testing-library/dom';
import MobileLayout from './components/layout/MobileLayout';
import { useScreenSize } from './hooks/useScreenSize';

function App() {
  // const [locations, setLocations] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function load() {
  //     try {
  //       const data = await fetchLocations();
  //       setLocations(data);
  //     } catch (error) {
  //       console.error('Error fetching:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   load();
  // }, []);

  const screen = useScreenSize();

  return (
    <div className="App">
      {/* conditionaly renders the orrect layout based on the screenszie */}
      {screen.isMobile
        ? (<MobileLayout />)
        : (<DesktopLayout />)}
    </div>
  );
}

export default App;
