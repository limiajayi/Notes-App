export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitials = (name) => {
    if (!name) return "";

    //first name and last name array
    const words = name.split(" ");
    let initials = "";

    for (let word in words) {
        initials += words[word][0];
    }

    return initials.toUpperCase();

}