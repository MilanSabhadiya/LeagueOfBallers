import api from '../components/api';
import history from '../components/history';

export const SignIn = (userId) => {
    return async (dispatch) => {
        const response = await api.post('/login', { userId });
        dispatch({ type: "SIGN_IN", payload: response.data.userId })
        history.push('/league/new')
    }
}