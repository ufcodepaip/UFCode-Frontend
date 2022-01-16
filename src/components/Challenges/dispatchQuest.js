export function dispatchQuest(quest, challenger) {
    return { // Altera questList
        type: quest,
        payload: {
            problem: challenger
        }
    }
}