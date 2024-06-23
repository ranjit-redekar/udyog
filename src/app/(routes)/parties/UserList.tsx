"use client";
import { getUsers } from '@/actions';
import { DataTable } from '@/app/(components)/table/data-table';
import { columns } from "./columns";
import React, { useState, useEffect } from 'react';

const UserList: React.FC<{ type: string; }> = ({ type }) => {
  const [userList, setUserList] = useState([])
  useEffect(() => {
    console.log("User List useEffect", type)
    getUsers(type?.toLocaleLowerCase()).then((res) => {
      setUserList(res);
      console.log(res, "SUCCESS: User list")
    }).catch((err) => {
      console.log(err, "ERROR: User list")
    })
  }, [type]);

  return (
    <div>
      <DataTable data={userList} columns={columns} />
    </div>
  );
}

export default UserList;
