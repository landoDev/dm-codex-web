import axios from "axios";
import { useEffect, useState } from "react";
import { FIFTH_EDITION_API } from "../static/apiConstants";
import { Modal } from "@mui/material";

import { ContentElement } from "../styles/SessionFooter.styles";
import { ModalContentContainer } from "../styles/ModalTables.styles";

interface MonsterContentModalProps {
    contentName: string;
    url: string | null;
}

// NOTE: while the props have been designed to hopefully be able to scale with multiple sources, the types below were NOT
// they were built to work with the 5e D&D api this project relies on initially
// TODO: help clean this file up by making a separate type file for these

type Armor = {
    name: string
}

type ArmorClassType = {
    type: string;
    value: string;
    armor?: Armor[];
}

type ProficiencyDetails = {
    name: string;
}

type Proficiency = {
    proficiency: ProficiencyDetails;
    value: number;
}

type SpeedType = {
    walk: string;
    burrow?: string;
    climb?: string;
    fly?: string;
    swim?: string
}

interface MonsterContentData {
    size: string;
    type: string;
    subtype?: string;
    alignment: string;
    armor_class: ArmorClassType[],
    hit_points: string;
    hit_points_roll: string;
    speed: SpeedType;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    proficiencies: Proficiency[];
    damage_immunities: [];
    senses: {[key: string]: number | string} // api returns an object of all passive senses
    languages: string;
    challenge_rating: number;
    xp: number;
}

