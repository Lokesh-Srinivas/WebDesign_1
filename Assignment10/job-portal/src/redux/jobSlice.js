import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axiosConfig';

// Async thunk to fetch jobs from the backend
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/jobs/getAll'); // Ensure this endpoint matches your backend
      return response.data.jobs; // Adjust this if your API returns jobs differently
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch jobs');
    }
  });
  
// Async thunk for creating a job
export const createJob = createAsyncThunk('jobs/createJob', async (jobData, { rejectWithValue }) => {
  try {
    const response = await axios.post('/jobs/create', jobData);
    return response.data.job; // Return the created job from the server
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

// const jobsSlice = createSlice({
//   name: 'jobs',
//   initialState: {
//     jobs: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createJob.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(createJob.fulfilled, (state, action) => {
//         state.loading = false;
//         state.jobs.push(action.payload); // Add the newly created job to the jobs array
//       })
//       .addCase(createJob.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload; // Set error message on failure
//       });
//   },
// });

const jobsSlice = createSlice({
    name: 'jobs',
    initialState: {
      jobs: [], // Array to store fetched jobs
      loading: false, // To indicate loading state
      error: null, // To store error messages
    },
    reducers: {}, // Currently no reducers; all logic handled in extraReducers
    extraReducers: (builder) => {
      builder
        // Handle fetchJobs
        .addCase(fetchJobs.pending, (state) => {
          state.loading = true;
          state.error = null; // Clear previous errors
        })
        .addCase(fetchJobs.fulfilled, (state, action) => {
          state.loading = false;
          state.jobs = action.payload; // Populate jobs with fetched data
        })
        .addCase(fetchJobs.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload; // Store error message
        })
  
        // Handle createJob
        .addCase(createJob.pending, (state) => {
          state.loading = true;
          state.error = null; // Clear previous errors
        })
        .addCase(createJob.fulfilled, (state, action) => {
          state.loading = false;
          state.jobs.push(action.payload); // Add the newly created job to jobs array
        })
        .addCase(createJob.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload; // Store error message
        });
    },
  });


export default jobsSlice.reducer;
