import { useState } from "react";
import { InfoTable, ModalContentContainer } from "../styles/ModalTables.styles";
import { Modal } from "@mui/material";
import RollTable from "./RollTable";
import { INDEFINITE_MADNESS, LONG_TERM_MADNESS, SHORT_TERM_MADNESS } from "../static/screenConstants";
import { CommonExpTableGrouping, ThreeTableContainerItem, TwoTableContainerItem } from "../styles/CommonExpenses.styles";

const MadnessTables = () => {
    const [openActions, setOpenActions] = useState<boolean>(false);
    const fontSize = ''

    return(
        <>
            <InfoTable onClick={() => setOpenActions(true)}>Madness Tables</InfoTable>
            <Modal open={openActions} onClose={() => setOpenActions(false)}>
                <ModalContentContainer>
                    <p>A calm emotions spell can supress the effects of madness, while a lesser restoration spell can rid a character of long-term madness.
                        Depending on the source of the madness, remove curse or dispel evil might also prove effective.</p>
                    <CommonExpTableGrouping>
                        <TwoTableContainerItem>
                            <RollTable tablename="Short-Term Madness" rows={SHORT_TERM_MADNESS} maxWidth="100%" />
                        </TwoTableContainerItem>
                        <TwoTableContainerItem>
                            <RollTable tablename="Long-Term Madness" rows={LONG_TERM_MADNESS} maxWidth="100%" />
                        </TwoTableContainerItem>
                    </CommonExpTableGrouping>
                    <div>
                        <h2>Indefinte Madness</h2>
                        <p>A greater restoration spell or more powerful magic is required to rid a character of indefinite madness.</p>
                        <RollTable tablename="" rows={INDEFINITE_MADNESS} maxWidth="100%" />
                    </div>
                </ModalContentContainer>
            </Modal>
        </>
    )
};

export default MadnessTables;