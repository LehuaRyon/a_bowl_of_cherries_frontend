import React from 'react';

const About = () => {
    return (
        <div id='home'>
        <h1 className="aboutcard">About</h1>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/h9kAd8Mygpw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="myFrame"></iframe> */}
        <div id='aboutgif'><img src='images/about.gif' alt='about gif'/></div>
        <h3>Purpose:</h3>
        <h2 className="aboutcard">
            The purpose of this application is create ease for anyone who is interested in organized planning for his or her travel and leisure.  
            This application is meant to be used as a datebook for anyone who would like to keep track of what events he or she intends on going to in the near future.
            For each month that is selected, the upcoming events are sorted by date (in DD/MM/YYYY form) starting with the first of the month and ending with the last day of the month.
            A user is capable of signing up, logging in, and being auto-logged in.  A user can also create new events for each month, delete events (if a mistake is made), and also search by an events name and/or description.
        </h2>
        <h3>Usage:</h3>
        <h2 className="aboutcard">
            Events added to each month may include and are not limited to: festivals, conferences, ceremonies, weddings, formal parties, concerts, conventions, etc.
            <br></br>
            <br></br>
            Each event has a "Location" field, which is meant to be filled out with the google maps url for the exact site of where the event is going to be hosted. 
            <br></br>
            <br></br>
            Each event also has a "Website" field, which is meant to be filled out with the url of the event's exact website for future reference of extra information.
            <br></br>
            <br></br>
            The "Description" field is meant to be used for a brief overview of the event so when a user stumbles upon it later, the description will jog his or her memory and reasoning as to why the event was added to his or her agenda in the first place.
            <br></br>
            <br></br>
            Lets say that the upcoming event lasts more than one day; in that case, it is suggested to choose the first day the event starts for the "Date" field and make note of the last day the event is being held in the "Description" field.
        </h2>
        <div id='aboutgif'><img src='images/about2.gif' alt='about gif'/></div>
    </div>
    );
};

export default About;