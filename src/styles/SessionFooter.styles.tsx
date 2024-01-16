import styled from "@emotion/styled";

export const PinnedContentContainer = styled('div')`
    bottom: 0;
    display: flex;
    align-self: center;
    gap: 8px;
    overflow-y: auto;
    max-width: 98%;
    overflow: clip;
    padding: 8px 8px 0 0;
    position: fixed;
    align-items: center;
`;

export const ContentElementContainer = styled('div')`
    background-color: red;
    border-radius: 15px 15px 0 0;
    box-shadow: -3px 1px green;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 0 5px 0 0
`

export const ContentElement = styled('div')`
    max-width: 98%;
    cursor: pointer;
    overflow: hidden;
    padding: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-wrap: wrap;
`

