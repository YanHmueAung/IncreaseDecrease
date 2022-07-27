import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization :'Bearer s0uPuCmsFSm-fsJHnD_nuKKppFWuXzpZSnVJnJz5a5-6EKbElxR8WQB8biYaRapFVxPaEfPhpWYCPOBelhbmkKUDZMs_FwYUSB3duudRFYDhlS17tcekwDAyOWreYnYx',

    }
});