export interface LoginTypes {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    picturePath: string;
    friends: [];
    location: string;
    occupation: string;
    viewedProfile: number;
    impressions: number;
    createdAt: string;
    updatedAt: string;
  };
  token: string;
}

export interface FriendTypes {
  username: string;
  age: number;
  profession: string;
}
