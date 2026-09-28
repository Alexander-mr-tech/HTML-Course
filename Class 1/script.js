let count = 1

function handleIncrease() {
  document.getElementById('demo1').textContent = count;
  count++;
  console.log(`Button value is ${count}`);
}

function handledecrease() {
 
  if(count > 1){
    count--;
  }
    document.getElementById('demo1').textContent = count;
     console.log(`Button value is ${count}`);
}

