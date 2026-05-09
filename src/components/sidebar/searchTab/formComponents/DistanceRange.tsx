import { Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

export const DistanceRange = ({ value, onChange }: { value: number, onChange: (val: number) => void }) => (
    <Form.Group className="mb-3">
        <div className="d-flex justify-content-between">
            <Form.Label htmlFor="searchDistanceRange">Distance</Form.Label>
            <output>{value} Km</output>
        </div>
        <Form.Range
            id="searchDistanceRange"
            min={1} max={25}
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
        />
    </Form.Group>
);