if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
web3.eth.defaultAccount = web3.eth.accounts[0];

var loginContract = web3.eth.contract([
    {
        "constant": true,
        "inputs": [
            {
                "name": "userId",
                "type": "string"
            }
        ],
        "name": "getContact",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userId",
                "type": "string"
            }
        ],
        "name": "getId",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userId",
                "type": "string"
            }
        ],
        "name": "getName",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userId",
                "type": "string"
            },
            {
                "name": "_password",
                "type": "string"
            }
        ],
        "name": "loginVerify",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userId",
                "type": "string"
            }
        ],
        "name": "getPoliceStationNo",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userId",
                "type": "string"
            }
        ],
        "name": "getPostalAddress",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userId",
                "type": "string"
            }
        ],
        "name": "getUid",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_postalAddress",
                "type": "string"
            },
            {
                "name": "userId",
                "type": "string"
            }
        ],
        "name": "setPostalAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_userId",
                "type": "string"
            }
        ],
        "name": "setDataBase",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_contact",
                "type": "string"
            },
            {
                "name": "userId",
                "type": "string"
            }
        ],
        "name": "setContact",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_policeStationNo",
                "type": "string"
            },
            {
                "name": "userId",
                "type": "string"
            }
        ],
        "name": "setPoliceStation",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]);

var l = loginContract.at('0x56a875aee76e3cfadf320a6b14afd14cff6eb26e');
 console.log(l);
  l.setDataBase("aman",{from:web3.eth.accounts[0],gas:3000000});


/*
l.loginVerify("aman",function(error, result){
    if(!error)
    {
        console.log(result);
    }
    else
        console.error(error);
});

l.getContact("aman",function(error, result){
    if(!error)
    {
        //$("#instructor").html(result[0]+' ('+result[1]+' years old)');
        console.log(result);
    }
    else
        console.error(error);
});
*/

$("#button").click(function() {
    var userName=document.getElementById("userName").value;
    var passWord=document.getElementById("passWord").value;
    l.loginVerify(userName,passWord,function(error, result){
            if(!error)
            {   console.log(result);
                //console.log("login successfull");
            }
            else
                console.error(error);
        })
});


