import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Table from "../Table/Table";
import { fetchUsers } from "../../services/api";
import { fetchUserPostsApi } from "../../services/api";

export interface UserPostProps {
  items: any[];
  showRowDetails?: (id: number) => Promise<any>;
  detailsVisibleText: string;
  detailsInvisibleText: string;
  id: number;
}

export interface UserProps {
  firstName: string;
  lastName: string;
  image?: string;
  email?: string;
  age?: number;
  id: number;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // State to store error message

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUsers();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching users: " + error?.toString()); // Set error message
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchUserPosts = async (id: number) => {
    try {
      const userPosts = await fetchUserPostsApi(id);
      return userPosts;
    } catch (error) {
      setError("Error fetching users posts: " + error?.toString()); // Set error message
      throw error;
    }
  };

  const columns = [
    { field: "firstName", header: "First Name" },
    { field: "lastName", header: "Last Name" },
    { field: "email", header: "Email" },
    { field: "age", header: "Age" },

    // Add more columns as needed
  ];

  return (
    <>
      <div className="flex pt-7 flex-col content-center">
        {error && <div>Error: {error}</div>}

        {isLoading ? (
          <Loading />
        ) : (
          <Table
            data={users}
            columns={columns}
            showRowDetails={fetchUserPosts}
            detailsInvisibleText="Hide Posts"
            detailsVisibleText="Show Posts"
          />
        )}
      </div>
    </>
  );
};

export default UserList;
