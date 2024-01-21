import { useState } from "react";
import styled from "@emotion/styled";

import { InfoTable, ModalContentContainer } from "../styles/ModalTables.styles";
import { Modal } from "@mui/material";
import RollTable from "./RollTable";

const LIFESTYLE_EXPENSES = [
    { 
        "lifestyle": "Wretched",
        "price/day": "-"
    },
    { 
        "lifestyle": "Wretched",
        "price/day": "-"
    },
    { 
        "lifestyle": "Wretched",
        "price/day": "-"
    },
    { 
        "lifestyle": "Wretched",
        "price/day": "-"
    },
    { 
        "lifestyle": "Wretched",
        "price/day": "-"
    },
    { 
        "lifestyle": "Wretched",
        "price/day": "-"
    },
]

const ADVENTURING_SERVICES = [
    {
        "service": "Coach Cab between Towns",
        "pay": "3 cp/mile",
    },
    {
        "service": "Coach Cab between Towns",
        "pay": "3 cp/mile",
    },
    {
        "service": "Coach Cab between Towns",
        "pay": "3 cp/mile",
    },
    {
        "service": "Coach Cab between Towns",
        "pay": "3 cp/mile",
    },
    {
        "service": "Coach Cab between Towns",
        "pay": "3 cp/mile",
    },
    {
        "service": "Coach Cab between Towns",
        "pay": "3 cp/mile",
    },
    {
        "service": "Coach Cab between Towns",
        "pay": "3 cp/mile",
    },
    {
        "service": "Coach Cab between Towns",
        "pay": "3 cp/mile",
    },
    {
        "service": "Coach Cab between Towns",
        "pay": "3 cp/mile",
    },
    {
        "service": "Coach Cab between Towns",
        "pay": "3 cp/mile",
    },
]

const EXCHANGE_RATES = [
    {
        "coin": "Copper",
        "cp": '1',
        "sp": '1/10',
        "ep": '1/50',
        "gp": '1/100',
        "pp": '1/1000'
    },
    {
        "coin": "Copper",
        "cp": '1',
        "sp": '1/10',
        "ep": '1/50',
        "gp": '1/100',
        "pp": '1/1000'
    },
    {
        "coin": "Copper",
        "cp": '1',
        "sp": '1/10',
        "ep": '1/50',
        "gp": '1/100',
        "pp": '1/1000'
    },
    {
        "coin": "Copper",
        "cp": '1',
        "sp": '1/10',
        "ep": '1/50',
        "gp": '1/100',
        "pp": '1/1000'
    },
    {
        "coin": "Copper",
        "cp": '1',
        "sp": '1/10',
        "ep": '1/50',
        "gp": '1/100',
        "pp": '1/1000'
    },
]

const FOOD_DRINK_LODGING = [
    {
        "item": "Mug of Ale",
        "cost": "4 cp",
    },
    {
        "item": "Mug of Ale",
        "cost": "4 cp",
    },
    {
        "item": "Mug of Ale",
        "cost": "4 cp",
    },
    {
        "item": "Mug of Ale",
        "cost": "4 cp",
    },
    {
        "item": "Mug of Ale",
        "cost": "4 cp",
    },
    {
        "item": "Mug of Ale",
        "cost": "4 cp",
    },
    {
        "item": "Mug of Ale",
        "cost": "4 cp",
    },
    {
        "item": "Mug of Ale",
        "cost": "4 cp",
    },
    {
        "item": "Mug of Ale",
        "cost": "4 cp",
    },
    {
        "item": "Mug of Ale",
        "cost": "4 cp",
    },
    {
        "item": "Mug of Ale",
        "cost": "4 cp",
    },
    {
        "item": "Mug of Ale",
        "cost": "4 cp",
    },
    {
        "item": "Mug of Ale",
        "cost": "4 cp",
    },
]

const CommonExpTableGrouping = styled('div')`
    display: flex;
    justify-content: space-evenly
`;

const CommonExpenses = () => {
    const [openActions, setOpenActions] = useState<boolean>(false);

    return(
        <>
            <InfoTable onClick={() => setOpenActions(true)}>Common Expenses</InfoTable>
            <Modal open={openActions} onClose={() => setOpenActions(false)}>
                <ModalContentContainer>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <CommonExpTableGrouping>
                            <div style={{width: '49%'}}>
                                <RollTable tablename="Lifestyle Expenses" rows={LIFESTYLE_EXPENSES} />
                            </div>
                            <div style={{width: '49%'}}>
                                <RollTable tablename="Currency Exchange Rate" rows={EXCHANGE_RATES} />
                            </div>
                        </CommonExpTableGrouping>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <div>
                                <RollTable tablename="Adventuring Services" rows={ADVENTURING_SERVICES} />
                            </div>
                            <div>
                                <RollTable tablename="Food, Drink, and Lodging" rows={FOOD_DRINK_LODGING} />
                            </div>

                        </div>
                    </div>
                </ModalContentContainer>
            </Modal>
        </>
    )
};

export default CommonExpenses;