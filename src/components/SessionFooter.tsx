import { useState } from "react";

import { Modal } from "@mui/material";
import { PinnedContent } from "../pages/session";
import { ContentElement, ContentElementContainer, PinnedContentContainer, UnpinElement } from "../styles/SessionFooter.styles";
import CloseIcon from '@mui/icons-material/Close';
import { ModalContentContainer } from "../styles/ModalTables.styles";
import PinnedContentModal from "./PinnedContentModal";

interface SessionFooterProps {
    pinnedContent: PinnedContent[],
    setPinnedContent: (value: any) => void;
}

const SessionFooter = ({ pinnedContent, setPinnedContent }: SessionFooterProps) => {
    // TODO: BUG HERE,  must fix, opening a modal keeps you locked on that modal despite clicking on other pinned content
    // UNLESS you exit out that pinned content. not ideal
    const [openModal, setOpenModal] = useState<boolean>(false)

    const handleUnpinContent = (unpinContent: string) => {
        // remove element by filtering the current pinnedContent list
        const updatedContent = pinnedContent.filter(({ contentName }) => contentName !== unpinContent)
        setPinnedContent(updatedContent);
    }
    return (
            <PinnedContentContainer className="pinned-container">
                    {pinnedContent?.map((element: PinnedContent) => {
                        return (
                            <ContentElementContainer key={element.contentName}>
                                <ContentElement onClick={() => setOpenModal(true)}>{element.contentName}</ContentElement>
                                <Modal open={openModal} onClose={() => setOpenModal(false)}>
                                    <ModalContentContainer>
                                        <PinnedContentModal contentName={element.contentName} url={element.contentUrl} type={element.contentType} />
                                    </ModalContentContainer>
                                </Modal>
                                <UnpinElement onClick={() => handleUnpinContent(element.contentName)} id={element.contentName}><CloseIcon fontSize="small" /></UnpinElement>
                            </ContentElementContainer>
                            )
                    })}
            </PinnedContentContainer>
    )
};

export default SessionFooter;