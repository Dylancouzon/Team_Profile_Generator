const Employee = require("../lib/Employee");

describe("Testing Employee", () => {
    it("Create an employee with the ID of 1", () => {
        const employee = new Employee("Dylan", 1, "test@test.com");

        expect(employee.id).toEqual(1);
      });


      it("Test getRole()", () => {
        const employee = new Employee("Dylan", 1, "test@test.com");

        expect(employee.getRole()).toEqual("Employee");
      });
});
