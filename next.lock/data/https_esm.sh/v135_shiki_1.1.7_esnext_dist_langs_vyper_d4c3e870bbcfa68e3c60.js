/* esm.sh - esbuild bundle(shiki@1.1.7/dist/langs/vyper) esnext production */
var e=Object.freeze({displayName:"Vyper",name:"vyper",patterns:[{include:"#statement"},{include:"#expression"},{include:"#reserved-names-vyper"}],repository:{"annotated-parameter":{begin:`(?x)
\\b
([[:alpha:]_]\\w*) \\s* (:)
`,beginCaptures:{1:{name:"variable.parameter.function.language.python"},2:{name:"punctuation.separator.annotation.python"}},end:"(,)|(?=\\))",endCaptures:{1:{name:"punctuation.separator.parameters.python"}},patterns:[{include:"#expression"},{match:"=(?!=)",name:"keyword.operator.assignment.python"}]},"assignment-operator":{match:`(?x)
<<= | >>= | //= | \\*\\*=
| \\+= | -= | /= | @=
| \\*= | %= | ~= | \\^= | &= | \\|=
| =(?!=)
`,name:"keyword.operator.assignment.python"},backticks:{begin:"\\`",end:"(?:\\`|(?<!\\\\)(\\n))",name:"invalid.deprecated.backtick.python",patterns:[{include:"#expression"}]},"builtin-callables":{patterns:[{include:"#illegal-names"},{include:"#illegal-object-name"},{include:"#builtin-exceptions"},{include:"#builtin-functions"},{include:"#builtin-types"}]},"builtin-exceptions":{match:`(?x) (?<!\\.) \\b(
(
Arithmetic | Assertion | Attribute | Buffer | BlockingIO
| BrokenPipe | ChildProcess
| (Connection (Aborted | Refused | Reset)?)
| EOF | Environment | FileExists | FileNotFound
| FloatingPoint | IO | Import | Indentation | Index | Interrupted
| IsADirectory | NotADirectory | Permission | ProcessLookup
| Timeout
| Key | Lookup | Memory | Name | NotImplemented | OS | Overflow
| Reference | Runtime | Recursion | Syntax | System
| Tab | Type | UnboundLocal | Unicode(Encode|Decode|Translate)?
| Value | Windows | ZeroDivision | ModuleNotFound
) Error
|
((Pending)?Deprecation | Runtime | Syntax | User | Future | Import
| Unicode | Bytes | Resource
)? Warning
|
SystemExit | Stop(Async)?Iteration
| KeyboardInterrupt
| GeneratorExit | (Base)?Exception
)\\b
`,name:"support.type.exception.python"},"builtin-functions":{patterns:[{match:`(?x)
(?<!\\.) \\b(
__import__ | abs | all | any | ascii | bin | breakpoint | callable
| chr | compile | copyright | credits | delattr | dir | divmod
| enumerate | eval | exec | exit | filter | format | getattr
| globals | hasattr | hash | help | hex | id | input
| isinstance | issubclass | iter | len | license | locals | map
| max | memoryview | min | next | oct | open | ord | pow | print
| quit | range | reload | repr | reversed | round
| setattr | sorted | sum | vars | zip
)\\b
`,name:"support.function.builtin.python"},{match:`(?x)
(?<!\\.) \\b(
file | reduce | intern | raw_input | unicode | cmp | basestring
| execfile | long | xrange
)\\b
`,name:"variable.legacy.builtin.python"},{match:`(?x)
(?<!\\.) \\b(
_abi_encode | floor | ceil | convert | slice | len | concat | sha256 | method_id | keccak256 | ecrecover | ecadd | ecmul | extract32 | as_wei_value | raw_call | blockhash | bitwise_and | bitwise_or | bitwise_xor | bitwise_not | uint256_addmod | uint256_mulmod | pow_mod256 | sqrt | shift | create_forwarder_to | min | max | empty | abs   )\\b
`,name:"support.function.builtin.vyper"},{match:`(?x)
(?<!\\.) \\b(
send | selfdestruct | raw_call | raw_log | create_forwarder_to   )\\b
`,name:"support.function.builtin.lowlevel.vyper"},{match:`(?x)
(?<!\\.) \\b(
event   )\\b
`,name:"support.type.event.vyper"},{match:`(?x)
(?<!\\.) \\b(
map | struct | HashMap   )\\b
`,name:"support.type.reference.vyper"},{match:`(?x)
(?<!\\.) \\b(
private | nonreentrant | constant | event | internal | view | pure   )\\b
`,name:"support.function.builtin.modifiers.safe.vyper"},{match:`(?x)
(?<!\\.) \\b(
public | payable | modifying | external   )\\b
`,name:"support.function.builtin.modifiers.unsafe.vyper"}]},"builtin-possible-callables":{patterns:[{include:"#builtin-callables"},{include:"#magic-names"}]},"builtin-types":{patterns:[{match:`(?x)
(?<!\\.) \\b(
bool | bytearray | bytes | classmethod | complex | dict
| float | frozenset | int | list | object | property
| set | slice | staticmethod | str | tuple | type

(?# Although 'super' is not a type, it's related to types,
and is special enough to be highlighted differently from
other built-ins)
| super
)\\b
`,name:"support.type.python"},{match:`(?x)
(?<!\\.) \\b(
bytes32 | bytearray | wei_value | timestamp | int256 | uint8 | uint256 | decimal | timedelta | string | int128 | address | bool | bytes   )\\b
`,name:"support.type.basetype.vyper"},{match:`(?x)
(?<!\\.) \\b(
finney | gwei | range | def | ____init____ | timedelta | babbage | zero_address | raise | external | empty_bytes32 | assert | continue | wei | ada | min_int256 | min_int128 | chainid | max_decimal | default | indexed | selfdestruct | lovelace | immutable | throw | kwei | max_int128 | while | constant | ___default___ | balance | twei | codesize | false | max_int256 | _default_ | init | mwei | if | ____default____ | true | payable | internal | until | this | nonpayable | pass | public | nonreentrant | blockhash | max_uint256 | shannon | none | units | _init_ | ___init___ | is_contract | for | zero_wei | min_decimal | szabo | timestamp | ether | pwei | send   )\\b
`,name:"support.type.keywords.vyper"},{match:`(?x)
(?<!\\.) \\b(
shannon | finney | gwei | twei | kwei | wei | lovelace | ether | szabo | pwei | babbage | mwei | ada

(?# Although 'super' is not a type, it's related to types,
and is special enough to be highlighted differently from
other built-ins)
| super
)\\b
`,name:"support.type.unit.vyper"},{match:`(?x)
(?<!\\.) \\b(
ZERO_ADDRESS | EMPTY_BYTES32 | MAX_INT128 | MIN_INT128 | MAX_DECIMAL | MIN_DECIMAL | MAX_UINT256

(?# Although 'super' is not a type, it's related to types,
and is special enough to be highlighted differently from
other built-ins)
| super
)\\b
`,name:"support.type.constant.vyper"},{match:`(?x)
(?<!\\.) \\b(
implements   )\\b
`,name:"entity.other.inherited-class.interface.vyper"}]},"call-wrapper-inheritance":{begin:`(?x)
\\b(?=
([[:alpha:]_]\\w*) \\s* (\\()
)
`,comment:"same as a function call, but in inheritance context",end:"(\\))",endCaptures:{1:{name:"punctuation.definition.arguments.end.python"}},name:"meta.function-call.python",patterns:[{include:"#inheritance-name"},{include:"#function-arguments"}]},"class-declaration":{patterns:[{begin:`(?x)
\\s*(class)\\s+
(?=
[[:alpha:]_]\\w* \\s* (:|\\()
)
`,beginCaptures:{1:{name:"storage.type.class.python"}},end:"(:)",endCaptures:{1:{name:"punctuation.section.class.begin.python"}},name:"meta.class.python",patterns:[{include:"#class-name"},{include:"#class-inheritance"}]}]},"class-inheritance":{begin:"(\\()",beginCaptures:{1:{name:"punctuation.definition.inheritance.begin.python"}},end:"(\\))",endCaptures:{1:{name:"punctuation.definition.inheritance.end.python"}},name:"meta.class.inheritance.python",patterns:[{match:"(\\*\\*|\\*)",name:"keyword.operator.unpacking.arguments.python"},{match:",",name:"punctuation.separator.inheritance.python"},{match:"=(?!=)",name:"keyword.operator.assignment.python"},{match:"\\bmetaclass\\b",name:"support.type.metaclass.python"},{include:"#illegal-names"},{include:"#class-kwarg"},{include:"#call-wrapper-inheritance"},{include:"#expression-base"},{include:"#member-access-class"},{include:"#inheritance-identifier"}]},"class-kwarg":{captures:{1:{name:"entity.other.inherited-class.python variable.parameter.class.python"},2:{name:"keyword.operator.assignment.python"}},match:`(?x)
\\b ([[:alpha:]_]\\w*) \\s*(=)(?!=)
`},"class-name":{patterns:[{include:"#illegal-object-name"},{include:"#builtin-possible-callables"},{match:`(?x)
\\b ([[:alpha:]_]\\w*) \\b
`,name:"entity.name.type.class.python"}]},codetags:{captures:{1:{name:"keyword.codetag.notation.python"}},match:"(?:\\b(NOTE|XXX|HACK|FIXME|BUG|TODO)\\b)"},comments:{patterns:[{begin:`(?x)
(?:
\\# \\s* (type:)
\\s*+ (?# we want \`\\s*+\` which is possessive quantifier since
we do not actually want to backtrack when matching
whitespace here)
(?! $ | \\#)
)
`,beginCaptures:{0:{name:"meta.typehint.comment.python"},1:{name:"comment.typehint.directive.notation.python"}},contentName:"meta.typehint.comment.python",end:"(?:$|(?=\\#))",name:"comment.line.number-sign.python",patterns:[{match:`(?x)
\\G ignore
(?= \\s* (?: $ | \\#))
`,name:"comment.typehint.ignore.notation.python"},{match:`(?x)
(?<!\\.)\\b(
bool | bytes | float | int | object | str
| List | Dict | Iterable | Sequence | Set
| FrozenSet | Callable | Union | Tuple
| Any | None
)\\b
`,name:"comment.typehint.type.notation.python"},{match:"([\\[\\]\\(\\),\\.\\=\\*]|(->))",name:"comment.typehint.punctuation.notation.python"},{match:"([[:alpha:]_]\\w*)",name:"comment.typehint.variable.notation.python"}]},{include:"#comments-base"}]},"comments-base":{begin:"(\\#)",beginCaptures:{1:{name:"punctuation.definition.comment.python"}},end:"($)",name:"comment.line.number-sign.python",patterns:[{include:"#codetags"}]},"comments-string-double-three":{begin:"(\\#)",beginCaptures:{1:{name:"punctuation.definition.comment.python"}},end:'($|(?="""))',name:"comment.line.number-sign.python",patterns:[{include:"#codetags"}]},"comments-string-single-three":{begin:"(\\#)",beginCaptures:{1:{name:"punctuation.definition.comment.python"}},end:"($|(?='''))",name:"comment.line.number-sign.python",patterns:[{include:"#codetags"}]},"curly-braces":{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.dict.begin.python"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.dict.end.python"}},patterns:[{match:":",name:"punctuation.separator.dict.python"},{include:"#expression"}]},decorator:{begin:`(?x)
^\\s*
((@)) \\s* (?=[[:alpha:]_]\\w*)
`,beginCaptures:{1:{name:"entity.name.function.decorator.python"},2:{name:"punctuation.definition.decorator.python"}},end:`(?x)
( \\) )

(?: (.*?) (?=\\s*(?:\\#|$)) )
| (?=\\n|\\#)
`,endCaptures:{1:{name:"punctuation.definition.arguments.end.python"},2:{name:"invalid.illegal.decorator.python"}},name:"meta.function.decorator.python",patterns:[{include:"#decorator-name"},{include:"#function-arguments"}]},"decorator-name":{patterns:[{include:"#builtin-callables"},{include:"#illegal-object-name"},{captures:{2:{name:"punctuation.separator.period.python"}},match:`(?x)
([[:alpha:]_]\\w*) | (\\.)
`,name:"entity.name.function.decorator.python"},{include:"#line-continuation"},{captures:{1:{name:"invalid.illegal.decorator.python"}},match:`(?x)
\\s* ([^([:alpha:]\\s_\\.#\\\\] .*?) (?=\\#|$)
`,name:"invalid.illegal.decorator.python"}]},docstring:{patterns:[{begin:`(\\'\\'\\'|\\"\\"\\")`,beginCaptures:{1:{name:"punctuation.definition.string.begin.python"}},end:"(\\1)",endCaptures:{1:{name:"punctuation.definition.string.end.python"}},name:"string.quoted.docstring.multi.python",patterns:[{include:"#docstring-prompt"},{include:"#codetags"},{include:"#docstring-guts-unicode"}]},{begin:`([rR])(\\'\\'\\'|\\"\\"\\")`,beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},end:"(\\2)",endCaptures:{1:{name:"punctuation.definition.string.end.python"}},name:"string.quoted.docstring.raw.multi.python",patterns:[{include:"#string-consume-escape"},{include:"#docstring-prompt"},{include:"#codetags"}]},{begin:`(\\'|\\")`,beginCaptures:{1:{name:"punctuation.definition.string.begin.python"}},end:"(\\1)|(\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.docstring.single.python",patterns:[{include:"#codetags"},{include:"#docstring-guts-unicode"}]},{begin:`([rR])(\\'|\\")`,beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},end:"(\\2)|(\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.docstring.raw.single.python",patterns:[{include:"#string-consume-escape"},{include:"#codetags"}]}]},"docstring-guts-unicode":{patterns:[{include:"#escape-sequence-unicode"},{include:"#escape-sequence"},{include:"#string-line-continuation"}]},"docstring-prompt":{captures:{1:{name:"keyword.control.flow.python"}},match:`(?x)
(?:
(?:^|\\G) \\s* (?# '\\G' is necessary for ST)
((?:>>>|\\.\\.\\.) \\s) (?=\\s*\\S)
)
`},"docstring-statement":{begin:`^(?=\\s*[rR]?(\\'\\'\\'|\\"\\"\\"|\\'|\\"))`,comment:"the string either terminates correctly or by the beginning of a new line (this is for single line docstrings that aren't terminated) AND it's not followed by another docstring",end:`((?<=\\1)|^)(?!\\s*[rR]?(\\'\\'\\'|\\"\\"\\"|\\'|\\"))`,patterns:[{include:"#docstring"}]},"double-one-fregexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-fregexp-expression"}]},"double-one-fregexp-expression":{patterns:[{include:"#fregexp-base-expression"},{include:"#double-one-regexp-character-set"},{include:"#double-one-regexp-comments"},{include:"#regexp-flags"},{include:"#double-one-regexp-named-group"},{include:"#regexp-backreference"},{include:"#double-one-fregexp-lookahead"},{include:"#double-one-fregexp-lookahead-negative"},{include:"#double-one-fregexp-lookbehind"},{include:"#double-one-fregexp-lookbehind-negative"},{include:"#double-one-fregexp-conditional"},{include:"#double-one-fregexp-parentheses-non-capturing"},{include:"#double-one-fregexp-parentheses"}]},"double-one-fregexp-lookahead":{begin:"(\\()\\?=",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-fregexp-expression"}]},"double-one-fregexp-lookahead-negative":{begin:"(\\()\\?!",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-fregexp-expression"}]},"double-one-fregexp-lookbehind":{begin:"(\\()\\?<=",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-fregexp-expression"}]},"double-one-fregexp-lookbehind-negative":{begin:"(\\()\\?<!",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-fregexp-expression"}]},"double-one-fregexp-named-group":{begin:`(?x)
(\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.named.regexp",patterns:[{include:"#double-one-fregexp-expression"}]},"double-one-fregexp-parentheses":{begin:"\\(",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-fregexp-expression"}]},"double-one-fregexp-parentheses-non-capturing":{begin:"\\(\\?:",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-fregexp-expression"}]},"double-one-regexp-character-set":{patterns:[{match:`(?x)
\\[ \\^? \\] (?! .*?\\])
`},{begin:"(\\[)(\\^)?(\\])?",beginCaptures:{1:{name:"punctuation.character.set.begin.regexp constant.other.set.regexp"},2:{name:"keyword.operator.negation.regexp"},3:{name:"constant.character.set.regexp"}},end:'(\\]|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"punctuation.character.set.end.regexp constant.other.set.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.character.set.regexp",patterns:[{include:"#regexp-charecter-set-escapes"},{match:"[^\\n]",name:"constant.character.set.regexp"}]}]},"double-one-regexp-comments":{begin:"\\(\\?#",beginCaptures:{0:{name:"punctuation.comment.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"punctuation.comment.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"comment.regexp",patterns:[{include:"#codetags"}]},"double-one-regexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-expression":{patterns:[{include:"#regexp-base-expression"},{include:"#double-one-regexp-character-set"},{include:"#double-one-regexp-comments"},{include:"#regexp-flags"},{include:"#double-one-regexp-named-group"},{include:"#regexp-backreference"},{include:"#double-one-regexp-lookahead"},{include:"#double-one-regexp-lookahead-negative"},{include:"#double-one-regexp-lookbehind"},{include:"#double-one-regexp-lookbehind-negative"},{include:"#double-one-regexp-conditional"},{include:"#double-one-regexp-parentheses-non-capturing"},{include:"#double-one-regexp-parentheses"}]},"double-one-regexp-lookahead":{begin:"(\\()\\?=",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-lookahead-negative":{begin:"(\\()\\?!",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-lookbehind":{begin:"(\\()\\?<=",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-lookbehind-negative":{begin:"(\\()\\?<!",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-named-group":{begin:`(?x)
(\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.named.regexp",patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-parentheses":{begin:"\\(",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-parentheses-non-capturing":{begin:"\\(\\?:",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-three-fregexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-fregexp-expression"},{include:"#comments-string-double-three"}]},"double-three-fregexp-expression":{patterns:[{include:"#fregexp-base-expression"},{include:"#double-three-regexp-character-set"},{include:"#double-three-regexp-comments"},{include:"#regexp-flags"},{include:"#double-three-regexp-named-group"},{include:"#regexp-backreference"},{include:"#double-three-fregexp-lookahead"},{include:"#double-three-fregexp-lookahead-negative"},{include:"#double-three-fregexp-lookbehind"},{include:"#double-three-fregexp-lookbehind-negative"},{include:"#double-three-fregexp-conditional"},{include:"#double-three-fregexp-parentheses-non-capturing"},{include:"#double-three-fregexp-parentheses"},{include:"#comments-string-double-three"}]},"double-three-fregexp-lookahead":{begin:"(\\()\\?=",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-fregexp-expression"},{include:"#comments-string-double-three"}]},"double-three-fregexp-lookahead-negative":{begin:"(\\()\\?!",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-fregexp-expression"},{include:"#comments-string-double-three"}]},"double-three-fregexp-lookbehind":{begin:"(\\()\\?<=",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-fregexp-expression"},{include:"#comments-string-double-three"}]},"double-three-fregexp-lookbehind-negative":{begin:"(\\()\\?<!",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-fregexp-expression"},{include:"#comments-string-double-three"}]},"double-three-fregexp-named-group":{begin:`(?x)
(\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.named.regexp",patterns:[{include:"#double-three-fregexp-expression"},{include:"#comments-string-double-three"}]},"double-three-fregexp-parentheses":{begin:"\\(",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-fregexp-expression"},{include:"#comments-string-double-three"}]},"double-three-fregexp-parentheses-non-capturing":{begin:"\\(\\?:",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-fregexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-character-set":{patterns:[{match:`(?x)
\\[ \\^? \\] (?! .*?\\])
`},{begin:"(\\[)(\\^)?(\\])?",beginCaptures:{1:{name:"punctuation.character.set.begin.regexp constant.other.set.regexp"},2:{name:"keyword.operator.negation.regexp"},3:{name:"constant.character.set.regexp"}},end:'(\\]|(?="""))',endCaptures:{1:{name:"punctuation.character.set.end.regexp constant.other.set.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.character.set.regexp",patterns:[{include:"#regexp-charecter-set-escapes"},{match:"[^\\n]",name:"constant.character.set.regexp"}]}]},"double-three-regexp-comments":{begin:"\\(\\?#",beginCaptures:{0:{name:"punctuation.comment.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"punctuation.comment.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"comment.regexp",patterns:[{include:"#codetags"}]},"double-three-regexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-expression":{patterns:[{include:"#regexp-base-expression"},{include:"#double-three-regexp-character-set"},{include:"#double-three-regexp-comments"},{include:"#regexp-flags"},{include:"#double-three-regexp-named-group"},{include:"#regexp-backreference"},{include:"#double-three-regexp-lookahead"},{include:"#double-three-regexp-lookahead-negative"},{include:"#double-three-regexp-lookbehind"},{include:"#double-three-regexp-lookbehind-negative"},{include:"#double-three-regexp-conditional"},{include:"#double-three-regexp-parentheses-non-capturing"},{include:"#double-three-regexp-parentheses"},{include:"#comments-string-double-three"}]},"double-three-regexp-lookahead":{begin:"(\\()\\?=",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-lookahead-negative":{begin:"(\\()\\?!",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-lookbehind":{begin:"(\\()\\?<=",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-lookbehind-negative":{begin:"(\\()\\?<!",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-named-group":{begin:`(?x)
(\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.named.regexp",patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-parentheses":{begin:"\\(",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-parentheses-non-capturing":{begin:"\\(\\?:",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},ellipsis:{match:"\\.\\.\\.",name:"constant.other.ellipsis.python"},"escape-sequence":{match:`(?x)
\\\\ (
x[0-9A-Fa-f]{2}
| [0-7]{1,3}
| [\\\\"'abfnrtv]
)
`,name:"constant.character.escape.python"},"escape-sequence-unicode":{patterns:[{match:`(?x)
\\\\ (
u[0-9A-Fa-f]{4}
| U[0-9A-Fa-f]{8}
| N\\{[\\w\\s]+?\\}
)
`,name:"constant.character.escape.python"}]},expression:{comment:"All valid Python expressions",patterns:[{include:"#expression-base"},{include:"#member-access"},{comment:"Tokenize identifiers to help linters",match:"(?x) \\b ([[:alpha:]_]\\w*) \\b"}]},"expression-bare":{comment:"valid Python expressions w/o comments and line continuation",patterns:[{include:"#backticks"},{include:"#illegal-anno"},{include:"#literal"},{include:"#regexp"},{include:"#string"},{include:"#lambda"},{include:"#generator"},{include:"#illegal-operator"},{include:"#operator"},{include:"#curly-braces"},{include:"#item-access"},{include:"#list"},{include:"#odd-function-call"},{include:"#round-braces"},{include:"#function-call"},{include:"#builtin-functions"},{include:"#builtin-types"},{include:"#builtin-exceptions"},{include:"#magic-names"},{include:"#special-names"},{include:"#illegal-names"},{include:"#special-variables"},{include:"#ellipsis"},{include:"#punctuation"},{include:"#line-continuation"},{include:"#special-variables-types"}]},"expression-base":{comment:"valid Python expressions with comments and line continuation",patterns:[{include:"#comments"},{include:"#expression-bare"},{include:"#line-continuation"}]},"f-expression":{comment:"All valid Python expressions, except comments and line continuation",patterns:[{include:"#expression-bare"},{include:"#member-access"},{comment:"Tokenize identifiers to help linters",match:"(?x) \\b ([[:alpha:]_]\\w*) \\b"}]},"fregexp-base-expression":{patterns:[{include:"#fregexp-quantifier"},{include:"#fstring-formatting-braces"},{match:"\\{.*?\\}"},{include:"#regexp-base-common"}]},"fregexp-double-one-line":{begin:'\\b(([uU]r)|([fF]r)|(r[fF]?))(")',beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},end:'(")|(?<!\\\\)(\\n)',endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.interpolated.python string.regexp.quoted.single.python",patterns:[{include:"#double-one-fregexp-expression"}]},"fregexp-double-three-line":{begin:'\\b(([uU]r)|([fF]r)|(r[fF]?))(""")',beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},end:'(""")',endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.interpolated.python string.regexp.quoted.multi.python",patterns:[{include:"#double-three-fregexp-expression"}]},"fregexp-quantifier":{match:`(?x)
\\{\\{(
\\d+ | \\d+,(\\d+)? | ,\\d+
)\\}\\}
`,name:"keyword.operator.quantifier.regexp"},"fregexp-single-one-line":{begin:"\\b(([uU]r)|([fF]r)|(r[fF]?))(\\')",beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},end:"(\\')|(?<!\\\\)(\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.interpolated.python string.regexp.quoted.single.python",patterns:[{include:"#single-one-fregexp-expression"}]},"fregexp-single-three-line":{begin:"\\b(([uU]r)|([fF]r)|(r[fF]?))(\\'\\'\\')",beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},end:"(\\'\\'\\')",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.interpolated.python string.regexp.quoted.multi.python",patterns:[{include:"#single-three-fregexp-expression"}]},"fstring-fnorm-quoted-multi-line":{begin:`(\\b[fF])([bBuU])?('''|""")`,beginCaptures:{1:{name:"string.interpolated.python string.quoted.multi.python storage.type.string.python"},2:{name:"invalid.illegal.prefix.python"},3:{name:"punctuation.definition.string.begin.python string.interpolated.python string.quoted.multi.python"}},end:"(\\3)",endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.multi.python"},2:{name:"invalid.illegal.newline.python"}},name:"meta.fstring.python",patterns:[{include:"#fstring-guts"},{include:"#fstring-illegal-multi-brace"},{include:"#fstring-multi-brace"},{include:"#fstring-multi-core"}]},"fstring-fnorm-quoted-single-line":{begin:`(\\b[fF])([bBuU])?((['"]))`,beginCaptures:{1:{name:"string.interpolated.python string.quoted.single.python storage.type.string.python"},2:{name:"invalid.illegal.prefix.python"},3:{name:"punctuation.definition.string.begin.python string.interpolated.python string.quoted.single.python"}},end:"(\\3)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.single.python"},2:{name:"invalid.illegal.newline.python"}},name:"meta.fstring.python",patterns:[{include:"#fstring-guts"},{include:"#fstring-illegal-single-brace"},{include:"#fstring-single-brace"},{include:"#fstring-single-core"}]},"fstring-formatting":{patterns:[{include:"#fstring-formatting-braces"},{include:"#fstring-formatting-singe-brace"}]},"fstring-formatting-braces":{patterns:[{captures:{1:{name:"constant.character.format.placeholder.other.python"},2:{name:"invalid.illegal.brace.python"},3:{name:"constant.character.format.placeholder.other.python"}},comment:"empty braces are illegal",match:"({)(\\s*?)(})"},{match:"({{|}})",name:"constant.character.escape.python"}]},"fstring-formatting-singe-brace":{match:"(}(?!}))",name:"invalid.illegal.brace.python"},"fstring-guts":{patterns:[{include:"#escape-sequence-unicode"},{include:"#escape-sequence"},{include:"#string-line-continuation"},{include:"#fstring-formatting"}]},"fstring-illegal-multi-brace":{patterns:[{include:"#impossible"}]},"fstring-illegal-single-brace":{begin:"(\\{)(?=[^\\n}]*$\\n?)",beginCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},comment:"it is illegal to have a multiline brace inside a single-line string",end:"(\\})|(?=\\n)",endCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},patterns:[{include:"#fstring-terminator-single"},{include:"#f-expression"}]},"fstring-multi-brace":{begin:"(\\{)",beginCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},comment:"value interpolation using { ... }",end:`(?x)
(\\})
`,endCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},patterns:[{include:"#fstring-terminator-multi"},{include:"#f-expression"}]},"fstring-multi-core":{match:`(?x)
(.+?)
(
(?# .* and .*? in multi-line match need special handling of
newlines otherwise SublimeText and Atom will match slightly
differently.

The guard for newlines has to be separate from the
lookahead because of special $ matching rule.)
($\\n?)
|
(?=[\\\\\\}\\{]|'''|""")
)
(?# due to how multiline regexps are matched we need a special case
for matching a newline character)
| \\n
`,name:"string.interpolated.python string.quoted.multi.python"},"fstring-normf-quoted-multi-line":{begin:`(\\b[bBuU])([fF])('''|""")`,beginCaptures:{1:{name:"invalid.illegal.prefix.python"},2:{name:"string.interpolated.python string.quoted.multi.python storage.type.string.python"},3:{name:"punctuation.definition.string.begin.python string.quoted.multi.python"}},end:"(\\3)",endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.multi.python"},2:{name:"invalid.illegal.newline.python"}},name:"meta.fstring.python",patterns:[{include:"#fstring-guts"},{include:"#fstring-illegal-multi-brace"},{include:"#fstring-multi-brace"},{include:"#fstring-multi-core"}]},"fstring-normf-quoted-single-line":{begin:`(\\b[bBuU])([fF])((['"]))`,beginCaptures:{1:{name:"invalid.illegal.prefix.python"},2:{name:"string.interpolated.python string.quoted.single.python storage.type.string.python"},3:{name:"punctuation.definition.string.begin.python string.quoted.single.python"}},end:"(\\3)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.single.python"},2:{name:"invalid.illegal.newline.python"}},name:"meta.fstring.python",patterns:[{include:"#fstring-guts"},{include:"#fstring-illegal-single-brace"},{include:"#fstring-single-brace"},{include:"#fstring-single-core"}]},"fstring-raw-guts":{patterns:[{include:"#string-consume-escape"},{include:"#fstring-formatting"}]},"fstring-raw-multi-core":{match:`(?x)
(.+?)
(
(?# .* and .*? in multi-line match need special handling of
newlines otherwise SublimeText and Atom will match slightly
differently.

The guard for newlines has to be separate from the
lookahead because of special $ matching rule.)
($\\n?)
|
(?=[\\\\\\}\\{]|'''|""")
)
(?# due to how multiline regexps are matched we need a special case
for matching a newline character)
| \\n
`,name:"string.interpolated.python string.quoted.raw.multi.python"},"fstring-raw-quoted-multi-line":{begin:`(\\b(?:[R][fF]|[fF][R]))('''|""")`,beginCaptures:{1:{name:"string.interpolated.python string.quoted.raw.multi.python storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python string.quoted.raw.multi.python"}},end:"(\\2)",endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.raw.multi.python"},2:{name:"invalid.illegal.newline.python"}},name:"meta.fstring.python",patterns:[{include:"#fstring-raw-guts"},{include:"#fstring-illegal-multi-brace"},{include:"#fstring-multi-brace"},{include:"#fstring-raw-multi-core"}]},"fstring-raw-quoted-single-line":{begin:`(\\b(?:[R][fF]|[fF][R]))((['"]))`,beginCaptures:{1:{name:"string.interpolated.python string.quoted.raw.single.python storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python string.quoted.raw.single.python"}},end:"(\\2)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.raw.single.python"},2:{name:"invalid.illegal.newline.python"}},name:"meta.fstring.python",patterns:[{include:"#fstring-raw-guts"},{include:"#fstring-illegal-single-brace"},{include:"#fstring-single-brace"},{include:"#fstring-raw-single-core"}]},"fstring-raw-single-core":{match:`(?x)
(.+?)
(
(?# .* and .*? in multi-line match need special handling of
newlines otherwise SublimeText and Atom will match slightly
differently.

The guard for newlines has to be separate from the
lookahead because of special $ matching rule.)
($\\n?)
|
(?=[\\\\\\}\\{]|(['"])|((?<!\\\\)\\n))
)
(?# due to how multiline regexps are matched we need a special case
for matching a newline character)
| \\n
`,name:"string.interpolated.python string.quoted.raw.single.python"},"fstring-single-brace":{begin:"(\\{)",beginCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},comment:"value interpolation using { ... }",end:`(?x)
(\\})|(?=\\n)
`,endCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},patterns:[{include:"#fstring-terminator-single"},{include:"#f-expression"}]},"fstring-single-core":{match:`(?x)
(.+?)
(
(?# .* and .*? in multi-line match need special handling of
newlines otherwise SublimeText and Atom will match slightly
differently.

The guard for newlines has to be separate from the
lookahead because of special $ matching rule.)
($\\n?)
|
(?=[\\\\\\}\\{]|(['"])|((?<!\\\\)\\n))
)
(?# due to how multiline regexps are matched we need a special case
for matching a newline character)
| \\n
`,name:"string.interpolated.python string.quoted.single.python"},"fstring-terminator-multi":{patterns:[{match:"(![rsa])(?=})",name:"storage.type.format.python"},{captures:{1:{name:"storage.type.format.python"},2:{name:"storage.type.format.python"}},match:`(?x)
(![rsa])?
( : \\w? [<>=^]? [-+ ]? \\#?
\\d* ,? (\\.\\d+)? [bcdeEfFgGnosxX%]? )(?=})
`},{include:"#fstring-terminator-multi-tail"}]},"fstring-terminator-multi-tail":{begin:"(![rsa])?(:)(?=.*?{)",beginCaptures:{1:{name:"storage.type.format.python"},2:{name:"storage.type.format.python"}},end:"(?=})",patterns:[{include:"#fstring-illegal-multi-brace"},{include:"#fstring-multi-brace"},{match:"([bcdeEfFgGnosxX%])(?=})",name:"storage.type.format.python"},{match:"(\\.\\d+)",name:"storage.type.format.python"},{match:"(,)",name:"storage.type.format.python"},{match:"(\\d+)",name:"storage.type.format.python"},{match:"(\\#)",name:"storage.type.format.python"},{match:"([-+ ])",name:"storage.type.format.python"},{match:"([<>=^])",name:"storage.type.format.python"},{match:"(\\w)",name:"storage.type.format.python"}]},"fstring-terminator-single":{patterns:[{match:"(![rsa])(?=})",name:"storage.type.format.python"},{captures:{1:{name:"storage.type.format.python"},2:{name:"storage.type.format.python"}},match:`(?x)
(![rsa])?
( : \\w? [<>=^]? [-+ ]? \\#?
\\d* ,? (\\.\\d+)? [bcdeEfFgGnosxX%]? )(?=})
`},{include:"#fstring-terminator-single-tail"}]},"fstring-terminator-single-tail":{begin:"(![rsa])?(:)(?=.*?{)",beginCaptures:{1:{name:"storage.type.format.python"},2:{name:"storage.type.format.python"}},end:"(?=})|(?=\\n)",patterns:[{include:"#fstring-illegal-single-brace"},{include:"#fstring-single-brace"},{match:"([bcdeEfFgGnosxX%])(?=})",name:"storage.type.format.python"},{match:"(\\.\\d+)",name:"storage.type.format.python"},{match:"(,)",name:"storage.type.format.python"},{match:"(\\d+)",name:"storage.type.format.python"},{match:"(\\#)",name:"storage.type.format.python"},{match:"([-+ ])",name:"storage.type.format.python"},{match:"([<>=^])",name:"storage.type.format.python"},{match:"(\\w)",name:"storage.type.format.python"}]},"function-arguments":{begin:"(\\()",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.python"}},contentName:"meta.function-call.arguments.python",end:"(?=\\))(?!\\)\\s*\\()",patterns:[{match:"(,)",name:"punctuation.separator.arguments.python"},{captures:{1:{name:"keyword.operator.unpacking.arguments.python"}},match:`(?x)
(?:(?<=[,(])|^) \\s* (\\*{1,2})
`},{include:"#lambda-incomplete"},{include:"#illegal-names"},{captures:{1:{name:"variable.parameter.function-call.python"},2:{name:"keyword.operator.assignment.python"}},match:"\\b([[:alpha:]_]\\w*)\\s*(=)(?!=)"},{match:"=(?!=)",name:"keyword.operator.assignment.python"},{include:"#expression"},{captures:{1:{name:"punctuation.definition.arguments.end.python"},2:{name:"punctuation.definition.arguments.begin.python"}},match:"\\s*(\\))\\s*(\\()"}]},"function-call":{begin:`(?x)
\\b(?=
([[:alpha:]_]\\w*) \\s* (\\()
)
`,comment:'Regular function call of the type "name(args)"',end:"(\\))",endCaptures:{1:{name:"punctuation.definition.arguments.end.python"}},name:"meta.function-call.python",patterns:[{include:"#special-variables"},{include:"#function-name"},{include:"#function-arguments"}]},"function-declaration":{begin:`(?x)
\\s*
(?:\\b(async) \\s+)? \\b(def)\\s+
(?=
[[:alpha:]_][[:word:]]* \\s* \\(
)
`,beginCaptures:{1:{name:"storage.type.function.async.python"},2:{name:"storage.type.function.python"}},end:`(:|(?=[#'"\\n]))`,endCaptures:{1:{name:"punctuation.section.function.begin.python"}},name:"meta.function.python",patterns:[{include:"#function-def-name"},{include:"#parameters"},{include:"#line-continuation"},{include:"#return-annotation"}]},"function-def-name":{patterns:[{match:`(?x)
\\b (__default__) \\b
`,name:"entity.name.function.fallback.vyper"},{match:`(?x)
\\b (__init__) \\b
`,name:"entity.name.function.constructor.vyper"},{include:"#illegal-object-name"},{include:"#builtin-possible-callables"},{match:`(?x)
\\b ([[:alpha:]_]\\w*) \\b
`,name:"entity.name.function.python"}]},"function-name":{patterns:[{include:"#builtin-possible-callables"},{comment:"Some color schemas support meta.function-call.generic scope",match:`(?x)
\\b ([[:alpha:]_]\\w*) \\b
`,name:"meta.function-call.generic.python"}]},generator:{begin:"\\bfor\\b",beginCaptures:{0:{name:"keyword.control.flow.python"}},comment:`Match "for ... in" construct used in generators and for loops to
correctly identify the "in" as a control flow keyword.
`,end:"\\bin\\b",endCaptures:{0:{name:"keyword.control.flow.python"}},patterns:[{include:"#expression"}]},"illegal-anno":{match:"->",name:"invalid.illegal.annotation.python"},"illegal-names":{captures:{1:{name:"keyword.control.flow.python"},2:{name:"keyword.control.import.python"}},match:`(?x)
\\b(?:
(
and | assert | async | await | break | class | continue | def
| del | elif | else | except | finally | for | from | global
| if | in | is | (?<=\\.)lambda | lambda(?=\\s*[\\.=])
| nonlocal | not | or | pass | raise | return | try | while | with
| yield
) | (
as | import
)
)\\b
`},"illegal-object-name":{comment:`It's illegal to name class or function "True"`,match:"\\b(True|False|None)\\b",name:"keyword.illegal.name.python"},"illegal-operator":{patterns:[{match:"&&|\\|\\||--|\\+\\+",name:"invalid.illegal.operator.python"},{match:"[?$]",name:"invalid.illegal.operator.python"},{comment:"We don't want `!` to flash when we're typing `!=`",match:"!\\b",name:"invalid.illegal.operator.python"}]},import:{comment:"Import statements used to correctly mark `from`, `import`, and `as`\n",patterns:[{begin:"\\b(?<!\\.)(from)\\b(?=.+import)",beginCaptures:{1:{name:"keyword.control.import.python"}},end:"$|(?=import)",patterns:[{match:"\\.+",name:"punctuation.separator.period.python"},{include:"#expression"}]},{begin:"\\b(?<!\\.)(import)\\b",beginCaptures:{1:{name:"keyword.control.import.python"}},end:"$",patterns:[{match:"\\b(?<!\\.)as\\b",name:"keyword.control.import.python"},{include:"#expression"}]}]},impossible:{comment:"This is a special rule that should be used where no match is desired. It is not a good idea to match something like '1{0}' because in some cases that can result in infinite loops in token generation. So the rule instead matches and impossible expression to allow a match to fail and move to the next token.",match:"$.^"},"inheritance-identifier":{captures:{1:{name:"entity.other.inherited-class.python"}},match:`(?x)
\\b ([[:alpha:]_]\\w*) \\b
`},"inheritance-name":{patterns:[{include:"#lambda-incomplete"},{include:"#builtin-possible-callables"},{include:"#inheritance-identifier"}]},"item-access":{patterns:[{begin:`(?x)
\\b(?=
[[:alpha:]_]\\w* \\s* \\[
)
`,end:"(\\])",endCaptures:{1:{name:"punctuation.definition.arguments.end.python"}},name:"meta.item-access.python",patterns:[{include:"#item-name"},{include:"#item-index"},{include:"#expression"}]}]},"item-index":{begin:"(\\[)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.python"}},contentName:"meta.item-access.arguments.python",end:"(?=\\])",patterns:[{match:":",name:"punctuation.separator.slice.python"},{include:"#expression"}]},"item-name":{patterns:[{include:"#special-variables"},{include:"#builtin-functions"},{include:"#special-names"},{match:`(?x)
\\b ([[:alpha:]_]\\w*) \\b
`,name:"meta.indexed-name.python"},{include:"#special-variables-types"}]},lambda:{patterns:[{captures:{1:{name:"keyword.control.flow.python"}},match:"((?<=\\.)lambda|lambda(?=\\s*[\\.=]))"},{captures:{1:{name:"storage.type.function.lambda.python"}},match:"\\b(lambda)\\s*?(?=[,\\n]|$)"},{begin:`(?x)
\\b (lambda) \\b
`,beginCaptures:{1:{name:"storage.type.function.lambda.python"}},contentName:"meta.function.lambda.parameters.python",end:"(:)|(\\n)",endCaptures:{1:{name:"punctuation.section.function.lambda.begin.python"}},name:"meta.lambda-function.python",patterns:[{match:"(\\*\\*|\\*)",name:"keyword.operator.unpacking.parameter.python"},{include:"#lambda-nested-incomplete"},{include:"#illegal-names"},{captures:{1:{name:"variable.parameter.function.language.python"},2:{name:"punctuation.separator.parameters.python"}},match:"([[:alpha:]_]\\w*)\\s*(?:(,)|(?=:|$))"},{include:"#comments"},{include:"#backticks"},{include:"#illegal-anno"},{include:"#lambda-parameter-with-default"},{include:"#line-continuation"},{include:"#illegal-operator"}]}]},"lambda-incomplete":{match:"\\blambda(?=\\s*[,)])",name:"storage.type.function.lambda.python"},"lambda-nested-incomplete":{match:"\\blambda(?=\\s*[:,)])",name:"storage.type.function.lambda.python"},"lambda-parameter-with-default":{begin:`(?x)
\\b
([[:alpha:]_]\\w*) \\s* (=)
`,beginCaptures:{1:{name:"variable.parameter.function.language.python"},2:{name:"keyword.operator.python"}},end:"(,)|(?=:|$)",endCaptures:{1:{name:"punctuation.separator.parameters.python"}},patterns:[{include:"#expression"}]},"line-continuation":{patterns:[{captures:{1:{name:"punctuation.separator.continuation.line.python"},2:{name:"invalid.illegal.line.continuation.python"}},match:"(\\\\)\\s*(\\S.*$\\n?)"},{begin:"(\\\\)\\s*$\\n?",beginCaptures:{1:{name:"punctuation.separator.continuation.line.python"}},end:`(?x)
(?=^\\s*$)
|
(?! (\\s* [rR]? (\\'\\'\\'|\\"\\"\\"|\\'|\\"))
|
(\\G $)  (?# '\\G' is necessary for ST)
)
`,patterns:[{include:"#regexp"},{include:"#string"}]}]},list:{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.list.begin.python"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.list.end.python"}},patterns:[{include:"#expression"}]},literal:{patterns:[{match:"\\b(True|False|None|NotImplemented|Ellipsis)\\b",name:"constant.language.python"},{include:"#number"}]},"loose-default":{begin:"(=)",beginCaptures:{1:{name:"keyword.operator.python"}},end:"(,)|(?=\\))",endCaptures:{1:{name:"punctuation.separator.parameters.python"}},patterns:[{include:"#expression"}]},"magic-function-names":{captures:{1:{name:"support.function.magic.python"}},comment:`these methods have magic interpretation by python and are generally called
indirectly through syntactic constructs
`,match:`(?x)
\\b(
__(?:
abs | add | aenter | aexit | aiter | and | anext | await
| bool | call | ceil | cmp | coerce | complex | contains
| copy | deepcopy | del | delattr | delete | delitem
| delslice | dir | div | divmod | enter | eq | exit | float
| floor | floordiv | format | ge | get | getattr
| getattribute | getinitargs | getitem | getnewargs
| getslice | getstate | gt | hash | hex | iadd | iand | idiv
| ifloordiv | ilshift | imod | imul | index | init
| instancecheck | int | invert | ior | ipow | irshift | isub
| iter | itruediv | ixor | le | len | long | lshift | lt
| missing | mod | mul | ne | neg | new | next | nonzero | oct | or
| pos | pow | radd | rand | rdiv | rdivmod | reduce
| reduce_ex | repr | reversed | rfloordiv | rlshift | rmod
| rmul | ror | round | rpow | rrshift | rshift | rsub
| rtruediv | rxor | set | setattr | setitem | setslice
| setstate | sizeof | str | sub | subclasscheck | truediv
| trunc | unicode | xor | matmul | rmatmul | imatmul
| init_subclass | set_name | fspath | bytes | prepare
)__
)\\b
`},"magic-names":{patterns:[{include:"#magic-function-names"},{include:"#magic-variable-names"}]},"magic-variable-names":{captures:{1:{name:"support.variable.magic.python"}},comment:"magic variables which a class/module may have.",match:`(?x)
\\b(
__(?:
all | bases | builtins | class | class_getitem | code | debug
| defaults | dict | doc | file | func | kwdefaults | members
| metaclass | methods | module | mro | mro_entries | name
| qualname | post_init | self | signature | slots | subclasses
| version | weakref | wrapped | annotations | classcell
| spec | path | package | future | traceback
)__
)\\b
`},"member-access":{begin:"(\\.)\\s*(?!\\.)",beginCaptures:{1:{name:"punctuation.separator.period.python"}},end:`(?x)


(?<=\\S)(?=\\W) |


(^|(?<=\\s))(?=[^\\\\\\w\\s]) |
$
`,name:"meta.member.access.python",patterns:[{include:"#function-call"},{include:"#member-access-base"},{include:"#member-access-attribute"}]},"member-access-attribute":{comment:"Highlight attribute access in otherwise non-specialized cases.",match:`(?x)
\\b ([[:alpha:]_]\\w*) \\b
`,name:"meta.attribute.python"},"member-access-base":{patterns:[{include:"#magic-names"},{include:"#illegal-names"},{include:"#illegal-object-name"},{include:"#special-names"},{include:"#line-continuation"},{include:"#item-access"},{include:"#special-variables-types"}]},"member-access-class":{begin:"(\\.)\\s*(?!\\.)",beginCaptures:{1:{name:"punctuation.separator.period.python"}},end:"(?<=\\S)(?=\\W)|$",name:"meta.member.access.python",patterns:[{include:"#call-wrapper-inheritance"},{include:"#member-access-base"},{include:"#inheritance-identifier"}]},number:{name:"constant.numeric.python",patterns:[{include:"#number-float"},{include:"#number-dec"},{include:"#number-hex"},{include:"#number-oct"},{include:"#number-bin"},{include:"#number-long"},{match:"\\b[0-9]+\\w+",name:"invalid.illegal.name.python"}]},"number-bin":{captures:{1:{name:"storage.type.number.python"}},match:`(?x)
(?<![\\w\\.])
(0[bB]) (_?[01])+
\\b
`,name:"constant.numeric.bin.python"},"number-dec":{captures:{1:{name:"storage.type.imaginary.number.python"},2:{name:"invalid.illegal.dec.python"}},match:`(?x)
(?<![\\w\\.])(?:
[1-9](?: _?[0-9] )*
|
0+
|
[0-9](?: _?[0-9] )* ([jJ])
|
0 ([0-9]+)(?![eE\\.])
)\\b
`,name:"constant.numeric.dec.python"},"number-float":{captures:{1:{name:"storage.type.imaginary.number.python"}},match:`(?x)
(?<! \\w)(?:
(?:
\\.[0-9](?: _?[0-9] )*
|
[0-9](?: _?[0-9] )* \\. [0-9](?: _?[0-9] )*
|
[0-9](?: _?[0-9] )* \\.
) (?: [eE][+-]?[0-9](?: _?[0-9] )* )?
|
[0-9](?: _?[0-9] )* (?: [eE][+-]?[0-9](?: _?[0-9] )* )
)([jJ])?\\b
`,name:"constant.numeric.float.python"},"number-hex":{captures:{1:{name:"storage.type.number.python"}},match:`(?x)
(?<![\\w\\.])
(0[xX]) (_?[0-9a-fA-F])+
\\b
`,name:"constant.numeric.hex.python"},"number-long":{captures:{2:{name:"storage.type.number.python"}},comment:"this is to support python2 syntax for long ints",match:`(?x)
(?<![\\w\\.])
([1-9][0-9]* | 0) ([lL])
\\b
`,name:"constant.numeric.bin.python"},"number-oct":{captures:{1:{name:"storage.type.number.python"}},match:`(?x)
(?<![\\w\\.])
(0[oO]) (_?[0-7])+
\\b
`,name:"constant.numeric.oct.python"},"odd-function-call":{begin:`(?x)
(?<= \\] | \\) ) \\s*
(?=\\()
`,comment:`A bit obscured function call where there may have been an
arbitrary number of other operations to get the function.
E.g. "arr[idx](args)"
`,end:"(\\))",endCaptures:{1:{name:"punctuation.definition.arguments.end.python"}},patterns:[{include:"#function-arguments"}]},operator:{captures:{1:{name:"keyword.operator.logical.python"},2:{name:"keyword.control.flow.python"},3:{name:"keyword.operator.bitwise.python"},4:{name:"keyword.operator.arithmetic.python"},5:{name:"keyword.operator.comparison.python"}},match:`(?x)
\\b(?<!\\.)
(?:
(and | or | not | in | is)                         (?# 1)
|
(for | if | else | await | (?:yield(?:\\s+from)?))  (?# 2)
)
(?!\\s*:)\\b

| (<< | >> | & | \\| | \\^ | ~)                          (?# 3)

| (\\*\\* | \\* | \\+ | - | % | // | / | @)                (?# 4)

| (!= | == | >= | <= | < | >)                          (?# 5)
`},"parameter-special":{captures:{1:{name:"variable.parameter.function.language.python"},2:{name:"variable.parameter.function.language.special.self.python"},3:{name:"variable.parameter.function.language.special.cls.python"},4:{name:"punctuation.separator.parameters.python"}},match:`(?x)
\\b ((self)|(cls)) \\b \\s*(?:(,)|(?=\\)))
`},parameters:{begin:"(\\()",beginCaptures:{1:{name:"punctuation.definition.parameters.begin.python"}},end:"(\\))",endCaptures:{1:{name:"punctuation.definition.parameters.end.python"}},name:"meta.function.parameters.python",patterns:[{match:"(\\*\\*|\\*)",name:"keyword.operator.unpacking.parameter.python"},{include:"#lambda-incomplete"},{include:"#illegal-names"},{include:"#illegal-object-name"},{include:"#parameter-special"},{captures:{1:{name:"variable.parameter.function.language.python"},2:{name:"punctuation.separator.parameters.python"}},match:`(?x)
([[:alpha:]_]\\w*)
\\s* (?: (,) | (?=[)#\\n=]))
`},{include:"#comments"},{include:"#loose-default"},{include:"#annotated-parameter"}]},punctuation:{patterns:[{match:":",name:"punctuation.separator.colon.python"},{match:",",name:"punctuation.separator.element.python"}]},regexp:{patterns:[{include:"#regexp-single-three-line"},{include:"#regexp-double-three-line"},{include:"#regexp-single-one-line"},{include:"#regexp-double-one-line"},{include:"#fregexp-single-three-line"},{include:"#fregexp-double-three-line"},{include:"#fregexp-single-one-line"},{include:"#fregexp-double-one-line"}]},"regexp-backreference":{captures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.begin.regexp"},2:{name:"entity.name.tag.named.backreference.regexp"},3:{name:"support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.end.regexp"}},match:`(?x)
(\\()  (\\?P= \\w+(?:\\s+[[:alnum:]]+)?)  (\\))
`,name:"meta.backreference.named.regexp"},"regexp-backreference-number":{captures:{1:{name:"entity.name.tag.backreference.regexp"}},match:"(\\\\[1-9]\\d?)",name:"meta.backreference.regexp"},"regexp-base-common":{patterns:[{match:"\\.",name:"support.other.match.any.regexp"},{match:"\\^",name:"support.other.match.begin.regexp"},{match:"\\$",name:"support.other.match.end.regexp"},{match:"[+*?]\\??",name:"keyword.operator.quantifier.regexp"},{match:"\\|",name:"keyword.operator.disjunction.regexp"},{include:"#regexp-escape-sequence"}]},"regexp-base-expression":{patterns:[{include:"#regexp-quantifier"},{include:"#regexp-base-common"}]},"regexp-charecter-set-escapes":{patterns:[{match:"\\\\[abfnrtv\\\\]",name:"constant.character.escape.regexp"},{include:"#regexp-escape-special"},{match:"\\\\([0-7]{1,3})",name:"constant.character.escape.regexp"},{include:"#regexp-escape-character"},{include:"#regexp-escape-unicode"},{include:"#regexp-escape-catchall"}]},"regexp-double-one-line":{begin:'\\b(([uU]r)|([bB]r)|(r[bB]?))(")',beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},end:'(")|(?<!\\\\)(\\n)',endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.regexp.quoted.single.python",patterns:[{include:"#double-one-regexp-expression"}]},"regexp-double-three-line":{begin:'\\b(([uU]r)|([bB]r)|(r[bB]?))(""")',beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},end:'(""")',endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.regexp.quoted.multi.python",patterns:[{include:"#double-three-regexp-expression"}]},"regexp-escape-catchall":{match:"\\\\(.|\\n)",name:"constant.character.escape.regexp"},"regexp-escape-character":{match:`(?x)
\\\\ (
x[0-9A-Fa-f]{2}
| 0[0-7]{1,2}
| [0-7]{3}
)
`,name:"constant.character.escape.regexp"},"regexp-escape-sequence":{patterns:[{include:"#regexp-escape-special"},{include:"#regexp-escape-character"},{include:"#regexp-escape-unicode"},{include:"#regexp-backreference-number"},{include:"#regexp-escape-catchall"}]},"regexp-escape-special":{match:"\\\\([AbBdDsSwWZ])",name:"support.other.escape.special.regexp"},"regexp-escape-unicode":{match:`(?x)
\\\\ (
u[0-9A-Fa-f]{4}
| U[0-9A-Fa-f]{8}
)
`,name:"constant.character.unicode.regexp"},"regexp-flags":{match:"\\(\\?[aiLmsux]+\\)",name:"storage.modifier.flag.regexp"},"regexp-quantifier":{match:`(?x)
\\{(
\\d+ | \\d+,(\\d+)? | ,\\d+
)\\}
`,name:"keyword.operator.quantifier.regexp"},"regexp-single-one-line":{begin:"\\b(([uU]r)|([bB]r)|(r[bB]?))(\\')",beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},end:"(\\')|(?<!\\\\)(\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.regexp.quoted.single.python",patterns:[{include:"#single-one-regexp-expression"}]},"regexp-single-three-line":{begin:"\\b(([uU]r)|([bB]r)|(r[bB]?))(\\'\\'\\')",beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},end:"(\\'\\'\\')",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.regexp.quoted.multi.python",patterns:[{include:"#single-three-regexp-expression"}]},"reserved-names-vyper":{match:`(?x)
\\b (finney | gwei | range | def | ____init____ | timedelta | babbage | zero_address | raise | external | empty_bytes32 | assert | continue | wei | ada | min_int256 | min_int128 | chainid | max_decimal | default | indexed | selfdestruct | lovelace | immutable | throw | kwei | max_int128 | while | constant | ___default___ | balance | twei | codesize | false | max_int256 | _default_ | init | mwei | if | ____default____ | true | payable | internal | until | this | nonpayable | pass | public | nonreentrant | blockhash | max_uint256 | shannon | none | units | _init_ | ___init___ | is_contract | for | zero_wei | min_decimal | szabo | timestamp | ether | pwei | send) \\b
`,name:"name.reserved.vyper"},"return-annotation":{begin:"(->)",beginCaptures:{1:{name:"punctuation.separator.annotation.result.python"}},end:"(?=:)",patterns:[{include:"#expression"}]},"round-braces":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.begin.python"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.end.python"}},patterns:[{include:"#expression"}]},semicolon:{patterns:[{match:"\\;$",name:"invalid.deprecated.semicolon.python"}]},"single-one-fregexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-fregexp-expression"}]},"single-one-fregexp-expression":{patterns:[{include:"#fregexp-base-expression"},{include:"#single-one-regexp-character-set"},{include:"#single-one-regexp-comments"},{include:"#regexp-flags"},{include:"#single-one-regexp-named-group"},{include:"#regexp-backreference"},{include:"#single-one-fregexp-lookahead"},{include:"#single-one-fregexp-lookahead-negative"},{include:"#single-one-fregexp-lookbehind"},{include:"#single-one-fregexp-lookbehind-negative"},{include:"#single-one-fregexp-conditional"},{include:"#single-one-fregexp-parentheses-non-capturing"},{include:"#single-one-fregexp-parentheses"}]},"single-one-fregexp-lookahead":{begin:"(\\()\\?=",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-fregexp-expression"}]},"single-one-fregexp-lookahead-negative":{begin:"(\\()\\?!",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-fregexp-expression"}]},"single-one-fregexp-lookbehind":{begin:"(\\()\\?<=",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-fregexp-expression"}]},"single-one-fregexp-lookbehind-negative":{begin:"(\\()\\?<!",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-fregexp-expression"}]},"single-one-fregexp-named-group":{begin:`(?x)
(\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.named.regexp",patterns:[{include:"#single-one-fregexp-expression"}]},"single-one-fregexp-parentheses":{begin:"\\(",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-fregexp-expression"}]},"single-one-fregexp-parentheses-non-capturing":{begin:"\\(\\?:",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-fregexp-expression"}]},"single-one-regexp-character-set":{patterns:[{match:`(?x)
\\[ \\^? \\] (?! .*?\\])
`},{begin:"(\\[)(\\^)?(\\])?",beginCaptures:{1:{name:"punctuation.character.set.begin.regexp constant.other.set.regexp"},2:{name:"keyword.operator.negation.regexp"},3:{name:"constant.character.set.regexp"}},end:"(\\]|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"punctuation.character.set.end.regexp constant.other.set.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.character.set.regexp",patterns:[{include:"#regexp-charecter-set-escapes"},{match:"[^\\n]",name:"constant.character.set.regexp"}]}]},"single-one-regexp-comments":{begin:"\\(\\?#",beginCaptures:{0:{name:"punctuation.comment.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"punctuation.comment.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"comment.regexp",patterns:[{include:"#codetags"}]},"single-one-regexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-expression":{patterns:[{include:"#regexp-base-expression"},{include:"#single-one-regexp-character-set"},{include:"#single-one-regexp-comments"},{include:"#regexp-flags"},{include:"#single-one-regexp-named-group"},{include:"#regexp-backreference"},{include:"#single-one-regexp-lookahead"},{include:"#single-one-regexp-lookahead-negative"},{include:"#single-one-regexp-lookbehind"},{include:"#single-one-regexp-lookbehind-negative"},{include:"#single-one-regexp-conditional"},{include:"#single-one-regexp-parentheses-non-capturing"},{include:"#single-one-regexp-parentheses"}]},"single-one-regexp-lookahead":{begin:"(\\()\\?=",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-lookahead-negative":{begin:"(\\()\\?!",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-lookbehind":{begin:"(\\()\\?<=",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-lookbehind-negative":{begin:"(\\()\\?<!",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-named-group":{begin:`(?x)
(\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.named.regexp",patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-parentheses":{begin:"\\(",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-parentheses-non-capturing":{begin:"\\(\\?:",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-three-fregexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-fregexp-expression"},{include:"#comments-string-single-three"}]},"single-three-fregexp-expression":{patterns:[{include:"#fregexp-base-expression"},{include:"#single-three-regexp-character-set"},{include:"#single-three-regexp-comments"},{include:"#regexp-flags"},{include:"#single-three-regexp-named-group"},{include:"#regexp-backreference"},{include:"#single-three-fregexp-lookahead"},{include:"#single-three-fregexp-lookahead-negative"},{include:"#single-three-fregexp-lookbehind"},{include:"#single-three-fregexp-lookbehind-negative"},{include:"#single-three-fregexp-conditional"},{include:"#single-three-fregexp-parentheses-non-capturing"},{include:"#single-three-fregexp-parentheses"},{include:"#comments-string-single-three"}]},"single-three-fregexp-lookahead":{begin:"(\\()\\?=",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-fregexp-expression"},{include:"#comments-string-single-three"}]},"single-three-fregexp-lookahead-negative":{begin:"(\\()\\?!",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-fregexp-expression"},{include:"#comments-string-single-three"}]},"single-three-fregexp-lookbehind":{begin:"(\\()\\?<=",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-fregexp-expression"},{include:"#comments-string-single-three"}]},"single-three-fregexp-lookbehind-negative":{begin:"(\\()\\?<!",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-fregexp-expression"},{include:"#comments-string-single-three"}]},"single-three-fregexp-named-group":{begin:`(?x)
(\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.named.regexp",patterns:[{include:"#single-three-fregexp-expression"},{include:"#comments-string-single-three"}]},"single-three-fregexp-parentheses":{begin:"\\(",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-fregexp-expression"},{include:"#comments-string-single-three"}]},"single-three-fregexp-parentheses-non-capturing":{begin:"\\(\\?:",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-fregexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-character-set":{patterns:[{match:`(?x)
\\[ \\^? \\] (?! .*?\\])
`},{begin:"(\\[)(\\^)?(\\])?",beginCaptures:{1:{name:"punctuation.character.set.begin.regexp constant.other.set.regexp"},2:{name:"keyword.operator.negation.regexp"},3:{name:"constant.character.set.regexp"}},end:"(\\]|(?=\\'\\'\\'))",endCaptures:{1:{name:"punctuation.character.set.end.regexp constant.other.set.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.character.set.regexp",patterns:[{include:"#regexp-charecter-set-escapes"},{match:"[^\\n]",name:"constant.character.set.regexp"}]}]},"single-three-regexp-comments":{begin:"\\(\\?#",beginCaptures:{0:{name:"punctuation.comment.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"punctuation.comment.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"comment.regexp",patterns:[{include:"#codetags"}]},"single-three-regexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-expression":{patterns:[{include:"#regexp-base-expression"},{include:"#single-three-regexp-character-set"},{include:"#single-three-regexp-comments"},{include:"#regexp-flags"},{include:"#single-three-regexp-named-group"},{include:"#regexp-backreference"},{include:"#single-three-regexp-lookahead"},{include:"#single-three-regexp-lookahead-negative"},{include:"#single-three-regexp-lookbehind"},{include:"#single-three-regexp-lookbehind-negative"},{include:"#single-three-regexp-conditional"},{include:"#single-three-regexp-parentheses-non-capturing"},{include:"#single-three-regexp-parentheses"},{include:"#comments-string-single-three"}]},"single-three-regexp-lookahead":{begin:"(\\()\\?=",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-lookahead-negative":{begin:"(\\()\\?!",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-lookbehind":{begin:"(\\()\\?<=",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-lookbehind-negative":{begin:"(\\()\\?<!",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-named-group":{begin:`(?x)
(\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.named.regexp",patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-parentheses":{begin:"\\(",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-parentheses-non-capturing":{begin:"\\(\\?:",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"special-names":{match:`(?x)
\\b





(
_* [[:upper:]] [_\\d]* [[:upper:]]
)
[[:upper:]\\d]* (_\\w*)?
\\b
`,name:"constant.other.caps.python"},"special-variables":{captures:{1:{name:"variable.language.special.self.python"},2:{name:"variable.language.special.cls.python"}},match:`(?x)
\\b (?<!\\.) (?:
(self) | (cls)
)\\b
`},"special-variables-types":{patterns:[{match:`(?x)
(?<!\\.) \\b(
log   )\\b
`,name:"variable.language.special.log.vyper"},{match:`(?x)
(?<!\\.) \\b(
msg   )\\b
`,name:"variable.language.special.msg.vyper"},{match:`(?x)
(?<!\\.) \\b(
block   )\\b
`,name:"variable.language.special.block.vyper"}]},statement:{patterns:[{include:"#import"},{include:"#class-declaration"},{include:"#function-declaration"},{include:"#generator"},{include:"#statement-keyword"},{include:"#assignment-operator"},{include:"#decorator"},{include:"#docstring-statement"},{include:"#semicolon"}]},"statement-keyword":{patterns:[{match:"\\b((async\\s+)?\\s*def)\\b",name:"storage.type.function.python"},{comment:`if \`as\` is eventually followed by \`:\` or line continuation
it's probably control flow like:
    with foo as bar, \\
         Foo as Bar:
      try:
        do_stuff()
      except Exception as e:
        pass
`,match:"\\b(?<!\\.)as\\b(?=.*[:\\\\])",name:"keyword.control.flow.python"},{comment:"other legal use of `as` is in an import",match:"\\b(?<!\\.)as\\b",name:"keyword.control.import.python"},{match:`(?x)
\\b(?<!\\.)(
async | continue | del | assert | break | finally | for
| from | elif | else | if | except | pass | raise
| return | try | while | with
)\\b
`,name:"keyword.control.flow.python"},{match:`(?x)
\\b(?<!\\.)(
global | nonlocal
)\\b
`,name:"storage.modifier.declaration.python"},{match:"\\b(?<!\\.)(class)\\b",name:"storage.type.class.python"}]},string:{patterns:[{include:"#string-quoted-multi-line"},{include:"#string-quoted-single-line"},{include:"#string-bin-quoted-multi-line"},{include:"#string-bin-quoted-single-line"},{include:"#string-raw-quoted-multi-line"},{include:"#string-raw-quoted-single-line"},{include:"#string-raw-bin-quoted-multi-line"},{include:"#string-raw-bin-quoted-single-line"},{include:"#fstring-fnorm-quoted-multi-line"},{include:"#fstring-fnorm-quoted-single-line"},{include:"#fstring-normf-quoted-multi-line"},{include:"#fstring-normf-quoted-single-line"},{include:"#fstring-raw-quoted-multi-line"},{include:"#fstring-raw-quoted-single-line"}]},"string-bin-quoted-multi-line":{begin:`(\\b[bB])('''|""")`,beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},end:"(\\2)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.binary.multi.python",patterns:[{include:"#string-entity"}]},"string-bin-quoted-single-line":{begin:`(\\b[bB])((['"]))`,beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},end:"(\\2)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.binary.single.python",patterns:[{include:"#string-entity"}]},"string-brace-formatting":{patterns:[{captures:{1:{name:"constant.character.format.placeholder.other.python"},3:{name:"storage.type.format.python"},4:{name:"storage.type.format.python"}},match:`(?x)
(
{{ | }}
| (?:
{
\\w* (\\.[[:alpha:]_]\\w* | \\[[^\\]'"]+\\])*
(![rsa])?
( : \\w? [<>=^]? [-+ ]? \\#?
\\d* ,? (\\.\\d+)? [bcdeEfFgGnosxX%]? )?
})
)
`,name:"meta.format.brace.python"},{captures:{1:{name:"constant.character.format.placeholder.other.python"},3:{name:"storage.type.format.python"},4:{name:"storage.type.format.python"}},match:`(?x)
(
{
\\w* (\\.[[:alpha:]_]\\w* | \\[[^\\]'"]+\\])*
(![rsa])?
(:)
[^'"{}\\n]* (?:
\\{ [^'"}\\n]*? \\} [^'"{}\\n]*
)*
}
)
`,name:"meta.format.brace.python"}]},"string-consume-escape":{match:`\\\\['"\\n\\\\]`},"string-entity":{patterns:[{include:"#escape-sequence"},{include:"#string-line-continuation"},{include:"#string-formatting"}]},"string-formatting":{captures:{1:{name:"constant.character.format.placeholder.other.python"}},match:`(?x)
(
% (\\([\\w\\s]*\\))?
[-+#0 ]*
(\\d+|\\*)? (\\.(\\d+|\\*))?
([hlL])?
[diouxXeEfFgGcrsab%]
)
`,name:"meta.format.percent.python"},"string-line-continuation":{match:"\\\\$",name:"constant.language.python"},"string-multi-bad-brace1-formatting-raw":{begin:`(?x)
(?= \\{%
( .*? (?!'''|""") )
%\\}
)
`,comment:"template using {% ... %}",end:`(?='''|""")`,patterns:[{include:"#string-consume-escape"}]},"string-multi-bad-brace1-formatting-unicode":{begin:`(?x)
(?= \\{%
( .*? (?!'''|""") )
%\\}
)
`,comment:"template using {% ... %}",end:`(?='''|""")`,patterns:[{include:"#escape-sequence-unicode"},{include:"#escape-sequence"},{include:"#string-line-continuation"}]},"string-multi-bad-brace2-formatting-raw":{begin:`(?x)
(?!\\{\\{)
(?= \\{ (
\\w*? (?!'''|""") [^!:\\.\\[}\\w]
)
.*?(?!'''|""")
\\}
)
`,comment:"odd format or format-like syntax",end:`(?='''|""")`,patterns:[{include:"#string-consume-escape"},{include:"#string-formatting"}]},"string-multi-bad-brace2-formatting-unicode":{begin:`(?x)
(?!\\{\\{)
(?= \\{ (
\\w*? (?!'''|""") [^!:\\.\\[}\\w]
)
.*?(?!'''|""")
\\}
)
`,comment:"odd format or format-like syntax",end:`(?='''|""")`,patterns:[{include:"#escape-sequence-unicode"},{include:"#string-entity"}]},"string-quoted-multi-line":{begin:`(?:\\b([rR])(?=[uU]))?([uU])?('''|""")`,beginCaptures:{1:{name:"invalid.illegal.prefix.python"},2:{name:"storage.type.string.python"},3:{name:"punctuation.definition.string.begin.python"}},end:"(\\3)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.multi.python",patterns:[{include:"#string-multi-bad-brace1-formatting-unicode"},{include:"#string-multi-bad-brace2-formatting-unicode"},{include:"#string-unicode-guts"}]},"string-quoted-single-line":{begin:`(?:\\b([rR])(?=[uU]))?([uU])?((['"]))`,beginCaptures:{1:{name:"invalid.illegal.prefix.python"},2:{name:"storage.type.string.python"},3:{name:"punctuation.definition.string.begin.python"}},end:"(\\3)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.single.python",patterns:[{include:"#string-single-bad-brace1-formatting-unicode"},{include:"#string-single-bad-brace2-formatting-unicode"},{include:"#string-unicode-guts"}]},"string-raw-bin-guts":{patterns:[{include:"#string-consume-escape"},{include:"#string-formatting"}]},"string-raw-bin-quoted-multi-line":{begin:`(\\b(?:R[bB]|[bB]R))('''|""")`,beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},end:"(\\2)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.raw.binary.multi.python",patterns:[{include:"#string-raw-bin-guts"}]},"string-raw-bin-quoted-single-line":{begin:`(\\b(?:R[bB]|[bB]R))((['"]))`,beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},end:"(\\2)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.raw.binary.single.python",patterns:[{include:"#string-raw-bin-guts"}]},"string-raw-guts":{patterns:[{include:"#string-consume-escape"},{include:"#string-formatting"},{include:"#string-brace-formatting"}]},"string-raw-quoted-multi-line":{begin:`\\b(([uU]R)|(R))('''|""")`,beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"punctuation.definition.string.begin.python"}},end:"(\\4)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.raw.multi.python",patterns:[{include:"#string-multi-bad-brace1-formatting-raw"},{include:"#string-multi-bad-brace2-formatting-raw"},{include:"#string-raw-guts"}]},"string-raw-quoted-single-line":{begin:`\\b(([uU]R)|(R))((['"]))`,beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"punctuation.definition.string.begin.python"}},end:"(\\4)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.raw.single.python",patterns:[{include:"#string-single-bad-brace1-formatting-raw"},{include:"#string-single-bad-brace2-formatting-raw"},{include:"#string-raw-guts"}]},"string-single-bad-brace1-formatting-raw":{begin:`(?x)
(?= \\{%
( .*? (?!(['"])|((?<!\\\\)\\n)) )
%\\}
)
`,comment:"template using {% ... %}",end:`(?=(['"])|((?<!\\\\)\\n))`,patterns:[{include:"#string-consume-escape"}]},"string-single-bad-brace1-formatting-unicode":{begin:`(?x)
(?= \\{%
( .*? (?!(['"])|((?<!\\\\)\\n)) )
%\\}
)
`,comment:"template using {% ... %}",end:`(?=(['"])|((?<!\\\\)\\n))`,patterns:[{include:"#escape-sequence-unicode"},{include:"#escape-sequence"},{include:"#string-line-continuation"}]},"string-single-bad-brace2-formatting-raw":{begin:`(?x)
(?!\\{\\{)
(?= \\{ (
\\w*? (?!(['"])|((?<!\\\\)\\n)) [^!:\\.\\[}\\w]
)
.*?(?!(['"])|((?<!\\\\)\\n))
\\}
)
`,comment:"odd format or format-like syntax",end:`(?=(['"])|((?<!\\\\)\\n))`,patterns:[{include:"#string-consume-escape"},{include:"#string-formatting"}]},"string-single-bad-brace2-formatting-unicode":{begin:`(?x)
(?!\\{\\{)
(?= \\{ (
\\w*? (?!(['"])|((?<!\\\\)\\n)) [^!:\\.\\[}\\w]
)
.*?(?!(['"])|((?<!\\\\)\\n))
\\}
)
`,comment:"odd format or format-like syntax",end:`(?=(['"])|((?<!\\\\)\\n))`,patterns:[{include:"#escape-sequence-unicode"},{include:"#string-entity"}]},"string-unicode-guts":{patterns:[{include:"#escape-sequence-unicode"},{include:"#string-entity"},{include:"#string-brace-formatting"}]}},scopeName:"source.vyper",aliases:["vy"]}),n=[e];export{n as default};
//# sourceMappingURL=vyper.js.map