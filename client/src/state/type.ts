export interface LoginTypes {
  user: {
    firstName: string;
    lastName: string;
    friends: [];
  };
  token: string;
}

export interface FriendTypes {
  username: string;
  age: number;
  profession: string;
}
