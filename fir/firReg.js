if (typeof web3 !== 'undefined') {
     web3 = new Web3(web3.currentProvider);
}
else{
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];
var CoursetroContract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "FIRs",
		"outputs": [
			{
				"name": "firNo",
				"type": "uint256"
			},
			{
				"name": "date",
				"type": "bytes32"
			},
			{
				"name": "occDate",
				"type": "bytes32"
			},
			{
				"name": "occTime",
				"type": "bytes32"
			},
			{
				"name": "compName",
				"type": "bytes32"
			},
			{
				"name": "compAddress",
				"type": "bytes32"
			},
			{
				"name": "compContact",
				"type": "bytes32"
			},
			{
				"name": "accusedName",
				"type": "bytes32"
			},
			{
				"name": "accusedAddress",
				"type": "bytes32"
			},
			{
				"name": "incidentDetails",
				"type": "bytes32"
			},
			{
				"name": "otherDetails",
				"type": "bytes32"
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
				"name": "_firNo",
				"type": "uint256"
			},
			{
				"name": "_date",
				"type": "bytes32"
			},
			{
				"name": "_occDate",
				"type": "bytes32"
			},
			{
				"name": "_occTime",
				"type": "bytes32"
			},
			{
				"name": "_compName",
				"type": "bytes32"
			},
			{
				"name": "_compAddress",
				"type": "bytes32"
			},
			{
				"name": "_compContact",
				"type": "bytes32"
			},
			{
				"name": "_accusedName",
				"type": "bytes32"
			},
			{
				"name": "_accusedAddress",
				"type": "bytes32"
			},
			{
				"name": "_incidentDetails",
				"type": "bytes32"
			},
			{
				"name": "_otherDetails",
				"type": "bytes32"
			}
		],
		"name": "addFIR",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_firDetail",
		"outputs": [
			{
				"name": "firNo",
				"type": "uint256"
			},
			{
				"name": "date",
				"type": "bytes32"
			},
			{
				"name": "occDate",
				"type": "bytes32"
			},
			{
				"name": "occTime",
				"type": "bytes32"
			},
			{
				"name": "compName",
				"type": "bytes32"
			},
			{
				"name": "compAddress",
				"type": "bytes32"
			},
			{
				"name": "compContact",
				"type": "bytes32"
			},
			{
				"name": "accusedName",
				"type": "bytes32"
			},
			{
				"name": "accusedAddress",
				"type": "bytes32"
			},
			{
				"name": "incidentDetails",
				"type": "bytes32"
			},
			{
				"name": "otherDetails",
				"type": "bytes32"
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
				"name": "_firNo",
				"type": "uint256"
			},
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getFirDetail",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);

var Coursetro = CoursetroContract.at('0x0a0eba72860e8e73b0cb2210ea7923eb6690185b');

console.log(Coursetro);

function submit(){
  firno = document.getElementById("firNUm").value;
  date = document.getElementById("firDate").value;
  occDate = document.getElementById("occDate").value;
  occTime =  document.getElementById("occTime").value;
  compName =  document.getElementById("compName").value;
  compAddress = document.getElementById("compAddress").value;
  compContact = document.getElementById("compContact").value;
  accusedName = document.getElementById("accName").value;
  accusedAddress = document.getElementById("accAddress").value;
  incidentDetails = document.getElementById("incidentDetails").value;
  otherDetails = document.getElementById("otherDetails").value;
  Coursetro.addFIR( 1,date,occDate,occTime,compName,compAddress,compContact,accusedName,accusedAddress,incidentDetails,otherDetails,{ from: web3.eth.accounts[0],gas: 3000000});
}
/*
Coursetro.getFirDetail(2,2,function(error, result){
            if(!error)
                {
										console.log(web3.toUtf8(result[0]));
                }
            else
                console.error(error);
        });
*/
