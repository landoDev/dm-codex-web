import { useAuth0 } from "@auth0/auth0-react";

import { Avatar, Stack } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

import LoginButton from './Login'
import LogoutButton from './Logout'
import { NavContainer, AppTitle, UserContainer, DisplayName } from '../styles/NavBar.styles';


const NavBar = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <NavContainer>
            <AppTitle>Dungeon Master Codex</AppTitle>
            <UserContainer>
                <Stack 
                direction="row" 
                justifyContent="center"
                alignItems="center"
                spacing={2}
                >
                    {isLoading &&
                        <LinearProgress />
                    }
                    {!isAuthenticated && !isLoading &&
                        <LoginButton />
                    }
                    {isAuthenticated && !isLoading &&
                        <>
                            <Avatar src={user?.picture} />
                            {/* TODO: add metadata or see what else we can use for display name */}
                            {/* TODO: use Link here to navigate to user details (way off in the distance) */}
                            <DisplayName>{user?.name}</DisplayName>
                            <LogoutButton />
                        </>
                    }
                </Stack>
            </UserContainer>
        </NavContainer>
    )
}

export default NavBar