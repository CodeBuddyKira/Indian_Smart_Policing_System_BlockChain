pragma solidity ^0.4.18;
contract login {
    struct userDetails{
        string userId;
        string password;
        string name;
        string id;
        string contact;
        string postalAddress;
        string uid;
        string policeStationNo;
    }
    string gupta;
    mapping(string=>userDetails) details;
    
    function setDataBase(string _userId) public{
       details[_userId]=userDetails("aman","aman","aman","12","8859647886","tandon hostel mnnit","20155018","526");
       //gupta=_userId;
        
    }
   /*function getGupta() public constant returns (string ){
        return gupta;
    }*/
    //details["aman"]=userDetails("aman","aman","aman","12","8859647886","tandon hostel mnnit","20155018","526");
    /*u.userId="aman";
    u.password="aman";
    u.name="aman";
    u.id="12";
    u.contact="8859647886";
    u.postalAddress="tandon hostel mnnit";
    u.uid="20155018";
    u.policeStationNo="526";*/
    
   function getName(string userId) public constant returns (string) {
       return details[userId].name;
   }
   function getId(string userId) public constant returns (string) {
       return details[userId].id;
   }
   function getContact(string userId) public constant returns (string) {
       return details[userId].contact;
   }
   function getPostalAddress(string userId) public constant returns (string) {
       return details[userId].postalAddress;
   }
   function getUid(string userId) public constant returns (string){
       return details[userId].uid;
   }
   function getPoliceStationNo(string userId) public constant returns (string){
       return details[userId].policeStationNo;
   }
   
   function setContact(string _contact,string userId) public {
       details[userId].contact=_contact;
   }
   
   function setPostalAddress(string _postalAddress,string userId) public {
      details[userId].postalAddress=_postalAddress;  
   }
   
   function setPoliceStation(string _policeStationNo,string userId) public {
       details[userId].policeStationNo=_policeStationNo;   
   }
   
    function loginVerify(string userId,string _password) public view returns (bool){
        //return details[userId].password;
        if(keccak256(details[userId].password) == keccak256(_password)){
            return true;
        }
        else{
            return false;
        }
        
        
    }
    
}