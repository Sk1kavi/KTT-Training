HyperText Markup Language:

HTML is **HyperText** (non-linear, linked text) **Markup Language** (structure-providing tags).

In a linear text you read page by page in order but In case of a webpage the text contains links to other pages so it is not necessary to follow a specific order.

Not case sensitive

History of HTML:

Tim berners lee :- created at CERN (**European Organization for Nuclear Research)**.

1991 for researchers to share documents over internet

1993 version 1.0 oficial realeasd version, 18 basic tags simple document structure

1995 version 2.0 by IETF(Internet engineering task force) complex web layouts supports forms and tables , user inputs , images , (first official standard)

1997 version 3.2 by W3C frames , interaction using javascript , text flow

1999 version 4.01 by W3C , major update separated styling from structure CSS from HTML

2000 XHTML based on XML strict syntax rules (diversion from html ) difficult to follow for developers worked slow .

2014 HTML5 by W3C and WHATWG native support for audio video and semantic tags , added API s geolocation , web storage ,drag and drop

Programming languages define logic whereas markup languages define the layout and appearance of content

Markup language used to structure and display web pages

Instruct the software how to interpret or display content.

index.html, which is generally used to contain a website's home page content. It's also common to see subfolders containing their own index.html files, so a website can have multiple index files in different places.

Tag:- markup notation to define the beginning and end of a component

Specific keywords enclosed in angle brackets

Element :- complete component (start tag+content +end tag)

Can also contain nested elements

Void elements: - no closing tag . elements that cannot contain other HTML content.ex: img , br,wbr,link,col,input,etc..

XHTML requires void elements to be self closing tags ex: &lt;br/&gt;

Attributes:

Extra information about the content

Separated by spaces

Boolean attributes:

If an attribute is added it is Default to value true irrespective of what value it contains or if no value.  The browser only checks for the attribute's existence.

Attribute not added value is false.

**Open** Boolean attribute used along with details and dialog element to make them open when the page loads

Ex: &lt;input id="second-input" type="text" disabled /&gt;

Set to true input box disabled.

&lt;input id="second-input" type="text"/&gt;

Set to false input box enabled

Attribute values can be enclosed by double or single quote.

the characters &lt;, &gt;, ", ', and & are special characters. They are parts of the HTML syntax itself. 

| **Literal character** | **Character reference equivalent** |
| --- | --- |
| <   | &lt; |
| \>  | &gt; |
| "   | &quot; |
| '   | &apos; |
| &   | &amp; |

&lt;!-- and --&gt; HTML comments

&lt;!DOCTYPE&gt;:

case-insensitive declaration to activate full standards mode &lt;!DOCTYPE html&gt;

trigger "standards mode" in the browser. the browser uses the latest, standards-compliant rendering engine, 

&nbsp;Without a correct &lt;!DOCTYPE&gt; declaration, browsers may enter "quirks mode". In quirks mode, the browser attempts to emulate the behavior of very old, non-standards-compliant browsers

https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements

main should be the immediate child of the body tag .should not be nested with other

section is the grouping content with a heading

article contains independent content

header tag can be child of body(header of webpage) or section (header for that section)

if want to group some elements or items together just to apply a style to them and they do not have the characteristic of any semantic element , we can use div ( block level non-semantic element) and span (inline level).

Description list:

&lt;dl&gt; description list

&lt;dt&gt; description term

&lt;dd&gt; description definition

set of items and their associated descriptions

terms and definitions, or questions and answers.

&nbsp;permitted to have a single term with multiple descriptions

**why use the content with correct semantic tag:**

the webpage should be readable to everyone even the persons with disablility .

for that reason only we use the content inside correct semantic tags

another important reason is SEO (Search Engine Optimization) , the website which is well readable to search engine is identified and made visible to user .

semantics tags is of no use for normal readers of webpage , it is useful to machines to understand what the content is about.

tags like &lt;article&gt;, &lt;main&gt;, &lt;section&gt;, &lt;blockquote&gt;, and &lt;cite&gt; do not "do" anything special to the functionality of the page. If you swapped them all for &lt;div&gt; tags, the website would look exactly the same to a human reader.

However, they serve a massive purpose for **non-human** visitors.

