import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmI5ZDdiNzFhN2Q1MTdkODE1NmMxNDZlZjNlNTY1MSIsInN1YiI6IjYyNTA5YTdkOGE4NGQyMDA1MWRkMjExNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uWaO4jNoKmJFNo3FAMslkjUyBrvAwjUsl_4756xdw3s'
    return req;
})

export default apiMovie;
