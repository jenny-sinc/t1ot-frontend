import { useState } from 'react';
import { Tab, Tabs, Form, Button, Stack } from 'react-bootstrap';

export default function SubmitTabContent() {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Details</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="success" className="w-100">Submit Info</Button>
        </Form>
    );
}