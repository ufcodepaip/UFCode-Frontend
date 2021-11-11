export function dispatchQuest(quest, challenger) {
    return { // Altera quesList
        type: quest,
        payload: {
            challange: challenger
        }
    }
}