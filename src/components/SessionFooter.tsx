import { PinnedContent } from "../pages/session";
import { ContentElement, ContentElementContainer, PinnedContentContainer } from "../styles/SessionFooter.styles";
import CloseIcon from '@mui/icons-material/Close';

interface SessionFooterProps {
    pinnedContent: PinnedContent[]
}

const SessionFooter = ({ pinnedContent }: SessionFooterProps) => {
    return (
            <PinnedContentContainer className="pinned-container">
                    {pinnedContent?.map((element: PinnedContent) => {
                        return (
                            <ContentElementContainer>
                                <ContentElement>{element.contentName}</ContentElement>
                                {/* TODO: add setPinnedContent onClick here to remove this item from the list */}
                                <><CloseIcon fontSize="small" /></>
                            </ContentElementContainer>
                            )
                    })}
            </PinnedContentContainer>
    )
};

export default SessionFooter;