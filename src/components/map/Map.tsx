import React, { useEffect, useRef } from 'react';
import * as maptiler from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./Map.css";
import configData from '../../config';

maptiler.config.apiKey = configData.MAPTILER_API_KEY;

// import { fetchLocations } from '../../services/locations';
// import { supabase } from '../../utils/supabase';

// export default function Map() {
//     const [locations, setLocations] = useState<Location[]>([])

//     type Location = {
//         id: number
//         name: string
//         insulin_type: string
//         brand?: string
//         format?: string
//         last_verified?: EpochTimeStamp
//         location: any
//     }

//     async function fetchLocations(): Promise<Location[]> {
//         const { data, error } = await supabase
//             .from('locations')
//             .select('*')

//         if (error) throw error
//         return data ?? []
//     }

//     useEffect(() => {
//         async function loadLocations() {
//             try {
//                 const locations = await fetchLocations();
//                 setLocations(locations);
//             } catch (error) {
//                 console.error('Error fetching locations:', error);
//             }
//         }

//         loadLocations();
//     }, []);

//     return (
//         <div>
//             <h1>Map Component</h1>
//             <h3>Locations:</h3>
//             <ul>
//                 {locations.map((location: any) => (
//                     <li key={location.id}>
//                         {location.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

export default function Map() {

    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<maptiler.Map | null>(null);

    const center = { lng: -1.548756, lat: 53.794253 };
    const zoom = 4;

    useEffect(() => {
        // Prevent double initialization if React StrictMode runs twice
        if (map.current || !mapContainer.current) return;

        map.current = new maptiler.Map({
            // Pass the ref directly instead of targeting a global DOM string ID
            container: mapContainer.current,
            style: maptiler.MapStyle.STREETS,
            center: [center.lng, center.lat],
            zoom: zoom
        });

        // Cleanup configuration to release memory when component destroys
        return () => {
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, []);

    return (
        <div
            className="bg-secondary rounded border border-2 position-relative w-100 flex-grow-1"
            style={{
                minHeight: '400px',
                height: '100%'
            }}
        >
            <div ref={mapContainer} className="map-view-container h-100 w-100 rounded" />
        </div>
    );
}