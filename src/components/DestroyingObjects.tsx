import { useState } from "react";
import { InfoTable, ModalContentContainer } from "../styles/ModalTables.styles";
import { Modal } from "@mui/material";
import RollTable from "./RollTable";
import { OBJECT_AC, OBJECT_HIT_POINTS } from "../static/screenConstants";
import { CommonExpTableGrouping, TwoTableContainerItem } from "../styles/CommonExpenses.styles";


const DestroyingObjects = () => {
    const [openActions, setOpenActions] = useState<boolean>(false);

    return(
        <>
            <InfoTable onClick={() => setOpenActions(true)}>Destroying Objects</InfoTable>
            <Modal open={openActions} onClose={() => setOpenActions(false)}>
                <ModalContentContainer>
                    {/* TODO: rename this to a more generic style name since it's used in more components */}
                    <CommonExpTableGrouping>
                        <TwoTableContainerItem>
                            <RollTable tablename="Object Armor Class" rows={OBJECT_AC} maxWidth="100%" />
                        </TwoTableContainerItem>
                        <TwoTableContainerItem>
                            <RollTable tablename="Object Hit Points" rows={OBJECT_HIT_POINTS} maxWidth="100%" />
                        </TwoTableContainerItem>
                    </CommonExpTableGrouping>
                </ModalContentContainer>
            </Modal>
        </>
    )
};

export default DestroyingObjects;