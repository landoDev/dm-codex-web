import { useState } from "react";

import { InfoTable, ModalContentContainer } from "../styles/ModalTables.styles";
import { Modal } from "@mui/material";
import RollTable from "./RollTable";
import { ADVENTURING_SERVICES, EXCHANGE_RATES, FOOD_DRINK_LODGING, LIFESTYLE_EXPENSES, MOUNTS } from "../static/screenConstants";
import { CommonExpTableGrouping , TwoTableContainerItem, ThreeTableContainerItem} from "../styles/CommonExpenses.styles";



const CommonExpenses = () => {
    const [openActions, setOpenActions] = useState<boolean>(false);

    return(
        <>
            <InfoTable onClick={() => setOpenActions(true)}>Common Expenses</InfoTable>
            <Modal open={openActions} onClose={() => setOpenActions(false)}>
                <ModalContentContainer>
                        <CommonExpTableGrouping>
                            <TwoTableContainerItem>
                                <RollTable tablename="Lifestyle Expenses" rows={LIFESTYLE_EXPENSES} />
                            </TwoTableContainerItem>
                            <TwoTableContainerItem>
                                <RollTable tablename="Currency Exchange Rate" rows={EXCHANGE_RATES} />
                            </TwoTableContainerItem>
                        </CommonExpTableGrouping>
                        <CommonExpTableGrouping>
                            <ThreeTableContainerItem>
                                <RollTable tablename="Mounts" rows={MOUNTS} />
                            </ThreeTableContainerItem>
                            <ThreeTableContainerItem>
                                <RollTable tablename="Inns/Taverns" rows={FOOD_DRINK_LODGING} />
                            </ThreeTableContainerItem>
                            <ThreeTableContainerItem>
                                <RollTable tablename="Services" rows={ADVENTURING_SERVICES} />
                            </ThreeTableContainerItem>
                        </CommonExpTableGrouping>
                </ModalContentContainer>
            </Modal>
        </>
    )
};

export default CommonExpenses;