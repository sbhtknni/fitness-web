
export function calculateAverage  (weights)   { 
    let sum = 0;
    for(let i = 0; i < weights.length; i++){
        sum += weights[i];
    }
    return sum / weights.length;
}

export function calculateMax  (weights)   {
    let max = weights[0];
    for(let i = 1; i < weights.length; i++){
        if(weights[i] > max){
            max = weights[i];
        }
    }
    return max;
}
// export function maxWeight = calculateMax(weights);

export function calculateMin  (weights)   {
    let min = weights[0];
    for(let i = 1; i < weights.length; i++){
        if(weights[i] < min){
            min = weights[i];
        }
    }
    return min;
}
// export function minWeight = calculateMin(weights);

export function calculateVariance (weights)   {
    let sum = 0;
    for(let i = 0; i < weights.length; i++){
        sum += weights[i];
    }
    const average = sum / weights.length;
    let variance = 0;
    for(let i = 0; i < weights.length; i++){
        variance += Math.pow(weights[i] - average, 2);
    }   
    return variance / weights.length;
}
// export function varianceWeight = calculateVariance(weights);

export function calculateStandardDeviation  (weights)   {
    return Math.sqrt(calculateVariance(weights));
}
// export function standardDeviationWeight = calculateStandardDeviation(weights);

export function calculateMedian  (weights)   {
    const sortedWeights = weights.sort();
    const middle = Math.floor(sortedWeights.length / 2);
    if(sortedWeights.length % 2 === 0){
        return (sortedWeights[middle] + sortedWeights[middle - 1]) / 2;
    }
    return sortedWeights[middle];
}
// export function medianWeight = calculateMedian(weights);

export function calculatePopularName (trainingNames)   {
    const nameCount = {};
    for(let i = 0; i < trainingNames.length; i++){
        if(nameCount[trainingNames[i]]){
            nameCount[trainingNames[i]]++;
        }else{
            nameCount[trainingNames[i]] = 1;
        }
    }
    let maxCount = 0;
    let maxName = "";
    for(const name in nameCount){
        if(nameCount[name] > maxCount){
            maxCount = nameCount[name];
            maxName = name;
        }
    }
    return maxName;
}

export function currentTrainingName (trainingNames) {
    return trainingNames[trainingNames.length - 1];
}

// export function popularTrainingName = pupolarName(trainingNames);
