# Daz

## Installation

```bash
$ npm i -g daz
```

## Usage

```bash
$ daz --help
'Daz' allows you to catalog your folders by title and tags and search them in a simple way
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
examples:
   $ daz set ..
   $ daz get ..
   $ daz find "Hello, World!" --ignore-case --show-path --show-tags
   $ daz find "" --tags=helloworld --path=.. --show-json
```
