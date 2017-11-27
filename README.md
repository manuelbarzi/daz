# Daz

## Installation

```bash
$ npm i -g daz
```

## Usage

```bash
$ daz --help

"Daz allows you to catalog your folders by title and tags and search them in a simple way

usage:

    daz [--version] [--help]
    daz <set | get> <path> => sets or gets folder information at the given path (title and tags)
    daz find <text-in-title> [options] => finds folders based on text matching in title and options

options:

    --ignore-case => ignores case in text matching
    --tags=<tags> => filter matching folders by tags (comma-separated)
    --exclude=<folders> => excludes searching in given folders (comma-separated)
    --path=<path> => peforms the search from specific path instead of current path (default)
    --hide-path => hides the path of each folder matched
    --show-full-path => shows the full path of each folder matched
    --show-tags => shows the tags associated to each folder matched
    --show-json => shows the information associated to each folder matched in json format (excludes other --show-* options)

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

    // by text in title (ignoring case)

    $ daz find calculator --ignore-case

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

    // and more... explore the other daz options described above!"
```
