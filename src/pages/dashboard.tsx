import { useAuth0 } from "@auth0/auth0-react";

import { Skeleton } from "@mui/material";

import LoginButton from "../components/Login";


const Dashboard = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log("USER", user)
    // NOTE: The new workflow with Auth0 handling all user things is not having a user table in the backend
    // created a user_profiles table
    // TODO: figure out how to have user creation update the user_profiles table to sync them
    // https://auth0.com/docs/manage-users/user-accounts/user-profiles this is where you left off.
    // Ask alex or josh maybe, but maybe campaigns can just use the auth0 user_id in their creation
    // ... do I even reaaaaaally need a profiles table. Can I just save the auth- user id to campaigns..
    // user.sub is auth0's user_id in the useAuth0 hook

    return (
        <div>
            {isLoading && 
                <Skeleton />
            }
            {!isAuthenticated && !isLoading &&
                <LoginButton />
            }
            {isAuthenticated && !isLoading &&
            <>
                <p>Shows {user?.name}'s' campaigns and most recent session</p>
                <p>Data is protected by Auth0</p>
            </>
            }
        </div>
    )
}

export default Dashboard;