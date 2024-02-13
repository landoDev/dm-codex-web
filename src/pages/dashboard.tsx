import { useAuth0 } from "@auth0/auth0-react";

import { Skeleton } from "@mui/material";


import LoginButton from "../components/Login";
import CreateCampaign from "../components/CreateCampaignComponent";
import axios from "axios";


const Dashboard = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log("USER", user)
    // WE HAVE SERVERLESS!!!!
    // axios.get("http://localhost:3000/api/health").then(res=> console.log(res))
    // NOTE: The new workflow with Auth0 handling all user things is not having a user table in the backend
    // I don't need the users name, and I will see if I can configure non-google users to have to put a name in auth0
    // user.sub is auth0's user_id in the useAuth0 hook


    return (
        <div className="dashboard-body" style={{ margin: '1%'}}>
            {isLoading && 
                <Skeleton />
            }
            {!isAuthenticated && !isLoading &&
                <LoginButton />
            }
            {isAuthenticated && !isLoading &&
            <>
                <div>Quick Add Section (just characters, and sessions to start)</div>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    {/* TODO: after skeleton, break down what should be it's own component */}
                    <div style={{ width: '75%' }}>
                        <h3>My Campaigns</h3>
                        <div >
                            <CreateCampaign />
                        </div>
                    </div>
                    <div style={{ width: '50%'}}>
                        <h3>Recent Sessions</h3>
                        <p>No Sessions Yet!</p>
                    </div>

                </div>
            </>
            }
        </div>
    )
}

export default Dashboard;