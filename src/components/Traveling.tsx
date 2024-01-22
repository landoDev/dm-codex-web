import { useState } from "react";
import { InfoTable, ModalContentContainer } from "../styles/ModalTables.styles";
import { Modal } from "@mui/material";
import RollTable from "./RollTable";
import { MAP_TRAVEL_CITY, MAP_TRAVEL_DUNGEON, MAP_TRAVEL_KINGDOM, MAP_TRAVEL_PROVINCE, PACE_EFFECTS, PARTY_PACE, PC_TRAVEL_FAST, PC_TRAVEL_NORMAL, PC_TRAVEL_SLOW, WILD_MAGIC_TABLE, WILD_MAGIC_TABLE_TWO } from "../static/screenConstants";
import { CommonExpTableGrouping, ThreeTableContainerItem, TwoTableContainerItem } from "../styles/CommonExpenses.styles";


const Traveling = () => {
    const [openActions, setOpenActions] = useState<boolean>(false);

    return(
        <>
            <InfoTable onClick={() => setOpenActions(true)}>Traveling</InfoTable>
            <Modal open={openActions} onClose={() => setOpenActions(false)}>
                <ModalContentContainer>
                    <h2>Map Travel Paces</h2>
                    <p>Below are guidelines for traveling in different sized map areas at different paces (slow, normal and fast.)</p>
                    {/* TODO: rename this to a more generic style name since it's used in more components */}
                    <CommonExpTableGrouping>
                        <TwoTableContainerItem>
                            <RollTable tablename="Dungeon" rows={MAP_TRAVEL_DUNGEON} />
                            <div>1 square = 10 feet</div>
                        </TwoTableContainerItem>
                        <TwoTableContainerItem>
                            <RollTable tablename="City" rows={MAP_TRAVEL_CITY} />
                            <div>1 square = 100 feet</div>
                        </TwoTableContainerItem>
                    </CommonExpTableGrouping>
                    <CommonExpTableGrouping>
                        <TwoTableContainerItem>
                            <RollTable tablename="Province" rows={MAP_TRAVEL_PROVINCE} />
                            <div>1 hex = 1 miles</div>
                        </TwoTableContainerItem>
                        <TwoTableContainerItem>
                            <RollTable tablename="Kingdom" rows={MAP_TRAVEL_KINGDOM} />
                            <div>1 hex = 6 miles</div>
                        </TwoTableContainerItem>
                    </CommonExpTableGrouping>
                    <h2>Travel Paces</h2>
                    <p>Below are guidelines for how fast a PC can travel on foot in actual distances at different paces (slow, normal and fast.)</p>
                    <CommonExpTableGrouping>
                        <TwoTableContainerItem>
                            <RollTable tablename="Calculating Your Party's Pace" rows={PARTY_PACE} />
                        </TwoTableContainerItem>
                        <TwoTableContainerItem>
                            <RollTable tablename="Pace Effects" rows={PACE_EFFECTS} />
                        </TwoTableContainerItem>
                    </CommonExpTableGrouping>
                    <CommonExpTableGrouping>
                        <ThreeTableContainerItem>
                            <RollTable tablename="Fast" rows={PC_TRAVEL_FAST} />
                        </ThreeTableContainerItem>
                        <ThreeTableContainerItem>
                            <RollTable tablename="Normal" rows={PC_TRAVEL_NORMAL} />
                        </ThreeTableContainerItem>
                        <ThreeTableContainerItem>
                            <RollTable tablename="Slow" rows={PC_TRAVEL_SLOW} />
                        </ThreeTableContainerItem>
                    </CommonExpTableGrouping>
                </ModalContentContainer>
            </Modal>
        </>
    )
};

export default Traveling;