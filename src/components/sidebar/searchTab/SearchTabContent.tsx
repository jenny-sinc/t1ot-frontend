import { useDispatch } from 'react-redux';
import { setSearchLocation } from '../../../store/search'; // Adjust path to your search.ts



import { useState } from 'react';
import { Tab, Tabs, Form, Button, Stack } from 'react-bootstrap';

// type SearchInputsProps = {
//     searchLocation: string;
//     insulinFormat: string[];
// };

export default function SearchTabContent() {
    // const dispatch = useDispatch();

    // // 1. Handle Location changes (Redux)
    // const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     dispatch(setSearchLocation(e.target.value));
    // };

    // // 2. Handle Checkbox changes (Local UI state or Redux)
    // // Note: If you want these in Redux too, you'd dispatch setInsulinFormat here
    // const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     console.log('Searching for:', searchLocation);
    // };

    return (
        // <form className={styles.tabContent} onSubmit={handleSearch}>
        //     <label>
        //         Location
        //         <input
        //             type="text"
        //             name="searchLocation"
        //             value={searchLocation} // This now comes from Redux via props
        //             placeholder="Search for a location..."
        //             onChange={handleLocationChange}
        //         />
        //     </label>

        //     <p>Insulin format:</p>
        //     <label>
        //         Pre-filled pen
        //         <input type="checkbox" name="preFilledPen" />
        //     </label>
        //     {/* ... other checkboxes ... */}

        //     <button type="submit">Submit</button>
        // </form>

        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter city..." />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Pre-filled pen" />
                <Form.Check type="checkbox" label="Vial" />
            </Form.Group>
            <Button variant="primary" className="w-100">Search</Button>
        </Form>
    );
}