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

export const WILD_MAGIC_TABLE = [
    {
        "d100": "01-02",
        "effect": "Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls."
    },
    {
        "d100": "03-04",
        "effect": "For the next minute, you can see any invisible creature if you have line of sight to it."
    },
    {
        "d100": "05-06",
        "effect": "A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears 1 minute later."
    },
    {
        "d100": "07-08",
        "effect": "	You cast fireball as a 3rd level spell centered on yourself."
    },
    {
        "d100": "09-10",
        "effect": "You cast magic missile as a 5th level spell."
    },
    {
        "d100": "11-12",
        "effect": "Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow."
    },
    {
        "d100": "13-14",
        "effect": "You cast confusion centered on yourself."
    },
    {
        "d100": "15-16",
        "effect": "For the next minute, you regain 5 hit points at the start of each of your turns."
    },
    {
        "d100": "17-18",
        "effect": "	You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face."
    },
    {
        "d100": "19-20",
        "effect": "You cast grease centered on yourself."
    },
    {
        "d100": "21-22",
        "effect": "Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw."
    },
    {
        "d100": "23-24",
        "effect": "Your skin turns a vibrant shade of blue. A remove curse spell can end this effect."
    },
    {
        "d100": "27-28",
        "effect": "For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action."
    },
    {
        "d100": "29-30",
        "effect": "You teleport up to 60 feet to an unoccupied space of your choice that you can see."
    },
    {
        "d100": "31-32",
        "effect": "You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied."
    },
    {
        "d100": "33-34",
        "effect": "Maximize the damage of the next damaging spell you cast within the next minute."
    },
    {
        "d100": "35-36",
        "effect": "Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older."
    },
    {
        "d100": "37-38",
        "effect": "1d6 flumphs controlled by the DM appear in unoccupied space within 60 feet of you and are frightened of you. They vanish after 1 minute."
    },
    {
        "d100": "39-40",
        "effect": "You regain 2d10 hit points."
    },
    {
        "d100": "41-42",
        "effect": "You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts."
    },
    {
        "d100": "43-44",
        "effect": "For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns."
    },
    {
        "d100": "45-46",
        "effect": "You cast levitate on yourself."
    },
    {
        "d100": "47-48",
        "effect": "A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later."
    },
    {
        "d100": "49-50",
        "effect": "You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth."
    },

]

export const WILD_MAGIC_TABLE_TWO = [
    {
        "d100": "51-52",
        "effect": "A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to magic missile."
    },
    {
        "d100": "53-54",
        "effect": "You are immune to being intoxicated by alcohol for the next 5d6 days."
    },
    {
        "d100": "55-56",
        "effect": "Your hair falls out but grows back within 24 hours."
    },
    {
        "d100": "57-58",
        "effect": "For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame."
    },
    {
        "d100": "59-60",
        "effect": "You regain your lowest-level expended spell slot."
    },
    {
        "d100": "61-62",
        "effect": "For the next minute, you must shout when you speak."
    },
    {
        "d100": "63-64",
        "effect": "You cast fog cloud centered on yourself."
    },
    {
        "d100": "65-66",
        "effect": "Up to three creatures you choose within 30 feet of you take 4d10 lightning damage."
    },
    {
        "d100": "67-68",
        "effect": "You are frightened by the nearest creature until the end of your next turn."
    },
    {
        "d100": "69-70",
        "effect": "Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell."
    },
    {
        "d100": "71-72",
        "effect": "You gain resistance to all damage for the next minute."
    },
    {
        "d100": "73-74",
        "effect": "A random creature within 60 feet of you becomes poisoned for 1d4 hours."
    },
    {
        "d100": "75-76",
        "effect": "You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn."
    },
    {
        "d100": "77-78",
        "effect": "You cast polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spells duration."
    },
    {
        "d100": "79-80",
        "effect": "Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute."
    },
    {
        "d100": "81-82",
        "effect": "You can take one additional action immediately."
    },
    {
        "d100": "83-84",
        "effect": "Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt."
    },
    {
        "d100": "85-86",
        "effect": "You cast mirror image."
    },
    {
        "d100": "87-88",
        "effect": "You cast fly on a random creature within 60 feet of you."
    },
    {
        "d100": "89-90",
        "effect": "You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell."
    },
    {
        "d100": "91-92",
        "effect": "If you die within the next minute, you immediately come back to life as if by the reincarnate spell."
    },
    {
        "d100": "93-94",
        "effect": "Your size increases by one size category for the next minute."
    },
    {
        "d100": "95-96",
        "effect": "You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute."
    },
    {
        "d100": "97-98",
        "effect": "You are surrounded by faint, ethereal music for the next minute."
    },
    {
        "d100": "99-00",
        "effect": "You regain all expended sorcery points."
    },
    
]