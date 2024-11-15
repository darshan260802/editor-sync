import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export function getSync(){
    const SYNC_ID = localStorage.getItem('sync_id');
    if(!SYNC_ID) return Promise.resolve(localStorage.getItem('editor_data') ?? "");
    return axiosInstance.get('get-sync', {params:{sync_id: SYNC_ID}})
}

export function setSync(data){
    if(!data.syncId) return ;
    axiosInstance.post('set-sync', data).then(e => {
    }).catch(err => {
        console.log({err});
    })
}