//Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == '/home') {
        res.write("<h1>Home Page</h1>");
        res.write('<p>Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants (PDA), enterprise digital assistants (EDA), or mobile phones.Such software applications are specifically designed to run on mobile devices, taking numerous hardware constraints into consideration. Common constraints include CPU architecture and speeds, available memory (RAM), limited data storage capacities, and considerable variation in displays (technology, size, dimensions, resolution) and input methods (buttons, keyboards, touch screens with or without styluses).These applications (or "apps") can be pre-installed on phones during manufacturing or delivered as web applications, using server-side or client-side processing (e.g., JavaScript) to provide an "application-like" experience within a web browser.</p>');
        data = fs.readFileSync('Home.html');
        res.end(data);
    }
    else if (req.url == '/about') {
        res.write("<h1>About Page</h1>");
        res.write("<p>In order to facilitate the development of applications for mobile devices, and the consistency thereof, various approaches have been taken.<br><br>Most companies that ship a product(e.g.Apple, iPod / iPhone / iPad) provide an official software development kit(SDK).They may also opt to provide some form of Testing and / or Quality Assurance(QA).In exchange for being provided the SDK or other tools, it may be necessary for a prospective developer to sign some form of non - disclosure agreement, or NDA, which restricts the sharing of privileged information.<br><br>As part of the development process, mobile user interface(UI) design is an essential step in the creation of mobile apps.Mobile UI designers consider constraints, contexts, screen space, input methods, and mobility as outlines for design.Constraints in mobile UI design, which include the limited attention span of the user and form factors such as a mobile device's screen size for a user's hand(s).Mobile UI context includes signal cues from user activity, such as the location where or the time when the device is in use, that can be observed from user interactions within a mobile app.Such context clues can be used to provide automatic suggestions when scheduling an appointment or activity or to filter a list of various services for the user.<br><br>The user is often the focus of interaction with their device, and the interface entails components of both hardware and software.User input allows for the users to manipulate a system, and the device's output allows the system to indicate the effects of the users' manipulation.<br><br>Overall, mobile UI design's goal is mainly for an understandable, user-friendly interface. Functionality is supported by mobile enterprise application platforms or integrated development environments (IDEs).<br><br>Developers of mobile applications must also consider a large array of devices with different screen sizes, hardware specifications, and configurations because of intense competition in mobile hardware and changes within each of the platforms.<br><br>Today, mobile apps are usually distributed via an official online outlet or marketplace(e.g.Apple - The App Store, Google - Google Play) and there is a formalized process by which developers submit their apps for approval and inclusion in those marketplaces.Historically, however, that was not always the case.<br><br>Mobile UIs, or front - ends, rely on mobile back - ends to support access to enterprise systems.The mobile back - end facilitates data routing, security, authentication, authorization, working off - line, and service orchestration.This functionality is supported by a mix of middleware components, including mobile app servers, mobile backend as a service(MBaaS), and service - oriented architecture(SOA) infrastructure.</p>");
        data = fs.readFileSync('About.html');
        res.end(data);
    }
    else if (req.url == '/contact') {
        res.write("<h1>Contact Page</h1>");
        res.write("<h2>Address:<br>Keas 69 Str.15234,<br> ChalandriAthens,<br>Greece<br><br><br>+ 30 - 2106019311(landline)<br>+ 30 - 6977664062(mobile phone)<br>+ 30 - 2106398905(fax)</h2>");
        data = fs.readFileSync('Contact.html');
        res.end(data);
    }
});

server.listen(1998, () => {
    console.log("Server started at 1998");
});