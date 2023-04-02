public with sharing class HelloClass {
    @AuraEnabled(cacheable=true)

   
    public static String sayHello()
        {
            return 'Hello from class';
        }
    public HelloClass() {
        

    }
}