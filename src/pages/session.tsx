import React, { useState } from 'react';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button, Stack, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import CharacterPlate from '../components/CharacterPlate';
import RollTable from '../components/RollTable';
import SessionSearchBar from '../components/SessionSearchBar';

import { DAMAGE_SEVERITY, SETTING_DC, SKILLS } from '../static/screenConstants';
import SessionFooter from '../components/SessionFooter';
import { SessionPageContainer } from '../styles/session.styles';

interface CharacterPlateType {
    name: string;
    img?: string;
}
// NOTE: create type files if they need to be exported and shared
export type PinnedContent = {
    contentName: string;
    url: string | null; 
}

const SessionPage = () => {
    // NOTE: Simpler to just have one character table with a flag/column denoting if they are NPC or not
    // NOTE: BE will store a List column on session with all it's character IDs (which are campaign scoped)
    const [playerCharacters, setPlayerCharacters] = useState<CharacterPlateType[]>([
        {name: "Elrich of the Emerald"}, 
        {name: "Kaminari"}, 
        {name: "Thormyr"},
        {name: "Irony Firstname"}
    ])
    const [npcs, setNPCs] = useState<CharacterPlateType[]>([]);


    // pinned content is the spells and monsters the DM has selected to reference on this page.
        // ideally, this would stick when reloaded but that's stretch as of this commit
    const [pinnedContent, setPinnedContent] = useState<PinnedContent[]>([]); 

    return (
        <SessionPageContainer container id="session-page-container" spacing={4}>
            <Grid container id="session-page-body" spacing={4}>
                <Grid xs={3} id="roll-tables">
                    {/* TODO: add the rest of the roll tables */}
                    <RollTable tablename="Setting a DC"  rows={SETTING_DC} />
                    <RollTable tablename='Damage Severity and Level' rows={DAMAGE_SEVERITY} />
                    <RollTable tablename='Skills' rows={SKILLS} />
                </Grid>
                <Grid xs>
                    {/* may put this search section in it's owncomponent */}
                    <Grid xs display="flex" justifyContent="flex-end">
                        <SessionSearchBar setPinnedContent={setPinnedContent} />
                    </Grid>
                    <h3>Players</h3>
                    <Stack spacing={1} marginTop="2%" marginBottom="2%">
                        {!!playerCharacters ?? 
                            <div>No Players Yet</div>
                        }
                        {/* NOTE: will need to know if players or npcs are selected and filter it */}
                        {playerCharacters?.map(({img, name }) => (
                            <CharacterPlate key={name} img={img} name={name} />
                        ))}
                    </Stack>
                    <Button startIcon={<AddIcon />}>Add Player(s) to Session</Button>
                    <h3>NPCs</h3>
                    <Stack spacing={1} marginTop="2%" marginBottom="2%">
                        {!!npcs &&
                            <div>No NPCS</div>
                        }
                        {/* NOTE: will need to know if players or npcs are selected and filter it */}
                        {npcs?.map(({img, name }) => (
                            <CharacterPlate key={name} img={img} name={name} />
                        ))}
                    </Stack>
                    {/* NOTE: these could be a reusable component, i'll use the same style for add campaign and session on other pages */}
                    <Button startIcon={<AddIcon />}>Add NPC(s) to Session</Button>
                    {/* TODO: make me and all other h3s a reusable styled component */}
                    {/* TODO: since this opens modals to display their info, might be good to make this it's own component too */}
                    <h3>Info Panels</h3>
                    <Grid id="info-modals" display='flex' justifyContent='space-evenly' spacing={1} style={{ marginTop: '2%'}}>
                        {/* TODO: obviously add the modals, when building out this separate component */}
                        {/* actions in combat modal button here */}
                        <div>Actions in Combat</div>
                        {/* conditions modal button here */}
                        <div>Conditions</div>
                        <div>Common Expenses</div>
                        <div>Wild Magic Table</div>
                        <div>Travel Paces</div>
                        <div>Improvizing Damage</div>
                        <div>Destroying Objects</div>
                        <div>Madness Tables</div>
                    </Grid>
                    <h3>Notes</h3>
                    <TextField 
                        id="outlined-multiline-flexible"
                        multiline
                        fullWidth
                    />
                </Grid>
            </Grid>
            <SessionFooter pinnedContent={pinnedContent} />
        </SessionPageContainer>
    )
}

export default SessionPage;