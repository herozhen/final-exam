export enum LoginExpectedType {

    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    VALIDATION_EMPTY_USERNAME = 'VALIDATION_EMPTY_USERNAME',
    VALIDATION_EMPTY_PASSWORD = 'VALIDATION_EMPTY_PASSWORD',
    VALIDATION_ACCOUNT = 'VALIDATION_ACCOUNT',
    VALIDATION_EMPTY_BOTH = 'VALIDATION_EMPTY_BOTH',
    VALIDATION_MIN_LENGTH_PASSWORD = 'VALIDATION_MIN_LENGTH_PASSWORD'
}

export interface LoginTestData {
    caseId: string;
    description: string;
    username: string;
    password: string;
    remember: boolean;
    expectedType: LoginExpectedType;
}