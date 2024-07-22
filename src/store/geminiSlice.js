// geminiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
	name: "geminiSlice",
	initialState: {
		geminiSearchView: false,
		movieNames: null,
		movieResults: null,
	},
	reducers: {
		toggleGeminiSearch: (state) => {
			state.geminiSearchView = !state.geminiSearchView;
		},
		setGeminiMovieResult: (state, action) => {
			const { movieNames, movieResults } = action.payload;
			state.movieNames = movieNames;
			state.movieResults = movieResults;
		},
		clearGeminiMovieResult: (state) => {
			state.movieNames = null;
			state.movieResults = null;
		},
	},
});

export const {
	toggleGeminiSearch,
	setGeminiMovieResult,
	clearGeminiMovieResult,
} = geminiSlice.actions;
export default geminiSlice.reducer;
