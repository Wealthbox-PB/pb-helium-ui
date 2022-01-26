import React, { useContext } from 'react';
export var DialogContext = React.createContext({
    ariaDescriptionSelector: "",
    ariaLabelSelector: "",
    closeDialog: function () { },
});
export function useDialogContext() {
    return useContext(DialogContext);
}
//# sourceMappingURL=DialogContext.js.map