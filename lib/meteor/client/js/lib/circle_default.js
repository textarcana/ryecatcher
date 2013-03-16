/*
 * empty circle -- without this the circle page is broken if you hit
 * it directly wihtout going through the Student Flow
*/

var defaultCircle = {
    "roles": {
        "inSchool": [],
        "external": []
    }
};

Session.set('inSchoolRoles', []);

Session.set('externalRoles', []);
