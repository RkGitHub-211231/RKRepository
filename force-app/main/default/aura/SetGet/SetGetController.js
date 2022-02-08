({
	setter : function(component, event, helper) {
       var empname = component.get("v.empname");
       
       var salary = component.get("v.salary");
        
        var exp = component.get("v.exp");
        
        var bonus=0;
        if(exp>5){
            bonus = salary*.5;
        }
        else{
            bonus = salary*.3;
        }
        component.set("v.bonus",bonus);
        

		
	}
})