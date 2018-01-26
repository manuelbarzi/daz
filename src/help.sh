# Import Colors.
__dirname__="$(dirname "$0")"
source $__dirname__/colors.sh

# ----------------------------------
# Important Commans --> Red         |
# Path              --> Green       |
# Options           --> Purple      |
# Tags              --> Blue/Cyan   |
# Results & Imputs  --> Green       |
# .this             --> Yellow      |
# Comentary         --> Grey        |
# Folder Example    --> White       |
#___________________________________|

printf "${BRed} 
 ______                   ________      ___
|  __  \        /\       |_____   |    |   |
| |  \  \      /  \           /  /     |   |
| |   |  |    / /\ \         /  /      |   |
| |   |  |   / /__\ \       /  /       |___|
| |__/  /   / ______ \     /  /____     ___
|______/   /_/      \_\   /________|   |___|
____________________________________________
____________________________________________

${Color_Off}Daz allows you to catalog your folders by title, description, and tags, and search them in a simple way (it can also search in package.json files to match npm modules)

${BYellow}Usage:

    ${Red}daz ${Green}[--version] [--help]

    ${Red}daz set ${Green}<path> ${Comentary}//${LESS_OPACITY_GREEN}sets ${Comentary}folder information at the given path (${LESS_OPACITY_YELLOW}.this ${Comentary} json file with title, description and tags)

    ${Red}daz get ${Green}<path> ${Comentary}//${LESS_OPACITY_GREEN}gets ${Comentary}folder information at the given path (${LESS_OPACITY_YELLOW}.this ${Comentary} json file with title, description and tags)

    ${Red}daz find ${Green}<text-in-title-or-description> ${Purple}[options] ${Comentary}//finds folders based on text matching in title or description, and options${Color_Off}

${BYellow}Options:

    ${Purple}--case-sensitive ${Comentary}//matches text in case sensitive mode

    ${Purple}--exclude-description ${Comentary}//excludes description from search of folders (searches only by title)

    ${Purple}--hide-description ${Comentary}//hides the description associated to each folder matched

    ${Purple}--tags=${Cyan}<tags> ${Comentary}//filter matching folders by tags (comma-separated)

    ${Purple}--show-tags ${Comentary}//shows the tags associated to each folder matched output

    ${Purple}--exclude-paths=${Green}<[paths]> ${Comentary}//excludes searching in given folders (comma-separated)

    ${Purple}--path=${Green}<path> ${Comentary}//peforms the search from specific path instead of current path (default)

    ${Purple}--hide-path ${Comentary}//hides the path of each folder matched

    ${Purple}--show-full-path ${Comentary}//shows the full path of each folder matched

    ${Purple}--show-json ${Comentary}//shows the information associated to each folder matched in json format (excludes other --show-*/--hide-* options)

    ${Purple}--line-break ${Comentary}//adds a line-break before each folder (helps viewing the results)

    ${Purple}--include-package-json ${Comentary}//includes searching in package.json files (name and description text matching, and keywords as tags)${Color_Off}

${BYellow}Example:

    ${Comentary}// create your root folder and sub-folders

    ${Red}$ mkdir ${Color_Off}my-folder
    ${Red}$ mkdir -p ${Color_Off}my-folder/projects/scientific-calculator
    ${Red}$ mkdir ${Color_Off}my-folder/projects/translator

    ${Comentary}// use daz ${Comentary}to catalog the content you wish (in this example the projects sub-folders)

    ${Red}$ daz set ${Color_Off}my-folder/projects/scientific-calculator/

    ${Green}title [scientific-calculator]: ${Color_Off}Scientific Calculator for iOS and Android
    ${Green}tags (comma or space separated): ${Color_Off}calculator,ios,android,objective-c,java,react-native,js,javascript,node

    ${Red}$ daz set ${Color_Off}my-folder/projects/translator/

    ${Green}title [translator]: ${Color_Off}Multi-language translator Web-App
    ${Green}tags (comma or space separated): ${Color_Off}language,translator,web-app,java,js,javascript,node,html,css,sass

    ${Comentary}// use daz to find the content

    ${Comentary}// by text in title

    ${Red}$ daz find ${Color_Off}calculator

    ${Green}my-folder/projects/scientific-calculator -> Scientific Calculator for iOS and Android

    ${Comentary}// by tags (empty string '', meaning matching all content)

    ${Red}$ daz find ''  ${Purple}--tags=${Cyan}js,node

    ${Green}my-folder/projects/scientific-calculator -> Scientific Calculator for iOS and Android
    ${Green}my-folder/projects/translator -> Multi-language translator Web-App

    ${Comentary}// by both things (text 'lator' in title, matching 'Calculator' and 'translator', and the tag 'java')

    ${Red}$ daz find lator ${Purple}--tags=${Cyan}java

    ${Green}my-folder/projects/scientific-calculator Scientific Calculator for iOS and Android
    ${Green}my-folder/projects/translator -> Multi-language translator Web-App

    ${Comentary}// find content showing the whole folder path with --show-full-path option

    ${Red}$ daz find ${Gren}Web ${Purple}--show-full-path

    ${Green}/Users/manuelbarzi/my-folder/projects/translator -> Multi-language translator Web-App

    ${Comentary}// and more... explore the other daz options described above "${Color_Off}