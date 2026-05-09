import { Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

export const LocationInput = ({ value, onChange }: { value: string, onChange: (val: string) => void }) => (
    <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter city..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </Form.Group>
);