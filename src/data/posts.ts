export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 7,
    title: "My Review on Voigtlander Color-Skopar 18mm F2.8 with Fujifilm XT4",
    slug: "voigtlander-lens-with-fujifilm",
    excerpt: "Walking on the street of New York on a cold December, is it a bad idea to use a manual focus lens?",
    content: `
      <p>December 6th, 2024. First morning in New York City. I embarked a photo-walk journey on 6th Ave. It was unintentional, yet rewarding.</p>
      
      <p>I purchased Voigtlander Color-Skopar 18mm F2.8 just a weeks before my trip to New York.
         The main reason that I decided to get a Voigtlander instead of another Fujifilm lens with the same focal length, was mainly because of the infinity focus.
         Supposedly, you should have everything beyond 3 meters in focus when turning the focus to a hard stop on the infinity symbol.
         This is often not true for most lenses, which was why this part was mentioned in several reviews.
      </p>
      
      <h2>6th Ave, New York</h2>
      <p>Morning light hits differently... especially shooting against the light</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/photography/6th-ave-new-york.jpg" alt="Street of New York City" class="blog-image" />
          <p class="image-caption">Street of New York City</p>
        </div>

      <h2>China Town, New York</h2>
      <p>Random snap in the evening... the very first photo I took in New York</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/photography/china-town-new-york.jpg" alt="Night in China Town" class="blog-image" />
          <p class="image-caption">Night in China Town</p>
        </div>
      
      <h2>Film Simulation</h2>
      <p>Classic Chrome was the top choice for the entire trip.</p>
      
      <p>Settings for the recipe:</p>
      <ol type="1">
        <li>FILM SIMULATION: Classic Chrome</li>
        <li>Grain Effect: Off</li>
        <li>Color Chrome Effect: Weak</li>
        <li>White Balance: Auto</li>
      </ol>
      
      <h2>Wide Angle Challenge</h2>
      <p>The principles behind this ritual apply to other daily activities. Washing dishes becomes a tactile meditation. Walking to work becomes an opportunity to notice the world around me. Cooking dinner becomes a creative practice rather than just fuel preparation.</p>
      
      <p>The key is intentionality – choosing to be fully present for small, regular activities instead of rushing through them to get to something else.</p>
      
      <h2>Starting Your Own Ritual</h2>
      <p>You don't need expensive equipment or perfect technique to create meaningful morning moments. The magic isn't in the pour-over method or the single-origin beans – it's in the attention you bring to whatever process you choose.</p>
      
      <p>Maybe it's tea instead of coffee. Maybe it's journaling or stretching or simply sitting quietly for five minutes. The specific activity matters less than the mindfulness you bring to it.</p>
      
      <p>In a world that constantly demands our attention, creating deliberate moments of presence becomes a radical act. My coffee ritual reminds me daily that mindfulness doesn't require a meditation cushion – it just requires showing up fully to whatever you're doing.</p>
    `,
    date: "November 15, 2025",
    readTime: "6 min read",
    tags: ["Photography", "Lifestyle"],
    author: "Abby Chung"
  },
  {
    id: 6,
    title: "My Morning Coffee Ritual: Finding Mindfulness in Routine",
    slug: "morning-coffee-ritual-mindfulness",
    excerpt: "How a simple morning routine became a practice in presence, patience, and appreciation for small daily pleasures.",
    content: `
      <p>Every morning at 6:30 AM, before checking my phone or thinking about the day ahead, I perform a small ritual that has become one of my most cherished daily practices: making coffee.</p>
      
      <p>This isn't about caffeine addiction or productivity optimization. It's about creating a moment of mindfulness in an otherwise chaotic world.</p>
      
      <h2>The Ritual</h2>
      <p>The process is always the same:</p>
      <ul>
        <li>Measure 22g of beans on the kitchen scale</li>
        <li>Grind them fresh (the sound itself is meditative)</li>
        <li>Heat water to exactly 200°F in my gooseneck kettle</li>
        <li>Wet the paper filter in my V60</li>
        <li>Add the grounds and create a small well in the center</li>
        <li>Pour slowly in concentric circles, watching the coffee bloom</li>
      </ul>
      
      <h2>The Mindfulness</h2>
      <p>What transforms this from simple coffee-making into meditation is the attention to each step. The weight of the beans in my hand. The aroma released when grinding. The sound of water beginning to boil.</p>
      
      <p>When I pour the water, I'm completely present. The slow, deliberate circles require focus. There's no room for mental multitasking, no space for the day's anxieties to intrude.</p>
      
      <h2>Why It Matters</h2>
      <p>In our rush to optimize everything, we often optimize away the very experiences that bring us joy. My coffee ritual is intentionally inefficient. I could make coffee in a machine while doing other things, but that would miss the point entirely.</p>
      
      <p>This ten-minute routine serves as:</p>
      <ul>
        <li>A transition from sleep to wakefulness</li>
        <li>A moment of presence before the day's demands</li>
        <li>A practice in patience and precision</li>
        <li>A reminder that small pleasures matter</li>
      </ul>
      
      <h2>Beyond Coffee</h2>
      <p>The principles behind this ritual apply to other daily activities. Washing dishes becomes a tactile meditation. Walking to work becomes an opportunity to notice the world around me. Cooking dinner becomes a creative practice rather than just fuel preparation.</p>
      
      <p>The key is intentionality – choosing to be fully present for small, regular activities instead of rushing through them to get to something else.</p>
      
      <h2>Starting Your Own Ritual</h2>
      <p>You don't need expensive equipment or perfect technique to create meaningful morning moments. The magic isn't in the pour-over method or the single-origin beans – it's in the attention you bring to whatever process you choose.</p>
      
      <p>Maybe it's tea instead of coffee. Maybe it's journaling or stretching or simply sitting quietly for five minutes. The specific activity matters less than the mindfulness you bring to it.</p>
      
      <p>In a world that constantly demands our attention, creating deliberate moments of presence becomes a radical act. My coffee ritual reminds me daily that mindfulness doesn't require a meditation cushion – it just requires showing up fully to whatever you're doing.</p>
    `,
    date: "October 22, 2025",
    readTime: "6 min read",
    tags: ["Coffee", "Lifestyle"],
    author: "Author Name"
  },
  {
    id: 5,
    title: "Learning TypeScript: From Confusion to Clarity",
    slug: "learning-typescript-confusion-to-clarity",
    excerpt: "My journey from JavaScript comfort zone to TypeScript appreciation, including the mental shifts that made everything click.",
    content: `
      <p>I'll be honest: my first encounter with TypeScript was not love at first sight. Coming from JavaScript, all those type annotations felt like unnecessary ceremony, extra syntax standing between me and getting things done.</p>
      
      <p>Six months later, I can't imagine going back.</p>
      
      <h2>The Initial Resistance</h2>
      <p>My first TypeScript experience was frustrating. Every line seemed to require extra thought, extra syntax. Simple things that worked perfectly in JavaScript were suddenly throwing errors.</p>
      
      <p>The compiler felt like a harsh teacher, constantly correcting me on things that seemed to work fine before. "Property 'length' does not exist on type..." became my nemesis.</p>
      
      <h2>The Lightbulb Moment</h2>
      <p>The shift happened when I stopped seeing TypeScript as "JavaScript with extra rules" and started seeing it as "JavaScript with guardrails."</p>
      
      <p>It wasn't trying to make my life harder – it was trying to catch mistakes before they became bugs. Those red squiggly lines weren't criticisms; they were helpful friends pointing out potential problems.</p>
      
      <h2>What I Learned</h2>
      <p>The key insights that changed my perspective:</p>
      <ul>
        <li><strong>Types are documentation:</strong> They tell you (and your team) exactly what functions expect and return</li>
        <li><strong>Refactoring becomes fearless:</strong> The compiler catches breaking changes automatically</li>
        <li><strong>IntelliSense gets superpowers:</strong> Your editor becomes incredibly helpful with autocomplete</li>
        <li><strong>Bugs decrease dramatically:</strong> Catch errors at compile time instead of runtime</li>
      </ul>
      
      <h2>Practical Tips</h2>
      <p>For anyone making the transition:</p>
      <ul>
        <li>Start with <code>any</code> types if you need to, then gradually make them more specific</li>
        <li>Use union types liberally – they're more flexible than you think</li>
        <li>Don't over-engineer your types early on</li>
        <li>Let TypeScript infer types when it can</li>
        <li>Use interfaces for object shapes – they're incredibly powerful</li>
      </ul>
      
      <h2>The Current State</h2>
      <p>Now when I write JavaScript, something feels missing. The safety net is gone. I find myself second-guessing whether objects have the properties I think they do, whether functions will return what I expect.</p>
      
      <p>TypeScript didn't just make my code more reliable – it made me a more thoughtful programmer. It forces you to think about edge cases, to be explicit about your intentions, to consider all the ways things might go wrong.</p>
      
      <p>The journey from confusion to clarity taught me that sometimes the best tools are the ones that initially feel like obstacles. They're not making things harder – they're making things better.</p>
    `,
    date: "October 20, 2025",
    readTime: "5 min read",
    tags: ["Learning", "Programming"],
    author: "Author Name"
  },
  {
    id: 4,
    title: "Dune: Part Two - A Cinematic Masterpiece",
    slug: "dune-part-two-review",
    excerpt: "Denis Villeneuve delivers a stunning continuation that surpasses the first film in every way, creating one of the best sci-fi epics ever made.",
    content: `
      <p>Denis Villeneuve has done something remarkable with "Dune: Part Two." Not only has he successfully adapted one of science fiction's most challenging novels, but he's created a film that stands as a cinematic achievement in its own right.</p>
      
      <p>Where the first film was necessarily about world-building and setup, Part Two is about payoff – and what a payoff it is.</p>
      
      <h2>Visual Spectacle</h2>
      <p>Every frame of this film is a work of art. Greig Fraser's cinematography captures the alien beauty and harsh brutality of Arrakis with equal skill. The sandworm sequences alone are worth the price of admission – they're simultaneously beautiful and terrifying, alien yet somehow familiar.</p>
      
      <p>The production design creates a universe that feels lived-in and authentic. From the ornate halls of the Emperor's ship to the austere beauty of Fremen sietches, every environment tells a story.</p>
      
      <h2>Character Development</h2>
      <p>Timothée Chalamet's Paul Atreides becomes darker and more complex in this installment. We see his transformation from reluctant hero to something more ambiguous – a messiah who understands the terrible future his rise will bring.</p>
      
      <p>Zendaya's Chani is given much more to do here, serving as both Paul's anchor to humanity and his moral compass. Their relationship provides the emotional heart that keeps the epic scope from feeling cold.</p>
      
      <h2>Themes and Relevance</h2>
      <p>What makes "Dune: Part Two" more than just spectacular entertainment is how it grapples with relevant themes:</p>
      <ul>
        <li>Religious extremism and manipulation</li>
        <li>Environmental exploitation</li>
        <li>The corruption of power</li>
        <li>Colonial occupation and resistance</li>
      </ul>
      
      <p>Villeneuve doesn't shy away from the darker implications of Herbert's story. Paul's journey isn't a traditional hero's tale – it's a cautionary story about charisma, prophecy, and the dangers of absolute power.</p>
      
      <h2>Technical Excellence</h2>
      <p>Hans Zimmer's score builds on his work from the first film, creating soundscapes that feel both alien and deeply emotional. The sound design is phenomenal – every grain of sand, every whisper of wind feels tangible.</p>
      
      <p>The film's pacing is nearly perfect, balancing intimate character moments with spectacular action sequences. At 166 minutes, it never feels long.</p>
      
      <h2>Final Thoughts</h2>
      <p>"Dune: Part Two" is the rare sequel that surpasses its predecessor in every way. It's a science fiction epic that respects both its source material and its audience, delivering spectacle without sacrificing substance.</p>
      
      <p>This is filmmaking at its finest – ambitious, beautiful, and deeply meaningful. It's the kind of movie that reminds you why cinema matters.</p>
      
      <p><strong>Rating: 5/5 stars</strong></p>
      <p>A masterpiece that sets a new standard for science fiction cinema.</p>
    `,
    date: "September 28, 2025",
    readTime: "7 min read",
    tags: ["Movies", "Review"],
    author: "Claude"
  },
  {
    id: 3,
    title: "Book Review: The Seven Husbands of Evelyn Hugo",
    slug: "seven-husbands-evelyn-hugo-review",
    excerpt: "A compelling tale of ambition, love, and the price of fame that kept me turning pages well into the night.",
    content: `
      <p>Sometimes you pick up a book expecting one thing and get completely swept away by something else entirely. That's exactly what happened with Taylor Jenkins Reid's "The Seven Husbands of Evelyn Hugo."</p>
      
      <p>What I expected: A light, entertaining read about Old Hollywood glamour.</p>
      <p>What I got: A profound meditation on love, ambition, sacrifice, and the stories we tell ourselves to survive.</p>
      
      <h2>The Story</h2>
      <p>Evelyn Hugo, a reclusive former Hollywood icon, finally decides to tell her life story. But instead of choosing a seasoned journalist, she selects Monique Grant, a relatively unknown writer who's struggling both professionally and personally.</p>
      
      <p>As Evelyn recounts her seven marriages, we learn that nothing about her story is quite what it seems. Each husband served a purpose, but not always the one you'd expect.</p>
      
      <h2>What Works</h2>
      <p>Reid's greatest strength is her ability to create complex, flawed characters who feel absolutely real. Evelyn is ruthless and calculating, but also vulnerable and deeply human. Her choices are sometimes terrible, but they're always understandable within the context of her world.</p>
      
      <p>The dual timeline structure works beautifully, gradually revealing connections between past and present that made me gasp out loud more than once.</p>
      
      <h2>The Deeper Themes</h2>
      <p>Beneath the Hollywood glitz, this book explores:</p>
      <ul>
        <li>The cost of living authentically in a world that demands performance</li>
        <li>How societal constraints shape our choices</li>
        <li>The different forms love can take</li>
        <li>The stories we tell versus the truth we live</li>
      </ul>
      
      <p>I finished this book in two sittings, completely absorbed by Evelyn's world. It's the kind of novel that stays with you, making you think about the masks we all wear and the prices we pay for our dreams.</p>
      
      <p><strong>Rating: 4.5/5 stars</strong></p>
      <p>A compelling page-turner that's also a thoughtful exploration of identity, ambition, and love in all its forms.</p>
    `,
    date: "September 5, 2025",
    readTime: "6 min read",
    tags: ["Books", "Review", "Fiction"],
    author: "Author Name"
  },
  {
    id: 2,
    title: "Building This Blog: A Vibe Coding Adventure",
    slug: "building-blog-vibe-coding-adventure",
    excerpt: "How I approached building this personal blog with curiosity over perfectionism, learning asking the right questions (prompts) along the way.",
    content: `
      <p>When I decided to build this blog, I could have chosen a simple solution – Medium, WordPress, or any number of ready-made platforms. Instead, I chose the scenic route: building it from scratch with React and TypeScript.</p>
      
      <p>This wasn't about efficiency. It was about learning, experimenting, and what I like to call "vibe coding" – programming driven by curiosity and joy rather than just getting things done.</p>
      
      <h2>The Vibe Coding Philosophy</h2>
      <p>Vibe coding is about:</p>
      <ul>
        <li>Following your curiosity, even if it's not the "practical" choice</li>
        <li>Embracing the learning process over the final product</li>
        <li>Making mistakes and finding joy in debugging</li>
        <li>Building things that spark joy, not just functionality</li>
      </ul>

      <h2>Prompt</h2>
      <p>After spending almost an entire day, I finalized my prompt for Claude.</p>
      \`\`\`markdown
      Create a blog site.

        ### Project Goal ###
        This will be a personal blog site that serves as a digital journal and a public notebook.
        The site will showcase content on lifestyle topics like coffee, books, and movies, while also documenting the learning journey of technical skills, such as "vibe coding."

        ### Technical Specifications ###
        - Hosting: GitHub Pages
        - Development Environment: GitHub Codespaces
        - Frameworks & Libraries:
          - UI Components: shadcn/ui
          - Styling: Tailwind CSS
          - Language: TypeScript
          
        ### Implementation Requirements ###
        - Provide necessary files for buidling and deploying this project, including but not limiting to package.json, index.html, main.jsx, App.jsx, and config file for packaging
        - Inform folder structure for the project
        - yarn will be used as the package manager, provide installation command lines and necessary instructions
        - Provide command lines to deploy the site to GitHub Page

        ### Content and Structure ###
        Content:
        - Personal interests (coffee, books, movies)
        - Technical learning notes (e.g., "vibe coding")
        - Personal growth reflections
        - Site Structure: Reference the blog_sitemap.md file for the detailed site map.

        ### Design and User Interface ###
        Layout:
        - Use layout.png as a foundational guide for the basic layout.
        - Adjustments can be made to follow modern web design principles and best practices.
        Visual Style:
        - Color Palette: A minimalist scheme using variations of white, grey, and black.
        - Typography: A sans-serif font family for a clean, modern aesthetic.
        - UI Elements: All components should have rounded corners.
        Reusable Components:
        - Create a library of reusable UI components such as buttons, cards, loading indicators, and navigation elements to ensure consistency and efficiency.
      \`\`\`  
      <pre><code class="language-typescript">
        Create a blog site.

        ### Project Goal ###
        This will be a personal blog site that serves as a digital journal and a public notebook.
        The site will showcase content on lifestyle topics like coffee, books, and movies, while also documenting the learning journey of technical skills, such as "vibe coding."

        ### Technical Specifications ###
        - Hosting: GitHub Pages
        - Development Environment: GitHub Codespaces
        - Frameworks & Libraries:
          - UI Components: shadcn/ui
          - Styling: Tailwind CSS
          - Language: TypeScript
          
        ### Implementation Requirements ###
        - Provide necessary files for buidling and deploying this project, including but not limiting to package.json, index.html, main.jsx, App.jsx, and config file for packaging
        - Inform folder structure for the project
        - yarn will be used as the package manager, provide installation command lines and necessary instructions
        - Provide command lines to deploy the site to GitHub Page

        ### Content and Structure ###
        Content:
        - Personal interests (coffee, books, movies)
        - Technical learning notes (e.g., "vibe coding")
        - Personal growth reflections
        - Site Structure: Reference the blog_sitemap.md file for the detailed site map.

        ### Design and User Interface ###
        Layout:
        - Use layout.png as a foundational guide for the basic layout.
        - Adjustments can be made to follow modern web design principles and best practices.
        Visual Style:
        - Color Palette: A minimalist scheme using variations of white, grey, and black.
        - Typography: A sans-serif font family for a clean, modern aesthetic.
        - UI Elements: All components should have rounded corners.
        Reusable Components:
        - Create a library of reusable UI components such as buttons, cards, loading indicators, and navigation elements to ensure consistency and efficiency.
      </code></pre>
      
      <h2>The Tech Stack</h2>
      <p>I went with modern tools that I wanted to learn:</p>
      <ul>
        <li>React with TypeScript for the frontend</li>
        <li>Tailwind CSS for styling (those rounded corners everywhere!)</li>
        <li>shadcn/ui for consistent components</li>
        <li>React Router for navigation</li>
        <li>Deployed on GitHub Pages</li>
      </ul>
      
      <h2>What I Learned</h2>
      <p>Beyond the technical skills, this project taught me about the value of building something yourself. Every rounded corner, every color choice, every animation – they all reflect intentional decisions rather than default templates.</p>
      
      <p>The code isn't perfect. There are probably better ways to structure some components. But it's mine, and it works, and I learned something new every day building it.</p>
      
      <p>That's the essence of vibe coding: finding joy in the process, learning through doing, and building something that reflects your personality rather than just solving a problem.</p>
    `,
    date: "August 13, 2025",
    readTime: "5 min read",
    tags: ["Vibe Coding", "Learning"],
    author: "Author Name"
  },
  {
    id: 1,
    title: "The Art of Pour-Over Coffee: A Beginner's Journey",
    slug: "pour-over-coffee-beginners-journey",
    excerpt: "Discovering the meditative process of manual coffee brewing and how it transformed my morning routine into a mindful ritual.",
    content: `
      <p>There's something magical about the ritual of pour-over coffee. It's not just about the caffeine – though that's certainly welcome – it's about the process itself. The careful measurement of beans, the precise water temperature, the deliberate, circular motions as you pour.</p>
      
      <p>I started this journey six months ago when I realized my morning coffee routine had become purely functional. Press button, wait for beep, drink coffee. Repeat. There was no joy in it, no mindfulness, no connection to what I was consuming.</p>
      
      <h2>The Equipment</h2>
      <p>You don't need much to start:</p>
      <ul>
        <li>A pour-over dripper (I started with a simple V60)</li>
        <li>Paper filters</li>
        <li>A gooseneck kettle</li>
        <li>A kitchen scale</li>
        <li>Fresh, good-quality beans</li>
      </ul>

      <h2>The Beans</h2>
      <p>選擇障礙的開始：</p>
      <ul>
        <li>深焙</li>
        <li>中深焙</li>
        <li>中焙</li>
        <li>淺中焙</li>
        <li>淺焙</li>
      </ul>
      <blockquote>未來可能會再依照產區與處理方法再做細分。</blockquote>
      
      <h2>各派學說</h2>
      <p>The beauty lies in the simplicity and precision. Heat water to 200°F. Grind your beans (1:16 ratio works well). Wet the filter. Add grounds. Pour in small circles, watching the coffee bloom.</p>
      
      <p>What started as a quest for better coffee became a lesson in patience, precision, and presence. Each cup is a small meditation, a moment to pause before the day begins in earnest.</p>
      
      <p>The coffee tastes better, yes. But more importantly, the morning feels better. There's intentionality now, a sense of craft and care that carries into the rest of the day.</p>

      <h2>什麼是好喝的咖啡</h2>
      <p>其實自己喜歡的口味就可以稱為好喝的咖啡，除非要開咖啡店賺錢，但那會是另一個故事了。</p>
    `,
    date: "August 15, 2025",
    readTime: "4 min read",
    tags: ["Coffee"],
    author: "Author Name"
  }
]