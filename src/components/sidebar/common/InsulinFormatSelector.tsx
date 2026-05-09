import { Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import ToolTip from './ToolTip';

interface InsulinFormatSelectorProps {
    insulinFormats: any,
    onToggle: (name: string) => void,
    onSelectAll: (checked: boolean) => void,
    tooltipText?: string,
}

export const InsulinFormatSelector = ({ insulinFormats, onToggle, onSelectAll, tooltipText }: InsulinFormatSelectorProps) => {
    const allSelected = insulinFormats.vial && insulinFormats.cartridge && insulinFormats.prefill;
    const isIndeterminate = (insulinFormats.vial || insulinFormats.cartridge || insulinFormats.prefill) && !allSelected;

    return (
        <Form.Group className="mb-3">
            <Form.Label>
                Insulin Format
                {tooltipText && <ToolTip text={tooltipText} />}
            </Form.Label>
            <Form.Check
                type="checkbox" label="All"
                checked={allSelected}
                onChange={(e) => onSelectAll(e.target.checked)}
                ref={(el: HTMLInputElement | null) => { if (el) el.indeterminate = isIndeterminate; }}
            />
            <div className="ms-4">
                <Form.Check
                    type="checkbox" label="Vial"
                    checked={insulinFormats.vial} onChange={() => onToggle('vial')}
                />
                <Form.Check
                    type="checkbox" label="Penfill cartridge"
                    checked={insulinFormats.cartridge} onChange={() => onToggle('cartridge')}
                />
                <Form.Check
                    type="checkbox" label="Pre-filled pen"
                    checked={insulinFormats.prefill} onChange={() => onToggle('prefill')}
                />
            </div>
        </Form.Group>
    );
};