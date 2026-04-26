import { supabase } from '../utils/supabase';

export async function fetchLocations() {
    const { data, error } = await supabase
        .from('locations')
        .select('*');

    if (error) throw error;
    return data ?? [];
}