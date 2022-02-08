public with sharing class ContactsClass {
    public ContactsClass() {
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsbyfilter(String fname ,string lead){   
      String keyString ='%'+fname+'%';   
      String leads = '%'+lead +'%';   
      return Database.query('Select Name,Phone,LeadSource from Contact where (Firstname like:keyString  AND LeadSource like:leads )');   
    
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String ConName, String LeadS) {
        
        String[] filters = new String[0];
        if(ConName != '') {
            ConName = '%' + ConName+'%';
        filters.add('FirstName Like :ConName');
        }
        if(LeadS != '') {
        filters.add('LeadSource = :LeadS');
        }
        String query = 'SELECT Id, Name, Email, MobilePhone FROM Contact ';
        if(filters.size() > 0) {
        query += ' WHERE ' + String.join(filters, ' AND ');
        }
        return Database.query(query);
        
    }
}