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


//calculate total weight loss from the first training to the last training
export function calculateWeightLoss(selectedTrainings) {
    const firstTraining = selectedTrainings[0];
    const lastTraining = selectedTrainings[selectedTrainings.length - 1];
    if (firstTraining == null || lastTraining == null) {
        return 0;
    }
    if ( lastTraining.weight - firstTraining.weight > 0)
    {
        return ` You gained ${lastTraining.weight - firstTraining.weight} kg from the first training to the last training.`
    }
    return  ` Well done! You lost ${firstTraining.weight - lastTraining.weight} kg from the first training to the last training.`
 
 
}
  

  //---------------------------------------------------------------------------------


//Calaculate for each program the weight loss
export function calculateWeightLossPerProgram(selectedTrainings) {
    const weightLossPerProgram = {};
    for (let i = 0; i < selectedTrainings.length - 1; i++) {
        const currentTraining = selectedTrainings[i];
        const nextTraining = selectedTrainings[i + 1];
        const weightLoss = nextTraining.weight - currentTraining.weight;
        if (weightLossPerProgram[currentTraining.name]) {
            weightLossPerProgram[currentTraining.name] += weightLoss;
        } else {
            weightLossPerProgram[currentTraining.name] = weightLoss;
        }
    }
    let Result = "";

    // Create String Result
    //Save Max Weight Loss
    let maxWeightLoss = 0;

    for (const program in weightLossPerProgram) {
        if (weightLossPerProgram[program] > maxWeightLoss) {
            maxWeightLoss = weightLossPerProgram[program];
        }
    
        if (weightLossPerProgram[program] > 0) {
            Result  += `$You gained ${weightLossPerProgram[program]} kg in ${program}.$`;
        } else {
            Result += `You lost ${Math.abs(weightLossPerProgram[program])} kg in ${program}.`;
        }
    }
    Result += `Your biggest weight loss was ${maxWeightLoss} kg in ${calculatePopularName(selectedTrainings.map(training => training.name))}.`;
    return Result;

}







