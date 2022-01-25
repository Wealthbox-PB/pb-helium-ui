import React, { useContext } from 'react';
export var DialogContext = React.createContext({
    ariaLabelSelector: "",
    ariaDescriptionSelector: "",
    closeDialog: function () { },
});
export function useDialogContext() {
    return useContext(DialogContext);
}
//# sourceMappingURL=DialogContext.js.map