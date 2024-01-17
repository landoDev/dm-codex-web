import { ModalTablesContainer } from "../styles/ModalTables.styles";


const ModalTables = () => {
    return (
        <ModalTablesContainer id="info-modals" spacing={1}>
            {/* TODO: obviously add the modals, when building out this separate component */}
            <div>Actions in Combat</div>
            <div>Conditions</div>
            <div>Common Expenses</div>
            <div>Wild Magic Table</div>
            <div>Travel Paces</div>
            <div>Improvizing Damage</div>
            <div>Destroying Objects</div>
            <div>Madness Tables</div>
        </ModalTablesContainer>
    )
}

export default ModalTables;