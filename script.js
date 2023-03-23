function updateResult(val) {
    document.getElementById("result").value += val;
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function getResult() {
    let result = document.getElementById("result").value;
    let finalResult = eval(result);
    document.getElementById("result").value = finalResult;
  }
  