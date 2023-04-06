class UserDto {
    email;
    id;
    isActivated;

    constructor(model) {
        if (model !== undefined){
            this.email = model.email
            this.id = model._id;
            this.isActivated = model.isActivated;
        }

    }
}

export default new UserDto();