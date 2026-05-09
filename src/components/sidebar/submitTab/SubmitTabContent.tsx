import { Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { useState } from 'react';
import { LocationInput } from '../common/LocationInput';
import { InsulinTypeSelector } from '../common/InsulinTypeSelector';
import { InsulinFormatSelector } from '../common/InsulinFormatSelector';
import FreeText from './formComponents/FreeText';
import SuccessModal from '../common/SuccessModal';

export default function SubmitTabContent() {

    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [location, setLocation] = useState('');
    const [notes, setNotes] = useState('');
    const [types, setTypes] = useState({ longActing: true, fastActing: true });
    const [insulinFormats, setInsulinFormats] = useState({ vial: true, cartridge: true, prefill: true });

    const handleToggleType = (name: string) => {
        setTypes(prev => ({ ...prev, [name]: !prev[name as keyof typeof types] }));
    };

    const handleSelectAllTypes = (checked: boolean) => {
        setTypes({ longActing: checked, fastActing: checked });
    };

    const handleToggleFormat = (name: string) => {
        setInsulinFormats(prev => ({ ...prev, [name]: !prev[name as keyof typeof insulinFormats] }));
    };

    const handleSelectAllFormats = (checked: boolean) => {
        setInsulinFormats({ vial: checked, cartridge: checked, prefill: checked });
    };

    const handleModalClose = () => setSubmitSuccess(false);

    const handleSubmit = () => {
        const submitData = {
            location,
            insulinTypes: types,
            insulinFormats: insulinFormats,
            notes: notes,
        };
        console.log("Submit Data Object:", submitData);
        setSubmitSuccess(true)
    };

    return (
        <Form >
            <SuccessModal
                show={submitSuccess}
                handleClose={handleModalClose}
            />
            <LocationInput
                value={location}
                onChange={setLocation}
            />
            <InsulinTypeSelector
                insulinTypes={types}
                onToggle={handleToggleType}
                onSelectAll={handleSelectAllTypes}
            />
            <InsulinFormatSelector
                insulinFormats={insulinFormats}
                onToggle={handleToggleFormat}
                onSelectAll={handleSelectAllFormats}
            />
            <FreeText
                value={notes}
                onChange={setNotes}
            />
            <Button
                variant="primary"
                className="w-100"
                onClick={handleSubmit}
            >
                Submit Location
            </Button>
        </Form>
    );
}