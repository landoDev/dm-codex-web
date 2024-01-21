import { useState } from "react";
import { InfoTable, ModalContentContainer } from "../styles/ModalTables.styles";
import { Modal } from "@mui/material";
import RollTable from "./RollTable";

const CONDITIONS = [
    {
        "condition": "Blinded",
        "description": "A blinded creature can't see and automatically fails any ability check that requires sight. Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage."
    },
    {
        "condition": "Charmed",
        "description": "A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects. The charmer has advantage on any ability check to interact socially with the creature."
    },
    {
        "condition": "Deafened",
        "description": "A deafened creature can't hear and automatically fails any ability check that requires hearing."
    },
    {
        "condition": "Frightened",
        "description": "A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature can't willingly move closer to the source of its fear."
    },
    {
        "condition": "Grappled",
        "description": "A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed. The condition ends if the grappler is incapacitated. The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect, such as when a creature is hurled away by the thunderwave spell."
    },
    {
        "condition": "Incapacitated",
        "description": "An incapacitated creature can't take actions or reactions."
    },
    {
        "condition": "Invisible",
        "description": "An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature's location can be detected by any noise it makes or any tracks it leaves. Attack rolls against the creature have disadvantage, and the creature's attack rolls have advantage."
    },
    {
        "condition": "Paralyzed",
        "description": "A paralyzed creature is incapacitated and can't move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature."
    },
    {
        "condition": "Petrified",
        "description": "A petrified creature is transformed, along with an nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging. The creature is incapacitated, can't move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity saving throws. The creature has resistance to all damage. The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized."
    },
    {
        "condition": "Poisoned",
        "description": "A poisoned creature has disadvantage on attack rolls and ability checks."
    },
    {
        "condition": "Prone",
        "description": "A prone creature's only movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on attack rolls. An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage."
    },
    {
        "condition": "Restrained",
        "description": "A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage. The creature has disadvantage on Dexterity saving throws."
    },
    {
        "condition": "Stunned",
        "description": "A stunned creature is incapacitated, can't move, and can speak only falteringly. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage."
    },
    {
        "condition": "Unconscious",
        "description": "An unconscious creature is incapacitated, can't move or speak, and is unaware of its surroundings. The creature drops whatever it's holding and falls prone. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature."
    },
]

const Conditions = () => {
    const [openActions, setOpenActions] = useState<boolean>(false);

    return(
        <>
            <InfoTable onClick={() => setOpenActions(true)}>Conditions</InfoTable>
            <Modal open={openActions} onClose={() => setOpenActions(false)}>
                <ModalContentContainer>
                    <RollTable tablename="Conditions" rows={CONDITIONS} maxWidth="100%"/>
                </ModalContentContainer>
            </Modal>
        </>
    )
};

export default Conditions;