export interface user {
    id:string;
    email:string;
    password:string
    name:string
    roles : `admin` | `npc`
}

export interface createUserDTO extends Omit<user, 'id' | `roles`>{
    
}

export interface userDetails extends Omit<user, 'password'>{}
export interface auth{
    access_token: string
}