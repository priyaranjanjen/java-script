function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} with all access`
            break;
        case "subadmin":
            return `${name} with access to create/delete courses`
            break;
        case "testprep":
            return `${name} with access to create/delete test`
            break;
        case "user":
            return `${name} with access to consume all content`
            break;
        default:
            return `${name} is a trial user`
            break;
    }
}

let role = getUserRole("Priyaranjan", "admin");
console.log(role);