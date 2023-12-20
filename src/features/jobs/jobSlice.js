
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { deleteJob, fetchJob, fetchJobs, postJobs, updateJob } from './jobAPI';

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: '',
    editData: {}
}

export const getJobs = createAsyncThunk('jobs/fetch', async () => {
    const jobs = await fetchJobs();
    return jobs;
})
export const addJobs = createAsyncThunk('jobs/add', async (data) => {
    const job = await postJobs(data);
    return job;
})
export const getJob = createAsyncThunk('job/get', async (id) => {
    const job = await fetchJob(id);
    return job;
})
export const editJob = createAsyncThunk('job/edit', async ({jobId, input}) => {
    const job = await updateJob(jobId, input);
    return job;
})
export const removeJob = createAsyncThunk('job/delete', async (jobId) => {
    const job = await deleteJob(jobId);
    return job;
})
const jobsSlice = createSlice({
    name : 'jobs',
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(getJobs.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(getJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.jobs = action.payload;
            state.isError = false;

        })
        .addCase(getJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true; 
            state.jobs = [];
            state.error = action.error.message;
        })
        .addCase(addJobs.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(addJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.jobs.push(action.payload);
            state.isError = false;

        })
        .addCase(addJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true; 
            state.error = action.error.message;
        })
        .addCase(getJob.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(getJob.fulfilled, (state, action) => {
            state.isLoading = false;
            state.editData = action.payload;
            state.isError = false;

        })
        .addCase(getJob.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true; 
            state.error = action.error.message;
        })
        .addCase(editJob.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(editJob.fulfilled, (state, action) => {
            state.isLoading = false;
            state.jobs = state.jobs.map(job => {
                if (job.id === action.payload.id) {
                    return {...action.payload}
                }else{return job}
            } ) 
            state.editData = {};
            state.isError = false;

        })
        .addCase(editJob.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true; 
            state.error = action.error.message;
        })
        .addCase(removeJob.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(removeJob.fulfilled, (state, action) => {
            state.isLoading = false;
            state.jobs = state.jobs.filter(job => {
                return job.id !== action.payload;
            } ) 
            state.isError = false;

        })
        .addCase(removeJob.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true; 
            state.error = action.error.message;
        })
    }

});

export default jobsSlice.reducer;