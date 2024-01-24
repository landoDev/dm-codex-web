import { useState } from "react";

import { Modal } from "@mui/material";
import { PinnedContent } from "../pages/session";
import { ContentElement, ContentElementContainer, PinnedContentContainer, UnpinElement } from "../styles/SessionFooter.styles";
import CloseIcon from '@mui/icons-material/Close';
import { ModalContentContainer } from "../styles/ModalTables.styles";
import PinnedContentModal from "./PinnedContentModal";
import SpellContentModal from "./SpellModal";
import MonsterContentModal from "./MonsterModal";

interface SessionFooterProps {
    pinnedContent: PinnedContent[],
    setPinnedContent: (value: any) => void;
}

const SessionFooter = ({ pinnedContent, setPinnedContent }: SessionFooterProps) => {
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
                                {/* NOTE: If items or other pinnable things are added this will need a slight refactor */}
                                {
                                    element.contentType === 'spell' ? 
                                    <SpellContentModal contentName={element.contentName} url={element.contentUrl} />
                                    :
                                    <MonsterContentModal contentName={element.contentName} url={element.contentUrl} />
                                }
                                <UnpinElement onClick={() => handleUnpinContent(element.contentName)} id={element.contentName}><CloseIcon fontSize="small" /></UnpinElement>
                            </ContentElementContainer>
                            )
                    })}
            </PinnedContentContainer>
    )
};

export default SessionFooter;