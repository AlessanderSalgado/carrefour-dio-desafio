import { useState } from "react";
import axios from 'axios';
const initialRequestInfo = {
    error: null,
    data: null,
    loading: false,
}

export default function useApi(config){
    const [requestInfo, setRequestInfo] = useState(initialRequestInfo);

    async function call(){
        //console.log(initialRequestInfo)
        setRequestInfo({
            ...initialRequestInfo,
            loading: true,
        })
        //console.log(initialRequestInfo)
        await axios(config).then((response)=>{
            setRequestInfo({
                ...initialRequestInfo,
                data: response.data,
            });
        }).catch((response)=>{
            setRequestInfo({
                ...initialRequestInfo,
                error: response.status,
            });
        })
    }

    return[
        call,
        requestInfo,
    ]
}