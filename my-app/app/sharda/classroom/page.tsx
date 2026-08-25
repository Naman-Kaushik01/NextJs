import FilterUser from "@/components/FilterUser";

export default async function Classroom() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    
    return (
       <>
        <main>
            <h1>Classroom Page</h1>
            <p>This is Classroom Page of application</p>
            <FilterUser users={users} />
        </main>
       </>
    );
}