import { PinnedContent } from "../pages/session";
import { ContentElement, ContentElementContainer, PinnedContentContainer, UnpinElement } from "../styles/SessionFooter.styles";
import CloseIcon from '@mui/icons-material/Close';

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
                                <ContentElement>{element.contentName}</ContentElement>
                                {/* TODO: add setPinnedContent onClick here to remove this item from the list */}
                                <UnpinElement onClick={() => handleUnpinContent(element.contentName)} id={element.contentName}><CloseIcon fontSize="small" /></UnpinElement>
                            </ContentElementContainer>
                            )
                    })}
            </PinnedContentContainer>
    )
};

export default SessionFooter;