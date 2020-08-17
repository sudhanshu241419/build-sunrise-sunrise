import { PLAN } from './actionTypes';
import axios from '../../apiConfig';

export const request = () => {
    return {
        type: PLAN,
    };
}

export const successRequest = (data) => {
    return {
        type: PLAN_SUCCESS,
        payload: data,
    };
}

export const failRequest = (error) => {
    return {
        type: PLAN_FAIL,
        payload: error,
    };
}

export const getPlan = () => {

    try {
        const res = axios.get('krypson-plan/plan/search?searchCriteria[pageSize]=10', {
                headers: { 'Content-type': 'application/json' }
            });
        return res;
    }
    catch (err) {
        console.log(err);
    }

    
    // return { wai
    //     "items": [
    //         {
    //             "plan_id": "1",
    //             "plan_name": "simple",
    //             "plan_price": "0.00",
    //             "plan_expiry": "1 month"
    //         }
    //     ],
    //     "search_criteria": {
    //         "filter_groups": [],
    //         "page_size": 10
    //     },
    //     "total_count": 1
    // }

}