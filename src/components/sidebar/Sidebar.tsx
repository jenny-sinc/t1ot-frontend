import SearchTabContent from './searchTab/SearchTabContent'
import SubmitTabContent from './submitTab/SubmitTabContent'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

export default function Sidebar() {

    const [key, setKey] = useState('search');

    return (

        <div className="p-3 border rounded bg-light">
            <Tabs activeKey={key} onSelect={(k) => setKey(k || 'search')} className="mb-3 justify-content-center nav-fill">
                <Tab eventKey="search" title="Search">
                    <SearchTabContent />
                </Tab>
                <Tab eventKey="submit" title="Submit">
                    <SubmitTabContent />
                </Tab>
            </Tabs>
        </div>

    );
}