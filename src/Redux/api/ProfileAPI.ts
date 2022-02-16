import axios from "axios";



const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"3d4b3ca3-fea7-46c7-8c79-414b84e12e62"
    }
})

export  const  ProfileAPI = {
    profilePage:(userId:number)=>{return instance.get(`profile/${userId}`)},
    getStatus:(userId:string)=>{return instance.get(`profile/status/${userId}`)},
    updateStatus:(status:string)=>instance.put(`profile/status`, {status}),
    postPhoto:(file:any)=>{
        // console.log(file[0])
        const formData = new FormData()
        formData.append('image', file)
        console.log(formData)
        return instance.put('profile/photo', formData)}
}