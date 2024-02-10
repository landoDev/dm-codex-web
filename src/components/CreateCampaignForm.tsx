import { Button, TextField } from "@mui/material";

interface CreateCampaignFormProps {
    setShowForm: (value: boolean) => void;
}

const CreateCampaignForm = ({ setShowForm }: CreateCampaignFormProps) => {
    const handleAddCampaign = () => {
        // this will call the logic to the api directory and do stuff with the orm to add to the serverless db on submission
        // TODO: import the orm and have it add the campaign to the db (think of middleware)
        // On successful db saves, then go through and clean up styling of the page
        console.log("say no more")
        setShowForm(false)
    }

    return (
        // next, build out the campaign form from mui components
        // on submit it will call the drizzle orm to add to the db
        <div style={{ display: 'flex' }}>
            <form style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
                <TextField required label="Campaign Name" variant="filled" style={{ marginRight: '10px'}}/>
                <TextField multiline label="Description" variant="filled" style={{ marginRight: '10px'}} />
                <Button style={{ marginRight: '10px'}}>Submit</Button>
                <Button onClick={() => setShowForm(false)}>Cancel</Button>
            </form>
        </div>
    )
}

export default CreateCampaignForm;