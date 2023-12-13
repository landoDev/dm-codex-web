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
                <div className="tabs" style={{display: 'flex', gap: '8px', padding: '8px'}}>
                    {pinnedContent?.map((element: PinnedContent) => {
                        return (
                            // TODO: later down the line clean this up and make JSX styled component
                            // closer but not it smh
                            <>
                            <div style={{
                                padding: '10px',
                                cursor: 'pointer',
                                maxWidth: '120px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}>{element.contentName}</div>
                            <span>X</span>
                            </>
                            )
                    })}
                </div>
            </div>
    )
};

export default SessionFooter;