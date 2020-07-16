(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),l=n(11),i=(n(0),n(241)),r={title:"OCaml for Dark developers"},o={id:"contributing/ocaml-for-dark-developers",isDocsHomePage:!1,title:"OCaml for Dark developers",description:"This guide aims to introduce you to enough OCaml to contribute to Dark, assuming you already know Dark.",source:"@site/docs/contributing/ocaml-for-dark-developers.md",permalink:"/contributing/ocaml-for-dark-developers",sidebar:"Contributing",previous:{title:"Adding a refactoring",permalink:"/contributing/adding-a-refactoring"},next:{title:"General concepts",permalink:"/contributing/general-concepts"}},c=[{value:"Some simple OCaml code",id:"some-simple-ocaml-code",children:[]},{value:"Dark vs OCaml",id:"dark-vs-ocaml",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Types",id:"types",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Standard library",id:"standard-library",children:[]},{value:"Int",id:"int",children:[]},{value:"Float",id:"float",children:[]},{value:"Bool",id:"bool",children:[]},{value:"String",id:"string",children:[]},{value:"List",id:"list",children:[]},{value:"Records",id:"records",children:[]},{value:"Let",id:"let",children:[]},{value:"If",id:"if",children:[]},{value:"Operators",id:"operators",children:[]},{value:"Match",id:"match",children:[]},{value:"Variants",id:"variants",children:[]},{value:"Lambdas",id:"lambdas",children:[]},{value:"Pipes",id:"pipes",children:[]},{value:"Dictionaries",id:"dictionaries",children:[]},{value:"Unit",id:"unit",children:[]},{value:"Error handling",id:"error-handling",children:[]},{value:"<code>.mli</code> files",id:"mli-files",children:[]},{value:"Imperative programming",id:"imperative-programming",children:[]},{value:"Advanced functions",id:"advanced-functions",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Classes and Objects",id:"classes-and-objects",children:[]}]},{value:"OCaml vs ReasonML vs Bucklescript - what&#39;s the difference?",id:"ocaml-vs-reasonml-vs-bucklescript---whats-the-difference",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide aims to introduce you to enough OCaml to contribute to Dark, assuming you already know Dark."),Object(i.b)("h2",{id:"some-simple-ocaml-code"},"Some simple OCaml code"),Object(i.b)("p",null,"Dark and OCaml are very similar. Here's an OCaml function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let someFunction (intArgument : int) : string =\n  let aString = "myString" in\n  let anInt = 65 + intArgument in\n  let aFloat = 6.72 in\n  anotherFunction aString anInt aFloat\n')),Object(i.b)("p",null,"This is a function called ",Object(i.b)("inlineCode",{parentName:"p"},"someFunction"),", which takes one argument, an\n",Object(i.b)("inlineCode",{parentName:"p"},"int")," called ",Object(i.b)("inlineCode",{parentName:"p"},"intArgument"),", and returns a ",Object(i.b)("inlineCode",{parentName:"p"},"string"),". Three variables are\ndefined in the body, first a string, then an int, then a float, and\nfinally we call the ",Object(i.b)("inlineCode",{parentName:"p"},"anotherFunction")," function with all three\nparameters as arguments."),Object(i.b)("p",null,"In Dark this would be written:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'someFunction\n  intArgument : Int\n  \u21aa String\n\nlet aString = "myString"\nlet anInt = 65 + intArgument\nlet aFloat = 6.72\nanotherFunction aString anInt aFloat\n')),Object(i.b)("p",null,"As you can see, apart from how the function is written, the only\ndifference is that ",Object(i.b)("inlineCode",{parentName:"p"},"let")," statements in OCaml have an ",Object(i.b)("inlineCode",{parentName:"p"},"in")," at the end of\nthe line."),Object(i.b)("h2",{id:"dark-vs-ocaml"},"Dark vs OCaml"),Object(i.b)("p",null,"OCaml is a very large influence on Dark, and Dark will continue to grow some\nmore of OCaml's features. We'll discuss the similarities and differences as we\ngo through language features."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Since Dark doesn't let you type syntax, it doesn't have syntax errors.\nOCaml has syntax errors, and the error messages are not good. I tend to\nmake sure that my code syntax checks by running ",Object(i.b)("inlineCode",{parentName:"p"},"oCamlformat")," in my\neditor on save: if it reformats, then the syntax was good."),Object(i.b)("h3",{id:"types"},"Types"),Object(i.b)("p",null,"OCaml is a strongly typed-language. Dark aspires to be, but it doesn't\nhave a type-checker yet. This shows the biggest difference in working\nin OCaml, that the compiler will refuse to compile if the types are\nwrong."),Object(i.b)("p",null,"OCaml has type-inference, which means that the compiler will try and\nfigure out what the types are. This is frequently the source of bad\ncompiler messages, often it will tell you something which seems wrong\nbecause it guessed wrong about certain types."),Object(i.b)("p",null,"Usually type errors actually contain useful information, but they need to be\nread very carefully to find it."),Object(i.b)("p",null,"We've found the best way to debug incorrect types is to add type annotations to\neverything. We add them to all functions (we didn't always do this, but we do\nnow, but we are now), including all parameters and return types (see\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#functions"}),"example")," below)."),Object(i.b)("p",null,"You can actually add types in many places where they aren't required, such as\nvariable definitions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let y = 6.7 in\nlet (x : int) = 6 in\nx + 5\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"x")," here, despite being a normal variable definition, has a type\nsignature. OCaml allows this in many places, and it's useful for\ntracking down these errors."),Object(i.b)("p",null,"We'll discuss declaring types below."),Object(i.b)("h3",{id:"functions"},"Functions"),Object(i.b)("p",null,"Functions in OCaml are defined in the outer scope. Type signatures are optional in OCaml\nbut required in the Dark codebase:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let myFunction (arg1 : int) (arg2 : string) : string =\n  if arg1 < (String.toInt arg2)\n  then "just return a string"\n  else arg2\n')),Object(i.b)("p",null,"Here, ",Object(i.b)("inlineCode",{parentName:"p"},"myFunction")," has two arguments, ",Object(i.b)("inlineCode",{parentName:"p"},"arg1")," and ",Object(i.b)("inlineCode",{parentName:"p"},"arg2"),", which are an\n",Object(i.b)("inlineCode",{parentName:"p"},"int")," and ",Object(i.b)("inlineCode",{parentName:"p"},"string")," respectively. It returns a ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"."),Object(i.b)("p",null,"Like in Dark, the body of a function is just an expression, and it\nautomatically returns the result of that expression."),Object(i.b)("p",null,"(see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#advanced-functions"}),"below")," for more details on functions in OCaml)"),Object(i.b)("h3",{id:"standard-library"},"Standard library"),Object(i.b)("p",null,"Most of the code in Dark uses\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/darklang/tablecloth"}),"Tablecloth"),", which has the same\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/darklang/tablecloth/blob/master/bucklescript/src/tablecloth.ml"}),"interface"),"\nfor Bucklescript and native OCaml."),Object(i.b)("p",null,'A lot of the backend uses Core, one of the most popular standard libraries for\nOCaml. The Jane Street Core library has three flavors: Base, Core_kernel and\nCore, each with progressively more expansive functionality. The native version\nof Tablecloth is built on top of "Base". The Dark backend typically uses\n',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://ocaml.janestreet.com/ocaml-core/v0.11/doc/core_kernel/Core_kernel/index.html"}),"Core_kernel"),"\nas we have not transitioned to Tablecloth fully."),Object(i.b)("p",null,"Note: we try to use Core_kernel directly when implementing the language and\nstandard libraries, as Tablecloth is still in flux and has not yet reached\nstability."),Object(i.b)("h3",{id:"int"},"Int"),Object(i.b)("p",null,"An ",Object(i.b)("inlineCode",{parentName:"p"},"int")," is the same in Dark and OCaml, same syntax, same meaning. While Dark\nintends to one day support infinite precision integers, today it uses 63-bit\nintegers, which is the same as OCaml."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let x = 5 in\nx + 6\n")),Object(i.b)("h3",{id:"float"},"Float"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"float")," is the same in Dark and OCaml, both of them are 64-bit floating point\nnumbers."),Object(i.b)("p",null,"In OCaml, there are special operators to work on floats:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let x = 0.1 in\nx +. 0.3\n")),Object(i.b)("p",null,"To convert from floats to ints use ",Object(i.b)("inlineCode",{parentName:"p"},"Float.toInt"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"Float.round"),"."),Object(i.b)("h3",{id:"bool"},"Bool"),Object(i.b)("p",null,"Like in Dark, ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),"s in OCaml are either ",Object(i.b)("inlineCode",{parentName:"p"},"true")," or ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h3",{id:"string"},"String"),Object(i.b)("p",null,"A String in Dark is Unicode (UTF-8), while a ",Object(i.b)("inlineCode",{parentName:"p"},"string")," in OCaml is just bytes\n(we use the ",Object(i.b)("inlineCode",{parentName:"p"},"Unicode_string")," module to convert them to Unicode)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let myString = "some string, escaping is allowed\\nwhich dark doesn\'t support yet" in\nmyString\n')),Object(i.b)("h3",{id:"list"},"List"),Object(i.b)("p",null,"Lists in Dark and OCaml are almost the same. In OCaml, lists use ",Object(i.b)("inlineCode",{parentName:"p"},";")," as separators, like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"[1; 2; 3; 4]\n")),Object(i.b)("p",null,"While Dark technically allows you to create lists that have different\ntypes in them, OCaml emphatically does not."),Object(i.b)("p",null,"To type check a list, you specify it's type like so: ",Object(i.b)("inlineCode",{parentName:"p"},"int list"),", which is a list of ints."),Object(i.b)("h3",{id:"records"},"Records"),Object(i.b)("p",null,"Records are mostly used as objects are in most languages. Like Dark, they only\nhave fields, not methods, and you use functions to manipulate them."),Object(i.b)("p",null,"A record in OCaml has unusual syntax:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'{\n  field1 = 56;\n  field2 = true;\n  field3 = "asd"\n}\n')),Object(i.b)("p",null,"Note that they use ",Object(i.b)("inlineCode",{parentName:"p"},"=")," to connect a field and a value, and ",Object(i.b)("inlineCode",{parentName:"p"},";")," as row\nseparator. The types of the fields do not have to be declared."),Object(i.b)("p",null,"Records are immutable, like almost everything in OCaml, and are updated using an unusual syntax:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let x = { field1 = 56; field2 = true } in\nlet updatedX = { x with field1 = 57 } in\ndoSomethingWith updatedX\n")),Object(i.b)("p",null,"Note that records in Dark are really dictionaries, which is why you\nupdate them with ",Object(i.b)("inlineCode",{parentName:"p"},"Dict::set"),". We're trying to figure out how to split\nrecords and dictionaries apart better in Dark, after which they will be\nmore like OCaml (though hopefully with better syntax)."),Object(i.b)("p",null,"Type definitions for records look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"type person =\n  {\n    name : string\n  ; age : int\n  }\n")),Object(i.b)("h3",{id:"let"},"Let"),Object(i.b)("p",null,"OCaml ",Object(i.b)("inlineCode",{parentName:"p"},"let"),"s have a slightly different syntax to Dark:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let x = 45 in\nx + 23\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"in")," at the end is required."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"let")," also allow destructing in OCaml, although we don't currently use that\nvery often."),Object(i.b)("h3",{id:"if"},"If"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"if")," statements in OCaml are extremely similar to Dark, including that they\nonly allow ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),"s as the condition, and in their syntax."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'if hasAccess user\nthen "Welcome!"\nelse "Access denied"\n')),Object(i.b)("h3",{id:"operators"},"Operators"),Object(i.b)("p",null,"OCaml, in keeping with its odd syntax, has some unusual operators. Most\nimportantly, the equality operator is ",Object(i.b)("inlineCode",{parentName:"p"},"=")," (that's just one equals), whereas in\nmost languages it's ",Object(i.b)("inlineCode",{parentName:"p"},"==")," or ",Object(i.b)("inlineCode",{parentName:"p"},"==="),". ",Object(i.b)("inlineCode",{parentName:"p"},"=")," is very strict equality, equivalent to\n",Object(i.b)("inlineCode",{parentName:"p"},"===")," in languages that have that, such as JS."),Object(i.b)("p",null,"Dark's ",Object(i.b)("inlineCode",{parentName:"p"},"==")," is the same as OCaml's ",Object(i.b)("inlineCode",{parentName:"p"},"="),". OCaml also has a ",Object(i.b)("inlineCode",{parentName:"p"},"==")," operator, but you\nshould never use it."),Object(i.b)("p",null,"OCaml's inequality operator (",Object(i.b)("inlineCode",{parentName:"p"},"!=")," in Dark) is ",Object(i.b)("inlineCode",{parentName:"p"},"<>"),". Most of its comparison\noperators (such as ",Object(i.b)("inlineCode",{parentName:"p"},"<"),", ",Object(i.b)("inlineCode",{parentName:"p"},">"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<="),", etc) only operate on integers."),Object(i.b)("h3",{id:"match"},"Match"),Object(i.b)("p",null,"Dark has a ",Object(i.b)("inlineCode",{parentName:"p"},"match")," statement that is very similar to OCaml's, with slightly\ndifferent syntax:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"match myValue with\n| Some x -> 5\n| _ -> 6\n")),Object(i.b)("p",null,"Notice the ",Object(i.b)("inlineCode",{parentName:"p"},"with")," keyword, and starting the patterns with ",Object(i.b)("inlineCode",{parentName:"p"},"|"),"."),Object(i.b)("p",null,"OCaml also supports more powerful ",Object(i.b)("inlineCode",{parentName:"p"},"match"),"es, for example multiple patterns can match a single branch:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'match myValue with\n| 4 | 5 | 6 -> "between 4 and 6"\n| _ -> "not between 4 and 6"\n')),Object(i.b)("p",null,"OCaml also supports the ",Object(i.b)("inlineCode",{parentName:"p"},"when")," clause:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'match myValue with\n| Some myInt when myInt >= 4 && myInt <= 6 -> "between 4 and 6"\n| _ -> "not between 4 and 6"\n')),Object(i.b)("p",null,"Be careful of very subtle bugs when combining multiple patterns with ",Object(i.b)("inlineCode",{parentName:"p"},"when"),"\nclauses: the entire pattern will fail if the pattern matches when the clause\ndoes not:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let myValue = Some 5 in\nmatch myValue with\n| Some 4 | Some myInt when myValue <> Some 4 -> "this will never succeed"\n| _ -> "this will succeed as a fallback"\n')),Object(i.b)("h3",{id:"variants"},"Variants"),Object(i.b)("p",null,"Dark has a handful of enums for ",Object(i.b)("inlineCode",{parentName:"p"},"Option")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Result")," types: ",Object(i.b)("inlineCode",{parentName:"p"},"Just"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Nothing"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Ok")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Error"),". In the future we will expand this to allow user-defined types as well."),Object(i.b)("p",null,"OCaml supports the ",Object(i.b)("inlineCode",{parentName:"p"},"Option")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Result")," types and we use them a lot. However, the constructors for Option OCaml are named differently: ",Object(i.b)("inlineCode",{parentName:"p"},"Some")," and ",Object(i.b)("inlineCode",{parentName:"p"},"None"),"."),Object(i.b)("p",null,'OCaml calls enums "variants". We use them frequently, especially to represent expressions. For example in ',Object(i.b)("inlineCode",{parentName:"p"},"FluidExpression.ml"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"type t =\n  | EInteger of id * string\n  | EBool of id * bool\n  | EString of id * string\n  | EFloat of id * string * string\n  | ENull of id\n  | EBlank of id\n  | ELet of id * string * t * t\n  | EIf of id * t * t * t\n  | EBinOp of id * string * t * t * sendToRail\n  | ELambda of id * (analysisID * string) list * t\n  | EFieldAccess of id * t * string\n  | EVariable of id * string\n  | EFnCall of id * string * t list * sendToRail\n  | EPartial of id * string * t\n  | ERightPartial of id * string * t\n  | ELeftPartial of Shared.id * string * t\n  | EList of id * t list\n  | ERecord of id * (string * t) list\n  | EPipe of id * t list\n  | EConstructor of id * string * t list\n  | EMatch of id * t * (FluidPattern.t * t) list\n  | EPipeTarget of id\n  | EFeatureFlag of id * string * t * t * t\n")),Object(i.b)("p",null,"Type ",Object(i.b)("inlineCode",{parentName:"p"},"t")," (it's a common convention in OCaml to name the main type of a module\n",Object(i.b)("inlineCode",{parentName:"p"},"t"),") must be one of ",Object(i.b)("inlineCode",{parentName:"p"},"EInteger"),", ",Object(i.b)("inlineCode",{parentName:"p"},"EBool"),", ",Object(i.b)("inlineCode",{parentName:"p"},"EString"),", etc. ",Object(i.b)("inlineCode",{parentName:"p"},"EInteger")," takes two\nparameters, an ",Object(i.b)("inlineCode",{parentName:"p"},"id")," and a ",Object(i.b)("inlineCode",{parentName:"p"},"string")," (we use a string to represent integers as\nBucklescript doesn't have a big enough integer type)."),Object(i.b)("p",null,"To create a ",Object(i.b)("inlineCode",{parentName:"p"},"t"),", you'd do something like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let expr = EInteger (id, "test")\n')),Object(i.b)("p",null,"To get values from them, you pattern match:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'match expr with\n| EInteger (_, str) -> str\n| _ -> "not an int"\n')),Object(i.b)("h3",{id:"lambdas"},"Lambdas"),Object(i.b)("p",null,"OCaml supports lambdas and we use them frequently. They have a different syntax to Dark:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"list\n|> List.map ~f:(fun elem -> elem + 2)\n")),Object(i.b)("p",null,"It's very common to use functions like ",Object(i.b)("inlineCode",{parentName:"p"},"List.map")," which have a parameter called ",Object(i.b)("inlineCode",{parentName:"p"},"f")," which take a lambda."),Object(i.b)("h3",{id:"pipes"},"Pipes"),Object(i.b)("p",null,"OCaml has pipes which are the same as in Dark, except that in OCaml the pipe\ngoes into the final position (in Dark it goes into the first position):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"list\n|> List.map ~f:(fun elem -> elem + 3)\n")),Object(i.b)("h3",{id:"dictionaries"},"Dictionaries"),Object(i.b)("p",null,"Dictionaries (hash-maps, etc) are typically called ",Object(i.b)("inlineCode",{parentName:"p"},"Map")," in OCaml, and are\nunfortunately pretty hard to use, which is one reason you won't see them used\nas much as they really should be."),Object(i.b)("h3",{id:"unit"},"Unit"),Object(i.b)("p",null,"OCaml has a ",Object(i.b)("inlineCode",{parentName:"p"},"unit")," type, whose only member is ",Object(i.b)("inlineCode",{parentName:"p"},"()"),". That's an actual value, for example, all this is valid code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let falseVar = () != () in\n")),Object(i.b)("p",null,"It's typically used to pass to a function which is impure but doesn't have any\nmeaningful arguments, such as ",Object(i.b)("inlineCode",{parentName:"p"},"gid ()")," (which generates IDs)."),Object(i.b)("h3",{id:"error-handling"},"Error handling"),Object(i.b)("p",null,"Typically we use ",Object(i.b)("inlineCode",{parentName:"p"},"Result")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Option"),"s for error handling. You'll very commonly see something like"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let isRailable (m : model) (name : string) =\n  m.functions\n  |> Functions.find name\n  |> Option.map ~f:(fun fn ->\n         fn.fnReturnTipe = TOption || fn.fnReturnTipe = TResult)\n  |> Option.withDefault ~default:false\n")),Object(i.b)("p",null,"To find out if a function goes on the error rail, we search for a function,\nwhich returns an Option. We then use a ",Object(i.b)("inlineCode",{parentName:"p"},"map")," to operate on the option, and\nfinally choose a default in case the Option returned ",Object(i.b)("inlineCode",{parentName:"p"},"None"),"."),Object(i.b)("h4",{id:"exceptions"},"Exceptions"),Object(i.b)("p",null,"OCaml also has exceptions - we hardly use them in the client, but unfortunately\nuse them a little bit on the backend, which we'd like to do less of."),Object(i.b)("p",null,"Unfortunately, it's hard to tell in OCaml when an exception could be thrown."),Object(i.b)("h3",{id:"mli-files"},Object(i.b)("inlineCode",{parentName:"h3"},".mli")," files"),Object(i.b)("p",null,"OCaml code goes in ",Object(i.b)("inlineCode",{parentName:"p"},".ml")," files - each file is a module. OCaml also has interface\nfiles (",Object(i.b)("inlineCode",{parentName:"p"},".mli"),") which describe the module in the ",Object(i.b)("inlineCode",{parentName:"p"},".ml")," file of the same name."),Object(i.b)("p",null,"While they aren't necessary, they make it easier to know what functions are\nunused, they make APIs clearer, and they make compilation faster. As such, Dark\nis moving towards an ",Object(i.b)("inlineCode",{parentName:"p"},".mli")," for each ",Object(i.b)("inlineCode",{parentName:"p"},".ml")," file."),Object(i.b)("h3",{id:"imperative-programming"},"Imperative programming"),Object(i.b)("p",null,"OCaml supports imperative programming which is not in Dark yet. There are mutable values called refs, that can be updated:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let myString = ref "old value" in\nmyString := "new value"; (* update contents of myString *)\nprint_endline myString\n')),Object(i.b)("p",null,"To go along with it, OCaml has ",Object(i.b)("inlineCode",{parentName:"p"},"for")," and ",Object(i.b)("inlineCode",{parentName:"p"},"while")," loop, allowing you to use\nimperative programming in places where it's clearer to do so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"for i = 1 to n_jobs () do\n  do_next_job ()\ndone\n")),Object(i.b)("h3",{id:"advanced-functions"},"Advanced functions"),Object(i.b)("h4",{id:"named-parameters"},"Named parameters"),Object(i.b)("p",null,"Functions support named parameters, which you might see called like this (note the ",Object(i.b)("inlineCode",{parentName:"p"},"~"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"Option.withDefault ~default:5 (Some 5)\n")),Object(i.b)("p",null,"These are useful as a named parameter can be placed in any order (this\nis also useful for piping)."),Object(i.b)("p",null,"You declare functions with named parameters like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let myFunction (regularParamter : int) ~(namedParam : string) : int =\n  ...body of function...\n")),Object(i.b)("h4",{id:"optional-parameters"},"Optional parameters"),Object(i.b)("p",null,"OCaml also supports optional parameters"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let myFunction ?(optionalParam = 3) (regularParamter : int) : int =\n  ...body of function...\n")),Object(i.b)("h4",{id:"the-rec-and-and-keywords"},"the ",Object(i.b)("inlineCode",{parentName:"h4"},"rec")," and ",Object(i.b)("inlineCode",{parentName:"h4"},"and")," keywords"),Object(i.b)("p",null,"By default, OCaml functions are not recursive: they cannot call themselves. To allow a function to call itself, add the ",Object(i.b)("inlineCode",{parentName:"p"},"rec")," keyword:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let rec myFunction (var : int) : int =\n  if var > 6 then 6\n  else myFunction (var + 2)\n")),Object(i.b)("p",null,"Similarly, if two functions need to call each other, they need to be aware of each other (OCaml programs require all functions to be defined before they are used). The ",Object(i.b)("inlineCode",{parentName:"p"},"and")," keyword allows this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let firstFunction (var : int) =\n  (secondFunction var) + 2\n\nand secondFunction (var : int) =\n  if var > 6\n  then firstFunction 0\n  else firstFunction (var + 1)\n")),Object(i.b)("h4",{id:"partial-application--currying"},"Partial application / currying"),Object(i.b)("p",null,"Occasionally you'll see a function called with fewer arguments than it has parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let myFunction (param1: int) (param2 : string) =\n  ...body...\n\nlet myOtherFunction = myFunction 6\n")),Object(i.b)("p",null,'This is called "partial application", in that the function is only partially called (this is often called Currying in the functional language community). This just means that some parameters are filled in, and you now have a function which can be called with the remaining parameters:'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),'let () =\n  myOtherfunction "final argument"\n')),Object(i.b)("p",null,"This is the same as if it were defined as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"let myOtherFunction (param : string) =\n  myFunction 6 param\n")),Object(i.b)("h3",{id:"modules"},"Modules"),Object(i.b)("p",null,"OCaml has a complex module system, which takes some time to grasp. Modules can have parameters, have inheritance, and each other these features uses a complicated, difficult to grasp syntax."),Object(i.b)("p",null,"We only barely use modules in the Dark codebase, so here's what you need to know:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"all files are automatically modules. Note that in the backend,\nmodules need to have their directory names included, but not in the\nclient.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"using a module is simple:"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"open MyModule1 (* all function and types are available *)\nmodule M = MyModule2 (* access members as if the module was called M *)\n\nlet x = MyModule3.myFunction 6\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the syntax of creating a module is also straightforward:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ocaml"}),"module MyModule = struct\n  type t = int\n  let myfunction x = x + 2\nend\n")),Object(i.b)("p",null,"We typically ",Object(i.b)("inlineCode",{parentName:"p"},"open")," the ",Object(i.b)("inlineCode",{parentName:"p"},"Prelude")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Types")," modules at the top of all\nfiles (which in turn open other modules, like ",Object(i.b)("inlineCode",{parentName:"p"},"Tablecloth")," on the\nclient)."),Object(i.b)("h3",{id:"classes-and-objects"},"Classes and Objects"),Object(i.b)("p",null,"OCaml supports traditional object oriented programming, though it's not used\nvery much and very discouraged. The only place we really use it for\ninteracting with JS (the Bucklescript JS interop code compiles it to direct OO\nin JS)."),Object(i.b)("h2",{id:"ocaml-vs-reasonml-vs-bucklescript---whats-the-difference"},"OCaml vs ReasonML vs Bucklescript - what's the difference?"),Object(i.b)("p",null,"The backend is in OCaml and the frontend is in Bucklescript. Also, something\nabout ReasonML. What's the difference? The simplest answer is that these are\nall the same."),Object(i.b)("p",null,"Bucklescript and OCaml are both compilers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the native OCaml compiler compiles programs to binaries. The backend uses native OCaml."),Object(i.b)("li",{parentName:"ul"},"the Bucklescript compiler compiles programs to JS. The editor uses Bucklescript.")),Object(i.b)("p",null,"ReasonML and OCaml are both syntaxes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ReasonML is a JS-like syntax for the OCaml language"),Object(i.b)("li",{parentName:"ul"},"OCaml has a default syntax (we use this in the Dark repo for both the backend and the client)")),Object(i.b)("p",null,"ReasonML is also often used to refer to the community around compiling to JS\nusing Bucklescript, and associated technologies."),Object(i.b)("p",null,"Again, the simplest mental model is that all the words mean the same thing."),Object(i.b)("p",null,"Specifically:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the Dark backend uses the native OCaml compiler and the OCaml syntax"),Object(i.b)("li",{parentName:"ul"},"the Dark client uses the Bucklescript compiler, and the OCaml syntax.")))}b.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),b=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,d=p["".concat(r,".").concat(u)]||p[u]||m[u]||i;return n?l.a.createElement(d,o(o({ref:t},s),{},{components:n})):l.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);