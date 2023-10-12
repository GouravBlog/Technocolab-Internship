let registered = true;

let runnerAge = 24;

let raceNumber = Math.floor(Math.random() * 1000);

if(runnerAge>18 && registered){
    raceNumber = 1000;
}

if(runnerAge>18 && registered){
    console.log(`Your Race Time Is 9:30am And Your Race Number Is ${raceNumber}`)
}else if(runnerAge>18 && registered){
    console.log(`Your Race Time Is 11:00am And Your Race Number Is ${raceNumber}`)
}else if(runnerAge<18 ){
    console.log(`Your Race Time Is 12:30pm And Your Race Number Is ${raceNumber}`)
}else{
    console.log("runner to see the registration desk.")
}