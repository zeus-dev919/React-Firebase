const isEmpty = (string) => {
  
  if (string.trim() === "") return true;
  else return false;
};


exports.validateLoginData = (data) => {
  let errors = {};
  if (data?.email && isEmpty(data.email)) errors.email = "Must not be empty";
  if (data?.password && isEmpty(data.password)) errors.password = "Must not be empty";
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

const isEmail = (email) => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email.match(emailRegEx)) return true;
  else return false;
};

exports.validateSignUpData = (data) => {
  let errors = {};

  if(isEmpty(data.email)) {
    errors.email = 'Must not be empty';
  }
  
  else if(!isEmail(data.email)) {
    errors.email = 'Must be valid email address';
  }
	if (isEmpty(data.phoneNumber)) errors.phoneNumber = 'Must not be empty';
	
	if (isEmpty(data.name)) errors.name = 'Must not be empty';

	return {
		errors,
		valid: Object.keys(errors).length === 0 ? true : false
	};
}