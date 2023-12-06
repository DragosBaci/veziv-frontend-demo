const backendEnvironment = 'http://localhost:8080';
const authRouteBase = 'auth';
const id = ':id';

const requestUrls = {
    authLogin: `${backendEnvironment}/${authRouteBase}/signin`,

    home: `${backendEnvironment}/home`,
    about: `${backendEnvironment}/about`,
    card: `${backendEnvironment}/card`,
    cardDetail: `${backendEnvironment}/card/:id`,
};

export default requestUrls;
