type User={
    id: number;
    name: string;
    username: string;
}
export default async function Classroom() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    
    return (
       <>
        <main>
            <h1>Classroom Page</h1>
            <p>This is Classroom Page of application</p>
            <ul>
                {users.map((user : User) =>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </main>
       </>
    );
}