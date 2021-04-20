const Employee = require("../lib/Employee");
const employee = new Employee("Dylan", 1, "test@test.com");

describe("Testing Employee", () => {
    it("Create an employee with the ID of 1", () => {

        expect(employee.id).toEqual(1);
      });


      it("Test getRole()", () => {

        expect(employee.getRole()).toEqual("Employee");
      });
});
