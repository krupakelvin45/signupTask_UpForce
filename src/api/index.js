import axios from "axios";

const addSignupData = async(type,data) => {
    
    const signupResponse = await axios.post(`http://wren.in:3200/api/sign-up/${type}`,data)

    return signupResponse;

}

const exportObj = {
    addSignupData: addSignupData
}

export default exportObj