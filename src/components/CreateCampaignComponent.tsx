import { useState } from "react";

import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import CreateCampaignForm from "./CreateCampaignForm";


const CreateCampaign = () => {
    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <>
            {/* show form controls visibility so the user can only create one campaign at a time */}
            {showForm && <CreateCampaignForm setShowForm={setShowForm} />}
            {!showForm && 
                <Button 
                    color="success" 
                    startIcon={<AddIcon />}
                    onClick={() => setShowForm(true)}
                >
                    New Campaign
                </Button>
            }
        </>
    )
} 

export default CreateCampaign;