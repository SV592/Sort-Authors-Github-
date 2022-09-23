# Sort Authors Github

DESCRIPTION
--------------------------------------------------------------------------------------
Returns a text file containing the top commit authors for a repo during a particular period and their individual total commits 


REQUIREMENTS
--------------------------------------------------------------------------------------
This script requires the following to function:

.[NODEJS] V14.15.1 or higher  
.[GIT] V2.29.2 or higher 
.[ShellJS] V0.8.5 or higher



INSTALLATION
-------------------------------------------------------------------------------------
Install NODE globally as normal. Visit
  https://nodejs.org/en/

Install GIT globally as normal. Visit 
  https://git-scm.com/
  
Install Node Modules. Run 
  `npm i` within the sort authors folder 
  

  
CONFIGURATION
-------------------------------------------------------------------------------------
Upon starting the script, it will promot the user to enter the required valued in the following formats.
The repo path has to be up the root directory.

1. Full repository path (locally) = FORMAT - "C:\Users\shaqu\Desktop\Sort Authors"
2. Starting date for period of data retrieval =  FORMAT - Dec 9 2021
3. Ending date for the period of data retrieval = FORMAT - July 9 2022
4. Desired number of Authors to return = FORMAT - 12 



RUN
-------------------------------------------------------------------------------------
Within terminal. Run
  `node sortAuthors.js`
  


OUTPUT
-------------------------------------------------------------------------------------
The CLI terminal will start up welcoming the user, then proceeding to get the required info. When all necessary information is entered a completion message will be logged and a text file titled "authors" will be created within the root directory of the working folder. This contains the top authors for the given period. With the total number of commits listed on the left as well as their names and email addresses.

EXAMPLE:
   
     89	Rodolfo Alonso Hernandez <ralonsoh@redhat.com>
     52	Slawek Kaplonski <skaplons@redhat.com>
     33	yatinkarel <ykarel@redhat.com>
     13	Jakub Libosvar <libosvar@redhat.com>
     12	LIU Yulong <i@liuyulong.me>
     12	elajkat <lajos.katona@est.tech>
      9	Oleg Bondarev <oleg.bondarev@huawei.com>
      8	zhouhenglc <zhouhenglc@inspur.com>
      5	Arnau Verdaguer <averdagu@redhat.com>
      5	Frode Nordahl <frode.nordahl@canonical.com>
      5	Luis Tomas Bolivar <ltomasbo@redhat.com>
      5	Miguel Lavalle <mlavalle@redhat.com>

Troubleshooting
------------------------------------------------------------------------------------
When running the script multiple times be sure to clear the authors.txt file or delete it entirely because the information will be appended to the existing data and this can be confusing.

The number of authors will have to be adjusted according to the number of authors within the repository for the given period. If the number is adjusted more than the totla amount of commit authors avaliable, the script will return undefined for the additional entries. 
