import { useCreateContext } from '../create-context';
import { reducer, initialState } from './video.reducer';

const [state, useDispatch, provider] = useCreateContext(initialState, reducer);
export const useVideoState = state;
export const useVideoDispatch = useDispatch;
export const VideoProvider = provider;
