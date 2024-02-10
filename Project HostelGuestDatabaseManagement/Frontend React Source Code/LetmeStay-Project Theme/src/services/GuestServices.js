import axios from 'axios';

const GUEST_API_BASE_URL = "http://localhost:8080/api/v1/Guestlist";
//  const GUEST_API_BASE_URL = "http://localhost:3000/guests";


class GuestServices {
    // CRUD operation

    getGuest(){
        return axios.get(GUEST_API_BASE_URL);
    }

    getGuestById(guestId){
        return axios.get(GUEST_API_BASE_URL + '/' + guestId);
    }

    createGuest(data){
        console.log(data)
        return axios.post(GUEST_API_BASE_URL, data);
    }

    editGuest(guestId,guest){
        console.log(guest);
        return axios.put(GUEST_API_BASE_URL + '/' + guestId,guest);
    }

   
   

    deleteGuest(guestId){
        
        return axios.delete(GUEST_API_BASE_URL + '/' + guestId);
    }
}

export default new GuestServices()