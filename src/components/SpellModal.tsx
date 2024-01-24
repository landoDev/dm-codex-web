import axios from "axios";
import { useEffect, useState } from "react";
import { FIFTH_EDITION_API } from "../static/apiConstants";
import { Modal } from "@mui/material";

import { ContentElement } from "../styles/SessionFooter.styles";
import { ModalContentContainer } from "../styles/ModalTables.styles";

interface SpellContentModalProps {
    contentName: string;
    url: string | null;
}

type SpellClassType = {
    index: string;
    name: string;
    url?: string;
}

interface SpellContentData {
    level: number;
    school: {[key: string]: string}
    casting_time: string;
    range: string;
    area_of_effect?: {[key: string]: string};
    target: string;
    components: string[];
    material?: string;
    duration: string;
    classes: SpellClassType[]
    desc: string[]
    higher_level?: []
}

const SpellContentModal = ({ contentName, url }: SpellContentModalProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [contentData, setContentData] = useState<SpellContentData | undefined>();
    useEffect(() => {
        if (url) {
            axios.get(`${FIFTH_EDITION_API}${url}`)
            .then(response => {
                setContentData(response.data)
            })
            .catch(error => console.log(error))
        }
    },[url])

    const numberSuffixConstructor = (number: number | undefined) => {
        // App built for 5e D&D so there are no higher levels than 20(th)
        if(number === 1) {
            return "st"
        } else if (number === 2) {
            return "nd"
        } else if (number === 3) {
            return "rd"
        } else {
            return "th"
        }
    }

    return (
        <>
            <ContentElement onClick={() => setOpenModal(true)}>{contentName}</ContentElement>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <ModalContentContainer>
                    <div id="spell-modal-content">
                        {/* TODO: Style me components */}
                        <h2>{contentName}</h2>
                        <p id="spell-level">{contentData?.level}{numberSuffixConstructor(contentData?.level)} level {contentData?.school.name}</p>
                        <p>Casting Time: {contentData?.casting_time}</p>
                        <p>Range: {contentData?.range} {contentData?.area_of_effect && `(${contentData.area_of_effect.size}ft ${contentData.area_of_effect.type})`}</p>
                        {/* <p>Target: </p> <- not in api at present */}
                        <p>Components: {contentData?.components.join(' ')} {contentData?.material && `(${contentData.material})`}</p>
                        <p>Duration: {contentData?.duration}</p>
                        <p>Classes: {contentData?.classes.map(({name}) => <>{name} </>)}</p>
                        <div id="spell-description">
                            {contentData?.desc?.map(desc => <p>{desc}</p>)}
                        </div>
                        <div>
                            {contentData?.higher_level?.length   ?
                                <p>At Higher Levels: {contentData?.higher_level.join(' ')}</p>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </ModalContentContainer>
            </Modal>
        </>
    )
} 

export default SpellContentModal;