Screen readers (used by people with visual impairments) don't "see" layout; they "read" the code.

- If you use a &lt;div&gt;, the screen reader just says "text."
- If you use &lt;blockquote&gt;, the screen reader announces, **"Quotation start,"** giving the user context that these words belong to someone else.

Blockquote:

used to define a section that is quoted from another source.

&nbsp;include a cite attribute inside the opening tag to provide a URL for the source. This attribute is **invisible** to users but is used by search engines and screen readers

Browsers typically indent &lt;blockquote&gt; elements with a left and right margin.

Cite :

text-level element used to define the title of a creative work

&nbsp;Most browsers render the content of a &lt;cite&gt; tag in _italics_

Q:

Browsers automatically insert quotation marks around the text

- Use the **&lt;q&gt;** element for short, inline quotations.
- Use the **&lt;blockquote&gt;** element for longer, block-level quotations that typically span multiple lines or paragraphs and are visually indented by default

Abbr:

If providing the expansion in addition to the abbreviation makes little sense, and the abbreviation or acronym is a fairly shortened term, provide the full expansion of the term as the value of the title attribute.

Title attribute value shown when cursor is placed in it.shown in dotted lines underlined.

Code – contains the programming code

Var – variable names

Kbd – keyboard key names

Ex:

&lt;p&gt;Select all the text with &lt;kbd&gt;Ctrl&lt;/kbd&gt;/&lt;kbd&gt;Cmd&lt;/kbd&gt; + &lt;kbd&gt;A&lt;/kbd&gt;.&lt;/p&gt;

Time:

&lt;time&gt; tag provides a **machine-readable** format of the date/time, while the content inside the tags is for humans

&lt;time datetime="2025-12-25"&gt;Christmas Day&lt;/time&gt;

&lt;a&gt;:

Href-hypertext reference

when an &lt;img&gt; tag is enclosed within an &lt;a&gt; tag, the image acts as a hyperlink, and when it is used with &lt;map&gt; and &lt;area&gt; tags, specific coordinates within the image become clickable areas that also function as hyperlinks

while using &lt;a&gt; for img it can contain only one hyperlink but in case of map it contain multiple hyperlink for each coordinates marked using area

anything enclosed between &lt;a&gt; becomes hyperlink correct . exceptions: nested links a inside a , buttons , form elements.

Title attribute when used displays when placed cursor on the content given

When using urls for pointing a file in directory use proper access link:

Ex: access app.jsx from index.html use app/app.jsx

For accessing nav.js from app.jsx

../components/nav.js **( href links also reuires correct path same as in projects importing lines )**

href can contain absolute or relative path:

relative means relative to the file from which acces is made

absolute path always starts from root directory

internal link: - resource on your site (can be relative or absolute)

external site:- resource on s different site (only absolute)

document fragments:

href can also link to specific section in a document using ids

&lt;h2 id="mailing_address"&gt;Mailing address&lt;/h2&gt;

&lt;a href="contacts.html#mailing_address"&gt;mailing address&lt;/a&gt;.

Download attribute when liking to download a particular item when clicked

By default links open in same tab to change use target attribute

- Even when links are opened in the same tab by default, users can still choose to open them in a new tab, using keyboard shortcuts or context menu options. On the other hand, links that open in a new tab are hard to open in the same tab.
- Screen reader users may be confused by links that open in a new tab, as they may not realize that the new tab has opened, and they may lose context about their location on the page.

Common approach open external links in new tabs and internal links in the same tab.

Email links:

mailto: URL scheme used to link email address

if no destination address provided it simply opens the email window without destination address , if given email address opens email window along with the destination address.

Other information like subject cc and body can also be included .Each field and its value specified as a query term starts with ? and each field separated by &

Multimedia:

Type of medium allowing information to be easily transferred from one location to another

Presentation of text,audio,video,pictures with links to allow users to navigate,engage ,create and communicate using computer.

Linera multimedia:

Non interactive multimedia

End user cant control content of application

Providing information to large group of people

Non linear multimedia:

End user have navigational control

Games,websites

Multimedia components:

Text:

Characters are used to form words and paragraphs.

Variety of fonts and sizes

Graphics:

