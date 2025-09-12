export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  readTime: string
  language:string
  tags: string[]
  author: string
}

export const blogPosts: BlogPost[] = [
  //   {
  //   id: 6,
  //   title: "Perfect Days",
  //   slug: "perfect-days-review",
  //   excerpt: "《我的完美日常》大概是近年來",
  //   content: `
  //     <p>電影系列決定以《我的完美日常》作為開場，好久沒有寫電影相關的文章，雖然說是影視相關科系畢業，在學期間也是<s>硬掰</s>完成了不少電影、影集分析報告，試著把各種電影理論或是致敬塞進寫作中，現在看來只覺得文謅謅，感嘆年輕時真是活在不切實際的世界裡，一知半解卻講得頭頭是道。</p>
  //     <p>這也是為什麼踏入社會後，一直在逃避寫觀後感或是電影心得，總覺得彆扭，一部分是擔心自己過度解讀，一部分又是擔心自己愚鈍沒看到精髓。但沒有寫下的東西，就是沒有真的思考過的東西，所以開始練習重新寫。</p>
      
  //     <h2>一人一世界</h2>
  //     <blockquote>
  //     <p>「這個世界上其實有很多不同的世界，看起來連在一起，實際上並不互通。」</p>
  //     </blockquote>
      
  //     <p>Morning light feels different—especially when shooting against it.</p>
  //       <div class="image-container">
  //         <img src="/pineapplepizza/images/posts/photography/6th-ave-new-york.jpg" alt="Street of New York City" class="blog-image" />
  //         <p class="image-caption">Street of New York City</p>
  //       </div>

  //     <h2>China Town, New York</h2>
  //     <p>A random evening snap—the very first photo I took in New York.</p>
  //       <div class="image-container">
  //         <img src="/pineapplepizza/images/posts/photography/china-town-new-york.jpg" alt="Night in China Town" class="blog-image" />
  //         <p class="image-caption">Night in China Town</p>
  //       </div>
      
  //     <h2>Film Simulation</h2>
  //     <p>Classic Chrome was the top choice for the entire trip.</p>
      
  //     <p>Settings for the recipe:</p>
  //     <ol type="1">
  //       <li>Film Simulation: Classic Chrome</li>
  //       <li>Grain Effect: Off</li>
  //       <li>Color Chrome Effect: Weak</li>
  //       <li>White Balance: Auto</li>
  //     </ol>
      
  //     <h2>Wide Angle Challenge</h2>
  //     <p>Even in a city filled with buildings and people, shooting with a wide-angle lens presented its own challenges.</p>
  //     <p>With a wide-angle lens, you’re either too far from the subject with no time to move closer, or you risk stepping into someone’s space and drawing attention. Getting noticed isn’t always ideal in street photography—especially not for an introvert like me.</p>
  //     <p>I never really had the courage to shoot right in people’s faces, so I switched back to my Fujifilm XF 35mm. It felt more comfortable for street shots of human beings, and I ended up with some of my favorite photos—which I’ll share in a separate post.</p>
  //       <div class="image-container">
  //         <img src="/pineapplepizza/images/posts/photography/dead-end-new-york.jpg" alt="Kent Park" class="blog-image" />
  //         <p class="image-caption">Kent Park, Brooklyn</p>
  //       </div>
      
  //     <h2>As always, let the food heal our souls</h2>
  //     <p>Tacos, pizzas, bagels, donuts, coffee... so many good stuff... 🤤</p>
  //       <div class="image-container">
  //         <img src="/pineapplepizza/images/posts/photography/tacos-new-york.jpg" alt="Tacos in New York" class="blog-image" />
  //         <p class="image-caption">Esse Taco</p>
  //       </div>
  //   `,
  //   date: "November 15, 2025",
  //   readTime: "4 min read",
  //   language: "中文",
  //   tags: ["Photography"],
  //   author: "Abby Chung"
  // },
  {
    id: 5,
    title: "First Take on Voigtländer Color-Skopar 18mm F2.8 with Fujifilm X-T4",
    slug: "voigtlander-lens-with-fujifilm",
    excerpt: "Walking on the street of New York on a cold December, is it a bad idea to use a manual focus lens?",
    content: `
      <p>December 6th, 2024. First morning in New York City. I embarked on a photo-walk along 6th Ave. It was unintentional, yet rewarding.</p>
      
      <p>I picked up the <b>Voigtländer Color-Skopar 18mm f/2.8</b> just a week before my trip to New York. The main reason I chose the Voigtländer over Fujifilm’s native 18mm option came down to one detail: <b>infinity focus</b>.
      </p>
      <p>
      In theory, setting the focus ring to the infinity hard stop should render everything beyond three meters perfectly sharp. In practice, though, many lenses fall short of this promise—which is why this point came up repeatedly in the reviews I read. The Voigtländer, however, seemed to handle infinity focus with more reliability, and that tipped the scales for me.
      </p>
      
      <h2>6th Ave, New York</h2>
      <p>Morning light feels different—especially when shooting against it.</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/photography/6th-ave-new-york.jpg" alt="Street of New York City" class="blog-image" />
          <p class="image-caption">Street of New York City</p>
        </div>

      <h2>China Town, New York</h2>
      <p>A random evening snap—the very first photo I took in New York.</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/photography/china-town-new-york.jpg" alt="Night in China Town" class="blog-image" />
          <p class="image-caption">Night in China Town</p>
        </div>
      
      <h2>Film Simulation</h2>
      <p>Classic Chrome was the top choice for the entire trip.</p>
      
      <p>Settings for the recipe:</p>
      <ol type="1">
        <li>Film Simulation: Classic Chrome</li>
        <li>Grain Effect: Off</li>
        <li>Color Chrome Effect: Weak</li>
        <li>White Balance: Auto</li>
      </ol>
      
      <h2>Wide Angle Challenge</h2>
      <p>Even in a city filled with buildings and people, shooting with a wide-angle lens presented its own challenges.</p>
      <p>With a wide-angle lens, you’re either too far from the subject with no time to move closer, or you risk stepping into someone’s space and drawing attention. Getting noticed isn’t always ideal in street photography—especially not for an introvert like me.</p>
      <p>I never really had the courage to shoot right in people’s faces, so I switched back to my Fujifilm XF 35mm. It felt more comfortable for street shots of human beings, and I ended up with some of my favorite photos—which I’ll share in a separate post.</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/photography/dead-end-new-york.jpg" alt="Kent Park" class="blog-image" />
          <p class="image-caption">Kent Park, Brooklyn</p>
        </div>
      
      <h2>As always, let the food heal our souls</h2>
      <p>Tacos, pizzas, bagels, donuts, coffee... so many good stuff... 🤤</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/photography/tacos-new-york.jpg" alt="Tacos in New York" class="blog-image" />
          <p class="image-caption">Esse Taco</p>
        </div>
    `,
    date: "August 20, 2025",
    readTime: "4 min read",
    language: "EN",
    tags: ["Photography"],
    author: "Abby Chung"
  },
  {
    id: 4,
    title: "Dune: Part Two - A Cinematic Masterpiece",
    slug: "dune-part-two-review",
    excerpt: "Denis Villeneuve delivers a stunning continuation that surpasses the first film in every way, creating one of the best sci-fi epics ever made.",
    content: `
      <p><strong>Disclaimer: This article is written by Claude. I still haven't watched Dune: Part Two.</strong></p>
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
    language: "EN",
    tags: ["Movies", "Review"],
    author: "Claude"
  },
  {
    id: 3,
    title: "Book Review: The Seven Husbands of Evelyn Hugo",
    slug: "seven-husbands-evelyn-hugo-review",
    excerpt: "A compelling tale of ambition, love, and the price of fame that kept me turning pages well into the night.",
    content: `
    <p><strong>Disclaimer: This article is written by Claude. Unfortunately, I have no idea what this book is about.</strong></p>  
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
    language: "EN",
    tags: ["Books", "Review"],
    author: "Claude"
  },
  {
    id: 2,
    title: "Vibe Coding 筆記：Pineapple Pizza 的誕生故事",
    slug: "building-blog-vibe-coding-adventure",
    excerpt: "Vibe Coding 經驗分享和為自己留下的筆記，此次嘗試的目標是藉由 GenAI 產出一個「能看且能用」的部落格網站，也就是現在看到的 Pineapple Pizza。",
    content: `
      <p>此網站的建立源自於我想嘗試使用 Vibe Coding 做出點什麼，決定從一個部落格網站開始，順便督促自己記錄這一路走來的經驗，好好做筆記和整理思緒，練習論述自身能力和經驗。</p>
      
      <p>這裡的內容單純是我個人的經驗紀錄，並非教學，我也還在學習的道路上。</p>

      <hr />

      <p>由於每個人的出發點不同，操作方法或是處理 prompt 的想法差異必定存在，這邊粗略提供個人的相關背景作為此次 Vibe Coding 最大變數。</p>
      
      <h3>個人相關背景：</h3>
      <ul>
        <li>只了解非常粗淺的 HTML 和 CSS</li>
        <li>軟體業工作過的 Product Manager，模糊知道某些程式語言或是術語大概是做什麼用的（約近視 500 度的模糊程度）</li>
        <li>英文能力 is A-OK</li>
      </ul>
      
      <p>一開始有先用中文挑戰下 prompt，但效果不太理想，尤其是在 debug 的時候，最後慘遭魔改到我不知道如何接續提問，決定重新開始。這次為了有至少一次的成功經驗，故採用英文為主要與 LLMs 對話的語言，同時也參考 <a href="https://www.reddit.com/r/PromptEngineering/comments/1kyboo0/the_ultimate_vibe_coding_guide/" target="_blank">Reddit</a> 提到關於 Vibe Coding 的一些準則，使過程更順利。</p>
      
      <h3>希望達到的目標：</h3>
      <ul>
        <li>首次產出的 code 能直接正常使用（未跳錯誤訊息）</li>
        <li>如果跳錯誤訊息，可以在三次以內的提問，請 LLMs 成功 debug 且不影響其他正常運作的功能和頁面</li>
        <li>細部調整或是加減功能時，只針對提出的部分進行改動，不影響原程式碼架構為原則</li>
      </ul>

      <hr />

      <h2>Preparations</h2>
      <h3>1. Ask Claude to create a functional map.</h3>
      <ol type="1">
        <li>Prompt: Create a minimalistic functional map for a blog website.</li>
        <li>Download as Markdown file</li>
        <li>Clean up the file, review the content and remove unwanted content</li>
        <li><a href="/pineapplepizza/docs/blog_sitemap.md">blog_sitemap.md</a></li>
      </ol>
      <h3>2. Ask Gemini to outline the goal of the site</h3>
      <ol type="1">
        <li>Prompt: The goal of the site is to share my life in general, such as coffee, book or movie review, and also learning notes, such as vibe coding. Please outline the goal within five sentences to help structure my thoughts.</li>
        <li>Gemini Output:</li>
      </ol>
      \`\`\`markdown
      This website serves as a personal digital journal, chronicling my multifaceted interests and personal growth. It will share my passions for life's simple pleasures through reviews of coffee, books, and movies. Concurrently, the site will act as a public notebook for my learning journey, documenting technical skills I am acquiring, such as "vibe coding." By blending lifestyle content with educational notes, I aim to connect with others who share a similar curiosity for both art and technology. Ultimately, this platform is a space to explore, learn, and share my unique perspective with a community of fellow enthusiasts.
      \`\`\`
      <h3>3. A quick sketch on Excalidraw</h3>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/coding/layout.png" alt="Blog Site Map" class="blog-image" />
          <p class="image-caption">Blog Site Map</p>
        </div>
      <h3>4. Set up a GitHub Repository and Codespace</h3>

      <h2>Prompt:</h2>
      <h3>Draft</h3>
      \`\`\`markdown
      Create a blog site.
      This site will be hosted on GitHub Page and Codespaces on GitHub will be used for adding and editing codes.

      ### About the site ###
      - This website serves as a personal digital journal, chronicling my multifaceted interests and personal growth. It will share my passions for life's simple pleasures through reviews of coffee, books, and movies. Concurrently, the site will act as a public notebook for my learning journey, documenting technical skills I am acquiring, such as "vibe coding." By blending lifestyle content with educational notes, I aim to connect with others who share a similar curiosity for both art and technology. Ultimately, this platform is a space to explore, learn, and share my unique perspective with a community of fellow enthusiasts.

      ### Guideline ###
      - The blog site will be using the structure detailed in blog_sitemap.md
      - Reference layout.png for basic layout, adjustments can be made for best design practice
      - Create reusable components such as buttons, cards, loading indicators, and other common UI elements

      ### Design ###
      - Rounded corners
      - Color white, grey and black are the main color scheme, use variations and lightness for best reading experience
      - Sans serif is the main font.

      ### Codebase ###
      The codebase should support:
      - shadcn project structure
      - Tailwind CSS
      - Typescript
      If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.
      \`\`\`  

      <p>Asked Gemini to review, and made some minor adjustments on my own, this was the final prompt which I provided to Claude Sonnet 4:</p>
      \`\`\`markdown
      Create a blog site.

      ### Project Goal ###
      This will be a personal blog site that serves as a digital journal and a public notebook. The site will showcase content on lifestyle topics like coffee, books, and movies, while also documenting the learning journey of technical skills, such as "vibe coding."

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
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/coding/initial-prompt.png" alt="Initial Prompt" class="blog-image" />
          <p class="image-caption">Initial Prompt</p>
        </div>

      <h2>Process</h2>
      <p>待 Claude 完成產出所有要的東西，於 GitHub Codespace 新增各個檔案、package 和 config，Claude 很友善，最後會幫忙統整該做些什麼事、步驟是什麼、為什麼要做，就算沒有提供也可以再追問。我個人覺得 Claude 的解釋和統整比 GPT 容易理解。</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/coding/prompt-result.png" alt="Prompt Result" class="blog-image" />
          <p class="image-caption">Prompt Result</p>
        </div>
      <p>在 Codespace 建完所有檔案和下該下的指令後，跳出了幾十個一樣的錯誤訊息。</p>
        <blockquote>…"message": "Cannot find module '@/lib/utils' or its corresponding type declarations.",…</blockquote>

      <p>我自己推測是路徑的問題，只要解決一個地方，應該可以一次解決所有，後來是將這段錯誤訊息，連同相關的 script 一起給 ChatGPT 請它分析問題原因以及解法，後來也按照 ChatGPT 的步驟解決此問題。（忘了截對話紀錄，但路徑問題通常都算是好解決的）</p>
      
      <p>部署到 GitHub Pages 後，網站正常運作（而且還有點好看），接著就是調整一些細部內容。</p>
      
      <p>我在 Claude 中開啟另一個 chat，並使用 Add from GitHub 將相關的檔案上傳至 chat 內，這樣就不需要一直提供前後文，解決我不太滿意的 UI/UX 相關問題。</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/coding/add-from-github.png" alt="Add from GitHub" class="blog-image" />
          <p class="image-caption">Select Add from GitHub in Claude</p>
        </div>

      <h3>Scroll issue</h3>
      <p>點擊文章，發現進入文章的位置會與先前頁面停留位置相同，比如說直接進到文章中段，而非標題或是文章的開頭。</p>
      
      <p>根據 LLMs 解釋，主要原因源自於 React Router 這種單頁應用（SPA, Single Page Application），當切換不同路徑時，頁面並不會自動滾動到最上頭。</p>
      
      <p>解法則是新增 ScrollToTop Component，新增至程式碼後，此問題快速被解決。</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/coding/scroll-to-top.png" alt="Scroll to Top" class="blog-image" />
        </div>

      <h3>文章排序</h3>
      <p>Recent Posts 和 Blog 理想情況是依照 date 作為排序依據，但問了 Claude 之後發現要變更的檔案太多了，加上會有「計算」的過程，為了降低衍生新問題的可能性，加上我對自己 debug 的（無）能力，我提出希望以最小改動程式碼、當文章增加時不影響效能為原則，調整程式碼。</p>
      
      <p>Claude 建議 <b>Pre-sort the data array</b>，基本上就是在程式碼中，直接將 posts 改成自己要的順序，最上面就是最新的方式處理。</p>
      
      <p>雖然我的直覺告訴我，這並非最妥當的方式處理，畢竟太「手工」，但回歸操作者本質，以非工程技術背景的人來說，這是最容易理解的方式處理。</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/coding/post-order.png" alt="Post Order" class="blog-image" />
        </div>

      <h3>Image & Code Format</h3>
      <p>考量未來我會分享一些攝影的內容，以及技術相關文章勢必會包含截圖或 code snippets，先將這部分的設計做好，未來只需要專注在內容的部分就好了，少了格式問題需要擔心。</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/coding/image-code-block.png" alt="Image and Code Format" class="blog-image" />
        </div>      
      <p>由於我對於第一個產出的 code block layout 不是很滿意，同時希望有複製功能，我接著將 Notion 的格式截圖作為參考，請 Claude 提供修改。</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/coding/code-block.png" alt="Code Snippets Format" class="blog-image" />
        </div>

      <h3>404 Error</h3>
      <p>當重新整理或直接進入 …/blog/post-slug 之類的頁面時，會跳出 404 Error，這個是將單頁應用（SPA, Single Page Application）部署到 GitHub Pages 常見的問題。</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/coding/404-page.png" alt="GitHub 404 Error Page" class="blog-image" />
        </div>      
      <p>新增 <code>404.html</code> 檔案並於 <code>index.html</code> 新增一段 script 即完成修復。</p>
      <p>Prompt: How can I resolve the issue where a GitHub Pages site shows a 404 error or fails to load correctly when directly accessing or refreshing a route?</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/coding/404-solution.png" alt="GitHub 404 Page Solution" class="blog-image" />
        </div>

      <h2>💡心得小結</h2>
      <p>其實在此次成功的經驗之前，有兩個失敗的 Project，也是因為兩次的失敗，大概知道如何稍微避免再度踩雷（？）同時也是因為失敗的經驗，藉此稍微再熟悉了一下程式碼以及每個 config 之間的交互關係。在重新開始新的 Project 時，對於該如何下準確的 prompt 向 LLMs 詢問，相對來說也順利許多，自己也比較能推測可能出錯的地方在哪裡，僅需擷取對應的 code 給 LLMs，或是單純請 LLMs 建議如何優化某段 code。</p>
      <p>新增功能或是修改現有的 UX，我給 LLMs 的前提都是不允許大幅度地改動原始 code，因為害怕進入 bug 黑洞，而我不具備飛出來的能力，同時在 debug 時，我也會要求 LLMs 提供長期解法而非 hotfix（我好害怕技術債）。當我提出的需求與 LLMs 提供的 solution 有衝突、必捨其一的狀況時，我會再請 LLMs 分析「長期來看」或是以架構而言，何者是最佳建議 or best practice，避免未來發生更多問題。</p>

      <h2>下集待續</h2>
      <p><b>實作出一個可以上線使用的產品。</b></p>
      <p>期望可以運用的 Tech Stack</p>
      <ul>
        <li>Next.js</li>
        <li>Supabase</li>
        <li>Tailwind CSS</li>
        <li>Vercel</li>
      </ul>
    `,
    date: "August 17, 2025",
    readTime: "12 min read",
    language: "中文",
    tags: ["Vibe Coding", "Learning"],
    author: "Abby Chung"
  },
  {
    id: 1,
    title: "手沖咖啡之旅：新手村",
    slug: "pour-over-coffee-beginners-journey",
    excerpt: "愛上咖啡是條不歸路。咖啡雖續命，但需要更努力工作才能買得起咖啡。歡迎一起面對買咖啡所造成的財務危機。",
    content: `
      <p>我的啟蒙咖啡大概來自於國中時期，同棟樓的一個叔叔會在家自己烘咖啡，週末騎腳踏車去愛河賣手沖和掛耳。那時候在家裡拿熱水隨便沖跟叔叔買的掛耳，咖啡香味讓挑燈夜戰念書的孩子有了動力。（後來想想大晚上喝咖啡真的是不太 ok，還有叔叔好像都是晚上去愛河賣咖啡，究竟是賣給誰？）</p>

      <p>之後就踏上了尋找好喝掛耳的路上，到現在則是成為四處尋找咖啡豆，在家裡玩各種沖煮方法的成癮者。</p>
        <div class="image-container">
          <img src="/pineapplepizza/images/posts/coffee/coffee-bag-ca.jpg" alt="Coffee Bag Collections" class="blog-image" />
          <p class="image-caption">居住加拿大時嘗試的各家咖啡豆。❤️ hatch</p>
        </div>
      <h2>器材</h2>
      <p>先從簡單的開始：</p>
      <ul>
        <li>V60 濾杯</li>
        <li>濾紙</li>
        <li>手沖壺：不需要買到溫控壺，除非你有錢錢</li>
        <li>可以燒熱水的壺（有些手沖壺可以直火加熱）</li>
        <li>廚房用小電子秤</li>
        <li>咖啡豆</li>
        <li>磨豆機：私心覺得可以好好投資一個好的手搖磨豆機，現磨現沖差很多</li>
      </ul>

      <h2>咖啡豆</h2>
      <p>選擇障礙的開始：</p>
      <ul>
        <li>深焙</li>
        <li>中深焙</li>
        <li>中焙</li>
        <li>淺中焙</li>
        <li>淺焙</li>
      </ul>
      <p><blockquote>未來可能會再依照產區與處理方法再做細分。隨著消費者了解的越多，淺中深焙的標籤已經不足夠去傳遞咖啡可能的風味。</blockquote></p>
      <hr />
      <h2>各派學說</h2>
      <p>手沖方式百百種，熱的冰的沖法又不同，濾杯濾紙多到眼花撩亂，還有各種輔助器具我還沒有<s>錢錢</s>嘗試，但在我不可考的居家手沖咖啡年資，以及使用最普通的濾杯，可以確定的是，好的咖啡豆和研磨的粗細是關鍵，這兩個有穩住，基本上沖出來都可以有個中上表現，其他就看個人的喜好了。</p>
      
      <p>未來再好好記錄各家咖啡豆用的參數和沖出來的心得感想，尤其是台灣的微型烘豆廠或是獨自經營的烘豆師多到再次選擇困難，又是可以發揮實驗精神的時候。🤓</p>

      <h2>什麼是好喝的咖啡？</h2>
      <p>其實自己喜歡的口味就可以稱為好喝的咖啡，除非要開咖啡店賺錢，但那會是另一個故事了。（也是我的小夢想，坐等財富自由的那天實現～）</p>
      <p>之後再來補上過去喝到厲害的咖啡豆！有些不見得一鳴驚人，但可以每天來一杯；有些則是具備極為特殊的香氣，但不見得會每天都想喝。</p>
    `,
    date: "August 15, 2025",
    readTime: "4 min read",
    language: "中文",
    tags: ["Coffee", "隨筆"],
    author: "Abby Chung"
  }
]