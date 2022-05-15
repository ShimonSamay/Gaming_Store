export interface User {
  _id?: string;
  firstName?: string;
  lastName?: string;
  userID?: string;
  image?: string;
  email?: string;
  password?: string;
  loggedIn?: boolean;
}

export interface UserAction {
  type: string;
  payload?: User;
}


