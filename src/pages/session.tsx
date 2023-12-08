import React, { useState } from 'react';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { styled } from '@mui/material/styles';
import { Button, Stack, Tab, Tabs, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import CharacterPlate from '../components/CharacterPlate';
import RollTable from '../components/RollTable';
import SessionSearchBar from '../components/SessionSearchBar';

import { SETTING_DC } from '../static/screenConstants';

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
    const [selectedTab, setSelectedTab] = useState<string>("players");
    // TODO: users that select a spell, item or monster have them pinned here and those render in the footer
    const [pinnedContent, setPinnedContent] = useState(); 


    const handleTabChange = (event: React.SyntheticEvent, newTab: string) => {
        setSelectedTab(newTab)
    }

    return (
        <BaseGrid container id="session-page-container" spacing={4}>
            <Grid xs={3}>
                {/* TODO: add the rest of the roll tables */}
                <RollTable tablename="Setting a DC" headers={["Difficulty", "DC"]} rows={SETTING_DC} />
                <Stack id="info-modals">
                    {/* actions in combat modal button here */}
                    {/* conditions modal button here */}
                </Stack>
            </Grid>
            <Grid xs>
                {/* may put this search section in it's owncomponent */}
                <Grid xs display="flex" justifyContent="space-between">
                <Tabs
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    style={{
                        alignSelf: 'end'
                    }}
                    value={selectedTab}
                    onChange={handleTabChange}
                >
                    <Tab label="Players" value="players" />
                    <Tab label="NPCs" value="npcs" />
                </Tabs>
                <SessionSearchBar />
                </Grid>
                <Stack spacing={1} marginTop="2%" marginBottom="2%">
                    {!!prototype ?? 
                        <div>No Players Yet</div>
                    }
                    {/* NOTE: will need to know if players or npcs are selected and filter it */}
                    {prototype?.map(({img, name }) => (
                        <CharacterPlate key={name} img={img} name={name} />
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