import styled from '@emotion/styled'
import { Avatar, Stack } from '@mui/material'

const NavContainer = styled.div`
    display: flex;
    background-color: black;
    justify-content: space-between;
    align-items: center;
`
const AppTitle = styled.h1`
    color: white;
`
const UserContainer = styled.div`
    flex-direction: row;

`
const DisplayName = styled.p`
    color: white;
    text-align: center;
    margin: auto;
`

const NavBar = () => {
    return (
        <NavContainer>
            <AppTitle>Dungeon Master's Codex</AppTitle>
            <Stack direction="row" spacing={2}>
                <Avatar src=""/>
                <DisplayName>Joe Freebird</DisplayName>
            </Stack>
        </NavContainer>
    )
}

export default NavBar