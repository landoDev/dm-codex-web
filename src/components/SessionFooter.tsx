import { wrap } from "module";
import { PinnedContent } from "../pages/session";

interface SessionFooterProps {
    pinnedContent: PinnedContent[]
}

const SessionFooter = ({ pinnedContent }: SessionFooterProps) => {
    return (
        <footer style={{
            // FIXME: right now I have this wrapping 
            // I want this to act like tabs do in a browser but it's taking a lot of dev time to get figured
            // flexwrap and max height ain't it <- have to move away form it entirely
            position: "absolute", 
            bottom: "0px", 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            justifyItems: 'center', 
            width: '95%',
            overflowX: 'hidden',
            flexWrap: 'wrap',
            maxHeight: '15%'
            }}>
            {pinnedContent?.map((element: PinnedContent) => {
                return (
                    // TODO: later down the line clean this up and make JSX styled component
                    <div 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        listStyle: 'none',
                        margin: '1%',
                        position: 'relative'
                    }}
                    >
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{ padding: '1%', width: '100%', maxWidth: '700px', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{element.contentName}</p>
                    <span>X</span>

                    </div>
                    </div>
                )
            })}
        </footer>
    )
};

export default SessionFooter;