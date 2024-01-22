import { useEffect, useState } from "react"
import axios from "axios";
import { FIFTH_EDITION_API } from "../static/apiConstants";
import { List, ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import SearchInput from "./SearchInput";
import { PinnedContent } from "../pages/session";


interface FifthEditionResult {
    index: string;
    name: string;
    url: string;
};

interface SessionSearchBarProps {
    setPinnedContent: (value: any) => void;
};

const SessionSearchBar = ({ setPinnedContent }: SessionSearchBarProps) => {
    const [spellList, setSpellList] = useState<FifthEditionResult[]>([]);
    const [spellQuery, setSpellQuery] = useState<string>();
    const [filteredSpellList, setFilteredSpellList] = useState<FifthEditionResult[]>([]);
    const [monsterList, setMonsterList] = useState<FifthEditionResult[]>([]);
    const [monsterQuery, setMonsterQuery] = useState<string>();
    const [filteredMonsterList, setFilteredMonsterList] = useState<FifthEditionResult[]>();

    const filterListFromQuery = (list: FifthEditionResult[], query: string) => {
        /** takes list of string elements and compares them to query string to filter */
        return list.filter(({name}) => {
            // creates pattern with positive lookahead, matches any character except line break, and matches 0 or more instances of a character
            const pattern = query.split("").map(x => `(?=.*${x})`).join("")
            const regex = new RegExp(`${pattern}`, "gi") // global and case insensitive
            return name.match(regex)
        })
    }

    const handlePinElement = (element: FifthEditionResult) => {
        /* Takes the FifthEditionResult that's mapped and structures it to fit the `PinnedContent` type */
        const newContent = {
            contentName: element.name,
            contentUrl: element.url
        }
        setPinnedContent((pinnedContent: PinnedContent[]) => [...pinnedContent, newContent])
    }

    useEffect(() => {
        // would redux be useful to keep this in context?? and consistent. revist me 
        // would allow this to be fetched once on website visit and then referenced through context?
        // get spells and monsters if not retrieved
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

    useEffect(() => {
        if (spellQuery) {
            setFilteredSpellList(filterListFromQuery(spellList, spellQuery))
        } 
    }, [spellQuery])

    useEffect(() => {
        if (monsterQuery) {
            setFilteredMonsterList(filterListFromQuery(monsterList, monsterQuery))
        }
    }, [monsterQuery])

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
                        {filteredSpellList?.map((spell: FifthEditionResult)=> {
                            return (
                                <ListItemButton key={spell.index} onClick={() => handlePinElement(spell)}>
                                   <ListItemText>{spell.name}</ListItemText>
                                </ListItemButton>
                                    )
                                })}
                        {!filteredSpellList && <ListItem>No Matching Spells</ListItem>}
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
                                zIndex: 100,
                                maxHeight: 300,
                                '& ul': { padding: 0 },
                            }}
                        >
                            {filteredMonsterList?.map((monster: FifthEditionResult) => {
                                return (
                                    <ListItemButton key={monster.index} onClick={() => handlePinElement(monster)}>
                                        <ListItemText>{monster.name}</ListItemText>
                                    </ListItemButton>
                                )
                            })}
                            {!filteredMonsterList && <ListItem>No Matching Monsters</ListItem>}
                        </List>
                     }
                </div>
            </Stack>
        </>
    )
};

export default SessionSearchBar;