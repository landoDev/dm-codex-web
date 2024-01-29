import { PinnedContent } from "../components/SessionSearchBar";
import { ContentElementContainer, PinnedContentContainer, UnpinElement } from "../styles/SessionFooter.styles";
import CloseIcon from '@mui/icons-material/Close';
import SpellContentModal from "./SpellModal";
import MonsterContentModal from "./MonsterModal";

interface SessionFooterProps {
    pinnedContent: PinnedContent[],
    setPinnedContent: (value: any) => void;
    onUnpinContent: (value: PinnedContent) => void;
}

const SessionFooter = ({ pinnedContent, setPinnedContent, onUnpinContent }: SessionFooterProps) => {
    const handleUnpinContent = (unpinContent: string) => {
        const content = pinnedContent.find((v) => v.contentName === unpinContent);
        // remove element by filtering the current pinnedContent list
        const updatedContent = pinnedContent.filter(({ contentName }) => contentName !== unpinContent)
        setPinnedContent(updatedContent);
        if (content) {
            onUnpinContent(content);
        }
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