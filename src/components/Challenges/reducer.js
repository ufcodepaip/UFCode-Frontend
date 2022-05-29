import { QUEST } from '../../config/constants'

const initialState = {
    id: null,
    name: null,
    description: null,
    input: null,
    expectedOutput: null,
    houseId: null,
    positionX: null,
    positionY: null,
    difficultyId: null,
    courses: null,
    modules: null
}

const challengeReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUEST:
            return {
                id: action.payload.problem.id,
                name: action.payload.problem.name,
                description: action.payload.problem.description,
                input: action.payload.problem.input,
                expectedOutput: action.payload.problem.expectedOutput,
                houseId: action.payload.problem.houseId,
                positionX: action.payload.problem.positionX,
                positionY: action.payload.problem.positionY,
                difficultyId: action.payload.problem.difficultyId,
                courses: action.payload.problem.courses,
                modules: action.payload.problem.modules
            }
        case 'default':
            return state
        default: return state
    }
}

export default challengeReducer