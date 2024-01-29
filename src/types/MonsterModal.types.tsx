export interface MonsterContentModalProps {
    contentName: string;
    url: string | null;
}

// NOTE: while the props have been designed to hopefully be able to scale with multiple sources, the types below were NOT
// they were built to work with the 5e D&D api this project relies on initially
export type Armor = {
    name: string
}

export type ArmorClassType = {
    type: string;
    value: string;
    armor?: Armor[];
}

export type ProficiencyDetails = {
    name: string;
}

export type Proficiency = {
    proficiency: ProficiencyDetails;
    value: number;
}

export type SpeedType = {
    walk: string;
    burrow?: string;
    climb?: string;
    fly?: string;
    swim?: string
}

export type Action = {
    name: string;
    desc: string;
}

export type SpecialAbilityUsage = {
    times: number;
    type: string;
}

export type SpecialAbility = {
    name: string;
    desc: string;
    usage: SpecialAbilityUsage
}

export interface MonsterContentData {
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
    senses: {[key: string]: number | string} // api returns an object of all passive senses where the key is the sense itself
    languages: string;
    challenge_rating: number;
    xp: number;
    special_abilities: SpecialAbility[];
    actions: Action[];
    legendary_actions: Action[];
}
