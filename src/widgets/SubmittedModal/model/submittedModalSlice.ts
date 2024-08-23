import { createSlice } from "@reduxjs/toolkit";

type submittedModalSliceState = {

    submittedModal: boolean
}

const initialState: submittedModalSliceState = {

    submittedModal: false
}

export const submittedModalSlice = createSlice({
    name: 'submittedModalSlice',
    initialState,
    reducers: {
        toggleSubmittedModal: (state) => {
            state.submittedModal = !state.submittedModal
        }
    }
})

const { actions, reducer } = submittedModalSlice

export const { toggleSubmittedModal } = actions

export default reducer