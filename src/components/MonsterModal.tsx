import axios from "axios";
import { useEffect, useState } from "react";
import { FIFTH_EDITION_API } from "../static/apiConstants";
import { Modal } from "@mui/material";

import { ContentElement } from "../styles/SessionFooter.styles";
import { ModalContentContainer } from "../styles/ModalTables.styles";
import { MonsterContentModalProps, MonsterContentData } from "../types/MonsterModal.types";
import { formatSenses, formatChallengeRating, formatAction, formatXP } from "../utils/MonsterModal.utils";

const MonsterContentModal = ({ contentName, url }: MonsterContentModalProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [contentData, setContentData] = useState<MonsterContentData>();
    useEffect(() => {
        if (url) {
            axios.get(`${FIFTH_EDITION_API}${url}`)
            .then(response => {
                setContentData(response.data)
            })
            .catch(error => console.log(error))
        }
    },[url])

    return (
        <>
            <ContentElement onClick={() => setOpenModal(true)}>{contentName}</ContentElement>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <ModalContentContainer>
                    {/* NOTE: this could prob be it's own component then contentData? doesn't need repeated so much */}
                    {/* TODO: that goes for every div/section in this modal. break them out into their own mini components to make this code cleaner */}
                    {/* TODO: add feedback while the data is fetched from the API! */}
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
                        <div id="monster-special-abilities">
                            {/* only some monsters have special abilities like Legendary Resistance */}
                            {contentData?.special_abilities.map(ability => {
                                return (
                                    <p><strong>{ability.name}{ability.usage && ` (${ability.usage?.times}/${ability.usage?.type})`}</strong>. {ability.desc}</p>
                                )
                            })}

                        </div>
                        <div id="monster-actions">
                            {contentData?.actions.map(action => formatAction(action))}
                        </div>
                        {contentData?.legendary_actions?.length !== 0 &&
                            <div>
                                <h3>Legendary Actions</h3>
                                <p>{`${contentName} can take 3 legendary actions, choosing from the options below. Only one action option can be used at a time and only at the end of another creature's turn. ${contentName} regains spent legendary actions at the start of their turn.`}</p>
                                {contentData?.legendary_actions.map(action => formatAction(action))}
                            </div>
                        }

                    </div>
                </ModalContentContainer>
            </Modal>
        </>
    )
} 

export default MonsterContentModal;