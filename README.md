# A Bowl Of Cherries
An event planning application built with a Ruby on Rails API backend and a React and Redux frontend.

## Description
This app was built for the [Flatiron School](https://flatironschool.com/) React project and is meant to let a user see all the upcoming events by month, listed by date, to see which events he or she would like to attend in the future.  Any user that signs up, can log in, be automatically logged in, see what events other users have added to any month, add his or her own event, delete his or her own event, and search an event within a month by the event's name and/or description.  A user can add or delete as many events as he or she would like. A user can only delete events created by his or herself, not others. All events are listed by the date in ascending order.   

#### Frontend: HTML, CSS, React, Redux, React Bootstrap
#### Backend: Rails API -> [here](https://github.com/LehuaRyon/a_bowl_of_cherries_backend)

## Local Installation
To install and run the app on your local machine:
1. Fork and click the green Clone or download button above and click the copy to clipboard button (for both a_bowl_of_cherries_frontend & a_bowl_of_cherries_backend)
2. Open your Terminal with two tabs
3. Direct the first tab to a_bowl_of_cherries_backend, run `git clone [paste the link from step 1]`
4. Direct second tab to a_bowl_of_cherries_frontend, run `git clone [paste the link from step 1]`
* In the first tab for a_bowl_of_cherries_backend:
5. Run `bundle install` to install the necessary gems and dependencies
6. Run `rails db:create` to create a database
7. Run `rails db:migrate` to perform the database migrations
8. Run `rails db:seed` to fill the database with month information  
9. Run `rails s` to access and use the Rails API and open the server
* In the second tab to a_bowl_of_cherries_frontend:
10. Run `npm install && start` to have the browser open A Bowl Of Cherries' homepage

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/LehuaRyon/a_bowl_of_cherries_frontend. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/LehuaRyon/a_bowl_of_cherries_frontend/blob/main/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://github.com/LehuaRyon/a_bowl_of_cherries_frontend/blob/main/LICENSE).

## Code of Conduct

Everyone interacting in the Ukulele's project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/LehuaRyon/a_bowl_of_cherries_frontend/blob/main/CODE_OF_CONDUCT.md).



