const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profile = '';

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  profile += `${answer} `;
  
  rl.question('What\'s an activity you like doing? ', (answer1) => {
    profile += `loves listening to ${answer1} `;
    
    rl.question('What do you listen to while doing that? ', (answer2) => {
      profile += `while ${answer2}, `;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer3) => {
        profile += `devouring `;

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer4) => {
          profile += `${answer4} for ${answer3}, `;

          rl.question('Which sport is your absolute favourite? ', (answer5) => {
            profile += `prefers ${answer5} over other sport, `;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer6) => {
              profile += `and is amazing at ${answer6}. \n`;
              console.log(profile);
              rl.close();
                     
  
            });
  
  
          });



        });


      });


    });


  });




});