const MonsterContentModal = ({ contentName, url }: MonsterContentModalProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [contentData, setContentData] = useState<MonsterContentData>();
    useEffect(() => {
        if (url) {
            axios.get(`${FIFTH_EDITION_API}${url}`)
            .then(response => {
                console.log(response.data)
                setContentData(response.data)
            })
            .catch(error => console.log(error))
        }
    },[url])

    // UTILS //
    const formatSenses = (sensesObj: {[key: string]: number | string} | undefined) => {
        let formattedString = '';
        if (sensesObj) {
            for (const [skillName, modifier] of Object.entries(sensesObj)) {
                formattedString = `${skillName.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} +${modifier}`
            }
        }
        return formattedString
    }

    const formatChallengeRating = (cr: number | undefined) => {
        // we only care if CR is less than 1, those are the only ones that need fractions
        if (cr) {
            const formattedCR = cr.toString()
            if (cr < 1) {
                // turn the number into its accurate stringfraction
                
            }
            return formattedCR
        } else {
            return ''
        }
    }

    const formatXP = (xp: number | undefined) => {
        if (xp) {
            // if an xp number is passed, turn it to string for formatting
            let formattedXP = xp.toString()
            // we only care to add commas if the value is 1000 or more
            if (xp > 999) {
                // TODO: what if an xp doesn't end in zeros? need to address that at some point
                // get the number of commas we'll need 
                const commaCount = formattedXP.split('').filter(number => number === '0').length / 3
                // work backwards and update our formatted string as relevant
                for (let i = commaCount + 1; i > 0; i--) {
                    // count how far back from the end we need to slice and add a comma in 
                    const zeroGroups = -(3 * i)
                    const newFront = formattedXP.slice(0, zeroGroups)
                    const newKaboose = formattedXP.slice(zeroGroups)
                    // if not the first loop, add comma
                    if (newFront) {
                        formattedXP = `${newFront},${newKaboose}`
                    }
                } 
            }
            return formattedXP
        } else {
            // cya case
            return ''
        }
    }

    return (
        <>
            <ContentElement onClick={() => setOpenModal(true)}>{contentName}</ContentElement>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <ModalContentContainer>
                    {/* NOTE: this could prob be it's own component then contentData? doesn't need repeated so much */}
                    <div id="monster-modal-content">
                        <h2>{contentName}</h2>
                        <p>{contentData?.size} {contentData?.type}{contentData?.subtype && `(${contentData.subtype})`}, {contentData?.alignment}</p>
                        <p>
                            <strong>Armor Class</strong> {contentData?.armor_class[0].value} {contentData?.armor_class[0].armor ? 
                            `(${contentData?.armor_class[0].armor[0].name})`
                            : 
                            `(${contentData?.armor_class[0].type})`
                            }
                        </p>
                        <p><strong>Hit Points</strong> {contentData?.hit_points} {`(${contentData?.hit_points_roll})`}</p>
                        <p>
                            <strong>Speed</strong> {contentData?.speed.walk} 
                            {contentData?.speed.burrow && `, burrow ${contentData.speed.burrow}`}
                            {contentData?.speed.climb && `, climb ${contentData.speed.climb}`}
                            {contentData?.speed.fly && `, fly ${contentData.speed.fly}`}
                            {contentData?.speed.swim && `swim ${contentData.speed.swim}`}
                        </p>
                        <div id="monster-ability-scores" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div><p>STR</p> <p>{contentData?.strength}</p></div>
                            <div><p>DEX</p> <p>{contentData?.dexterity}</p></div>
                            <div><p>CON</p> <p>{contentData?.constitution}</p></div>
                            <div><p>INT</p> <p>{contentData?.intelligence}</p></div>
                            <div><p>WIS</p> <p>{contentData?.wisdom}</p></div>
                            <div><p>CHA</p> <p>{contentData?.charisma}</p></div>
                        </div>
                        <div id='monster-details'>
                        {/* TODO: should prob be it's own component lol for sure, many lines typa ting */}
                        {contentData?.proficiencies.length !== 0 && 
                        <div id="monster-proficienies">
                        <p><strong>Saving Throws </strong> 
                        {/* TODO: ponder a more efficient way to only loop through profs once (skills and saving throws live here) */}
                        {contentData?.proficiencies.map(ability => {
                            // some monsters have saving throws
                            // but we don't get this cleanly form current api so we need to format it using the api proficiencies
                            // TODO: iterate over this and create utils where needed
                            // TODO: I have to figure out how to programmatically insert commas where relevant
                            const abilityScore: string | undefined = ability.proficiency.name ? ability.proficiency.name.split(": ").pop() : '';
                            let savingThrow = ''
                            switch(abilityScore) {
                                case 'STR': {
                                    savingThrow = `STR +${ability.value} `
                                    break;
                                }
                                case 'DEX': {
                                    savingThrow = `DEX +${ability.value} `
                                    break;
                                }
                                case 'CON': {
                                    savingThrow = `CON +${ability.value} `
                                    break;
                                }
                                case 'INT': {
                                    savingThrow = `INT +${ability.value} `
                                    break;
                                }
                                case 'WIS': {
                                    savingThrow = `WIS +${ability.value} `
                                    break;
                                }
                                case 'CHA': {
                                    savingThrow = `CHA +${ability.value} `
                                    break;
                                }
                            }
                            return savingThrow
                        })}
                        </p>
                        <p><strong>Skills </strong> 
                        {/* TODO: ponder a more efficient way to only loop through profs once (skills and saving throws live here) */}
                        {contentData?.proficiencies.map(skill => {
                            // some monsters have saving throws
                            // but we don't get this cleanly form current api so we need to format it using the api proficiencies
                            // TODO: iterate over this and create utils where needed
                            // TODO: I have to figure out how to programmatically insert commas where relevant
                            const skillName: string | undefined = skill.proficiency.name ? skill.proficiency.name.split(": ").pop() : '';
                            let savingThrow = ''
                            switch(skillName) {
                                case 'Athletics': {
                                    savingThrow = `Athletics +${skill.value} `
                                    break;
                                }
                                case 'Acrobatics': {
                                    savingThrow = `Acrobatics +${skill.value} `
                                    break;
                                }
                                case 'Sleight of Hand': {
                                    savingThrow = `Sleight of Hand +${skill.value} `
                                    break;
                                }
                                case 'Stealth': {
                                    savingThrow = `Stealth +${skill.value} `
                                    break;
                                }
                                case 'Arcana': {
                                    savingThrow = `Arcana +${skill.value} `
                                    break;
                                }
                                case 'History': {
                                    savingThrow = `History +${skill.value} `
                                    break;
                                }
                                case 'Investigation': {
                                    savingThrow = `Investigation +${skill.value} `
                                    break;
                                }
                                case 'Nature': {
                                    savingThrow = `Nature +${skill.value} `
                                    break;
                                }
                                case 'Religion': {
                                    savingThrow = `History +${skill.value} `
                                    break;
                                }
                                case 'Animal Handling': {
                                    savingThrow = `Animal Handling +${skill.value} `
                                    break;
                                }
                                case 'Insight': {
                                    savingThrow = `Insight +${skill.value} `
                                    break;
                                }
                                case 'Perception': {
                                    savingThrow = `Perception +${skill.value} `
                                    break;
                                }
                                case 'Survival': {
                                    savingThrow = `Survival +${skill.value} `
                                    break;
                                }
                                case 'Deception': {
                                    savingThrow = `Deception +${skill.value} `
                                    break;
                                }
                                case 'Intmidation': {
                                    savingThrow = `Intmidation +${skill.value} `
                                    break;
                                }
                                case 'Performance': {
                                    savingThrow = `Performance +${skill.value} `
                                    break;
                                }
                                case 'Persuasion': {
                                    savingThrow = `Persuasion +${skill.value} `
                                    break;
                                }
                            }
                            return savingThrow
                        })}
                        </p>
                        </div>
                        }
                        {/* if monster has immunity */}
                        {/* TODO: create a format util that capitalizes each word and adds a ',' if it's not the last or only string in the list */}
                        {contentData?.damage_immunities.length !== 0 && 
                        <p><strong>Damage Immunities </strong> {
                            contentData?.damage_immunities.map((type: string) => type.charAt(0).toUpperCase() + type.slice(1))
                            }
                        </p>
                        }
                        <p><strong>Senses </strong>{formatSenses(contentData?.senses)}</p>
                        <p><strong>Languages </strong>{contentData?.languages}</p>
                        <p><strong>Challenge </strong> {formatChallengeRating(contentData?.challenge_rating)} {`(${formatXP(contentData?.xp)} XP)`}</p>
                        </div>
                        {/* TODO: Legendary resistances if resistances add div section */}
                        <div id="monster-actions">

                        </div>
                        {/* TODO: Legendary actions if actions add div section */}

                    </div>
                </ModalContentContainer>
            </Modal>
        </>
    )
} 

export default MonsterContentModal;