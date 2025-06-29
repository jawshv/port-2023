
### my diary

[my diary](https://diary.joshvredevoogd.com/) was an experiment in a gentle feed

for me (and i think like most people) traversing social media is a constant exercise in attention and turbulence and validation and crisis. And for whatever emotional upkeep it takes to garden it, i don't think it's dramatic to say stepping away from it is like uprooting a billboard broadcasting 'hey i exist'

as i've been reevaluating my relationship with some websites i still wanted the a way to export fleeting thoughts, i wanted to be able to do it from anywhere, without the attention cost of a feed or validation, and no app required

so i built a little diary

its a small web app that lets me display all messages me and pals text to a phone number, it works with any phone that can send an SMS (dumb phones!) and contextualizes the sending number into different profiles. 

(Profiles are just phone numbers converted a hex color value - this both visually signals different users and is used for unique user URLs, for example mine is: [#b4e080](https://diary.joshvredevoogd.com/u/b4e080). It is a nice why to have "different accounts" without needing any authentication or exposing phone numbers publicly)

for those that care about architecture, the diary is a [flask app](https://flask.palletsprojects.com) that retrieves, stores, and displays messages pulled from a phone number i set up with twillio's api