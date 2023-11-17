import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { styled } from '@mui/material/styles';
import { Button, Stack, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import CharacterPlate from '../components/CharacterPlate';
import RollTable from '../components/Table';
import SearchInput from '../components/SearchInput';

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

// TODO: make a shared file so I can use this framing elsewhere
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
        <BaseGrid container id="session-page-container" spacing={4}>
            <Grid xs={3}>
                <Stack id="info-modals">
                    {/* actions in combat modal button here */}
                    {/* conditions modal button here */}
                </Stack>
                {/* TODO: add the rest of the roll tables */}
                {/* TODO: create a master file of the static table objects and import them here */}
                <RollTable tablename="Setting a DC" headers={["Difficulty", "DC"]} rows={settingDC} />
            </Grid>
            <Grid xs>
                {/* may put this search section init's owncomponent */}
                <Stack direction="row" spacing={1} margin="2%" alignItems="right">
                    <SearchInput id="spells" label="Spells" />
                    <SearchInput id="items" label="Items" />
                    <SearchInput id="monsters" label="Monsters" />
                </Stack>
                <Stack spacing={1}>
                    {prototype.map(({img, name }) => (
                        <CharacterPlate img={img} name={name} />
                    ))}
                </Stack>
                <Button startIcon={<AddIcon />}>Add Player</Button>
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