import axios from "axios";
import { useEffect, useState } from "react";
import { FIFTH_EDITION_API } from "../static/apiConstants";
import { Modal } from "@mui/material";

import { ContentElement } from "../styles/SessionFooter.styles";
import { ModalContentContainer } from "../styles/ModalTables.styles";

interface MonsterContentModalProps {
    contentName: string;
    url: string | null;
}

// NOTE: while the props have been designed to hopefully be able to scale with multiple sources, the types below were NOT
// they were built to work with the 5e D&D api this project relies on initially

type Armor = {
    name: string
}

type ArmorClassType = {
    type: string;
    value: string;
    armor?: Armor[];
}

type SpeedType = {
    walk: string;
    burrow?: string;
    climb?: string;
    fly?: string;
    swim?: string
}

interface MonsterContentData {
    size: string;
    type: string;
    subtype?: string;
    alignment: string;
    armor_class: ArmorClassType[],
    hit_points: string;
    hit_points_roll: string;
    speed: SpeedType;
}

const MonsterContentModal = ({ contentName, url }: MonsterContentModalProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [contentData, setContentData] = useState<MonsterContentData>();
    useEffect(() => {
        if (url) {
            axios.get(`${FIFTH_EDITION_API}${url}`)
            .then(response => {
                console.log(response.data)
                setContentData(response.data)
            })
            .catch(error => console.log(error))
        }
    },[url])


    return (
        <>
            <ContentElement onClick={() => setOpenModal(true)}>{contentName}</ContentElement>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <ModalContentContainer>
                    <div id="monster-modal-content">
                        <h2>{contentName}</h2>
                        <p>{contentData?.size} {contentData?.type} {contentData?.subtype && `(${contentData.subtype})`}, {contentData?.alignment}</p>
                        <p>
                            <strong>Armor Class</strong> {contentData?.armor_class[0].value} {contentData?.armor_class[0].armor ? 
                            `(${contentData?.armor_class[0].armor[0].name})`
                            : 
                            `(${contentData?.armor_class[0].type})`
                            }
                        </p>
                        <p><strong>Hit Points</strong> {contentData?.hit_points} {`(${contentData?.hit_points_roll})`}</p>
                        <p>
                            <strong>Speed</strong> {contentData?.speed.walk} 
                            {contentData?.speed.burrow && `, burrow ${contentData.speed.burrow}`}
                            {contentData?.speed.climb && `, climb ${contentData.speed.climb}`}
                            {contentData?.speed.fly && `, fly ${contentData.speed.fly}`}
                            {contentData?.speed.swim && `swim ${contentData.speed.swim}`}
                        </p>
                    </div>
                </ModalContentContainer>
            </Modal>
        </>
    )
} 

export default MonsterContentModal;