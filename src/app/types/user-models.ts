export interface user {
    id:string;
    email:string;
    password:string
    name:string
}

export interface createUserDTO extends Omit<user, 'id'>{
    
}

export interface userDetails extends Omit<user, 'password'>{}
export interface auth{
    access_token: string
}