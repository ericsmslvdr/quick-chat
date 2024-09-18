
export class CreateUserDTO {
    constructor(
        public readonly name: string,
        public readonly socketId: string
    ) { }
}

export class UserByIdDTO {
    constructor(
        public readonly id: string
    ) { }
}