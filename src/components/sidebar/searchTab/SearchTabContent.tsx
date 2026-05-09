import { Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { useState } from 'react';
import { DistanceRange } from './formComponents/DistanceRange';
import { LocationInput } from '../common/LocationInput';
import { InsulinTypeSelector } from '../common/InsulinTypeSelector';
import { InsulinFormatSelector } from '../common/InsulinFormatSelector';
import { getTooltipText } from '../../../utils/helperFunctions';

export default function SearchTabContent() {

    const [location, setLocation] = useState('');
    const [distance, setDistance] = useState(5);
    const [insulinTypes, setInsulinTypes] = useState({ longActing: true, fastActing: true });
    const [insulinFormats, setInsulinFormats] = useState({ vial: true, cartridge: true, prefill: true });

    const handleToggleType = (name: string) => {
        setInsulinTypes(prev => ({ ...prev, [name]: !prev[name as keyof typeof insulinTypes] }));
    };

    const handleSelectAllTypes = (checked: boolean) => {
        setInsulinTypes({ longActing: checked, fastActing: checked });
    };

    const handleToggleFormat = (name: string) => {
        setInsulinFormats(prev => ({ ...prev, [name]: !prev[name as keyof typeof insulinFormats] }));
    };

    const handleSelectAllFormats = (checked: boolean) => {
        setInsulinFormats({ vial: checked, cartridge: checked, prefill: checked });
    };

    const handleSearch = () => {
        const searchData = {
            location,
            distance,
            insulinTypes: insulinTypes,
            insulinFormats: insulinFormats,
        };
        console.log("Search Data Object:", searchData);
    };

    return (
        <Form >
            <LocationInput
                value={location}
                onChange={setLocation}
            />
            <DistanceRange
                value={distance}
                onChange={setDistance}
            />
            <InsulinTypeSelector
                insulinTypes={insulinTypes}
                onToggle={handleToggleType}
                onSelectAll={handleSelectAllTypes}
                tooltipText={getTooltipText('insulinType')}
            />
            <InsulinFormatSelector
                insulinFormats={insulinFormats}
                onToggle={handleToggleFormat}
                onSelectAll={handleSelectAllFormats}
                tooltipText={getTooltipText('insulinFormat')}
            />
            <Button
                variant="primary"
                className="w-100"
                onClick={handleSearch}
            >
                Search
            </Button>
        </Form>
    );
}