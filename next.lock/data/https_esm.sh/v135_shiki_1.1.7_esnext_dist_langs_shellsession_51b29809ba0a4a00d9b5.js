/* esm.sh - esbuild bundle(shiki@1.1.7/dist/langs/shellsession) esnext production */
import s from"/v135/shiki@1.1.7/esnext/dist/langs/shellscript.js";var e=Object.freeze({displayName:"Shell Session",fileTypes:["sh-session"],name:"shellsession",patterns:[{captures:{1:{name:"entity.other.prompt-prefix.shell-session"},2:{name:"punctuation.separator.prompt.shell-session"},3:{name:"source.shell",patterns:[{include:"source.shell"}]}},match:"(?x) ^ (?: ( (?:\\(\\S+\\)\\s*)? (?: sh\\S*?                       | \\w+\\S+[@:]\\S+(?:\\s+\\S+)? | \\[\\S+?[@:][^\\n]+?\\].*? ) ) \\s* )? ( [>$#%\u276F\u279C] | \\p{Greek} ) \\s+ (.*) $"},{match:"^.+$",name:"meta.output.shell-session"}],scopeName:"text.shell-session",embeddedLangs:["shellscript"],aliases:["console"]}),t=[...s,e];export{t as default};
//# sourceMappingURL=shellsession.js.map