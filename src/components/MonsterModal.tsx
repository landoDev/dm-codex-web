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

// type SpellClassType = {
//     index: string;
//     name: string;
//     url?: string;
// }

// interface SpellContentData {
//     level: number;
//     school: {[key: string]: string}
//     casting_time: string;
//     range: string;
//     area_of_effect?: {[key: string]: string};
//     target: string;
//     components: string[];
//     material?: string;
//     duration: string;
//     classes: SpellClassType[]
//     desc: string[]
//     higher_level?: []
// }

const MonsterContentModal = ({ contentName, url }: MonsterContentModalProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [contentData, setContentData] = useState();
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
                    </div>
                </ModalContentContainer>
            </Modal>
        </>
    )
} 

export default MonsterContentModal;