# React Challenge

## How to deploy

-   Run `npm install` | `yarn install` to install all dependencies.
-   Run `npm start` | `yarn run` to run the app locally.
-   You can find the project running on `localhost:3000`.

## How to use the calendar

Looking to the navbar, in the left side you'll see 4 elements:

1. A "Home" icon, that will redirect to the "/" route on click.
2. The current month and year (it starts with the actual current month and year, and updates when moving to other months).
3. There are 2 icons that will lead you to the previous and next month relative to the one that is shown on the screen.
4. A "plus" icon that will open the create/edit events form.

To create an event you can click on the "plus" icon, and complete the form by selectiong a date and time, as well as filling the city and/or description fields (both are optional actually).

In the case that one day has more than one event, you'll be able to scroll down in order to see all the events assigned to that day.

To edit an event, you can click on the day that the event is going to happen, and this will open a dialog listing all of the events for that day. If you click on the "pencil" icon, you'll be redirected to the create/edit event form in order to update it. You can just close the form in order to cancel the edit.

To delete an event, it's the same process.

Regarding the weather forecast api call, I didn't have much time left to include it, but I did make the useApi hook mainly to demonstrate how I usually integrate with APIs.

## Folder structure

Usually what I try to do to keep all the components organized is to create a folder with the name of the component, for example "CalendarComponent".

This folder should include everything that is related to the component. From unit tests (named as "ComponentName.test.jsx") to styles with css modules, and custom hooks that aren't being used outside of the component.
