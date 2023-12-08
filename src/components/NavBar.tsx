import styled from '@emotion/styled'
import { Avatar, Stack } from '@mui/material'

const NavContainer = styled.div`
    display: flex;
    background-color: black;
    justify-content: space-between;
    align-items: center;
    padding: 2;
`
const AppTitle = styled.h1`
    color: white;
    padding-left: 2%;
    text-align: center;
`
const UserContainer = styled.div`
    flex-direction: row;
    padding-right: 2%;

`
const DisplayName = styled.p`
    color: white;
    text-align: center
`

const NavBar = () => {
    return (
        <NavContainer>
            <AppTitle>Dungeon Master's Codex</AppTitle>
            <UserContainer>
                <Stack 
                direction="row" 
                justifyContent="center"
                alignItems="center"
                spacing={2}
                >
                    <Avatar src=""/>
                    {/* TODO: use Link here to navigate to user details (way off in the distance) */}
                    <DisplayName>Joe Freebird</DisplayName>
                </Stack>
            </UserContainer>
        </NavContainer>
    )
}

export default NavBar