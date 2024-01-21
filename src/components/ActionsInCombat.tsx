import { useState } from "react";
import { InfoTable, ModalContentContainer } from "../styles/ModalTables.styles";
import { Modal } from "@mui/material";
import RollTable from "./RollTable";
import { ACTIONS_IN_COMBAT } from "../static/screenConstants";

const ActionsInCombat = () => {
    const [openActions, setOpenActions] = useState<boolean>(false);

    return(
        <>
            <InfoTable onClick={() => setOpenActions(true)}>Actions in Combat</InfoTable>
            <Modal open={openActions} onClose={() => setOpenActions(false)}>
                <ModalContentContainer>
                    <RollTable tablename="Actions in Combat" rows={ACTIONS_IN_COMBAT} maxWidth="100%" />
                    <div style={{ fontSize: '12px'}}>* These actions are optional and can be found on pages 271-272 of the DMG.</div>
                </ModalContentContainer>
            </Modal>
        </>
    )
};

export default ActionsInCombat;