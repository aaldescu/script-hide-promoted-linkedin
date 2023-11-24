# script-hide-promoted-linkedin
Tampermonkey script to hide "promoted"  jobs when browsing Linkedin Jobs

## PROBLEM

Linkedin Job Search is flooded with Promoted jobs. These jobs appear in search result and many times are not relevant to the search terms.

## SOLUTION

My solution Tampermonkey script that runs every 2s and changes the opacity of the job card if the footer text equals "promoted".

![Opacity 0.2 for "Promoted"](/assests/03 Example of Linkedin job.jpg)


## INSTALATION
- Install in your Chrome browser the plugin [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
- Pin the plugin to make it visibile in the address bar.
- Then "Create a new Script" and copy paste the content of the file script.js
![Create new script](/assests/01_create_new_script.jpg)
- Add the content of the script.js or import it into Tampermonkey
![Copy Paste](/assests/02_paste_script_content.jpg)
- The script will run only on pages under /jobs link: https://www.linkedin.com/jobs/*
![Results](/assests/03_Example_of_Linkedin_job.jpg)

