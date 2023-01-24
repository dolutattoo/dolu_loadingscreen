fx_version "cerulean"
lua54 'yes'
games { "gta5", "rdr3" }

description "FiveM Loadingscreen using React TypeScript and Lua"
author "Dolu"
version '0.0.1'
repository 'https://github.com/dolutattoo/dolu_loadinscreen'

files {
	'web/build/index.html',
	'web/build/**/*',
	'web/assets/img/*'
}

loadscreen 'web/build/index.html'