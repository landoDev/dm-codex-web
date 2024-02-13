import { useAuth0 } from "@auth0/auth0-react";

import { Button, TextField } from "@mui/material";

import React, { useState } from "react";

interface CreateCampaignFormProps {
    setShowForm: (value: boolean) => void;
}

type CampaignFormData = {
    name: string;
    description?: string;
}

const CreateCampaignForm = ({ setShowForm }: CreateCampaignFormProps) => {
    const { user } = useAuth0();
    const [formData, setFormData] = useState<CampaignFormData>({name: '', description: ''});

    const handleAddCampaign = (event: any) => {
        event.preventDefault();
        if (user) {
            const newCampaign: any = {
                // reminder that created_at and campaign_id should be handled by db automatically
                ...formData,
                user_id: user.sub as string,
                creator_name: user.name?.length ? user.name : user.email
            }

        } else {
            alert(`Failed to create Campaign ${formData.name}`)
        }
        setShowForm(false)
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({...prevData, [name]: value }))
    }

    return (
        // next, build out the campaign form from mui components
        // on submit it will call the drizzle orm to add to the db
        // TODO: style these components in the cleanup
        <div style={{ display: 'flex' }}>
            <form style={{ display: 'flex', alignItems: 'center', width: '100%'}} onSubmit={handleAddCampaign}>
                <TextField 
                    required 
                    name="name"
                    label="Campaign Name" 
                    variant="filled" 
                    onChange={handleChange}
                    type="text"
                    style={{ marginRight: '10px'}} 
                />
                <TextField  
                    name="description"
                    label="Description" 
                    variant="filled" 
                    type="text"
                    onChange={handleChange} 
                    style={{ marginRight: '10px'}} 
                />
                <Button style={{ marginRight: '10px'}} type="submit">Submit</Button>
                <Button onClick={() => setShowForm(false)}>Cancel</Button>
            </form>
        </div>
    )
}

export default CreateCampaignForm;