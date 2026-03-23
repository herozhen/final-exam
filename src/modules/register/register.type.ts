export enum RegisterExpectedType {
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    VALIDATION_ALL_FIELD_EMPTY = 'VALIDATION_ALL_FIELD_EMPTY',
    VALIDATION_USERNAME_EMPTY = 'VALIDATION_USERNAME_EMPTY',
    VALIDATION_PASSWORD_EMPTY = 'VALIDATION_PASSWORD_EMPTY',
    VALIDATION_CONFIRM_PASSWORD_EMPTY = 'VALIDATION_CONFIRM_PASSWORD_EMPTY',
    VALIDATION_PASSWORD_NOT_MATCH = 'VALIDATION_PASSWORD_NOT_MATCH',
    VALIDATION_FULLNAME_EMPTY = 'VALIDATION_FULLNAME_EMPTY',
    VALIDATION_EMAIL_EMPTY = 'VALIDATION_EMAIL_EMPTY',
    VALIDATION_PASSWORD_MISMATCH = 'VALIDATION_PASSWORD_MISMATCH',
    VALIDATION_EMAIL_INVALID = 'VALIDATION_EMAIL_INVALID',
    REGISTER_UNSUCCESSFUL = 'REGISTER_UNSUCCESSFUL',
    VALIDATION_PASSWORD_LENGTH = 'VALIDATION_PASSWORD_LENGTH',
    VALIDATION_FULLNAME_INVALID = 'VALIDATION_FULLNAME_INVALID'
}

export interface RegisterTestData {
    caseId: string;
    description: string;
    username: string;
    password: string;
    confirmPassword: string;
    fullName: string;
    email: string;
    randomAccount: boolean;
    expectedType: RegisterExpectedType;
}

export interface Register {
    username: string;
    password: string;
    confirmPassword: string;
    fullName: string;
    email: string;
} 
