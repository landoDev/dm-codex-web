import { Modal } from "@mui/material";
import { InfoTable, ModalTablesContainer } from "../styles/ModalTables.styles";
import { useState } from "react";
import ActionsInCombat from "./ActionsInCombat";
import Conditions from "./Conditions";
import CommonExpenses from "./CommonExpenses";
import WildMagicTable from "./WildMagicTable";
import Traveling from "./Traveling";
import DestroyingObjects from "./DestroyingObjects";
import MadnessTables from "./MadnessTables";


const ModalTables = () => {
    /**
     * Some roll tables and infor are longer and more dense. 
     * These ones live here so they can be opened with the modal and span more space without being intrusive
     */
    return (
        <ModalTablesContainer id="info-modals" spacing={1}>
            <ActionsInCombat />
            <Conditions />
            <CommonExpenses />
            <WildMagicTable />
            <Traveling />
            <DestroyingObjects />
            <MadnessTables />
        </ModalTablesContainer>
    );
};

export default ModalTables;