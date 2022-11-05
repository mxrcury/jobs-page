import moment from 'moment/moment';
import { useState, useEffect } from 'react';


export const useTime = ({startTime, endTime}) =>{
    const [ time, setTime ] = useState(0)

    // const currentTime = moment(new Date().toJSON())
    const currentTime = moment(endTime)

    const timeDifference = currentTime.diff(startTime, 'days')

    return {
        daysPast:timeDifference
    }
}