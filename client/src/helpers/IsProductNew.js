const IsProductNew = (created_at_mysql, days = 7) => {
    const created_at = new Date(created_at_mysql);
    const timeInMilliseconds = Number(days) * 24 * 60 * 60 * 1000; // One week in milliseconds
    const currentDate = new Date();
    
    var isNew;
    
    if (currentDate - created_at < timeInMilliseconds) isNew = true
    else isNew = false;

    return isNew;
}


export default IsProductNew;