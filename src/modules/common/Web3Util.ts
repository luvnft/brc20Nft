import Web3 from 'web3';
import BigNumber from 'bignumber.js';
class Web3Util {
  string2bytes32(val: any) {
    let res = Web3.utils.stringToHex(val);
    res = res + Array(67 - res.length).join('0');
    return res;
  }

  toHex(val: any) {
    return Web3.utils.toHex(val);
  }

  toWei(val: any) {
    const target =new BigNumber(val);
    if (target.isNaN()){
      return val
    }
    return Web3.utils.toWei(val);
  }
  fromWei(val: any) {
    const target =new BigNumber(val);
    if (target.isNaN()){
      return val
    }
    return Web3.utils.fromWei(val);
  }

  hexToNumber(val: any) {
    return Web3.utils.hexToNumber(val);
  }

  utf8ToHex(val: any) {
    return Web3.utils.utf8ToHex(val);
  }
  hexToUtf8(val: any) {
    return Web3.utils.hexToUtf8(val);
  }


  keccak256(val: any) {
    return Web3.utils.keccak256(val);
  }

  hexToBytes(val: any) {
    return Web3.utils.hexToBytes(val);
  }

  hexToAscii(val: any) {
    return Web3.utils.hexToAscii(val);
  }

  numberToHex(val: any) {
    return Web3.utils.numberToHex(val);
  }

  getAbiEventInputs(abi: any, name: any) {
    for (let item of abi) {
      if (item.type === 'event' && item.name === name) {
        return item.inputs;
      }
    }
    return null;
  }

  encodeEventName(inputs: any, name: any) {
    if (inputs === null) {
      return null;
    }
    // console.log('inputs:', inputs)
    let params: any = [];
    // eslint-disable-next-line array-callback-return
    inputs.map((o: any) => {
      params.push(o.type);
    });
    // console.log('params:', params)
    let funcName = name + '(' + params.join(',') + ')';
    // console.log('funcName:', funcName)
    // console.log('enFuncName:', enFuncName)
    return Web3.utils.sha3(funcName);
  }

  decodeEventLog(web3: any, inputs: any, data: any, topics: any) {
    data = data.substr(2);

    let topic = topics.slice();
    topic.splice(0, 1);
    let inputData = inputs.slice();
    // console.log('parseEventLog params:', inputs, data, topic)
    // console.log('parseEventLog logs:', result)
    return web3.eth.abi.decodeLog(inputData, data, topic);
  }

  parseEventLog(web3: any, abi: any, receipt: any, name: any) {
    // console.log('web3 parseEventLog:', receipt)
    let result = {
      hash: receipt.transactionHash,
      address: '',
      data: {},
    };
    for (let log of receipt.logs) {
      let inputs = this.getAbiEventInputs(abi, name);
      let topic = this.encodeEventName(inputs, name);
      if (topic === log.topics[0]) {
        result.data = this.decodeEventLog(web3, inputs, log.data, log.topics);
        result.address = log.address;
        break;
      }
    }
    return result;
  }

}

export default Web3Util;
export const web3Util=new Web3Util();
