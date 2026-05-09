import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function ToolTip({ text }: { text: string }) {

    const infoTooltip = (props: any) => (
        <Tooltip id="info-tooltip" {...props}>
            {text}
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement="top"
            overlay={infoTooltip}
        >
            <span className="ms-2 text-primary-emphasis" style={{ cursor: 'help' }}>
                <FontAwesomeIcon icon={faCircleInfo} />
            </span>
        </OverlayTrigger>
    );
}