import { useAuth0 } from "@auth0/auth0-react";

import { Button, TextField } from "@mui/material";
import { FormControl } from '@mui/base/FormControl';

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
    const [nameValue, setNameValue] = useState<string>('');
    const [formData, setFormData] = useState<CampaignFormData>({name: '', description: ''})
    const handleAddCampaign = () => {
        // this will call the logic to the api directory and do stuff with the orm to add to the serverless db on submission
        // TODO: import the orm and have it add the campaign to the db (think of middleware)
        // On successful db saves, then go through and clean up styling of the page
        console.log("say no more, here's the current user:", user)
        console.log('FormData', formData)
        setShowForm(false)
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({...prevData, [name]: value }))
    }

    return (
        // next, build out the campaign form from mui components
        // on submit it will call the drizzle orm to add to the db
        // TODO: fix the form, it doesn't submit due to: Form submission canceled because the form is not connected
        <div style={{ display: 'flex' }}>
            <FormControl style={{ display: 'flex', alignItems: 'center', width: '100%'}} onSubmit={handleAddCampaign}>
                <TextField 
                required 
                label="Campaign Name" 
                variant="filled" 
                onChange={handleChange}
                type="text"
                style={{ marginRight: '10px'}} 
                />
                <TextField multiline label="Description" variant="filled" style={{ marginRight: '10px'}} onChange={handleChange} />
                <Button style={{ marginRight: '10px'}} type="submit" value="submit">Submit</Button>
                <Button onClick={() => setShowForm(false)}>Cancel</Button>
            </FormControl>
        </div>
    )
}

export default CreateCampaignForm;