({
	show : function(component, event, helper) {
		var empName = component.get("v.EmpName");
        var Salary = component.get("v.Salary");
        var Bonus = component.get("v.Bonus");
        var TotalAmt   = Salary+Bonus;
        component.set("V.TotalAmt",TotalAmt);
        
	}
})