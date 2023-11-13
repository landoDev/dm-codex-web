import styled from '@emotion/styled'
import { Avatar, Stack } from '@mui/material'

const NavContainer = styled.div`
    display: flex;
    background-color: black;
`
const AppTitle = styled.h1`
    color: white;
`

const NavBar = () => {
    return (
        <NavContainer>
            <AppTitle>Dungeon Master's Codex</AppTitle>
            <Stack>
                <Avatar />
            </Stack>
        </NavContainer>
    )
}

export default NavBar