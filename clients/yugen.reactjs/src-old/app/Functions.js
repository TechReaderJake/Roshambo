/**
 * Capitalize first letter in the string
 * @param {string} word 
 */
export function CapFirstLetter(word){
    if(word != null)
        return word.charAt(0).toUpperCase() + word.slice(1)
}