import { Modal } from "@mui/material";
import { InfoTable, ModalTablesContainer } from "../styles/ModalTables.styles";
import { useState } from "react";
import ActionsInCombat from "./ActionsInCombat";
import Conditions from "./Conditions";
import CommonExpenses from "./CommonExpenses";
import WildMagicTable from "./WildMagicTable";


const ModalTables = () => {
    /**
     * Some roll tables and infor are longer and more dense. 
     * These ones live here so they can be opened with the modal and span more space without being intrusive
     */
    return (
        <ModalTablesContainer id="info-modals" spacing={1}>
            {/* TODO: think about how to reuse this component or how to open each modal accurately and DRY */}
            <ActionsInCombat />
            <Conditions />
            <CommonExpenses />
            <WildMagicTable />
            <InfoTable>Travel Paces</InfoTable>
            <InfoTable>Improvizing Damage</InfoTable>
            <InfoTable>Destroying Objects</InfoTable>
            <InfoTable>Madness Tables</InfoTable>
        </ModalTablesContainer>
    );
};

export default ModalTables;