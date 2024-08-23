import { createSlice } from "@reduxjs/toolkit";

type modalSliceState = {
    basicModal: boolean,
    serviceModal: boolean,
    repairModal: boolean,
}

const initialState: modalSliceState = {
    basicModal: false,
    serviceModal: false,
    repairModal: false,
}

export const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        toggleBasicModal: (state) => {
            state.basicModal = !state.basicModal
        },
        toggleServiceModal: (state) => {
            state.serviceModal = !state.serviceModal
        },
        toggleRepairModal: (state) => {
            state.repairModal = !state.repairModal
        },

    }
})

const { actions, reducer } = modalSlice

export const { toggleBasicModal, toggleRepairModal, toggleServiceModal } = actions

export default reducer