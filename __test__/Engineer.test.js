const Engineer = require("../lib/Engineer");
const engineer = new Engineer(10, "Dylan", "test@test.com", "Dylancouzon");

describe("Testing Engineer", () => {
    it("Create an Engineer with the ID of 10", () => {

        expect(engineer.id).toEqual(10);
      });

      it("Test getGithub()", () => {

        expect(engineer.getGithub()).toEqual("Dylancouzon");
      });
});
