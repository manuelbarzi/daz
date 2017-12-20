# Daz

## Installation

```bash
$ npm i -g daz
```

## Usage

```bash
$ daz --help

"Daz allows you to catalog your folders by title, description, and tags, and search them in a simple way (it can also search in package.json files to match npm modules)

usage:

    daz [--version] [--help]

    daz set <path> => sets folder information at the given path (.this json file with title, description and tags)

    daz get <path> => gets folder information at the given path (.this json file with title, description and tags)

    daz find <text-in-title-or-description> [options] => finds folders based on text matching in title or description, and options

options:

    --case-sensitive => matches text in case sensitive mode

    --exclude-description => excludes description from search of folders (searches only by title)

    --hide-description => hides the description associated to each folder matched

    --tags=<tags> => filter matching folders by tags (comma-separated)

    --show-tags => shows the tags associated to each folder matched output

    --exclude-paths=<[paths]> => excludes searching in given folders (comma-separated)

    --path=<path> => peforms the search from specific path instead of current path (default)

    --hide-path => hides the path of each folder matched

    --show-full-path => shows the full path of each folder matched

    --show-json => shows the information associated to each folder matched in json format (excludes other --show-*/--hide-* options)

    --line-break => adds a line-break before each folder (helps viewing the results)

    --include-package-json => includes searching in package.json files (name and description text matching, and keywords as tags)

example:

    // create your root folder and sub-folders

    $ mkdir my-folder
    $ mkdir -p my-folder/projects/scientific-calculator
    $ mkdir my-folder/projects/translator

    // use daz to catalog the content you wish (in this example the projects sub-folders)

    $ daz set my-folder/projects/scientific-calculator/

    title [scientific-calculator]: Scientific Calculator for iOS and Android
    tags (comma or space separated): calculator,ios,android,objective-c,java,react-native,js,javascript,node

    $ daz set my-folder/projects/translator/

    title [translator]: Multi-language translator Web-App
    tags (comma or space separated): language,translator,web-app,java,js,javascript,node,html,css,sass

    // use daz to find the content

    // by text in title

    $ daz find calculator

    my-folder/projects/scientific-calculator -> Scientific Calculator for iOS and Android

    // by tags (empty string '', meaning matching all content)

    $ daz find '' --tags=js,node

    my-folder/projects/scientific-calculator -> Scientific Calculator for iOS and Android
    my-folder/projects/translator -> Multi-language translator Web-App

    // by both things (text 'lator' in title, matching 'Calculator' and 'translator', and the tag 'java')

    $  daz find lator --tags=java

    my-folder/projects/scientific-calculator -> Scientific Calculator for iOS and Android
    my-folder/projects/translator -> Multi-language translator Web-App

    // find content showing the whole folder path with --show-full-path option

    $ daz find Web --show-full-path

    /Users/manuelbarzi/my-folder/projects/translator -> Multi-language translator Web-App

    // and more... explore the other daz options described above"
```
