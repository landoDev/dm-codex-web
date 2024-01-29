import { Action } from "../types/MonsterModal.types";

export const formatSenses = (sensesObj: {[key: string]: number | string} | undefined) => {
    let formattedString = '';
    if (sensesObj) {
        for (const [skillName, modifier] of Object.entries(sensesObj)) {
            // the API at the time of this code gives us the name of the skill as a key
            // so split it by it's camel case and make it prettier, then add the formatted modifier
            formattedString = `${skillName.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} +${modifier}`
        }
    }
    return formattedString
}

export const formatChallengeRating = (cr: number | undefined) => {
    // we only care if CR is less than 1, those are the only ones that need fractions
    if (cr) {
        const formattedCR = cr.toString()
        if (cr < 1) {
            // turn the number into its accurate string fraction
            
        }
        return formattedCR
    } else {
        // cya case
        return ''
    }
}

export const formatXP = (xp: number | undefined) => {
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

export const formatAction = (action: Action) => {
    return (
        <p><strong>{action.name}. </strong> {action.desc}</p>
    )
}