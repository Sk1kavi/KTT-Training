**Web browser: (software)**

Renders web pages

Browser renders the search engine page by default

**Web Service:**

Web service is hosted in server , web service handles the response logic and database queries

Any software, application, or cloud technology that uses standardized web protocols (HTTP or HTTPS) to connect, interoperate, and exchange data messages – commonly XML (Extensible Markup Language) – across the internet is considered a web service.

**Web server:**

Host applications and services . hosting- contains the all the files of the application

**Search engine: (service)**

Special web service helps to find web pages

When a client wants to access a webpage, a copy of the webpage code is downloaded from the server to the client machine, where it is rendered by the browser and displayed to the user.

&nbsp;**internet connection:**

Allows you to send and receive data

street between your house and the shop.

**Transmission Control Protocol** and **Internet Protocol** (TCP/IP):

&nbsp;how data should travel 

transport mechanisms like a car or a bike

**DNS:**

address book for websites

The browser needs to find out which server the website lives on, so it can send HTTP messages to the right place

looking up the address of the shop before you visit it

**IP address:**

Ipv4 –:

limited address space

Nearly exhausted

&nbsp;To deal with this, Network Address Translation (NAT) is used to allow multiple devices on a private network to share a single public IP address, though this adds complexity and breaks end-to-end connectivity.

|     |     |     |
| --- | --- | --- |
| **Feature** | **IPv4** | **IPv6** |
| **Address Size** | 32-bit | 128-bit |
| **Address Space** | ~4.3 Billion (2 power 32) | ~340 Undecillion (2 power 128) |
| **Notation** | Decimal (192.168.1.1) | Hexadecimal (2001:db8::1) |
| **NAT Needed?** | Yes (often) | No  |

The private ip address identifiable only within the network (LAN), and cannot be used for public identification which is done through the public ip address of router.

Each network (router) has a public ip address which is commonly used by the LAN systems.

Ex: when a request sent by a system in a network the router changes the private ip of the system to its own public ip and then forwards the request to the server , the server knows the request came from this network but not from which particular system.

This translation of private ip to public ip is called NAT (network address translation)

Network Address Translation (NAT) allows multiple devices in a private network to access the internet using a single public IP address. It helps conserve IPv4 addresses and hides internal systems for added security.

- Translates private IPs to public IPs and vice versa.
- Prevents IPv4 address exhaustion
- Adds security by masking internal devices
- Allows thousands of devices to share one public IP

A router connects multiple devices and assigns local ip address (LAN)

Rouer has a table to store the local ip address fom which the request came so that it sends the response correctly when received

communication between two network happens via the routers from one route to another

when multiple routers combine and communicate using their public ips it forms the WAN

**Device Ip address changes:**

device changes its IP address for a different reason: it "borrows" a temporary identity from whatever local network it joins

**1.The DHCP Handshake**

Most Wi-Fi networks use the **Dynamic Host Configuration Protocol (DHCP)** to automate address assignment. 

- **Discovery:** As soon as you connect to a new Wi-Fi, your device broadcasts a "Discover" message to find a DHCP server (usually your router).
- **Leasing:** The router picks an available address from its internal "pool" and offers it to your device.
- **Acknowledgment:** Your device accepts the offer, and the router officially "leases" that IP to you for a set time (e.g., 24 hours). 

**DORA** sequence :

**D**iscover , **O**ffer, **R**equest , **A**cknowledge

**2. Private vs. Public IP Changes**

When you move from home to a coffee shop, two different types of IP addresses actually change:

- **Private (Local) IP:** This is your device's ID within that specific room. One router might give you 192.168.1.5, while another gives you 10.0.0.12.
- **Public (External) IP:** This is the address the rest of the world (and websites) see. It belongs to the ISP powering that specific Wi-Fi. 

**Network Ownership:** An IP address doesn't belong to your computer; it belongs to the network. When you leave a network, you "return" the address so another device can use it.

