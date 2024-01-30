import { useEffect, useState } from "react"
import axios from "axios";
import { FIFTH_EDITION_API } from "../static/apiConstants";
import { List, ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import SearchInput from "./SearchInput";
import SessionFooter from '../components/SessionFooter';


interface FifthEditionResult {
    index: string;
    name: string;
    url: string;
};

export type PinnedContent = {
    contentName: string;
    contentUrl: string | null; 
    contentType: string;
}


const SessionSearchBar = () => {
    // pinned content is the spells and monsters the DM has selected to reference on this page.
        // ideally, this would stick when reloaded but that's stretch as of this commit
    const [pinnedContent, setPinnedContent] = useState<PinnedContent[]>([]); 

    const [spellList, setSpellList] = useState<FifthEditionResult[]>([]);
    const [spellQuery, setSpellQuery] = useState<string>('');
    const [filteredSpellList, setFilteredSpellList] = useState<FifthEditionResult[]>([]);
    const [monsterList, setMonsterList] = useState<FifthEditionResult[]>([]);
    const [monsterQuery, setMonsterQuery] = useState<string>('');
    const [filteredMonsterList, setFilteredMonsterList] = useState<FifthEditionResult[]>();

    const filterListFromQuery = (list: FifthEditionResult[], query: string) => {
        /** takes list of string elements and compares them to query string to filter */
        return list.filter(({name}) => {
            // creates pattern with positive lookahead, matches any character except line break, and matches 0 or more instances of a character
            // TODO: close enough for MVP but starts to act strange with two word names, come back to it
            const pattern = query.split("").map(x => `(?=.*${x})`).join("")
            const regex = new RegExp(`${pattern}`, "g") // global and case insensitive
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
        const updatedSpellOptions = spellList.filter((content) => content !== element)
        setSpellList(updatedSpellOptions)
    }

    const pinMonster = (element: FifthEditionResult) => {
        handlePinElement(element, "monster")
        const updatedMonsterOptions = monsterList.filter((content) => content !== element)
        setMonsterList(updatedMonsterOptions)
    }

    const unpinContent = (value: PinnedContent) => {
        // spread the existing list, then re-add the element that was removed when it was pinned
        // then sort them so they end up in alphabetical order as they were
        if (value.contentType === 'spell') {
            const updatedSpells = [...spellList, {index: value.contentName, name: value.contentName, url: value.contentUrl} as FifthEditionResult]
            updatedSpells.sort((a, b) => a.name < b.name ? -1 : 1);
            setSpellList(updatedSpells);
        } else {
            // NOTE: this will need a slight refactor if there are more content types added (more than else statement)
            const updatedMonsters = [...monsterList, {index: value.contentName, name: value.contentName, url: value.contentUrl} as FifthEditionResult]
            updatedMonsters.sort((a, b) => a.name < b.name ? -1 : 1)
            setMonsterList(updatedMonsters)
        }
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
            setFilteredSpellList(filterListFromQuery(validSpells, spellQuery))
        } 
    }, [spellQuery, spellList, pinnedContent])

    useEffect(() => {
        if (monsterQuery) {
            setFilteredMonsterList(filterListFromQuery(monsterList, monsterQuery))
        }
    }, [monsterQuery, monsterList])

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
                                    <ListItemButton key={monster.index} onClick={() => pinMonster(monster)}>
                                        <ListItemText>{monster.name}</ListItemText>
                                    </ListItemButton>
                                )
                            })}
                            {!filteredMonsterList?.length && <ListItem>No Matching Monsters</ListItem>}
                        </List>
                     }
                </div>
            </Stack>
            <SessionFooter pinnedContent={pinnedContent} setPinnedContent={setPinnedContent} onUnpinContent={unpinContent} />
        </>
    )
};

export default SessionSearchBar;