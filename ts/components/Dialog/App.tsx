import React, { useState } from "react";
import { HeliumDialog } from "./Dialog";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const closeDialog = () => setIsDialogOpen(false);

  const [is2ndDialogOpen, setIs2ndDialogOpen] = useState(false);
  const close2ndDialog = () => setIs2ndDialogOpen(false);

  return (
    <div className="App">
      <button className="h-btn h-btn--primary" onClick={() => setIsDialogOpen(!isDialogOpen)}>Toggle Modal</button>

      <HeliumDialog
        header={"Test Modal"}
        initialFocusEl={".h-btn--init-focus"}
        open={isDialogOpen}
        closeDialog={closeDialog}
        submitHandler={() => console.log("I submit!")}
      >
        <p>
          <button className="h-btn h-btn--primary h-btn--init-focus" onClick={() => setIs2ndDialogOpen(!is2ndDialogOpen)}>Launch 2nd Modal</button>
        </p>
      </HeliumDialog>

      <HeliumDialog
        hasHeader={false}
        hasFooter={false}
        size={"small"}
        position={"bottom center"}
        open={is2ndDialogOpen}
        closeDialog={close2ndDialog}
        footerBackground={false}
        submitHandler={() => console.log("I submit!")}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </HeliumDialog>
    </div>
  );
}

export default App;
