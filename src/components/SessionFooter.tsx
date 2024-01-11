import { wrap } from "module";
import { PinnedContent } from "../pages/session";
import { Tab, Tabs } from "@mui/material";

interface SessionFooterProps {
    pinnedContent: PinnedContent[]
}

const SessionFooter = ({ pinnedContent }: SessionFooterProps) => {

    // FIXME!! THIS NEEDS TO BE A TABBED SECTION THAT SHRINKS THE MORE I ADD TO IT
    return (
            <div className="pinned-container" style={{overflowY: 'auto'}}>
                <div className="tabs" style={{display: 'flex', gap: '8px', padding: '8px', overflow: 'clip'}}>
                    {pinnedContent?.map((element: PinnedContent) => {
                        return (
                            // TODO: later down the line clean this up and make JSX styled component
                            // closer but not it -> will attempt again, need to take a step back and find out how this should work
                            // TODO: Gonna have Alex look at this and help me fix it
                            <>
                            <div style={{
                                padding: '10px',
                                cursor: 'pointer',
                                maxWidth: '120px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                flexWrap: 'wrap',
                            }}>{element.contentName}</div>
                            {/* TODO: add setPinnedContent onClick here to remove this item from the list */}
                            <span>X</span>
                            </>
                            )
                    })}
                </div>
            </div>
    )
};

export default SessionFooter;