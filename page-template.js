module.exports = data => {
    console.log(data);

// returning html template
return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Generate Readme</title>
</head>

<body>
<header>
  <h1>${data.Title}</h1>
  <a href="https://github.com/${data.Username}/${data.Title}">Github</a>
</header>

<section>
<h2>${data.Description}</h2>
<p>This app allows developers to create a professional README.md file, that is clean, efficient, and easy to use.</p>
</section>

<section>
<h2>Table of Contents</h2>
<ul>
<li>Installation</li>
<li>Usage</li>
<li>License</li>
<li>Credits</li>
<li>Tests</li>
<li>Questions</li>
</ul>
</section>

<sectio>
<h2>${data.installation}</h2>
<p>The following necessary dependencies must be installed to run the application properly:
</p>
</section>

<section>
<h2>${data.Usage}</h2>
<p>After initialing this app with node index.js, you will answer a series of prompts that will output a professional readme.md file based on that users input.
</p>
</section

<section>
<h2>${data.License}</h2>
<p>This project is licensed under the       
</p>
</section>

<section>
<h2>${data.Credits}</h2>
<p>Contributors: </p>
</section>

<section>
<h2>${data.Tests}</h2>
<p>The following is needed to run the tests:</p>
</section>

<footer>
<h2>Contact</h2>
<p>If you have any questions about the Response, open an issure or contact ${data.Username} directly at: ${data.Email}. Thank You!</p>
</footer>  
</body>
</html>
`;
};