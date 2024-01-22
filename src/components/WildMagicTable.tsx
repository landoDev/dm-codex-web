import { useState } from "react";
import { InfoTable, ModalContentContainer } from "../styles/ModalTables.styles";
import { Modal } from "@mui/material";
import RollTable from "./RollTable";
import { WILD_MAGIC_TABLE, WILD_MAGIC_TABLE_TWO } from "../static/screenConstants";
import { CommonExpTableGrouping, TwoTableContainerItem } from "../styles/CommonExpenses.styles";


const WildMagicTable = () => {
    const [openActions, setOpenActions] = useState<boolean>(false);

    return(
        <>
            <InfoTable onClick={() => setOpenActions(true)}>Wild Magic Table</InfoTable>
            <Modal open={openActions} onClose={() => setOpenActions(false)}>
                <ModalContentContainer>
                    <h2>Wild Magic</h2>
                    {/* TODO: rename this to a more generic style name since it's used in more components */}
                    <CommonExpTableGrouping style={{ display: 'flex', justifyContent: 'space-evenly '}}>
                        <TwoTableContainerItem>
                            <RollTable tablename="01-50" rows={WILD_MAGIC_TABLE} maxWidth="100%" />
                        </TwoTableContainerItem>
                        <TwoTableContainerItem>
                            <RollTable tablename="50-100" rows={WILD_MAGIC_TABLE_TWO} maxWidth="100%" />
                        </TwoTableContainerItem>
                    </CommonExpTableGrouping>
                </ModalContentContainer>
            </Modal>
        </>
    )
};

export default WildMagicTable;