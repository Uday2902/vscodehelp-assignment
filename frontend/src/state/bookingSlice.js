import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    doctorName: null,
    date: null,
    slot: null,
    speciality: null
}

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.doctorName = action.payload.doctorName;
            state.date = action.payload.date;
            state.slot = action.payload.slot;
            state.speciality = action.payload.speciality
        }
    }
})

export const { setData} = bookingSlice.actions;
export default bookingSlice.reducer;


