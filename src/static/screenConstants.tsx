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

export const LIFESTYLE_EXPENSES = [
    { 
        "lifestyle": "Wretched",
        "price/day": "-"
    },
    { 
        "lifestyle": "Squalid",
        "price/day": "1 sp"
    },
    { 
        "lifestyle": "Poor",
        "price/day": "2 sp"
    },
    { 
        "lifestyle": "Comfortable",
        "price/day": "2 gp"
    },
    { 
        "lifestyle": "Wealthy",
        "price/day": " 4 gp"
    },
    { 
        "lifestyle": "Aristocratic",
        "price/day": "10 gp minimum"
    },
]

export const ADVENTURING_SERVICES = [
    {
        "service": "Coach Cab between Towns",
        "pay": "3 cp/mile",
    },
    {
        "service": "Coach Cab within City",
        "pay": "1 cp",
    },
    {
        "service": "Unskilled Hireling",
        "pay": "2 sp/day",
    },
    {
        "service": "Skilled Hireling",
        "pay": "2 gp/day",
    },
    {
        "service": "Messenger",
        "pay": "2 cp/mile",
    },
    {
        "service": "Road/Gate Toll",
        "pay": "1 cp",
    },
    {
        "service": "Ship's Passage",
        "pay": "1 sp/mile",
    },
    {
        "service": "First Level Spell",
        "pay": "10-30gp + components",
    },
    {
        "service": "Second Level Spell",
        "pay": "30-50gp + components",
    },
    {
        "service": "Third or Higher Level Spell",
        "pay": "DM Discretion (often a service or quest hook)",
    },
]


export const EXCHANGE_RATES = [
    {
        "coin": "Copper",
        "cp": '1',
        "sp": '1/10',
        "ep": '1/50',
        "gp": '1/100',
        "pp": '1/1000'
    },
    {
        "coin": "Silver",
        "cp": '10',
        "sp": '1',
        "ep": '1/5',
        "gp": '1/10',
        "pp": '1/100'
    },
    {
        "coin": "Electrum",
        "cp": '50',
        "sp": '5',
        "ep": '1',
        "gp": '1/2',
        "pp": '1/20'
    },
    {
        "coin": "Gold",
        "cp": '100',
        "sp": '10',
        "ep": '2',
        "gp": '1',
        "pp": '1/10'
    },
    {
        "coin": "Platinum",
        "cp": '1000',
        "sp": '100',
        "ep": '50',
        "gp": '10',
        "pp": '1'
    },
]


export const FOOD_DRINK_LODGING = [
    {
        "item": "Ale",
        "cost": "2 sp (Gallon), 4 cp (Mug)",
    },
    {
        "item": "Banquet (per person)",
        "cost": "10 gp",
    },
    {
        "item": "Bread, loaf",
        "cost": "2 cp",
    },
    {
        "item": "Cheese, hunk",
        "cost": "1 sp",
    },
    {
        "item": "Inn stay (per day)",
        "cost": "7 cp (Squalid), 1 sp (Poor), 5 sp (Modest), 8 sp (Comfortable), 2 gp (Wealthy), 4gp (Aristocratic)",
    },
    {
        "item": "Meals (per day)",
        "cost": "3 cp (Squalid), 6cp (Poor), 3 sp (Modest), 5 sp for (Comfortable), 8 sp (Wealthy), 2 gp (Aristocratic)",
    },
    {
        "item": "Meat, chunk",
        "cost": "3 sp",
    },
    {
        "item": "Wine",
        "cost": "2 sp (Common), 10 gp (Fine)",
    },
]

export const MOUNTS = [
    {
        "item": "Camel",
        "cost": "50 gp",
        "speed": "50ft",
        "capacity": "480lb"
    },
    {
        "item": "Donkey or Mule",
        "cost": "8 gp",
        "speed": "40ft",
        "capacity": "420lb"
    },
    {
        "item": "Elephant",
        "cost": "200 gp",
        "speed": "40ft",
        "capacity": "480lb"
    },
    {
        "item": "Horse, draft",
        "cost": "50 gp",
        "speed": "40ft",
        "capacity": "540lb"
    },
    {
        "item": "Horse, riding",
        "cost": "75 gp",
        "speed": "60ft",
        "capacity": "480lb"
    },
    {
        "item": "Mastiff",
        "cost": "25 gp",
        "speed": "40ft",
        "capacity": "195lb"
    },
    {
        "item": "Pony",
        "cost": "30 gp",
        "speed": "40ft",
        "capacity": "225lb"
    },
    {
        "item": "Warhorse",
        "cost": "400 gp",
        "speed": "60ft",
        "capacity": "540lb"
    },
]