# JavaScript Phase 1 Project Project 

## Collection of APIs 
- [https://rapidapi.com/](https://rapidapi.com/) 
- [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis) 
- [https://apilist.fun/collection/free-apis](https://apilist.fun/collection/free-apis) 

## Project Requirements
- Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format.

- Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

- Some interactivity is required. This interactivity needs to incorporate at least 3 separate event listeners. This could be as simple as adding a "like" button or adding comments. These interactions do not need to persist after reloading the page.

## Steps 
1. Find an API you want to use
2. Create a project repo on github with a README.md and a MIT license.
3. Follow the steps to clone that repo to your computer. 
4. `cd` into the project directory 
5. Create the index.html file   `touch index.html`
6. Create the css file `touch style.css` 
7. Create the JavaScript file `touch index.js`  OR make a source folder `mkdir src` and create the JavaScript file inside the src file: `touch src/index.js`
8. Link the JS and CSS files to your html file. 
9. Test that it is all connected by adding a `console.log('hello')` to your index.js file and then open the index.html file. You should see the word 'hello' printed to the chrome console. 
10. If it works, take a second to commit your code to github following these steps: 
```bash
  git add .
  git commit -m "initial setup" 
  git push 
``` 
Those git commands should be executed frequently while you are building.  Best practices would be to add and commit every time you complete a new function. Make sure to create a meaningful git commit message. [This resource](https://chris.beams.io/posts/git-commit/) is a good guide on making commit messages. 
11. Next plan out your project. In your index.js file, write comments describing your goals for your project and the order you will want to complete them. Keep in mind the project requirements. Here is an example: 
```JavaScript
  // Let a user input the type of recipe they are looking for
  // Event Listener 1: When the form submits, fetch the recipes they are searching for 
  // display the name of each recipes  (iterate)
  // Event Listener 2: When a user clicks on the recipe name, show all the recipe details
  // When the recipe details are displayed, show a "HIDE" button
  // Event Listener 3:  When a user clicks the "HIDE" button, hide the details of the recipe. 
  // STRETCH GOAL: Let users delete recipes from the screen by adding an "X" next to each recipe name 
``` 
12. Utilizing your JavaScript steps, imagine what you want the page to look like. It is helpful to draw it out on paper. Then think about what you will need on the page when it loads (add those elements to the index.html file).  Additionally, think about what type of "containers" you will need and add those divs to the index.html file. 
13. Now, take one JS comment at a time and try to implement it. Take it one small step at a time and don't be afraid to use breakpoints or console.logs to check your progress and variables. 
14. Once you have all functionality working, look through your code to see if any of your functions feel too long.  A good rule of thumb is to think about how many things a function is doing.  Try to keep each function to 1 task.  Also, if there is anywhere you have written the same code twice, try to refactor it into a function that can be reused.
15. Revise your README.md file to explain what your project does and how to run it. Here are some helpful sites for making a README.md:  
- [How to MAke a README](https://www.makeareadme.com/) 
- [Quality README examples](https://github.com/matiassingers/awesome-readme) 

16. Write a technical blog post about your project. It could be something you learned while working on the project, a tutorial for how to add in feature in your project, or an explanation of a tough concept in this section. Here are some [Blogging Tips & Pointers](https://docs.google.com/document/d/1n7qfOAcxCbSENcdT9FFAR-xhcyf00AOL1l37Iw2PO-s/edit)

17. Create a video walkthrough of your project. This should be a 1-3 minute video showing off your project in the browser. It does NOT need to show your code. You should narrate the walkthrough and verbally explain what's happening as you show it off. One of the easiest ways to create this video is to use zoom and record it.  After recording it, upload it to youtube or google drive and link it to your README.md file. Make sure that the viewing permissions will allow others to see it. Here are example videos that are well done: 
- [Quote Finder](https://www.youtube.com/watch?v=JNC1NWyxrWo)
- [Anime List](https://www.youtube.com/watch?v=PsiGwsgbL-A)
- [Activity Finder](https://www.youtube.com/watch?v=sBLFe16f03M)


18. Finally, practice explaining your code line by line to a friend/classmate/family member. 