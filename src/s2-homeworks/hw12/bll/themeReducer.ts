const initState = {
    themeId: 1,
}

type InitialStateType = typeof initState

export const themeReducer = (state = initState, action: ActionsTypes): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id }

        default:
            return state
    }
}

export const changeThemeId = (id: number) => {
    return { type: 'SET_THEME_ID', id }
} // fix any

type ActionsTypes = SetThemeId

type SetThemeId = ReturnType<typeof changeThemeId>