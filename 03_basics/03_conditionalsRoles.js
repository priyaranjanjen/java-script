// create an appl. for specefied roles:
// admin: gets full access
// subadmin: get access to create/delete cousres
// testprep: get access to create delete test
// user: get acess to consume content

let user = "sdf"

switch (user) {
    case "admin":
        console.log("gets full access");        
        break;
    case "subadmin":
        console.log("get access to create delete courses");        
        break;
    case "testprep":
        console.log("get access to create delete test");        
        break;
    case "user":
        console.log("get acess to consume content");        
        break;
    default:
        console.log("Invalid user");
        break;
}