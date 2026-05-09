import React, { useState } from 'react';
import { Alert } from 'react-bootstrap'

interface SidebarNotifProps {
    switchToSubmit: () => void;
}

export default function SidebarNotif({ switchToSubmit }: SidebarNotifProps) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert
                variant="info"
                onClose={() => setShow(false)}
                dismissible
                className="border shadow-sm"
            >
                <strong>Heads up!</strong> {`We're still new so data may be sparse,
                but all the more reason to help out by `}
                <a
                    href="#"
                    className="alert-link"
                    onClick={(e) => {
                        e.preventDefault();
                        switchToSubmit();
                        setShow(false);
                    }}
                >
                    submitting a location!
                </a>
            </Alert>
        );
    }
    return null;
};