const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

const getWorthyWorkers = workersArr => {
    let chosenWorkers = [];

    for (let i=0; i<workersArr.length; i++) {
        const curWorker = workersArr[i];
        
        if (curWorker.salary > 1000) {
            chosenWorkers.push(curWorker.name);
        }
    }
    return chosenWorkers
}


  console.log(getWorthyWorkers(workers))