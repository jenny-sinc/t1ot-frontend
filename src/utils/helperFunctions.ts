export const getTooltipText = (sectionName: string) => {
    switch (sectionName) {
        case 'insulinFormat':
            return `More insulin formats may be available,
                        but will not show up in the search results if no
                        one has submitted that format for that location yet.`;
        case 'insulinType':
            return `More insulin types may be available,
                        but will not show up in the search results if no
                        one has submitted that type for that location yet.`;
        default:
            return '';
    }
};