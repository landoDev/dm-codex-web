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
