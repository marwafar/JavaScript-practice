const getSleepHours = day => {
  switch (day){
    case 'Monday':
      return 8 ;
      break;
    case 'Tuesday':
      return 6 ;
      break;
    case 'Wednesday':
      return 7 ;
      break;
    case 'Thursday':
      return 5 ;
      break;
    case 'Friday':
      return 8 ;
      break;
    case 'Saturday':
      return 5 ;
      break;
    case 'Sunday':
      return 8 ;
      break;
  }
};

//console.log(getSleepHours('Friday'));
const getActualSleepHours = () => {
  const sum = getSleepHours('Monday')+ getSleepHours('Tuesday')+ getSleepHours('Wednesday')+ getSleepHours('Thursday')+ getSleepHours('Friday')+ getSleepHours('Saturday')+ getSleepHours('Sunday')
  return sum;
};

//console.log(getActualSleepHours())

function getIdealSleepHours(){
  idealHours=8;
  return idealHours*7;
};

//console.log(getIdealSleepHours());

function calculateSleepDebt(){
  const actualSleepHours = getActualSleepHours();  
  const idealSleepHours = getIdealSleepHours();
  const difference = actualSleepHours -idealSleepHours
  if (actualSleepHours === idealSleepHours){
      return 'You got the perfect amount of sleep.';
      } else if(actualSleepHours> idealSleepHours){
              
              return 'You got more sleep than needed. '+ difference+ 'hours more.';
                } else if(actualSleepHours< idealSleepHours){
                  return 'You should get some rest. '+ difference+ ' hours less.';                          
                          }
};

console.log(calculateSleepDebt());



