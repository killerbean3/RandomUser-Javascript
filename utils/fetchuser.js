const url = "https://randomuser.me/api/";

const getUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const person = data.results[0];
  const {
    phone,
    email,
    dob: { age },
    picture: { large: image },
    login: { password },
    name: { first, last },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  return {
    phone,
    email,
    image,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;
