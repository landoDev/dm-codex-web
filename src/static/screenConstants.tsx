export const SETTING_DC = [
    {
        "difficulty": "Very Easy",
        "dc": "5",
    },
    {
        "difficulty": "Easy",
        "dc": "10"    
    },
    {
        "difficulty": "Moderate",
        "dc": "15"
    },
    {
        "difficulty": "Difficult",
        "dc": "20"
    }, 
    {
        "difficulty": "Very Difficult",
        "dc": "25"
    },
    {
        "difficulty": "Impossible",
        "dc": "30"
    }
];

export const DAMAGE_SEVERITY = [
    {
        "level": "1st-4th",
        "setback": "1d10",
        "dangerous": "2d10",
        "deadly": "4d10",
    },
    {
        "level": "5th-10th",
        "setback": "2d10",
        "dangerous": "4d10",
        "deadly": "10d10",
    },
    {
        "level": "11th-16th",
        "setback": "4d10",
        "dangerous": "10d10",
        "deadly": "18d10",
    },
    {
        "level": "17th-20th",
        "setback": "10d10",
        "dangerous": "18d10",
        "deadly": "24d10",
    }
];

export const SKILLS = [
    {
        "ability": "Strength",
        "skills": "Athletics",
    },
    {   
        "ability": "Dexterity",
        "skills": "Acrobatics, Sleight of Hand, Stealth",
    },
    {
        "ability": "Constitution",
        "skills": "N/A",
    },
    {
        "ability": "Intelligence",
        "skills": "Arcana, History, Investigation, Nature, Religion",
    },
    {
        "ability": "Wisdom",
        "skills": "Animal Handling, Insight, Medicine, Perception, Surviva",
    },
    {
        "ability": "Charisma",
        "skills": "Deception, Intimidation, Performance, Persuasion",
    },
]

// TODO: put above damage and severity
export const EXHAUSTION = [
    {
        "level": "1",
        "effect": "Disadvantage on ability checks",
    },
    {
        "level": "2",
        "effect": "Speed halved",
    },
    {
        "level": "3",
        "effect": "	Disadvantage on attack rolls and saving throws",
    },
    {
        "level": "4",
        "effect": "Hit point maximum halved",
    },
    {
        "level": "5",
        "effect": "Speed reduced to 0",
    },
    {
        "level": "6",
        "effect": "Death",
    },

]

export const COVER = [
    {
        "type": "1/2 cover",
        "effect": "+2 bonus to AC and Dexterity saving throws against attacks and effects that originate on the opposite side of the cover.",
    },
    {
        "type": "3/4 cover",
        "effect": "+5 bonus to AC and Dexterity saving throws against attacks and effects that originate on the opposite side of the cover.",
    },
    {
        "type": "Full cover",
        "effect": "	Can't be targeted by an attack or a spell.",
    },
]

export const ACTIONS_IN_COMBAT = [
    {
        "action": "Attack",
        "description":  'Make one¹ melee or ranged attack, a grapple, or a shove.' 
    },
    {
        "action": "Cast a Spell",
        "description":  'Casts a spell with a casting time of 1 action.' 
    },
    {
        "action": "Dash",
        "description":  'Gain extra movement equal to your speed for this turn, applying any modifiers.' 
    },
    {
        "action": "Disengage",
        "description":  "	Your movement doesn't provoke opportunity attacks for the rest of the turn."
    },
    {
        "action": "Dodge",
        "description": "Until the start of your next turn, any attacks against you are made with disadvantage provided you can see the attacker, and you have advantage on DEX saves. You lose this benefit if you are incapacitated or your speed drops to 0.",
    },
    {
        "action": 'Help',
        "description": "Creature you help gains advantage on next ability check to perform the task you are assisting with, or help with attack roll if enemy is within 5 feet of you.",
    },
    {
        "action": "Hide",
        "description": "You make a stealth check.",
    },
    {
        "action": "Ready",
        "description": "Prepare to do something when a specific trigger occurs."
    },
    {
        "action": "Search",
        "description": "Make either a perception or investigation check in an attempt to locate something."
    },
    {
        "action": "Use an Object",
        "description": "Interacting with a second object on your turn (the first is free), or a more complicated object."
    },
    {
        "action": "Climb onto a Bigger Creature*",
        "description": "Athletics or Acrobatics check opposed by creature's Acrobatics check."
    },
    {
        "action": "Disarm*",
        "description": "Use an attack to make attack roll opposed by target's Athletics or Acrobatics check. Target has advantage if holding the item with 2 or more hands."
    },
    {
        "action": "Mark*",
        "description": "When you make a melee attack and hit, you can mark them. Your opportunity attacks against the creature have advantage and don't expend your reaction, however you may only make 1 attack in this manner."
    },
    {
        "action": "Overrun*",
        "description": "As an action or bonus action make Athletics check opposed by hostile's Athletics. If you win, you can move through the hostile's space once this turn."
    },
    {
        "action": "Shove Aside*",
        "description": "Use shove to push target to the side rather than away."
    },
    {
        "action": "Tumble*",
        "description": "As an action or bonus action make Acrobatics check opposed by hostile's Acrobatics. If you win, you can move through the hostile's space once this turn."
    }
    
]
