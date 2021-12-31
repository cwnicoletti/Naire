export const INTROING = "INTROING";
export const SIGNUP_EMAIL = "SIGNUP_EMAIL";
export const SIGNUP_FULLNAME = "SIGNUP_FULLNAME";
export const SIGNUP_USERNAME = "SIGNUP_USERNAME";

export interface SignUpState {
  email: string;
  fullname: string;
  username: string;
}

interface ActionSetEmail {
  type: typeof SIGNUP_EMAIL;
  email: string;
}

interface ActionSetFullname {
  type: typeof SIGNUP_FULLNAME;
  fullname: string;
}

interface ActionSetUsername {
  type: typeof SIGNUP_USERNAME;
  username: string;
}

export type Action =
  | ActionSetEmail
  | ActionSetFullname
  | ActionSetUsername;
