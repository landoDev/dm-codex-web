import { useState } from "react";
import { Button, Modal } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


import { ModalContentContainer } from "../styles/ModalTables.styles";
import CreateCampaignForm from "./CreateCampaignForm";



const CreateCampaignModal = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <>
            <Button 
                color="success" 
                startIcon={<AddIcon />}
                onClick={() => setOpenModal(true)}
            >
                New Campaign
            </Button>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <ModalContentContainer id="create-campaign-modal">
                    <CreateCampaignForm />
                </ModalContentContainer>
            </Modal>
        </>
    )
} 

export default CreateCampaignModal;