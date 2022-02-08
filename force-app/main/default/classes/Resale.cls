public class Resale {
    
    public static void calculateResaleVal(list<Bus__c> busses){
       for(Bus__c b:busses){
	     if(b.Maximum_Capacity__c=='24') {
                if(b.Year__c<=1972){
                    b.Starting_Selling_Price__c=(120000*0.34)+120000;
                    if(b.Current_Status__c=='Ready For Use' && b.Odometer_Reading__c>100000)
                    	{
                       		 b.Resale_Value__c=b.Starting_Selling_Price__c-((b.Odometer_Reading__c-100000)*.1);
                        
                    	}
                 }
            	else if(b.Air_Conditioning__c==true) {
                		b.Starting_Selling_Price__c=(120000*0.03)+120000;
                        if(b.Current_Status__c=='Ready For Use' && b.Odometer_Reading__c>100000)
                    	{
                       		 b.Resale_Value__c=b.Starting_Selling_Price__c-((b.Odometer_Reading__c-100000)*.1);
                        
                    	}
                         
            		} else{
                			b.Starting_Selling_Price__c=120000;
                    		if(b.Current_Status__c=='Ready For Use' && b.Odometer_Reading__c>100000)
                    		{
                       		 b.Resale_Value__c=b.Starting_Selling_Price__c-((b.Odometer_Reading__c-100000)*.1);
                        
                    		}
                    }
          }
          else if(b.Maximum_Capacity__c=='36') {
                
                if(b.Year__c<=1972){
               		 b.Starting_Selling_Price__c=(160000*0.34)+160000;
                     if(b.Current_Status__c=='Ready For Use' && b.Odometer_Reading__c>100000)
                    	{
                       		 b.Resale_Value__c=b.Starting_Selling_Price__c-((b.Odometer_Reading__c-100000)*.1);
                        
                    	}
                }
            	else if(b.Air_Conditioning__c==true){
                   		 b.Starting_Selling_Price__c=(160000*0.03)+160000;
                         if(b.Current_Status__c=='Ready For Use' && b.Odometer_Reading__c>100000)
                    		{
                       		 b.Resale_Value__c=b.Starting_Selling_Price__c-((b.Odometer_Reading__c-100000)*.1);
                       		}
        		}
            	else{
                    b.Starting_Selling_Price__c=160000;
                    if(b.Current_Status__c=='Ready For Use' && b.Odometer_Reading__c>100000)
                    	{
                       		 b.Resale_Value__c=b.Starting_Selling_Price__c-((b.Odometer_Reading__c-100000)*.1);
                      }
            	}                   
            }               
        }
        
      }
    public static void calculateResaleValAfterUpdate(list<Bus__c> newbus,map<Id,Bus__c> oldBus){
        set<id> updBus = new set<id>();
        for(Bus__c b: newbus){       
            if (oldBus.get(b.Id).Current_Status__c!='Ready For Use'&& b.Current_Status__c=='Ready For Use'){
				 updBus.add(b.Id);
       }       
    }
        list<Bus__c> BustoUpdate = [select id,Resale_Value__c,Starting_Selling_Price__c,Odometer_Reading__c from Bus__c where id in:updBus];
        for(Bus__c b:BustoUpdate ){
            
			b.Resale_Value__c=b.Starting_Selling_Price__c-((b.Odometer_Reading__c-100000)*.1);            
        }
       update BustoUpdate;  
    }
   
}