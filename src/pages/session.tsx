import React, { useState } from 'react';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button, Stack, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import CharacterPlate from '../components/CharacterPlate';
import RollTable from '../components/RollTable';
import SessionSearchBar from '../components/SessionSearchBar';

import { COVER, DAMAGE_SEVERITY, EXHAUSTION, SETTING_DC, SKILLS } from '../static/screenConstants';
import SessionFooter from '../components/SessionFooter';
import { SessionPageContainer } from '../styles/session.styles';
import ModalTables from '../components/ModalTables';

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
                <Grid xs>
                    {/* may put this search section in it's owncomponent */}
                    <Grid xs display="flex" justifyContent="flex-end">
                        <SessionSearchBar setPinnedContent={setPinnedContent} />
                    </Grid>
                    <Grid display='flex' width='100%' justifyContent='space-between'>
                        <Grid width='35%'>
                            <h3>Players</h3>
                            <Stack spacing={1} marginTop="2%" marginBottom="2%">
                                {/* NOTE: will need to know if players or npcs are selected and filter it */}
                                {playerCharacters?.map(({img, name }) => (
                                    <CharacterPlate key={name} img={img} name={name} />
                                ))}
                            </Stack>
                            <Button startIcon={<AddIcon />}>Add Player(s) to Session</Button>
                        </Grid>
                        <Grid width='35%'>
                            <h3>NPCs</h3>
                            <Stack spacing={1} marginTop="2%" marginBottom="2%">
                                {/* {!!npcs &&
                                    <div>No NPCS</div>
                                } */}
                                {/* NOTE: will need to know if players or npcs are selected and filter it */}
                                {npcs?.map(({img, name }) => (
                                    <CharacterPlate key={name} img={img} name={name} />
                                ))}
                            </Stack>
                            {/* NOTE: these could be a reusable component, i'll use the same style for add campaign and session on other pages */}
                            <Button startIcon={<AddIcon />}>Add NPC(s) to Session</Button>
                        </Grid>
                        <Grid width='27%'>
                            <h3>Notes</h3>
                                <TextField 
                                    id="outlined-multiline-flexible"
                                    multiline
                                    fullWidth
                                />
                        </Grid>

                    </Grid>
                    <ModalTables />
                    <Grid xs={3} id="roll-tables" display='flex' flexWrap='wrap' justifyContent='space-between' marginTop='2%'>
                        <RollTable tablename="Setting a DC"  rows={SETTING_DC} />
                        <RollTable tablename='Exhaustion' rows={EXHAUSTION} />
                        <RollTable tablename='Damage Severity and Level' rows={DAMAGE_SEVERITY} />
                        <RollTable tablename='Skills' rows={SKILLS} />
                        <RollTable tablename='Cover' rows={COVER} />
                    </Grid>
                </Grid>
            </Grid>
            <SessionFooter pinnedContent={pinnedContent} />
        </SessionPageContainer>
    )
}

export default SessionPage;