import { Alert } from "react-bootstrap";

export function calculateAverage(weights) {
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
    }
    return sum / weights.length;
}

export function calculateMax(weights) {
    let max = weights[0];
    for (let i = 1; i < weights.length; i++) {
        if (weights[i] > max) {
            max = weights[i];
        }
    }
    if (max != null)
        return max.toFixed(2);
}
// export function maxWeight = calculateMax(weights);

export function calculateMin(weights) {
    let min = weights[0];
    for (let i = 1; i < weights.length; i++) {
        if (weights[i] < min) {
            min = weights[i];
        }
    }
    return min;
}
// export function minWeight = calculateMin(weights);

export function calculateVariance(weights) {
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
    }
    const average = sum / weights.length;
    let variance = 0;
    for (let i = 0; i < weights.length; i++) {
        variance += Math.pow(weights[i] - average, 2);
    }
    return (variance / weights.length).toFixed(2);;
}
// export function varianceWeight = calculateVariance(weights);

export function calculateStandardDeviation(weights) {
    return (Math.sqrt(calculateVariance(weights)).toFixed(2));
}
// export function standardDeviationWeight = calculateStandardDeviation(weights);

export function calculateMedian(weights) {
    const sortedWeights = weights.sort();
    const middle = Math.floor(sortedWeights.length / 2);
    if (sortedWeights.length % 2 === 0) {
        return (sortedWeights[middle] + sortedWeights[middle - 1]) / 2;
    }
    return sortedWeights[middle];
}
// export function medianWeight = calculateMedian(weights);

export function calculatePopularName(trainingNames) {
    const nameCount = {};
    for (let i = 0; i < trainingNames.length; i++) {
        if (nameCount[trainingNames[i]]) {
            nameCount[trainingNames[i]]++;
        } else {
            nameCount[trainingNames[i]] = 1;
        }
    }
    let maxCount = 0;
    let maxName = "";
    for (const name in nameCount) {
        if (nameCount[name] > maxCount) {
            maxCount = nameCount[name];
            maxName = name;
        }
    }
    return maxName;
}

export function currentTrainingName(trainingNames) {
    return trainingNames[trainingNames.length - 1];
}

// export function calculateWeightLoss = calculateWeightLoss(dates, weights, trainingNames)
// calc the weight loss per program and return the max weight loss program;

export function calculateWeightLoss(selectedTrainings) {
 
    
    let optimalProgram = null;
    let maxWeightLoss = 0;
    let weightForPercentage = 0;
  
    for (let i = 0; i < selectedTrainings.length - 1; i++) {
      const currentTraining = selectedTrainings[i];
      const nextTraining = selectedTrainings[i + 1];
  
      const weightLoss = nextTraining.weight - currentTraining.weight;
      const weightLossPercentage = (weightLoss / nextTraining.weight) * 100;
  
      if (weightLoss > maxWeightLoss) {
        optimalProgram = currentTraining.name;
        maxWeightLoss = weightLoss;
        weightForPercentage = nextTraining.weight;
      }
    }
  
    const WeightLossPercentage = (maxWeightLoss / weightForPercentage) * 100;
  
    console.log(maxWeightLoss);
    console.log(optimalProgram);
    console.log(WeightLossPercentage);
  
    return {
      optimalProgram,
      maxWeightLoss,
      WeightLossPercentage: WeightLossPercentage.toFixed(2) ,
    };
  }
  



