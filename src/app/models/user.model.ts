import { FileHandle } from "./file-handle.model";

export interface User {

  user_name: string,
  password: string,
  email: string,
  full_name: string,
  phone_number: string,
  avatar: FileHandle[]


}
