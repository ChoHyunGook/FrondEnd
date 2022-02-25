import axios from 'axios';
const SERVER=`http://localhost:8080`
export const memberBmi = bmiRequest=> axios.post(`${SERVER}/member/bmi`,bmiRequest)
export const memberCalc = calcRequest=> axios.post(`${SERVER}/member/calc`,calcRequest)
export const memberChange = changeRequest=> axios.post(`${SERVER}/member/change`,changeRequest)
export const memberCircle = circleRequest=> axios.post(`${SERVER}/member/circle`,circleRequest)
export const memberCounter = counterRequest=> axios.post(`${SERVER}/member/counter`,counterRequest)
export const memberGrade = gradeRequest=> axios.post(`${SERVER}/member/grade`,gradeRequest)
export const memberLogin = loginRequest=> axios.post(`${SERVER}/member/login`,loginRequest)
export const memberWeek = weekRequest=> axios.post(`${SERVER}/member/week`,weekRequest)
