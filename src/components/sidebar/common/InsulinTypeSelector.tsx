import { Form } from 'react-bootstrap';
import ToolTip from './ToolTip';

interface InsulinTypeSelectorProps {
    insulinTypes: any,
    onToggle: (name: string) => void,
    onSelectAll: (checked: boolean) => void,
    tooltipText?: string,
}

export const InsulinTypeSelector = ({ insulinTypes, onToggle, onSelectAll, tooltipText }: InsulinTypeSelectorProps) => {
    const allSelected = insulinTypes.longActing && insulinTypes.fastActing;
    const isIndeterminate = (insulinTypes.longActing || insulinTypes.fastActing) && !allSelected;

    return (
        <Form.Group className="mb-3">
            <Form.Label>
                Insulin Type
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
                    type="checkbox" label="Long acting"
                    checked={insulinTypes.longActing} onChange={() => onToggle('longActing')}
                />
                <Form.Check
                    type="checkbox" label="Fast acting"
                    checked={insulinTypes.fastActing} onChange={() => onToggle('fastActing')}
                />
            </div>
        </Form.Group>
    );
};