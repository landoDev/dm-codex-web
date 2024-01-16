import styled from "@emotion/styled";

export const PinnedContentContainer = styled('div')`
    bottom: 0;
    display: flex;
    gap: 8px;
    max-width: 100%;
    overflow-y: auto;
    overflow: clip;
    padding: 8px;
    position: fixed;
    justify-content: center;
    align-items: center;
`;

export const ContentElement = styled('div')`
    cursor: pointer;
    maxWidth: 120px;
    overflow: hidden;
    padding: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-wrap: wrap;
`
