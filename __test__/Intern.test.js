const Intern = require("../lib/Intern");
const intern = new Intern(10, "Dylan", "test@test.com", "UC Berkeley");
describe("Testing Engineer", () => {
    it("Create an Intern with the email test@test.com", () => {
    
        expect(intern.email).toEqual("test@test.com");
      });

      it("Test getSchool()", () => {

        expect(intern.getSchool()).toEqual("UC Berkeley");
      });
});
