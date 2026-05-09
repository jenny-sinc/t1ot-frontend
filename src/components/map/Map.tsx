// import React, { useEffect, useState } from 'react';
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

export default function MapContainer() {
    return (
        <div className="bg-secondary rounded d-flex align-items-center justify-content-center"
            style={{
                height: '100%',
                minHeight: '400px',
                border: '2px dashed #000'
            }}>
            <p className="text-white">Map Placeholder</p>
        </div >
    );
}