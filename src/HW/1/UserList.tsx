type AddressType = {
    street: string
    city: string
};

type UserType = {
    id: number
    name: string
    age: number
    address: AddressType
};

type UserListPropsType = {
    users: UserType []
};

export const UserList = ({users}: UserListPropsType) => {
    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>

            <ul>
                {users.map((el) => (
                    <li key={el.id} id={`hw01-user-${el.id}`}>
                        <strong>{el.name}</strong> (Age: {el.age})<strong> Address:</strong>
                        {el.address.street}, {el.address.city}
                    </li>
                ))}
            </ul>
        </div>
    );
};
