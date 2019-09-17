const ifPass = (password) => {
  // Regular expression pattern for string at least 8 characters long, 1 upper case, 1 number
  const regExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  if(password.match(regExp)){
    return true;
  }
  return false;
}

module.exports = ifPass;