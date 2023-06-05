class UserDto {
    email;
    id;
    isActivated;

    constructor(model) {
        this.email = model.email
        this.id = model._id
        this.isActivated = model.isActivated;
    }
}

export default UserDto;
//the error that I got was because of wrong importing, I was importing it like: "export default new UserDto()" identical with the one in token-service and user-service, so the issue was importing the instance of a class immediatly,because of that here we have a constructor.When creating an instance of class constructor is called, and assigned arguments. Whenever we donot define a constructor it is inside of a class by default.