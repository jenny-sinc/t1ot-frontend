import './App.css';
import Layout from './components/layout/Layout';
import { useEffect, useState } from 'react';
import { supabase } from './utils/supabase';
import { fetchLocations } from './services/locations';

function App() {
  const [locations, setLocations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  console.log('SUPABASE_URL:', process.env.REACT_APP_SUPABASE_URL);
  console.log('SUPABASE_KEY:', process.env.REACT_APP_SUPABASE_ANON_KEY);


  useEffect(() => {
    async function load() {
      try {
        const data = await fetchLocations();
        setLocations(data);
      } catch (error) {
        console.error('Error fetching:', error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
