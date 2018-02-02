// # ----------------------------------
// # Important Commans --> Red         |
// # Path              --> Green       |
// # Options           --> Purple      |
// # Tags              --> Blue/Cyan   |
// # Results & Imputs  --> Green       |
// # .this             --> Yellow      |
// # Comentary         --> Grey        |
// # Folder Example    --> White       |
// #___________________________________|

module.exports = function helpText() {
    const color = require("./colors")
    return `
  ${color.Red} 
  ______                   ________      ___
 |  __  \\        /\\       |_____   |    |   |
 | |  \\  \\      /  \\           /  /     |   |
 | |   |  |    / /\\ \\         /  /      |   |
 | |   |  |   / /__\\ \\       /  /       |___|
 | |__/  /   / ______ \\     /  /____     ___
 |______/   /_/      \\_\\   /________|   |___|
 ____________________________________________
 ____________________________________________

 
 ${color.Color_Off}Daz allows you to catalog your folders by title, description, and tags, and search them in a simple way (it can also search in package.json files to match npm modules)
 
 ${color.Yellow}Usage:
 
     ${color.Red}daz ${color.Green}[--version] [--help]
 
     ${color.Red}daz set ${color.Green}<path> ${color.White}${color.Comentary}//sets folder information at the given path (.this  json file with title, description and tags)${color.Color_Off}
 
     ${color.Red}daz get ${color.Green}<path> ${color.White}${color.Comentary}//gets folder information at the given path (.this json file with title, description and tags)${color.Color_Off}
 
     ${color.Red}daz find ${color.Green}<text-in-title-or-description> ${color.Purple}[options] ${color.White}${color.Comentary}//finds folders based on text matching in title or description, and options${color.Color_Off}
 
 ${color.Yellow}Options:
 
     ${color.Purple}--case-sensitive ${color.White}${color.Comentary}//matches text in case sensitive mode${color.Color_Off}
 
     ${color.Purple}--exclude-description ${color.White}${color.Comentary}//excludes description from search of folders (searches only by title)${color.Color_Off}
 
     ${color.Purple}--hide-description ${color.White}${color.Comentary}//hides the description associated to each folder matched${color.Color_Off}
 
     ${color.Purple}--tags=${color.Cyan}<tags> ${color.White}${color.Comentary}//filter matching folders by tags (comma-separated)${color.Color_Off}
 
     ${color.Purple}--show-tags ${color.White}${color.Comentary}//shows the tags associated to each folder matched output${color.Color_Off}
 
     ${color.Purple}--exclude-paths=${color.Green}<[paths]> ${color.White}${color.Comentary}//excludes searching in given folders (comma-separated)${color.Color_Off}
 
     ${color.Purple}--path=${color.Green}<path> ${color.White}${color.Comentary}//peforms the search from specific path instead of current path (default)${color.Color_Off}
 
     ${color.Purple}--hide-path ${color.White}${color.Comentary}//hides the path of each folder matched${color.Color_Off}
 
     ${color.Purple}--show-full-path ${color.White}${color.Comentary}//shows the full path of each folder matched${color.Color_Off}
 
     ${color.Purple}--show-json ${color.White}${color.Comentary}//shows the information associated to each folder matched in json format (excludes other --show-*/--hide-* options)${color.Color_Off}
 
     ${color.Purple}--line-break ${color.White}${color.Comentary}//adds a line-break before each folder (helps viewing the results)${color.Color_Off}
 
     ${color.Purple}--include-package-json ${color.White}${color.Comentary}//includes searching in package.json files (name and description text matching, and keywords as tags)${color.Color_Off}
 
 ${color.Yellow}Example:
 
     ${color.White}${color.Comentary}// create your root folder and sub-folders${color.Color_Off}
 
     ${color.Red}$ mkdir ${color.Color_Off}my-folder
     ${color.Red}$ mkdir -p ${color.Color_Off}my-folder/projects/scientific-calculator
     ${color.Red}$ mkdir ${color.Color_Off}my-folder/projects/translator
 
     ${color.White}${color.Comentary}// use daz to catalog the content you wish (in this example the projects sub-folders)${color.Color_Off}
 
     ${color.Red}$ daz set ${color.Color_Off}my-folder/projects/scientific-calculator/${color.Color_Off}
 
     ${color.Green}title [scientific-calculator]: ${color.Color_Off}Scientific Calculator for iOS and Android
     ${color.Green}tags (comma or space separated): ${color.Color_Off}calculator,ios,android,objective-c,java,react-native,js,javascript,node
 
     ${color.Red}$ daz set ${color.Color_Off}my-folder/projects/translator/
 
     ${color.Green}title [translator]: ${color.Color_Off}Multi-language translator Web-App
     ${color.Green}tags (comma or space separated): ${color.Color_Off}language,translator,web-app,java,js,javascript,node,html,css,sass
 
     ${color.White}${color.Comentary}// use daz to find the content${color.Color_Off}
 
     ${color.White}${color.Comentary}// by text in title${color.Color_Off}
 
     ${color.Red}$ daz find ${color.Color_Off}calculator
 
     ${color.Green}my-folder/projects/scientific-calculator -> Scientific Calculator for iOS and Android
 
     ${color.White}${color.Comentary}// by tags (empty string '', meaning matching all content)${color.Color_Off}
 
     ${color.Red}$ daz find ''  ${color.Purple}--tags=${color.Cyan}js,node
 
     ${color.Green}my-folder/projects/scientific-calculator -> Scientific Calculator for iOS and Android
     ${color.Green}my-folder/projects/translator -> Multi-language translator Web-App
 
     ${color.White}${color.Comentary}// by both things (text 'lator' in title, matching 'Calculator' and 'translator', and the tag 'java')${color.Color_Off}
 
     ${color.Red}$ daz find lator ${color.Purple}--tags=${color.Cyan}java
 
     ${color.Green}my-folder/projects/scientific-calculator Scientific Calculator for iOS and Android
     ${color.Green}my-folder/projects/translator -> Multi-language translator Web-App
 
     ${color.White}${color.Comentary}// find content showing the whole folder path with --show-full-path option${color.Color_Off}
 
     ${color.Red}$ daz find ${color.Gren}Web ${color.Purple}--show-full-path
 
     ${color.Green}/Users/manuelbarzi/my-folder/projects/translator -> Multi-language translator Web-App
 
     ${color.White}${color.Comentary}// and more... explore the other daz options described above "${color.Color_Off} 
  `
};