import { styled } from '@mui/material/styles';
import RollTable from '../components/Table';

const settingDC = [
    {
        "difficulty": "Very Easy",
        "dc": "5",
    },
    {
        "difficulty": "Easy",
        "dc": "10"    
    },
    {
        "difficulty": "Moderate",
        "dc": "15"
    },
    {
        "difficulty": "Difficult",
        "dc": "20"
    }, 
    {
        "difficulty": "Very Difficult",
        "dc": "25"
    },
    {
        "difficulty": "Impossible",
        "dc": "30"
    }
]

const SessionPage = () => {
    return (
        <div id="session">
            <RollTable tablename="Setting a DC" headers={["Difficulty", "DC"]} rows={settingDC} />
        </div>
    )
}

export default SessionPage;