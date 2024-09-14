
export class CreateUserDTO {
    constructor(
        public readonly name: string,
        public readonly socketId: string
    ) { }
}