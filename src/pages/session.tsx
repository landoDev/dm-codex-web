import React, { useState } from 'react';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { styled } from '@mui/material/styles';
import { Button, Stack, Tab, Tabs, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import CharacterPlate from '../components/CharacterPlate';
import RollTable from '../components/RollTable';
import SessionSearchBar from '../components/SessionSearchBar';

import { DAMAGE_SEVERITY, SETTING_DC } from '../static/screenConstants';
import SessionFooter from '../components/SessionFooter';

interface CharacterPlateType {
    name: string;
    img?: string;
}
// TODO: create type files if they need to be exported and shared
export type PinnedContent = {
    contentName: string;
    url: string | null; 
}

// TODO: make a shared file so I can use this framing elsewhere
const BaseGrid = styled(Grid)(() => ({
    margin: '1%',
    flexDirection: 'column'
}))

const SessionPage = () => {
    // NOTE: Simpler to just have one character table with a flag/column denoting if they are NPC or not
    const prototype: CharacterPlateType[] = [
        {name: "Elrich of the Emerald"}, 
        {name: "Kaminari"}, 
        {name: "Thormyr"},
        {name: "Irony Firstname"}
    ] // this will be state
    const NPCplaceholder: [] = [];
    // TODO: Need to decide how I want to handle players and npcs. Should they be session scoped?
    // IDEALLY, each session wouldn't show all characters, just the ones relevant to that session
    // Ask Alex what he'd do in this scenario... I was thinking about having a meta column 
    // the meta column would have this sessions character ids and would filter the players (repped by prototype)
    // then each session would only have the relevant characters while the campaign could relate to character tables
    // players and npcs MUST be in campaign scope
  
    // TODO: users that select a spell, item or monster have them pinned here and those render in the footer
    const [pinnedContent, setPinnedContent] = useState<PinnedContent[]>([]); 
    return (
        <BaseGrid container id="session-page-container" spacing={4}>
            <Grid container id="session-page-body" spacing={4}>
                <Grid xs={3} id="roll-tables">
                    {/* TODO: add the rest of the roll tables */}
                    {/* NOTE: order matters, if that isn't in the docstring for RollTable, add it */}
                    <RollTable tablename="Setting a DC"  rows={SETTING_DC} />
                    <RollTable tablename='Damage Severity and Level' rows={DAMAGE_SEVERITY} />

                </Grid>
                <Grid xs>
                    {/* may put this search section in it's owncomponent */}
                    <Grid xs display="flex" justifyContent="flex-end">
                        <SessionSearchBar setPinnedContent={setPinnedContent} />
                    </Grid>
                    <h3>Players</h3>
                    <Stack spacing={1} marginTop="2%" marginBottom="2%">
                        {!!prototype ?? 
                            <div>No Players Yet</div>
                        }
                        {/* NOTE: will need to know if players or npcs are selected and filter it */}
                        {prototype?.map(({img, name }) => (
                            <CharacterPlate key={name} img={img} name={name} />
                        ))}
                    </Stack>
                    <Button startIcon={<AddIcon />}>Add Player to Session</Button>
                    <h3>NPCs</h3>
                    <Stack spacing={1} marginTop="2%" marginBottom="2%">
                        {!!NPCplaceholder &&
                            <div>No NPCS</div>
                        }
                        {/* NOTE: will need to know if players or npcs are selected and filter it */}
                        {NPCplaceholder?.map(({img, name }) => (
                            <CharacterPlate key={name} img={img} name={name} />
                        ))}
                    </Stack>
                    {/* NOTE: these could be a reusable component, i'll use the same style for add campaign and session on other pages */}
                    <Button startIcon={<AddIcon />}>Add NPC to Session</Button>
                    {/* TODO: make me and all other h3s a reusable styled component */}
                    <h3>Notes</h3>
                    <TextField 
                        id="outlined-multiline-flexible"
                        multiline
                        fullWidth
                    />
                    {/* TODO: since this opens modals to display their info, might be good to make this it's own component too */}
                    <Grid display='flex' justifyContent='space-evenly' spacing={1} id="info-modals" style={{ marginTop: '2%'}}>
                        {/* TODO: obviously add the modals, when building out this separate component */}
                        {/* actions in combat modal button here */}
                        <div>Actions in Combat</div>
                        {/* conditions modal button here */}
                        <div>Conditions</div>
                        <div>Cover</div>
                    </Grid>
                </Grid>
            </Grid>
            <SessionFooter pinnedContent={pinnedContent} />
        </BaseGrid>
    )
}

export default SessionPage;