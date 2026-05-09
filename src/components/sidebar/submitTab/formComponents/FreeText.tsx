import { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function FreeText({ value, onChange }: { value: string, onChange: (val: string) => void }) {

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Notes (optional)</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </Form.Group>
        </Form>
    );
}