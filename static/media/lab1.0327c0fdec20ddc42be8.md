# Playing with Git

# Part 1: Installing Xcode

1. Make sure you have a macOS device
2. Navigate to your App Store
3. Search up Xcode
4. Install! (Make sure you have enough storage Xcode can sometimes take up to 10 GB)

# Part 2: Git Tutorial 🐙

Git and GitHub are hugely important parts of working on collaborative programming projects. They are routinely used throughout industry, academia, and beyond! In your own project, you'll be creating a shared GitHub repository with your teammates, and you'll use that throughout the semester to version your project files. But first, you'll need to learn how to use git and GitHub as well as how to deal with a common issue you might encounter. 

## Review

Words in `<>` you should fill in with your own information. 

[General Terminal Commands](https://www.notion.so/Terminal-Git-Commands-17a39b971f53410a95a67c994639d085?pvs=4)

[Git Commands](https://www.notion.so/Git-Commands-78a934d1bfa64e43bddeb04872725445?pvs=4)

## Set up Git

### Mac Users

If you're using a Mac computer, verify that you have Git installed. You can also run these commands on Windows after you've installed Git Bash to double-check that Git is installed.

1. Open up Terminal.
    
2. Type in this command 
    
    ```bash
    $ git --version
    ```
    
3. If your response looks like this (it's fine if you have a different version number), you have Git installed 
    
    ```bash
    $ git --version
    git version 2.20.1
    ```
    
_💡 Lines that start with a $ are commands that we type in. Lines that don't start with $ are responses we get from Terminal_
    
4. If your response does not look like this^, install Git from here: [https://git-scm.com/downloads](https://git-scm.com/downloads).

## Exercise 2A: Initialize a Local Git Repository

### Initialize an empty git repo

1. Create a new local directory (a folder on your computer)
2. Open up Terminal, and change your working directory to the directory you just created. 
    - Hint
        
        Use `cd <path>` 
        
    
    _💡 On Macs, you can get the path of a directory by dragging the folder icon from the Finder window into the Terminal Window._
    

3. Initialize an empty Git repository within this directory.

### Add & Commit

1. Open up your favorite text editor, create a blank file, and save it in your directory. 
    
    My personal favorite is [Visual Studio Code](https://code.visualstudio.com/). Alternatives include [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), etc.
    
2. In Terminal, view the changes you made.
    - Hint
        
        ```bash
        $ git status
        On branch master
        
        No commits yet
        
        Untracked files:
          (use "git add <file>..." to include in what will be committed)
        
        	demo.md
        
        nothing added to commit but untracked files present (use "git add" to track)
        ```
        
        This shows that I created a `demo.md` file, and Git is not yet tracking it.
        
3. Stage the file.
4. Commit the file.
5. View a list of commits.

## Exercise 2B: Push to GitHub

1. Create a [GitHub](https://github.com/) Account if you don't already have one. Use your Berkeley email to sign up
2. Click the `+` in the upper-right corner, and select `New repository`
3. Give your repo a name, and leave it public. You can leave other fields set to their default values. Click `Create repository`
4. Copy the link from the `Quick setup` section
5. Use the link you copied to connect yo ur local git repository to the one you just made on GitHub 
    - Hint
        
        Use `git remote add <name> <url>`
        
6. Push your local commit to the GitHub repo
7. Go to the GitHub repo and verify that the file you pushed is there 

> Remember the mantra: **Add. Commit. Push.**
> 

## Exercise 2C: Pulling Remote GitHub Repo into Local Repo

If multiple people are collaborating on the same GitHub repo, then your local repository might become outdated. In this case, you should pull the remote changes into your local repo

```bash
$ git pull origin master
From https://github.com/tonyhong/test
 * branch            master     -> FETCH_HEAD
Updating ce84a7f..7d35086
Fast-forward
 README.md | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
```

This pulls the master branch of your remote `origin` (GitHub) repo into the master branch of your local repo. In this case, the only change was adding a `README.md` file.

_💡 **ALWAYS** use `git pull <source> <destination>` before you start working on a new feature or before you push, so that you can prevent conflicts. Also, **COMMUNICATE** with your teammates to make sure you're not editing the same files at the same time._

## Exercise 2D: Resolving Merge Conflicts

Remember that merge conflicts happen when there are multiple conflicting versions of the same file, and git doesn't know which one to use. In this case, you have to manually resolve the merge conflict by picking which version of each change you want to keep. 

Read more about resolving merge conflicts here: [https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)