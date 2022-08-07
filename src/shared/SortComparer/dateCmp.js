const strToInfo = (dateStr) => {
    /* 
    Date format will be given as such:
    March 20, 2022
    (Month Day, Year)
    */
    return {
        month: dateStr.split(/\s/)[0].toLowerCase(),
        day: parseInt(dateStr.split(/\s/)[1].slice(0, -1)),
        year: parseInt(dateStr.split(/\s/)[2])
    };
}

const monthCmp = (month1, month2) => {
    const monthToNum = {
        january: 1,
        february: 2,
        march: 3,
        april: 4,
        may: 5,
        june: 6,
        july: 7,
        august: 8,
        september: 9,
        october: 10,
        november: 11,
        december: 12
    }
    if (monthToNum[`${month1}`] === monthToNum[`${month2}`]) {
        return 0;
    } else if (monthToNum[`${month1}`] > monthToNum[`${month2}`]) {
        return 1;
    } else {
        return -1;
    }
}

const DateSorter_ = (date1, date2) => {
    /* 
    Date format will be given as such:
    March 20, 2022
    (Month Day, Year)
    */
    const info = {
        first: strToInfo(date1),
        second: strToInfo(date2)
    }
    if (info.first.year === info.second.year) {
        const monthCmpResult = monthCmp(info.first.month, info.second.month);
        if (monthCmpResult === 0) {
            return info.first.day > info.second.day;
        }
        return monthCmpResult === 1;
    }
    return info.first.year > info.second.year;
}

const DateSorter = (_date1, _date2) => {
    let date1, date2;
    if (typeof _date1 === "string") { // Normal Date String
        date1 = _date1;
    } else { // This would be {id: date} format
        date1 = Object.values(_date1)[0];
    }

    if (typeof _date2 === "string") { // Normal Date String
        date2 = _date2;
    } else { // This would be {id: date} format
        date2 = Object.values(_date2)[0];
    }

    return DateSorter_(date1, date2) ? -1 : 1;
}

export default DateSorter;