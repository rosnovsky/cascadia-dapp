export const ORDER_MAKER_ADDRESS = '0xF7Fc63DACcC154D39b1F5e37c357838E6dFF6720'

export const ORDER_MAKER_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "ordersById",
    "outputs": [
      {
        "internalType": "string",
        "name": "itemName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "ordersByUser",
    "outputs": [
      {
        "internalType": "string",
        "name": "itemName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_itemName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      }
    ],
    "name": "createOrder",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  }
]
