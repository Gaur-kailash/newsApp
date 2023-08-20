import React from 'react'
import './About.css' 

function About() {
  return (
    <div id='about'>
       <h1>About Our News App</h1>

<h2>Our Mission</h2>
<p>At our News App, our mission is to provide you with a seamless and convenient way to stay informed about the news that matters to you. We understand the importance of being well-informed in today's fast-paced world, and we aim to deliver the news you need in a user-friendly and accessible format.</p>

<h2>Features</h2>
<ul>
  <li>Top Headlines: Our app showcases the top headlines from a wide range of categories, including politics, business, technology, entertainment, sports, and more. Stay updated on the latest happenings across various domains with just a few clicks.</li>
  <li>Detailed Articles: Dive deeper into the stories that interest you. Each news article comes with a summary, a featured image, and a "Read More" button that takes you to the full article on the source website. Get a comprehensive understanding of the news with our detailed articles.</li>
  <li>Pagination: Our app supports pagination, allowing you to navigate through multiple pages of news articles. Simply use the "Previous" and "Next" buttons to explore different pages and discover more news stories.</li>
</ul>

<h2>About the Developer</h2>
<p>Hi, I'm <span className="developer-name">Kailash</span>, the developer behind this News App. As an avid news consumer and a passionate developer, I wanted to create a platform that simplifies the way people access news and stay informed. I believe that staying updated with current events is essential in today's fast-changing world. By developing this News App, I aim to empower users like you to easily access the latest news articles and stay connected with what's happening around the globe.</p>

<h2>How It Works</h2>
<p>Our News App utilizes the power of the News API, which aggregates news articles from a wide range of sources worldwide. By leveraging this API, we ensure that you receive a diverse and comprehensive selection of news articles to cater to your interests.</p>

<h2>Stay Connected</h2>
<p>We are dedicated to continuously improving and expanding our News App to deliver the best news reading experience for our users. To stay updated with our latest developments, new features, and news highlights, make sure to follow us on social media and subscribe to our newsletter.</p>

<p>Thank you for choosing our News App. We hope you enjoy using it and find it valuable in staying informed and connected with the world around you.</p>

<p className="developer-name">Kailash C. Gaur</p>
    </div>
  )
}

export default About