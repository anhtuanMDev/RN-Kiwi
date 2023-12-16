import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AxiosInstances from '../../../helper/AxiosInstance';

interface UserData {
  _id: string;
  address: string;
  age: number;
  city: string;
  country: string;
  email: string;
  gender: string;
  name: string;
  password: string;
  phone: string;
  state: string;
  createdAt: Date;
  updatedAt: Date;
}

interface SigninState {
  isSignin: boolean;
  isSigninSuccess: boolean;
  isSigninFail: boolean;
  isSigninLoading: boolean;
  signinError: string;
  userData: UserData | null;
}

const initialState: SigninState = {
  isSignin: false,
  isSigninSuccess: false,
  isSigninFail: false,
  isSigninLoading: false,
  signinError: '',
  userData: null,
};

const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    signinRequest: state => {
      state.isSignin = false;
      state.isSigninLoading = true;
      state.isSigninSuccess = false;
      state.isSigninFail = false;
      state.signinError = '';
      state.userData = null;
    },
    signinSuccess: (state, action: PayloadAction<UserData>) => {
      state.isSignin = true;
      state.isSigninLoading = false;
      state.isSigninSuccess = true;
      state.isSigninFail = false;
      state.signinError = '';
      state.userData = action.payload;
    },
    signinFail: (state, action: PayloadAction<string>) => {
      state.isSignin = false;
      state.isSigninLoading = false;
      state.isSigninSuccess = false;
      state.isSigninFail = true;
      state.signinError = action.payload;
      state.userData = null;
    },
    signinReset: state => {
      state.isSignin = false;
      state.isSigninSuccess = false;
      state.isSigninFail = false;
      state.isSigninLoading = false;
      state.signinError = '';
      state.userData = null;
    },
    signinErorr: (state, action: PayloadAction<string>) => {
      state.isSignin = false;
      state.isSigninSuccess = false;
      state.isSigninFail = false;
      state.isSigninLoading = false;
      state.signinError = action.payload;
      state.userData = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signinAsync.pending, state => {
        state.isSigninLoading = true;
        console.log('');
        console.log('pending');
      })
      .addCase(signinAsync.fulfilled, (state,action:PayloadAction<UserData>) => {
        state.isSigninSuccess = true;
        state.userData = action.payload;
        console.log('fulfilled');
      })
      .addCase(signinAsync.rejected, (state, action) => {
        state.isSigninFail = true;
        state.signinError = action.error.message || '500';
        console.log(action.error.message);
        console.log('rejected');
      });
  },
});

export const signinAsync = createAsyncThunk(
  'signin/signinAsync',
  async (data: {email: string; password: string}) => {
    try {
      const response = await AxiosInstances.post('/user/login', data);
      console.log('Login success');
      return response.data;
    } catch (error) {
      const errorData = {
        message: (error as Error).message,
        status:
          (error as {response?: {status: number}}).response?.status || 500,
      };

      throw errorData;
    }
  },
);

export const {
  signinRequest,
  signinSuccess,
  signinFail,
  signinReset,
  signinErorr,
} = signinSlice.actions;

export default signinSlice.reducer;
