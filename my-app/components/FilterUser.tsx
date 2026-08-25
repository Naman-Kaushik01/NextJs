"use client"
type User={
    id: number;
    name: string;
    username: string;
}

import { useState } from 'react';

export default function FilterUser({users}: {users: User[]}){
    const[searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter(User => {
        return User.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    })

    return(
        <div>
            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            <ul>
                {filteredUsers.map((user : User) =>{
                    return(
                        <li key={user.id}>{user.name}</li>
                    )
                })}
            </ul>
        </div>
    )
    
}