**Unique Identification:** Every device on a single network must have a unique address to receive the correct data. If you kept your home IP at a coffee shop, it might conflict with someone already there, causing both connections to fail

&nbsp;If a router's DHCP server fails, your device might assign itself a temporary address starting with 169.254.x.x (called **APIPA**), though this won't let you browse the internet.

[**Automatic Private IP Addressing**](https://www.google.com/search?q=Automatic+Private+IP+Addressing&rlz=1C1RXQR_enIN1155IN1155&oq=apipa&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDEzMTlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&ved=2ahUKEwjPvv2O_vOSAxX9V2wGHYDUAD0QgK4QegYIAQgAEAQ) **(APIPA)** is a [Windows feature](https://www.lenovo.com/in/en/glossary/what-is-apipa/) that automatically assigns a local IPv4 address (169.254.0.1–169.254.255.254) to a device when a DHCP server is unavailable.

- When a device configured for DHCP fails to connect to a DHCP server during boot, it self-assigns an address from the reserved 169.254.x.x range with a subnet mask of 255.255.0.0.
- **Conflict Resolution:** The device uses ARP to check if the randomly chosen APIPA address is already in use; if so, it selects another one.
- **Limitations:**APIPA addresses cannot be routed, meaning devices with these addresses cannot communicate with the internet or other networks.
- **Troubleshooting:** An APIPA address often indicates a failure in the DHCP server or network connectivity issues.
- **Usage:** It is commonly used in small, peer-to-peer, or standalone networks.

why APIPA is actually helpful:

**1\. Peer-to-Peer Communication**

Even without a router or a central server, two computers (or a computer and a printer) can still talk to each other.

- **Example:** If you connect two laptops directly with an Ethernet cable, neither has a DHCP server. APIPA allows them to automatically assign themselves addresses in the same range so you can still transfer files or play a LAN game.

**2\. Emergency Troubleshooting**

APIPA acts as a **diagnostic flag**.

- If your IP was just blank or 0.0.0.0, it would be hard to tell if your network card was broken or if the server was just busy.
- Seeing 169.254.x.x tells a technician immediately: _"The hardware is working, but we have a communication gap with the DHCP server."_

**HTTP:**

language you use

application-layer protocol used for client-server communication on the World Wide Web

GET (retrieving data), POST (creating resources), PUT (updating resources), DELETE (removing resources), and PATCH (partial updates).

**Process behind displaying website:**

**Overall process:**

|     |     |     |
| --- | --- | --- |
| **Step** | **Action** | **The "Human" Equivalent** |
| **1\. DNS Lookup** | Browser asks a DNS server for the IP address of the domain. | "What is the phone number for the Pizza Shop?" |
| **2\. TCP Handshake** | The browser and server establish a reliable "pipe" to send data. | **Ring... Ring... "Hello?" "Hi, I'd like to talk." "Okay, I'm listening."** |
| **3\. TLS Handshake** | The two parties agree on encryption keys to keep the chat private. | "Let's speak in a secret code so no one can eavesdrop." |
| **4\. HTTP Request** | The browser finally asks for the actual webpage. | "Great, now that we're secure, please send me the menu." |

The TCP protocol does not have built in security so it must require TLS

type the website name (browser)

search for the ip address of website(DNS)

browser -> server (HTTP request message to send a copy of the website)

server -> browser (200 ok and packets)

packets -> small chunks of the website (website files)

browser assembles the chunks into a complete web page and displays

Large websites are commonly made available on multiple servers, so that they load efficiently for different users worldwide. As a result, the IP address may vary depending on where you are.

**DNS lookup:**

user request

check local cache:

browser cache: stores if site already visited

Operating system cache: maintains DNS cache for speed lookup

Router cache: stores the previously requested IP address

Query DNS resolver (provided by ISP)

Contact Root server

Query TLD server

Authoritative name server (stores domain name to IP mapping)

Returns IP address to resolver

Resolver to user

**Port Assignment:**

Once the browser has the IP, it asks the **Operating System (OS)** for a free **Source Port .**

External Files: If the website loads a video from YouTube or a font from Google, the browser performs a _new_ DNS lookup and gets a _new_ set of ports for those external servers.

|     |     |
| --- | --- |
| **Item being "Fetched"** | **Where it likely lives in the Cloud** |
| **The HTML Code** | The **Main Web Server** (The "Home Base"). |
| **Images & Videos** | A **Storage Bucket** (like Amazon S3) or a **CDN**. |
| **User Data** (Your profile) | A **Database Server** hidden deep in the data center. |
| **Ads or Analytics** | A **Third-Party Server** (Google or Facebook's cloud). |

with both IP and Ports ready, does the browser start the "Three-way Handshake" to open the connection.

"The Server" is the **role** the computer plays (the giver of data), and "The Cloud" is the **infrastructure** where that computer lives.

One physical computer in a data center might be acting as 50 different "servers" for 50 different websites simultaneously.

**Establishing connection between browser and server identified:**

**TCP handshake:**

TCP connection establishment:

**The "Three-Way" Logic:** The TCP handshake is often called the **SYN, SYN-ACK, ACK** process.

1.  **SYN:** Client sends a synchronization request.
2.  **SYN-ACK:** Server acknowledges and sends its own sync request.
3.  **ACK:** Client acknowledges the server.

**TLS handshake:**

Client Hello: The client sends a message to the server indicating that it wants to establish a secure connection. This message includes the TLS versions it supports, a list of supported cipher suites, and a randomly generated number.

Server Hello: The server responds with its chosen TLS version, selected cipher suite, and its own random number. If the server requires client authentication, it may also request the client's certificate.

Certificate (Optional): The server sends its digital certificate to the client. This certificate contains the server’s public key and is used by the client to verify the server’s identity.

Key Exchange: The client verifies the server’s certificate (if provided) and then generates a pre-master secret. This secret is encrypted using the server’s public key and sent to the server. Both the client and server now have the information needed to compute the same session keys.

Session Keys Generation: Both the client and server use the exchanged random values and the pre-master secret to independently compute the session keys, which are symmetric keys used to encrypt and decrypt the actual data.

Finished: Both sides send a "finished" message encrypted with the session key to confirm that the handshake is complete and that subsequent communication will be encrypted.

Each interaction between the client and server after this will be encrypted using the session key for each request and response. after this tls shandshake client sends the request of the website by creating a session key and encrypting with it .the server decrypts it using the session key generated by server since the client and server accepted same tls version and algorithm during handshake and uses the same master key random number session key will be the same .after this the server sends the website in form of packets each packet is encrypted using the same session keys .

**\[Pre-Master Secret\] + \[Client Random\] + \[Server Random\] = Session Key**

The session key generated is discarded only when the connection closes (i.e) when the tab is closed or connection is lost.

When website reloaded (i.e) refreshed, rehandshake happens .

**Session Resumption:**

**Session interruption due to internet disconnectivity:**

**TCP- transport layer**

**HTTP- application layer**

A session ticket is an encrypted blob of a session key and associated information which is sent by the server to the client at the end of a TLS handshake 

Browser stores this ticket in its memory

Suddenly, your Wi-Fi cuts out. The **TCP pipe is broken**. Because the pipe is gone, the **Session Key** you were using to encrypt the website packets is now technically useless.

When your internet comes back a few seconds later, your browser needs to talk to Google again. Instead of doing the whole "long conversation" (TLS 1.2/1.3 full handshake), it does this:

TCP handshake : new pipe is built

TLS handshake: sends client hello with the session ticket

Server identifies the client and carry out the communication where left off by using new session key.the browser (HTTP) tells the server which file is received as last during previous session.

TCP: handles the missing of packets.

Once the packets of a file completely arrived and it is sent to http .

HTTP: knows only the file that is received not about its form of arrival.it does not know about the file until it sent by the TCP . TCP sends the file only when all the packets of the file are received.

Example: i have typed google.com and three process (DNS , TCP , TLS) completed and during the session of receiving the webpage files for display i lost the connection so when connection comes again the browser uses this session ticket to continue from where left.

Packets:

- A **header**, which includes details such as the server and client IP address, the packet number, the total number of packets in the transmission, and details of the protocols used in the transmission.
- A **payload**, which contains the actual data sent in the packet.

quicker and easier for the client to request the missing packets rather than an entire file.

HTTP2:

HTTP3:

**Rendering the webpage received:**

- **Blink:** Powering Chrome, Edge, and Opera.
- **Gecko:** Powering Firefox.
- **WebKit:** Powering Safari and all browsers on iOS.

The **rendering engine** is the "brain" that translates raw website code into the visual page you interact with. Without it, a browser would simply be a file downloader—you would see only raw text and code (bytes) instead of a styled website.

Parses the HTML document and creates the DOM (Document Object Model) containing the html structure

Parses the CSS stylesheets and inline styles provided and creates CSSOM (CSS Object Model) with the style rules

Combines the DOM and CSSOM to create the render tree containing both what to display and how to display

thus paints the pixels in the screen .

when script tag encountered , javascript file is parsed which have the possibility of changing the layouts and content so repainting happens

DOM:

A Document Object Model (DOM) tree is a hierarchical representation of an HTML or [XML](https://en.wikipedia.org/wiki/XML) document. It consists of a root node (document object) , which is the document itself, and a series of child nodes that represent the elements, attributes, and text content of the document. Each node in the tree has a parent node, except for the root node, and can have multiple child nodes.

&nbsp;[**Status codes**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works#other_status_codes)**:**

https://contabo.com/blog/http-response-codes-server-statuses/?utm_source=google&utm_medium=cpc&utm_campaign=core-prospecting-india-pmax&utm_term=&utm_content=&gad_source=1&gad_campaignid=22599241641&gbraid=0AAAAAD_Qy-cN6OtB8z9bgo6Er1YOymBNd&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3A8ss-ohjUeSD5-M00eDIK4al9uMU2oJAtmq-iOxcGtSpvAGeUTfb4aAgZVEALw_wcB

1XX – request successfully received and being processed by the server, usually does not seen at user side , works behind the scenes .

2XX – successful. Server received , understood the request and delivered what you asked for.

3XX – redirection.content moved to new location and the server is sending the new location.

4XX - client side errors

5XX – server side errors

200 successful

201 created a resource

301 permanently moved to a new location , provided in the response , used for redirecting content

400  request isn't in a format , errors in it

403 the server knows who the client is, but they don't have permission to access the requested page.

404 cannot find , URL is wrong or if content is deleted without putting a redirect in place.

503  problem with the server. Server overload retry after sometime

**Components of URL:**

&nbsp;locations of unique resources on the internet.

URL = web address + protocol

Web address is what you type in the browser search bar ex: google.com

google.com

after typing by default it expands to complete URL.

[**https://www.google.com/?zx=1771914256105&no_sw_cr=1**](https://www.google.com/?zx=1771914256105&no_sw_cr=1)

Parts:

Protocol (https)

Subdomain (WWW)

Domain (google)

TLD (Top Level Domain) (.com)

Port number (443 for https , 80 for http) hidden

Path - directs you to a specific page or folder

Query string (Starts with a ?)

**Port number:**

Port numbers are assigned by the operating system .

It is used in the transport layer for directing to correct application

The default port number of http (80) , https (443) is the destination port in server .

Each protocol has its own port in server to handle the request.

In the browser we open multiple websites via https , they have different ports assigned by OS.

When a new tab is opened the browser request the OS for the port number allocation , OS assigns next ephemeral port in range (49152–65535).

|     |     |     |
| --- | --- | --- |
| **Connection Component** | **Role in Communication** | **Example** |
| **Local IP** | Your computer's address | 192.168.1.5 |
| **Source Port** | A unique "return address" for the tab | **54321** |
| **Remote IP** | The website's address | 142.250.190.46 (Google) |
| **Destination Port** | The standard "door" for HTTPS | **443** |

**4-part combination** (Local IP + Source Port + Remote IP + Destination Port) is unique for every connection, your computer knows exactly which incoming data belongs to which tab

In modern websites , a single website opens more than one port serving different purposes , one port for loading images another for loading audio because each one resides in different locations.

Due to this unique port allocation , the request and response are correctly redirected to the particular tab or website.

Usually websites in development stage runs in port 8080 , 3000,5000

Any unreserved ports can be used for development. OS keeps several ports reserved for its operations which when requested gives bind failure error.

Example: when oracle DB is installed it claims the port 8080 for its HTTP(web based management tool) . If 8080 is opening Oracle, it means the Oracle XML DB HTTP server is active. You can change this port to something else (e.g., 8081 or 9090) using SQL\*Plus. 

**History of web:**

US military communication network – ARPANET (1960)

(fore runner of internet) works on packet switching , first to implement TCP/IP protocol suite.

These two forms the basis of internet

Tim Berners Lee (TimBL) 1990 created everything (protocol - HTTP,language-HTML,browser-WWW,server,some web pages for seeing) required to run the first version of WWW (web)

WWW started as a simple text sharing tool for scientist and now it is a vast part.

1994 , W3C (Developers or engineers from different companies exist in W3C (a web standard body)

) – improve existing technologies and create new technologies (CSS , Javascript) for web styling and interactivity

**Web standards:**

Which Technologies used to build websites.used by software engineers for the implementation of technologies.

The web standards are too technical which cannot be understood by normal developers only by the engineers.

The specifications are intended for engineers to implement HTML, CSS, and JavaScript in browsers They define exactly how code should be rendered and executed, ensuring browsers behave similarly.

Since browser engineers follows this standard the website is rendered in same way in all browsers because of which developers can build only one version of site for all browsers

Without these standards , the website would render differently for different browsers so developers neds to modify the website to support different browsers, this limitation is overcame here.

Browser engineers – implement

Developers – use

Users – experience

due to this web standards only the browser uses only html , css and javacript . it is no matter the website is writen in which language the browser renders it using these basic technologies which ensures it is consistent across different web browsers.

Web browsers are built with rendering engines (like Chrome's Blink, Firefox's Gecko, and Safari's WebKit) that specifically interpret HTML (content and structure), CSS (styling and layout), and JavaScript (interactivity and dynamic behavior). These are the core client-side technologies defined by web standards bodies like the W3C.

&nbsp;The language used on the server side (e.g., Python, PHP, Ruby, Java, Node.js) is **irrelevant** to the browser itself. The server processes the requests using these languages and sends back the final HTML, CSS, and JavaScript files to the browser over HTTP. The browser only "sees" and interprets the client-side code it receives.

Web standard bodies:

WHATWG for HTML

TC39 , ECMA for ECMAScript (javascript)

Khronis for 3D graphics

**Process of Proposing a new web standard:**

1.  Someone in the grouo notices need for a new feature which will make the developing process easier
2.  The person discuss with other members in the group like developers and engineers and creates the dpcument explaining the feature and its need , a code demo.
3.  A feature should be completely evaluated first before introducing to public.
4.  One or more browser vendors will implement an experimental version of the new feature, often disabled by default, but which can be enabled by people who want to test it and provide feedback.

**key principles of the web:**

Open to contribute and use

&nbsp;web content is accessible to people with disabilities (accessible by each and every individual)

consistent across devices (compatibility)

any new web technology should be backwards compatible with what went before it, so existing websites will continue to work in the same way as they did before.

**Overview of modern web technologies:**

HTML:

CSS:

Javascript:

**Tools:**

Developer tools: debug code

Ctrl+shift+I in browser to open dev tools

Double click the elements tab code and can edit there it is not permanent changes but can view the result side by side used for debugging and testing

In the styles tab can untick the boxes to see how the webpage changes if the applied css property is removed.

 

Figure 1 Unticked and ticked the margin box result

Figure 2 . arrow to display shorthand property

 Figure 3 editing CSS property and value