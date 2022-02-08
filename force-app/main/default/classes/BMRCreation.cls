public class BMRCreation  {
    
   
    public static void createBMR(List<Bus__c> newBus,Map<Id,Bus__c> oldBus){
        
        List<Bus_Maintenance__c> bMList = new List<Bus_Maintenance__c>();
        List<Double> distance = new List<Double>();
        Map<Double,ID> distanceMap = new Map<Double,ID>();
        List<Garage__c> garages = [Select id,Location__c From Garage__c];
        set<Id> busId = new set<Id>();
        system.debug('newBus : '+ newBus);
        system.debug('oldBud : '+ oldBus);
        for(Bus__c bus : newBus){
            if((oldBus.get(bus.Id).Odometer_Reading__c != bus.Odometer_Reading__c)&&(bus.Maximum_Capacity__c=='60')){
                Integer myintval = Integer.valueOf(bus.Odometer_Reading__c);
                if(math.mod(myintval, 5000)==0)
                {
                    busId.add(bus.Id);
                    system.debug('Bud IDs : '+ busId);
                }
               
            }
        }
        List<Bus__c> busList = [Select Id,Odometer_Reading__c,Bus_Location__c From Bus__c Where Id in : busId];
        system.debug('busList :'+ busList);
        
        for(Bus__c b : busList){
            
            system.debug('bus records : '+ b);
            system.debug('Bus Location:'+ b.Bus_Location__c);
                Location busLoc = b.Bus_Location__c;
                    for(Garage__c g : garages){
                        Id i = g.Id;
                        Double d = Location.getDistance(b.Bus_Location__c,g.Location__c,'km');
                        distanceMap.put(d,i);
                    }
                Set<Double> dis = distanceMap.keySet();
                distance.addAll(dis);
                distance.sort();
                Double d2 = distance.get(0);
                b.Garage_ID__c = distanceMap.get(d2);
                Bus_Maintenance__c bM = new Bus_Maintenance__c();
                bM.Bus_ID__c = b.Id;
                bM.Schedule_Reason__c = 'Regular Maintenance';
                bMList.add(bM);
            }
            insert bMList;
          update busList;        
    }   
}