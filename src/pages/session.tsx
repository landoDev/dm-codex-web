import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { styled } from '@mui/material/styles';

import CharacterPlate from '../components/CharacterPlate';
import RollTable from '../components/Table';
import { Stack, Avatar, TextField } from '@mui/material';

// put consttancts in their own file with ALL_CAPS
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

interface CharacterPlateType {
    name: string;
    img?: string;
}

const BaseGrid = styled(Grid)(() => ({
    margin: '1%'
}))

const SessionPage = () => {
    const prototype: CharacterPlateType[] = [
        {name: "Elrich of the Emerald"}, 
        {name: "Kaminari"}, 
        {name: "Thormyr"},
        {name: "Irony Firstname"}
    ] // this will be state
    return (
        <BaseGrid container id="session" spacing={4}>
            <Grid xs={3}>
                <RollTable tablename="Setting a DC" headers={["Difficulty", "DC"]} rows={settingDC} />
            </Grid>
            <Grid xs>
                <Stack spacing={1}>
                    {prototype.map(({img, name }) => (
                        <CharacterPlate img={img} name={name} />
                    ))}
                </Stack>
                <h3>Notes</h3>
                <TextField 
                    id="outlined-multiline-flexible"
                    multiline
                    fullWidth
                />
            </Grid>
        </BaseGrid>
    )
}

export default SessionPage;