export interface postType {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  location: string;
  description: string;
  picturePath: string;
  userPicturePath: string;
  comments: [];
}
export interface LoginTypes {
  user: {
    _id: string;
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
