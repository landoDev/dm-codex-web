import { useAuth0 } from "@auth0/auth0-react";

import { Button, Skeleton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


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
    const handleAddCampaign = () => {
        // this should open the modal with the actual add campaign form, fix the below comments
        // this will call the logic to the api directory and do stuff with the orm to add to the serverless db
        // cross that bridge when we get there shortly, gotta decide on the model and the above comments first
        console.log("say no more")
    }

    return (
        <div>
            {isLoading && 
                <Skeleton />
            }
            {!isAuthenticated && !isLoading &&
                <LoginButton />
            }
            {isAuthenticated && !isLoading &&
            <div className="">
                <p>Shows {user?.name}'s campaigns and most recent session</p>
                {/* TODO: after skeleton, break down what should be it's own component */}
                <div>
                    <h2>Campaigns</h2>
                    <Button 
                    color="success" 
                    startIcon={<AddIcon />}
                    onClick={handleAddCampaign}
                    >
                        New Campaign
                    </Button>
                </div>
                <p>Data is protected by Auth0</p>
            </div>
            }
        </div>
    )
}

export default Dashboard;