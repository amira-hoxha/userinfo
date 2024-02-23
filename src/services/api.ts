import { UserPostProps, UserProps } from "../components/UserList/UserList";
import axiosInstance from "./apiService";

// Get users
export async function fetchUsers(): Promise<UserProps[]> {
  try {
    const response = await axiosInstance.get("/users");
    return response.data.users;
  } catch (error) {
    throw error; // Rethrow the error to the caller
  }
}

// get user posts by id
export async function fetchUserPostsApi(id: number): Promise<UserPostProps[]> {
  try {
    const response = await axiosInstance.get(`/posts/user/${id}`);
    return response.data.posts;
  } catch (error) {
    throw error; // Rethrow the error to the caller
  }
}