A picture is worth thousand words .

Graphics are the heart of multimedia presentation

Adobe photoshop , popular photo editing program

Animations:

Sequence of still photographs

Make a still image to move

Animation viewing programs ex:Internet explorer

Video:

Moving image accompanied by sound

Images appear to be in full motion

Video viewing programs: ex: windows media player

Audio:

Serious aspect of multimedia

Any sound

Decibels are the unit of measurement

Windows media player

Format:MP3,MIDI

&lt;img&gt; and &lt;video&gt; replaced elements (content and size defined by external source)

Reason for using alt:

Useful when scree readers are used

Where the browser is unable to render image such as in text only browsers it displays the image alt text

should not use width and height to _resize_ images with unsuitable image aspect ratio it will end up in unfit image.

Before using an image ensure it has permission to access

Types of license:

All rights reserved :

copyright holder retains all exclusive rights 

Permissive license :

Open Source

Public domain (no rights reserved)

Img:

Void element

images part of main content

No caption required

Figure:

Semantic container element

Group images

Captioin required

Standalone unit

Multiple images sharing single description

CSS background image property:

Purely decorative images

Video and audio:

&lt;video controls&gt;

Controls : to control video and audio playback (browsers own control interface) start , stop and adjust volume

&lt;source&gt; to add multiple formats of a same video file so that browser can choose the format which is supported by it .

Type attribute if specified the browser automatically skips the file else it will try to display the file and then finds it is not supported which is time consuming.

&nbsp;**fallback content** — this will be displayed if the browser accessing the page doesn't support the &lt;video&gt; element

codec(coder decoder): compress large files of video and audio for rendering

video features:

width="400" height="400" autoplay loop muted

for people who do not hear or some times want to avoid hearing in that situation requires a text transcript or translation .

WebVTT format:

text files containing multiple strings of text along with metadata such as the time in the video at which each text string should be displayed, and even limited styling/positioning information.

Text strings are called cues :-

Subtitles:-translations of foreign materials for people who do not understand the spoken words in the audio

Captions:- for people who don’t hear

Timed descriptions:- spoken by media player to describe important visuals to blind

.vtt extension

&lt;track&gt; element:

&nbsp;Kind attribute to specify whether the cues are subtitles, captions, or descriptions

Srclang to tell browser what language used in the cue

Label to help readers identify language they are searching for

Button – trigger functionality

Action attribute - Contains a path to the page that we want to send the submitted form data to, to be processed

grouping form elements together – fieldset

explicit form label:

using label for attribute refering using the input field id

implicit form label:

just give the input field enclosed by label and its content

explicit decalaration mostly preferred as it is understandable when code grows complex

Form validation:

It is too easy to turn off JavaScript or alter client-side code so that the validation no longer works.

&nbsp;Server-side validation is not so good at giving users hints about incorrect data because the data has to go to the server to get validated

&lt;output&gt;:

Show results of calculations

For :

Ids of elements which are used in calculation

Name:

Used to reference it in javascript

Form :

Links output to the specific form if the output is placed outside the form structure

Aria-live region:

Dynamic content changes without requiring a page reload

Hidden input type:

Does not visible to user in UI but can be seen in browser developer tools so should not contain sensitive and confidential info

When form is submitted the hidden field data is sent along with that.

Ex:  When a user edits an existing entry (like a blog post or product), a hidden input field can store the unique ID of that database record.

&nbsp;store and submit security tokens

&nbsp;In multi-page forms, information from previous steps can be stored

Colgroup:

Must be the immediate child of table element

Represents columns from strating left hand side

Can have span and style sttribute

HTML validator can be used to point out the errors in the file.

&lt;dialog&gt; element:

To create popup or modal dialog boxes

Popup remains open and rest of the page active and interactive

When non modal dialog box created the rest of the page remains active and interactive

When the modal dialog box creates the rest of the page go inactive and uninteractive until the dialog closes

Can be invoked in three methods:

Show() creates dynamic non-modal

Showmodal() creates dynamic modal

Both requires javascript code

Open attribute in dialog element (static popup)

Using only html requires form method attribute to be set to “dialog” value

When the form is submitted it does not invoke http request instead closes the dialog element .