import { InfoTable, ModalTablesContainer } from "../styles/ModalTables.styles";


const ModalTables = () => {
    return (
        <ModalTablesContainer id="info-modals" spacing={1}>
            {/* TODO: think about how to reuse this component or how to open each modal accurately and DRY */}
            <InfoTable>Actions in Combat</InfoTable>
            <InfoTable>Conditions</InfoTable>
            <InfoTable>Common Expenses</InfoTable>
            <InfoTable>Wild Magic Table</InfoTable>
            <InfoTable>Travel Paces</InfoTable>
            <InfoTable>Improvizing Damage</InfoTable>
            <InfoTable>Destroying Objects</InfoTable>
            <InfoTable>Madness Tables</InfoTable>
        </ModalTablesContainer>
    );
};

export default ModalTables;