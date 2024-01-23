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
    pinnedContent: PinnedContent[],
    setPinnedContent: (value: any) => void;
};

const SessionSearchBar = ({ pinnedContent, setPinnedContent }: SessionSearchBarProps) => {
    const [spellList, setSpellList] = useState<FifthEditionResult[]>([]);
    const [spellQuery, setSpellQuery] = useState<string>('');
    const [filteredSpellList, setFilteredSpellList] = useState<FifthEditionResult[]>([]);
    const [monsterList, setMonsterList] = useState<FifthEditionResult[]>([]);
    const [monsterQuery, setMonsterQuery] = useState<string>('');
    const [filteredMonsterList, setFilteredMonsterList] = useState<FifthEditionResult[]>();

    console.log(pinnedContent)

    const filterListFromQuery = (list: FifthEditionResult[], query: string) => {
        /** takes list of string elements and compares them to query string to filter */
        // TODO: THIS DOESN'T RETURN SANE RESULTS
        return list.filter(({name}) => {
            // creates pattern with positive lookahead, matches any character except line break, and matches 0 or more instances of a character
            const pattern = query.split("").map(x => `(?=.*${x})`).join("")
            const regex = new RegExp(`${pattern}`, "gi") // global and case insensitive
            return name.match(regex)
        })
    }

    const handlePinElement = (element: FifthEditionResult, contentType: string) => {
        /* Takes the FifthEditionResult that's mapped and structures it to fit the `PinnedContent` type */
        // changing the structure is meant to allow for this content to come from different sources
        const newContent = {
            contentName: element.name,
            contentUrl: element.url,
            contentType: contentType
        }
        setPinnedContent((pinnedContent: PinnedContent[]) => [...pinnedContent, newContent])
    }

    const pinSpell = (element: FifthEditionResult) => {
        handlePinElement(element, "spell")
        // TODO: FIX HOW TO HANDLE THE PIN FLOW
        // ISSUE AT HAND IS HAVING THE SPELL RETURNED TO THE LIST AFTER UNPINNING IT
        const updatedSpellOptions = spellList.filter((content) => content !== element)
        setSpellList(updatedSpellOptions)
    }

    useEffect(() => {
        // get spells and monsters if not retrieved
        if (!spellList.length){
            axios.get(`${FIFTH_EDITION_API}/api/spells`)
            .then(response => {
                setSpellList(response.data.results)
            })
            .catch(error => console.log(error))
        }
        if (!monsterList.length) {
            axios.get(`${FIFTH_EDITION_API}/api/monsters`)
            .then(response => {
                setMonsterList(response.data.results)
            })
            .catch(error => console.log(error))
        }
    }, [spellList.length, monsterList.length]);

    useEffect(() => {
        if (spellQuery) {
            const validSpells = spellList.filter(spell => {
                const formattedObj = {
                    "contentName": spell.name,
                    "contentUrl": spell.url,
                    "contentType": "spell"
                }
                return (!pinnedContent.includes(formattedObj))
            })
            // console.log('valid', validSpells)
            setFilteredSpellList(filterListFromQuery(validSpells, spellQuery))
        } 
    }, [spellQuery, spellList, pinnedContent])

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
                    query={spellQuery}
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
                                <ListItemButton key={spell.index} onClick={() => pinSpell(spell)}>
                                   <ListItemText>{spell.name}</ListItemText>
                                </ListItemButton>
                                    )
                                })}
                        {!filteredSpellList.length && <ListItem>No Matching Spells</ListItem>}
                        </List>
                
                    }
                </div>
                <div>
                    <SearchInput 
                        id="monsters" 
                        label="Monsters"
                        query={monsterQuery}
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
                            {filteredMonsterList?.map((monster: FifthEditionResult) => {
                                return (
                                    <ListItemButton key={monster.index} onClick={() => handlePinElement(monster, "monster")}>
                                        <ListItemText>{monster.name}</ListItemText>
                                    </ListItemButton>
                                )
                            })}
                            {!filteredMonsterList?.length && <ListItem>No Matching Monsters</ListItem>}
                        </List>
                     }
                </div>
            </Stack>
        </>
    )
};

export default SessionSearchBar;