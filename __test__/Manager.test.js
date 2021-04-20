const Manager = require("../lib/Manager");
const manager = new Manager(10, "Dylan", "test@test.com", "000 000-0000");
describe("Testing Engineer", () => {
    it("Get the number of question aksed to create a Manager", () => {
    
        expect(manager.getQuestions().length).toEqual(4);
      });

      it("Test getOfficeNumber()", () => {

        expect(manager.getOfficeNumber()).toEqual("000 000-0000");
      });
});
