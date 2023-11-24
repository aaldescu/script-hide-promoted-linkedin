# script-hide-promoted-linkedin
Tampermonkey script to hide "promoted"  jobs when browsing Linkedin Jobs

## PROBLEM

Linkedin Job Search is flooded with Promoted jobs. These jobs appear in search result and many times are not relevant to the search terms.

## SOLUTION

A Tampermonkey script that runs every 2s and changes the opacity of the job cards where the footer text equals "promoted".

![Opacity 0.2 for "Promoted"](/assets/03_Example_of_Linkedin_job.jpg)


## INSTALATION
1. Install in your Chrome browser the plugin [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).

2. Pin the plugin to make it visibile in the address bar.

3. Then "Create a new Script" and copy paste the content of the file script.js
![Create new script](/assets/01_create_new_script.jpg)

4. Add the content of the script.js or import it into Tampermonkey
![Copy Paste](/assets/02_paste_script_content.jpg)

5. The script will run only on pages under /jobs link: https://www.linkedin.com/jobs/*
![Results](/assets/03_Example_of_Linkedin_job.jpg)


## ALTERNATIVE
Chrome extensions that are already tested and popular 

[Hide n' Seek: Hide Promoted Jobs & Companies](https://chromewebstore.google.com/detail/hide-n-seek-hide-promoted/agghbaheofcoecndkbflbnggdjcmiaml)

[Hide Promoted Jobs](https://chromewebstore.google.com/detail/hide-promoted-jobs/bmilkimafelnhekidknkamkhkbeciijg)
