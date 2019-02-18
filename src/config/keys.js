// Application configs
export const keys = {
  randomuserURI:
    "https://randomuser.me/api/?results=20&seed=mcreate&inc=name,email,phone,picture,id&nat=us",
  baseURL: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? ":" + window.location.port : ""
  }`
};

export const errors = {
  notFound: "Hmm! ... The Coffee machine just broke!"
};
