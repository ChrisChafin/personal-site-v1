const contentText = {
    about: {
        title: "Hey there!",
        body: `
            <p>My name is Chris Chafin, I am a UI/UX developer focused on creating clean, beautiful, pixel perfect experiences.</p>
            <p>My goals as a developer are to bring designs to life and make them as scalable and user friendly as possible. All while striving to create easy, efficient, relevant, and all-round pleasant experiences for the user.</p>
            <p>I have almost a decade of experience working with several eCommerce companies such as Fossil, Kendra Scott and YETI. </p>
        `
    },
    skills: {
        title: "Skills",
        body: `
            <p class="lead"><em>Languages</em> </p>
            <p><small>Javascript (ES6)</small><small>Typescript</small><small>CSS/SCSS/LESS</small><small>Java</small><small>Python</small></p>
                
            <p class="lead"><em>Libraries &amp; Frameworks</em></p>
            <p><small>Angular</small><small>ReactJS</small><small>Salesforce (SFRA + SFCC)</small><small>Node.JS</small><small>VueJS</small></p>
        
            <p class="lead"><em>Tools</em></p>
            <p><small>Git + Github</small><small>JIRA</small><small>Jenkins</small><small>SourceTree</small></p>
        `
    },
    experience: {
        title: "Experience",
        body: `
            <p class="lead"><a class="work-link" href="https://www.yeti.com" target="_blank">YETI</a> (2020 - Pres) - UX Developer II</p>
            <p class="lead"><a class="work-link" href="https://www.kendrascott.com" target="_blank">Kendra Scott</a> (2019-2020) - Lead Front End Developer</p>
            <p class="lead"><a class="work-link" href="https://www.fossil.com/us/en.html" target="_blank">Fossil</a> (2018-2019) - UI Developer - Contract</p>
            <p class="lead"><a class="work-link" href="http://www.square205.com" target="_blank">Square205</a> (2017-2018) - Contract Developer</p>
            <p class="lead"><a class="work-link" href="https://www.transamerica.com/individual/" target="_blank">Transamerica</a> (2017-2018) - UI Developer</p>
            <p class="lead"><a class="work-link" href="https://www.fidelity.com/" target="_blank">Fidelity Investments</a> (2014-2017) - Associate Software Developer Engineer</p>
            <p class="lead"><a class="work-link" href="https://www.fidelity.com/" target="_blank">Fidelity Investments</a> (2013) - Cloud Development Intern</p>
            <p class="lead"><a class="work-link" id="resume-link" href="docs/chris-chafin-resume.pdf" target="_blank"><i class="far fa-hand-point-right"></i> Full Resume <i class="far fa-hand-point-left"></i></a></p>
        `
    },
    projects: {
        title: "Projects",
        body: `
            <p class="lead"><a class="work-link" href="https://www.yeti.com" target="_blank">YETI</a> - Building A/B tests, Personalization and Product Recommendation experiences to drive UX evolution and development across US and Canada sites. Working cross-functionally with teams ranging from Site Content to Advanced Analytics. Mentor Junior Developers. Owner of vendor relationships. Contributes to monthly design sprints.</p>
            <p class="lead"><a class="work-link" href="https://www.kendrascott.com" target="_blank">Kendra Scott</a> - I was the only front-end developer working on the eCommerce team with Kendra Scott. I worked cross-functionally to support site content, email marketing and UX A/B testing.</p>
            <p class="lead"><a class="work-link" href="/canvas/canvas.html" target="_blank">Apple Product Page Scrolling Animations</a> - Ever wonder how apple does those cool scrolling backgrounds? This will show you!</p>
            <p class="lead"><a class="work-link" href="https://www.fossil.com/us/en.html" target="_blank">Fossil.com</a> - I was a part of the team that worked on fossil.com and other sites (<a href="https://www.skagen-japan.com/" target="_blank">Skagen-Japan</a> and <a href="https://www.zodiacwatches.com/" target="_blank">Zodiac</a> as examples)</p>
            <p class="lead"><a class="work-link" href="/intersect/intersect.html" target="_blank">Intersection Observer Visualization</a> - Here is a cool little example of how you can create infinite scrolling for your storefront using intersection observers in Javascript</p>
            <p class="lead"><a class="work-link" href="https://www.transamerica.com/individual/" target="_blank">New Transamerica.com</a> - The new redesigned TA.com that I was a part of creating</p>
            `
    }
}
$(document).ready(() => {
    $('.content-body h2.content-title').text(contentText.about.title);
    $('.content-body div.content-text').html(contentText.about.body);
    // if you click skill toggle li
    $('.subject-toggle ul.skills-toggle li').on('click', function(){
        let activeId = $(this).attr('id');
        $('.content-body').fadeOut(750, function() {
            $('.content-body h2.content-title').empty();
            let results = Object.values(contentText);
            $('.content-body h2.content-title').text(results[Object.keys(contentText).indexOf(activeId)].title);
            $('.content-body div.content-text').html(results[Object.keys(contentText).indexOf(activeId)].body)

        });
        $('.content-body').fadeIn();
    });
    $('.master .container .inner-container header .header-img img').on('click', function(){
        $('body').toggleClass('light dark');
    });
});