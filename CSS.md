CSS:

Stylesheet language describe presentation of document written in HTML or XML.

Rule based language (define styles how a element should be)

Meaning:

Cascade – in order , hierarchy apply top to down , general to specific

Style – presentation of a document

Sheet – document where the presentation rules are written

History:

Before 1994:

No styling capabilities

None of the style sheet language proposed to W3C got acceptance

1994:

Hakon wium lie worked with Tim berners lee at CERN proposed CSS with cascading as key feature

1996:

First official specification CSS1 published by W3C

Fundamental features font , color , margin and box model.

Microsoft Internet explorer first commercial browser to support CSS

1998:

CSS2 positioning,z-index,media types

CSS 3 was developed by separating into modules supporting incremental development and adoption of new features

CSS 2 has errors which was later corrected and revised in 2011

H1{

Font-size: 20;

color: blue;

}

This is wholey a rule consisting of two declarations, h1 is the selector ,fontsize and color properties assigned with a value.

CSS specificity:

Determines which style declaration to apply when two or more rules point to the same element.the declaration with the highest specificity win

Specificity order: (as always specific to general )

Inline,internal,external

Inline,ID,class,element

Types of selector:

Universal selector: (\*)

Matches elements of all type

ID selector(#)

Class selector: (.)

Type selector or element selector: (tag name)

Child selector: (>)

Direct child of specified parent

Descendant selector: (whitespace)

All the nested inside the ancestor element

Attribute selector: \[\]

\[attribute name\] – matches elements with this attribute name

\[attribute = value\]

\[attribute~=value\] the attribute content contains the value in it (matches for only independent whole words not substrings)

\[attribute$=value\]

Content of attribute ends with value given

\[attribute^=value\]

Content of attribute starts with value given

\[attribute|=value\] 

Content of attribute either should have the whole word ,or followed by a hyphen

Often used to match the language codes like en,en-us to apply fonts or quotes based on the language used.

\[attribute\*=value\]

Content of attribute has atleast one occurance of value in it (matches for independent as well as substrings)

\[attribute operator = value i\]

I or i before closing bracket means to compare value case insensitively

\[attribute operator = value s\]

S or s before closing bracket means to compare value case sensitively

State selectors: (using pseudo classes)

The purpose of pseudo class is to select and style the elements based on their state or condition rather than using class or id

Select elements based on the info that lies outside the document tree

Ex:

Based on elements position (:first-child), status of form elements(:checked) , user interaction with an element (:hover)

Consist of colon followed by the pseudo class name

Functional pseudo class contains () to define arguments

The element to which the pseudo class is attached is called as an anchor element

Ex:button:hover – button is an anchor element

|     |     |     |
| --- | --- | --- |
| **Feature** | **Pseudo-classes** | **Pseudo-elements** |
| **Purpose** | Styles an element based on its state, position, or interaction. | Styles a specific portion of an element or inserts new content. |
| **Syntax** | Uses a single colon ( **:** ). | Uses a double colon ( **::** ). The single colon is supported for some older pseudo-elements for backward compatibility. |
| **Affects** | Modifies properties of existing elements as if a class had been added to them. | Acts as if a whole new element were added to the DOM (Document Object Model). |
| **Examples** | :hover, :focus, :first-child, :nth-child(), :visited. | ::before, ::after, ::first-letter, ::first-line, ::selection |

Elemental pseudo class:

:heading

Selects all levels of headings

:defined

Mostly used with the HTML custom elements because the standard elements are always defined and if used defined with them it is meaningless as it always satisfies the condition

Main purpose is avoiding clumsy rendering of webpage due to partial loading ,as we apply styles when the element is not defined state.it is mainly required because in loading custom elements , there is a gap between not defined and defined state ,HTML and CSS loads first and then javascript loads when loading HTML and CSS the browser identifies it is an element because it is enclosed between <> but does not know its functionality as it is a new one.it comes to know about the element functionality only after loading javascript. Here if there is a slow network this gap will render the webpage clumsily.

This pseudo class comes to play in this situation.

Element display state pseudo class:

:open

Element with open close functionality which is currently open

Ex: form drop down using select , details element , dialog element , input type with pickers

:popover-open

Popover is a global attribute used with any HTML element  when it is invoked, it will be placed on top of the content, not interfere with the position of other HTML elements..it can be single element or entire section of elements

Popover element is invisible until invoked by another element called popovertarget element which has popovertarget attribute.

Popovertargetaction specifies the action a button performs on a popover element

- toggle: Switches between hidden/shown (default).
- show: Only displays the hidden popover.
- hide: Only hides an active popover.

:modal

It selects elements which blocks the background (i.e) the rest of the page remains uninteractive andinactive.

Ex: dialog element when invoked using showmodal()

Multiple elements can be selected by the :modal pseudo-class at the same time, but only one of them will be active and able to receive input. this is because many element can be called using showmodal since it makes other elments inactive only one can be active at a time and that only can have that styles defined

Stack approach is used for rendering them when multiple elements called using showmodal they are pushed onto the stack and renders one by one based on the stack rule LIFO.

Grouping selectors:

Multiple selectors can be combined as comma separated when want to apply same declarations

Invalid selector list:

If in the group if one selector fails the styles will be ignored completely it will not even be applied for remaining valid ones.

If applied applied to all , if any one selector fails no one gets the style like having a and condition