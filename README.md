### Netflix-Duplicate

Feature Description: Billboard Component
The Billboard Component is a new feature implemented in the existing application that enhances the user experience by allowing them to view multiple titles and add/remove them from their list. The feature replaces the static billboard for a single title with a dynamic and interactive billboard component.
To start:
CD into the takehome.project.

- `npm install`
- `npm build`
- `npm start`


Key Features
Multiple Title Display: The Billboard Component displays multiple Title, allowing users to browse through a variety of options.
Boxart Image Details: Users can click on the boxart images within the billboard component to see more details about each title.
Add to My List: By clicking on the "Add" button in the billboard component, users can save a title to their personal list.
Remove from My List: The billboard component also provides a "Remove" button, allowing users to remove a title from their personal list.
Persistent Selections: Users can refresh the browser and still see their list selections persisted. For example, if a user adds "Stranger Things" to their list, they will see the checkmark icon on the button even after refreshing the browser.
API Error Communication: Banners are displayed to communicate any API errors that may occur during the interaction with the billboard component.
Conditional Display: If there is no billboard data available, the billboard component will not be shown to the user.
Smooth Transitions: The billboard slides smoothly fade in and out when transitioning between titles, providing a visually pleasing experience.


Steps taken
I have completed the following steps to implement the Billboard Component feature:
I retrieved the necessary data for the billboard component by using the /api/billboard API endpoint. This data includes titles, boxart images, and other relevant details.
Created a dynamic billboard component that can render and display multiple titles to the user. The component is conditionally displayed based on the availability of billboard data.
I added functionality to the billboard component that allows users to view more details about a title when they click on its boxart image. I achieved this by using modals or expanding panels to show additional information.
I integrated the "Add" and "Remove" buttons into the billboard component. I implemented the logic to save and remove titles from the user's personal list using the /api/mylist API endpoint.
I implemented the necessary state management to ensure that the user's list selections are persisted even after a browser refresh. This involved storing the selections in local storage or utilizing cookies.
I designed and displayed banners to communicate any API errors that occur during the interaction with the billboard component. I provided clear error messages and instructions to the user.
I enhanced the user experience by implementing smooth fade-in and fade-out transitions when transitioning between billboard slides. I utilized CSS animations or JavaScript libraries to achieve these effects.
I thoroughly tested the feature implementation to ensure all functionalities are working as expected. I debugged any issues that arose during the testing phase.
I have prioritized functionality over styling and followed the provided submission guidelines. 

Thank you for reviewing my work on the Billboard Component feature!
Here are my responses to the questions based on the details I provided:
How far did I get in the submission?
I have finished the project
What was challenging about the project?
I found reusability and simplicity to be challenging. These aspects often require more time and effort compared to just writing code. Additionally, testing was not implemented, which is crucial for a scalable product.
What would I do with more time?
If I had more time, I would restructure and create modularized and reusable code. I would also focus on implementing thorough unit testing. Additionally, I would follow best practices in terms of coding and style, and find ways to reduce load and remove unnecessary code. I would React, Next.js, or Vue.js instead of plain JavaScript to leverage their patterns and mainstream adoption.
What were some trade-offs I encountered?
One trade-off that was considered was the  simplicity. While simplicity is desirable, achieving it often requires good architecture and system design, which takes more time. Additionally, it is crucial to plan for testing. I focused more on functionality than design and style.
Thank you for giving me the opportunity to work on this project. I thoroughly enjoyed the format and the fun it brought. I greatly enjoyed our conversation with Jeff. I have enthusiastically expressed my love for this project multiple times out loud while working on it, confusing people around me. Thanks for the interview
