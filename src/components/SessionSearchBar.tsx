import { useEffect, useState } from "react"
import axios from "axios";
import { FIFTH_EDITION_API } from "../static/apiConstants";
import { List, ListItem, ListItemText, Stack } from "@mui/material";
import SearchInput from "./SearchInput";


interface FifthEditionResult {
    index: string;
    name: string;
    url: string
}

const SessionSearchBar = () => {
    const [spellList, setSpellList] = useState([]);
    const [spellQuery, setSpellQuery] = useState();
    const [monsterList, setMonsterList] = useState([]);
    const [monsterQuery, setMonsterQuery] = useState();

    // TODO NEXT: create filter function to use with setQuery and filter down (chance to practice and learn re)
    // https://medium.com/@dingezzz/how-to-use-regex-in-typescript-870d8e27fe09
    useEffect(() => {
        // would redux be useful to keep this in context?? and consistent. revist me 
        // get spells if not retrieved
        if (!spellList.length){
            axios.get(`${FIFTH_EDITION_API}/spells`)
            .then(response => {
                setSpellList(response.data.results)
            })
            .catch(error => console.log(error))
        }
        if (!monsterList.length) {
            axios.get(`${FIFTH_EDITION_API}/monsters`)
            .then(response => {
                setMonsterList(response.data.results)
            })
            .catch(error => console.log(error))
        }
    }, []);

    return(
        <>
            <Stack direction="row" spacing={1} margin="2% 0 0 0" alignSelf="end" zIndex={0}>
                <div>
                    <SearchInput 
                    id="spells" 
                    label="Spells" 
                    setQuery={setSpellQuery}
                    />
                    {/* Add component that will open up and show what's available
                    filter spells based on text field input, `spellQuery` */}
                    {spellQuery &&
                        // TODO: definitely make theses boxes their own ui components
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                                position: 'absolute',
                                overflow: 'auto',
                                maxHeight: 300,
                                '& ul': { padding: 0 },
                            }}
                        >
                        {spellList?.map((spell: FifthEditionResult)=> {
                            return (
                                <ListItem key={spell.index}>
                                   <ListItemText>{spell.name}</ListItemText>
                                </ListItem>
                                    )
                                })}
                        {!spellList && <ListItem>No Matching Spells</ListItem>}
                        </List>
                
                    }
                </div>
                <div>
                    <SearchInput 
                        id="monsters" 
                        label="Monsters"
                        setQuery={setMonsterQuery}
                     />
                     {monsterQuery &&
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                                position: 'absolute',
                                overflow: 'auto',
                                maxHeight: 300,
                                '& ul': { padding: 0 },
                            }}
                        >
                            {monsterList?.map((monster: FifthEditionResult) => {
                                return (
                                    <ListItem key={monster.index}>
                                        <ListItemText>{monster.name}</ListItemText>
                                    </ListItem>
                                )
                            })}
                            {!monsterList && <ListItem>No Matching Monsters</ListItem>}
                        </List>
                     }
                </div>
            </Stack>
        </>
    )
};

export default SessionSearchBar;