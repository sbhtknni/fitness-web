/**
 * util_home_page.js
 * this file contains all the functions that are used in the user home page
 */
// Calculate the average weight in the training
export function calculateAverage(weights) {
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
  }
  return (sum / weights.length).toFixed(2);
}

// Calculate the max weight in the training
export function calculateMax(weights) {

  let max = weights[0];
  for (let i = 1; i < weights.length; i++) {
    if (weights[i] > max) {
      max = weights[i];
    }
  }
  if (max != null) {
    return max;
  }
}

// calculate how much wehigt you need to loss to be in normal bmi (18.5-24.9)
export function calculateNormalWeight(height, weight) {
    height = height / 100;
    var bmi = weight / (height * height);
    var normalRangeMin = 18.5 * height * height;
    var normalRangeMax = 22.9 * height * height;
    
    if (bmi < 18.5) {
      var weightToGain = (normalRangeMin - weight).toFixed(2);
        return {
            message: "Your BMI is " + bmi.toFixed(2) + "#You need to Gain weight$Normal weight range: " + normalRangeMin.toFixed(2) + " kg - " + normalRangeMax.toFixed(2) + " kg#Gain at least " + weightToGain + " kg  to be within the normal range.",
            color: "#2370eb"
        }
        
    } else if (bmi > 22.9) {
        var weightToLose = (weight - normalRangeMax).toFixed(2);
        return {
            message: "Your BMI is " + bmi.toFixed(2) + "#You need to lose weight$Normal weight range: " + normalRangeMin.toFixed(2) + " kg - " + normalRangeMax.toFixed(2) + "kg #Lose at least "  + weightToLose + " kg  to be within the normal range.",
            color: "red"
        }
    } else {
        return {
            message: "Your BMI is " + bmi.toFixed(2) + ". #You should maintain this weight as it . $Normal weight range: " + normalRangeMin.toFixed(2) + " kg - " + normalRangeMax.toFixed(2) + " kg.",
            color: "#1ff03f"        }
    }
  }

// Calculate the min weight in the training
export function calculateMin(weights) {
  let min = weights[0];
  for (let i = 1; i < weights.length; i++) {
    if (weights[i] < min) {
      min = weights[i];
    }
  }
  return min;
}

//Calculate the most popular name in the training
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

//Current training name
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
  if (lastTraining.weight - firstTraining.weight > 0) {
    return ` You gained ${lastTraining.weight -
      firstTraining.weight.toFixed(2)} kg from the first training to the last training.`;
  }
  return ` Well done! You lost ${firstTraining.weight.toFixed(2) -
    lastTraining.weight.toFixed(2)} kg from the first training to the last training.`;
}

//---------------------------------------------------------------------------------

//Calaculate for each program the weight loss
export function calculateWeightLossPerProgram(selectedTrainings, sentance) {
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
  if (!sentance) {
    return weightLossPerProgram;
  }
  //Sort the programs by the weight loss

  let Result = "";

  // Create String Result
  for (const program in weightLossPerProgram) {
    if (weightLossPerProgram[program] < 0) {
      Result += `$You  lost ${-1 *
        weightLossPerProgram[program].toFixed(2)} kg in ${program}.$`;
    } else {
      Result += `$You gained ${Math.abs(
        weightLossPerProgram[program]
      ).toFixed(2)} kg in ${program}.$`;
    }
  }
  let Best = findMaxWeightLoss(weightLossPerProgram);
  Result += `#The program with the most weight loss is ${Best}.`;
  return Result;
}

// Find the program with the most weight loss
function findMaxWeightLoss(weightLossPerProgram) {
  let maxWeightLoss = 0;
  let maxProgram = "";
  for (const program in weightLossPerProgram) {
    if (weightLossPerProgram[program] < maxWeightLoss) {
      maxWeightLoss = weightLossPerProgram[program];
      maxProgram = program;
    }
  }
  return maxProgram;
}
// Calculate the days In Each Program
export function calculateDaysInEachProgram(dates, selectedTrainings) {
  //modify the data format to be like this yyyy-mm-dd
  const modifiedData = [];
  for (let i = 0; i < dates.length; i++) {
    const training = dates[i].split(","); // Split by comma
    const date = training[0] ? training[0].slice(0, 10) : ""; // Check if date exists
    const name = training[1] || ""; // Check if name exists
    const modifiedTraining = `${date},${name}`;
    modifiedData.push(modifiedTraining);
  }
  // Calculate total days in each program 
  const daysInEachProgram = {};
  for (let i = 0; i < modifiedData.length - 1; i++) {
    const currentTraining = modifiedData[i];
    const nextTraining = modifiedData[i + 1];
    const days = calculateDaysBetweenDates(
      currentTraining.split(",")[0],
      nextTraining.split(",")[0]
    );
    if (daysInEachProgram[currentTraining.split(",")[1]]) {
      daysInEachProgram[currentTraining.split(",")[1]] += days;
    } else {
      daysInEachProgram[currentTraining.split(",")[1]] = days;
    }
  }
  //For each program, calculate the average weight loss per day using the function calculateWeightLossPerProgram
  const weightLossPerProgram = calculateWeightLossPerProgram(selectedTrainings);
  // Step 4: Calculate the average weight loss per day
  const averageWeightLossPerDay = {};
  for (const program in daysInEachProgram) {
    averageWeightLossPerDay[program] =
      weightLossPerProgram[program] / daysInEachProgram[program];
  }
  //Sort the averageWeightLossPerDay in descending order
  const sortedAverageWeightLossPerDay = {};
  Object.keys(averageWeightLossPerDay)
    .sort((a, b) => averageWeightLossPerDay[a] - averageWeightLossPerDay[b])
    .forEach((key) => {
      sortedAverageWeightLossPerDay[key] = averageWeightLossPerDay[key];
    });
  //min is the last element key in the sorted array
  const min = Object.keys(sortedAverageWeightLossPerDay)[
    Object.keys(sortedAverageWeightLossPerDay).length - 1
  ];
  
  //max is the first element key in the sorted array
  const max = Object.keys(sortedAverageWeightLossPerDay)[0];
  // return the result 
  return {
    daysInEachProgram: daysInEachProgram,
    weightLossPerProgram: weightLossPerProgram,
    averageWeightLossPerDay: sortedAverageWeightLossPerDay,
    min: min,
    max: max,
  };
}

// Calculate the days between two dates
function calculateDaysBetweenDates(date1, date2) {
  if (date1 === date2) {
    return 1;
  }
  const dateObject1 = new Date(date1);
  const dateObject2 = new Date(date2);
  const timeDifference = dateObject2.getTime() - dateObject1.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);
  return daysDifference;
}
