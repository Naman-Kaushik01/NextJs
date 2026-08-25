type ProfilePageProps = {
    params: Promise<{ name: string }>;
}
export default async function ProfilePage({params} : ProfilePageProps) {

    const users = [
        {
            id:1,
            name: "Naman",
            email: "kaushiknaman68@gmail.com",
            bio : "I am a software developer with a passion for creating innovative solutions. I have experience in web development, mobile app development, and cloud computing. I enjoy learning new technologies and applying them to real-world problems."
        },
        {
            id:2,
            name: "John",
            email: "johndoe@gmail.com",
            bio : "I am a software developer with a passion for creating innovative solutions. I have experience in web development, mobile app development, and cloud computing. I enjoy learning new technologies and applying them to real-world problems."
        },
        {
            id:3,
            name : "Rahul",
            email : "rahuldev@gmail.com",
            bio : "I am a software developer with a passion for creating innovative solutions. I have experience in web development, mobile app development, and cloud computing. I enjoy learning new technologies and applying them to real-world problems."
        }
    ]
    const pageParams = await params 
    const username = pageParams.name;
    const user = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase());
    if(!user){
        return(
            <div>
                <h1>User Not Found</h1>
                <p>Sorry, we could not find a user with the name "{username}". Please check the spelling and try again.</p>
            </div>
        )
    }
    return(
        <div>
            <h1>{user?.name}'s Profile Page</h1>
            <p>{user.email}</p>
            <p>{user.bio}</p>
        </div>
    )
}