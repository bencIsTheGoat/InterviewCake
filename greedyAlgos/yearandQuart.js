function convert (date) {
    const year = date.slice(0, 4);
    const month = Number(date.slice(4, 6));
    if (month <= 3) {
        return year + 'Q1';
    } else if (month > 3 && month <= 6) {
        return year + 'Q2';
    } else if (month > 6 && month <= 9) {
        return year + 'Q3';
    } else {
        return year + 'Q4';
    }
} 

