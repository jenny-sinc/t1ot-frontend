import SearchTabContent from './searchTab/SearchTabContent'
import SubmitTabContent from './submitTab/SubmitTabContent'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { useState } from 'react';
import { Tab, Tabs, Nav } from 'react-bootstrap';
import SidebarNotif from './common/SidebarNotif';

export default function Sidebar() {

    const [key, setKey] = useState('search');

    return (

        <div className="p-3 border rounded bg-light d-flex flex-column h-100">
            <Tab.Container activeKey={key} onSelect={(k) => setKey(k || 'search')}>
                <Nav variant="tabs" className="mb-3 justify-content-center nav-fill">
                    <Nav.Item>
                        <Nav.Link eventKey="search">Search</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="submit">Submit</Nav.Link>
                    </Nav.Item>
                </Nav>

                <SidebarNotif
                    switchToSubmit={() => setKey('submit')}
                />

                <Tab.Content>
                    <Tab.Pane eventKey="search">
                        <SearchTabContent />
                    </Tab.Pane>
                    <Tab.Pane eventKey="submit">
                        <SubmitTabContent />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
}