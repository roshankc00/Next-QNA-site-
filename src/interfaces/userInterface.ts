export interface tokenData {
    email:string
}
export interface userDetail{
    email:string,
    username:string,
    isAdmin:boolean,
    isVerified:boolean,
    _id:string

}

export interface sendEmailInterface{
    email:string,
    userId:string,
    emailType?:string

}