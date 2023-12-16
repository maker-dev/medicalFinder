const FormatAmPm = (mysqlTime) => {
    const jsDate = new Date(`1970-01-01T${mysqlTime}Z`);
    const hours = jsDate.getHours();
    const minutes = jsDate.getMinutes();
    const AmPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Handle 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${formattedHours}:${formattedMinutes} ${AmPm}`;
    return strTime;
}

export default FormatAmPm;