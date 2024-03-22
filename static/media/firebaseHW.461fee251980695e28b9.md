# Personal Diary

## Background: Ddoski's Secrets
Ddoski has hired you to create a Personal Diary application for him, for **1 MILLION DOLLARS**. He wants to be able to log in with his Google account and for no one to be able to see what he wrote as entries.

## Part 1: Set up your local project

_[Download the skeleton here.](assets/lab8/lab8-starter.zip)_

Extract the skeleton .zip. Go to your terminal and run the command:
```bash
npm install -g firebase-tools
```

## Part 2: Set up your Firebase project

1. Sign up for an account for Firebase [here](https://firebase.google.com/).
2. Click "Create a Project" in the [console](https://console.firebase.google.com/).

<img src="/assets/hw9/create-a-project.PNG" style="width:70%; margin-top:15px; margin-bottom:5px;" />

3. Name your project! This can be anything you want.

4. Do not enable Google Analytics.

<img src="/assets/hw9/analytics.PNG" style="width:70%; margin-top:15px; margin-bottom:5px;" />

5. Click "Create Project" and it'll take a short while to set up!

6. Click on this icon here to connect Firebase to your app.

<img src="/assets/hw9/create-an-app.png" style="width:70%; margin-top:15px; margin-bottom:5px;" />

7. Name your app (this can be the same name as your project). Click "Next".

8. **Copy and paste this block of code here to somewhere.** We will need it to connect our local project to Firebase.

<img src="/assets/hw9/firebase-config.png" style="width:70%; margin-top:15px; margin-bottom:5px;" />

9. Click "Next" for the rest. We already installed firebase-tools globally!

10. Go back to your "Project Overview" console. Click "Authentication", then click "Get started".

<img src="/assets/hw9/auth.png" style="width:70%; margin-top:15px; margin-bottom:5px;" />

11. Click "Google" as a provider.

<img src="/assets/hw9/google-provider.png" style="width:70%; margin-top:15px; margin-bottom:5px;" />

12. Click "Enable". Fill in a project public-facing name and set your email as the support email.

<img src="/assets/hw9/google-provider-settings.png" style="width:70%; margin-top:15px; margin-bottom:5px;" />

13. Go back to your "Project Overview" console. Click "Cloud Firestore", then click "Create database".

<img src="/assets/hw9/firestore.png" style="width:70%; margin-top:15px; margin-bottom:5px;" />

14. Select "Test mode", and select the recommended "nam5" (North America) region. Create your database!

<img src="/assets/hw9/test-mode.PNG" style="width:70%; margin-top:15px; margin-bottom:5px;" />

15. Click "Start Collection".

<img src="/assets/hw9/start-collection.png" style="width:70%; margin-top:15px; margin-bottom:5px;" />

16. Set its "Collection ID" to "entries".

<img src="/assets/hw9/collection-name.PNG" style="width:70%; margin-top:15px; margin-bottom:5px;" />

15. Click "Auto-ID", then hit "Save".

<img src="/assets/hw9/autoid.png" style="width:70%; margin-top:15px; margin-bottom:5px;" />

16. Go to the Gear icon next to "Project Overview" and hit "Project Settings". Make sure the Default GCP resource Location is set, otherwise, just set it to the "nam5" region we set it to before.

<img src="/assets/hw9/project-settings.png" style="width:70%; margin-top:15px; margin-bottom:5px;" />

<img src="/assets/hw9/firebase-location.png" style="width:70%; margin-top:15px; margin-bottom:5px;" />

**You're done with the console for now!**

## Part 3: Connecting your local project to your Firebase Project
1. Open your terminal in the skeleton code folder.

2. Execute these commands:
```bash
# If these commands aren't working, try doing "npm install -g firebase-tools".
firebase login # This will bring up a login window in your browser.
# Click "Allow" and log in with the same account you used for Firebase.
```
```bash
firebase init
```

3. Follow the prompts that come up.

4. Make sure to select by using your Up and Down arrow keys, space to select, and enter to confirm all choices. Select "Firestore: Configure security rules and indexes files for Firestore" and "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys".

<img src="/assets/hw9/firebase-init.PNG" style="width:70%; margin-top:15px; margin-bottom:5px;" />

5. Select "Use an existing project", and then select the project that you created.

<img src="/assets/hw9/use-existing.PNG" style="width:70%; margin-top:15px; margin-bottom:5px;" />

6. Just hit enter for everything else to use the defaults, **EXCEPT when they prompt you to overwrite the index.html or firestore.rules**. **Do not overwrite them.** Also, make sure to decline when they prompt: “Set up automatic builds and deploys with GitHub?".

This is how your terminal should look like:
<img src="/assets/hw9/terminal-1.PNG" style="width:70%; margin-top:15px; margin-bottom:5px;" />
<img src="/assets/hw9/terminal-2.PNG" style="width:70%; margin-top:15px; margin-bottom:5px;" />

7. Lastly, paste in the code you saved for the Firebase configuration in **app.js**, Question 1.

## Part 4: Making your App

Now you can proceed on to Question 2, 3, and 4. Test if your app works by doing
```bash
firebase serve
```
Go to http://localhost:5000/ (or whatever firebase prints) on your browser to see! The console in Browser Developer Tools will be useful for some of the questions.

# Hint for Questions 3:
Check [this page](https://firebase.google.com/docs/firestore/query-data/queries) out! Look under the heading "Execute a Query", near the bottom of the page.

# Hint for Questions 4:
Check [this page](https://firebase.google.com/docs/firestore/manage-data/add-data) out! Look under "Add a document", specifically:

<img src="/assets/hw9/add-doc.PNG" style="width:70%; margin-top:15px; margin-bottom:5px;" />

We need to set **uid** to **user.uid**, **entry** to **newEntryInput.value**, and **timestamp** to **timestamp** (we created a timestamp variable for you).

## HOOOORAY
You're done! If you want, you could do
```bash
firebase deploy
```
in your terminal in the code folder to see your website live!

# Submission (Not for Lab!)
To submit the homework folder, you have to zip it first. Make sure **not to include the "node_modules" folder**. You can do this by moving all your other files for submission into a separate folder and then zipping that folder.

**To zip a folder:**
_**Windows:** Right-click the folder, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder  or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com/courses/437611) :)
