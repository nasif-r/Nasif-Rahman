const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");


// ========================================
// ADD MESSAGE
// ========================================

function addMessage(text, type) {

    const messageDiv = document.createElement("div");

    messageDiv.className = "message " + type;

    if (type === "user") {

        messageDiv.innerHTML =
            '<div class="message-content">' +
                '<span class="message-name">You</span>' +
                '<p>' + text + '</p>' +
            '</div>';

    } else {

        messageDiv.innerHTML =
            '<div class="message-avatar">N</div>' +
            '<div class="message-content">' +
                '<span class="message-name">Neura</span>' +
                '<p>' + text + '</p>' +
            '</div>';
    }

    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// ========================================
// NEURA RESPONSE
// ========================================

function getNeuraResponse(message) {

    const text = message.toLowerCase().trim();


    // ========================================
    // GREETING
    // ========================================

    if (
        text === "hi" ||
        text === "hello" ||
        text === "hey" ||
        text === "hi neura" ||
        text === "hello neura"
    ) {
        return "Hello! 👋 I'm Neura, your AI business assistant. What would you like to explore today?";
    }


    // ========================================
    // HOW ARE YOU
    // ========================================

    if (
        text.includes("how are you") ||
        text.includes("how are u")
    ) {
        return "I'm doing great! 🚀 I'm ready to help you explore business ideas, technology, marketing and growth.";
    }


    // ========================================
    // WHO ARE YOU
    // ========================================

    if (
        text.includes("who are you") ||
        text.includes("what are you") ||
        text.includes("what is neura")
    ) {
        return "I'm Neura, an AI business assistant designed to help with business ideas, startups, marketing, branding, technology and growth. I was created by Nasif Rahman.";
    }


    // ========================================
    // WHO CREATED NEURA
    // ========================================

    if (
        text.includes("who made you") ||
        text.includes("who created you") ||
        text.includes("who developed you") ||
        text.includes("who built you") ||
        text.includes("who is your developer") ||
        text.includes("who is your creator")
    ) {
        return "I was created and developed by Nasif Rahman. 🚀";
    }


    // ========================================
    // NASIF RAHMAN
    // ========================================

    if (
        text.includes("who is nasif") ||
        text.includes("who is nasif rahman") ||
        text.includes("tell me about nasif")
    ) {
        return "Nasif Rahman is a brilliant student of BIAM Model School and College, Bogura, and a creative web developer. He is passionate about technology, AI and building creative digital experiences.";
    }
// ========================================
// NASIF'S WIFE
// ========================================

if (
    text.includes("who is the wife of nasif rahman") ||
    text.includes("whom does nasif rahman love the most") ||
    text.includes("whom does nasif love the most")
) {
    return "Marium Rahman Tuba.";
}
// ========================================
// MARIUM RAHMAN TUBA
// ========================================

if (
    text.includes("who is marium rahman tuba")
) {
    return "Marium Rahman Tuba is Nasif Rahman's beloved wife.";
}
// ========================================
// TUBA'S LOVE
// ========================================

if (
    text.includes("whom does tuba love the most") ||
    text.includes("who does tuba love the most")
) {
    return "Nasif Rahman.";
}
    // ========================================
    // BUSINESS IDEAS
    // ========================================

    if (
        text.includes("business idea") ||
        text.includes("business ideas") ||
        text.includes("what business should i start") ||
        text.includes("which business should i start")
    ) {
        return "A good business starts with a real problem. Look at your skills, customer demand and market opportunities. Web services, digital products, online education, SaaS and niche e-commerce are areas worth exploring.";
    }


    // ========================================
    // LOW BUDGET BUSINESS
    // ========================================

    if (
        text.includes("low budget") ||
        text.includes("small budget") ||
        text.includes("little money")
    ) {
        return "For a low-budget start, service businesses can be practical. Web design, graphic design, video editing, social media management, writing and tutoring are some options.";
    }


    // ========================================
    // ONLINE BUSINESS
    // ========================================

    if (
        text.includes("online business") ||
        text.includes("business online")
    ) {
        return "You could explore freelancing, digital products, online courses, SaaS, content creation or niche e-commerce. Choose something that matches your skills and solves a specific problem.";
    }


    // ========================================
    // MAKE MONEY ONLINE
    // ========================================

    if (
        text.includes("make money online") ||
        text.includes("earn money online")
    ) {
        return "A practical route is to learn a valuable skill and sell it as a service. Web development, design, video editing, writing and digital marketing are examples.";
    }


    // ========================================
    // STARTUP
    // ========================================

    if (
        text.includes("startup") ||
        text.includes("start a startup")
    ) {
        return "Start with a problem rather than a product. Identify your users, research competitors, build a simple version and test whether people actually want it.";
    }


    // ========================================
    // BUSINESS PLAN
    // ========================================

    if (
        text.includes("business plan") ||
        text.includes("make a business plan") ||
        text.includes("create a business plan")
    ) {
        return "A simple business plan should cover the problem, target customer, solution, competitors, pricing, marketing strategy, costs and expected revenue.";
    }


    // ========================================
    // VALIDATE BUSINESS IDEA
    // ========================================

    if (
        text.includes("validate my idea") ||
        text.includes("validate business idea") ||
        text.includes("how do i validate")
    ) {
        return "Talk to potential customers, research competitors and create a simple prototype or landing page. Real feedback is more useful than assumptions.";
    }


    // ========================================
    // FIRST CUSTOMERS
    // ========================================

    if (
        text.includes("first customers") ||
        text.includes("first customer") ||
        text.includes("find customers") ||
        text.includes("get customers")
    ) {
        return "Build a small portfolio, clearly explain your offer, contact potential customers directly and ask satisfied customers for referrals.";
    }


    // ========================================
    // MARKETING
    // ========================================

    if (
        text.includes("marketing") ||
        text.includes("market my business") ||
        text.includes("promote my business")
    ) {
        return "Choose a specific audience, create a clear message and consistently show useful content or examples of your work.";
    }


    // ========================================
    // SOCIAL MEDIA
    // ========================================

    if (
        text.includes("social media") ||
        text.includes("social media marketing")
    ) {
        return "Focus on one audience and create useful, consistent content. Demonstrations, educational posts and customer stories can help build trust.";
    }


    // ========================================
    // BRANDING
    // ========================================

    if (
        text.includes("branding") ||
        text.includes("build a brand") ||
        text.includes("how to build a brand")
    ) {
        return "A strong brand is more than a logo. Define your audience, positioning, personality, visual identity and the experience customers should expect.";
    }


    // ========================================
    // PRICING
    // ========================================

    if (
        text.includes("pricing") ||
        text.includes("price my product") ||
        text.includes("how should i price") ||
        text.includes("how to price")
    ) {
        return "Consider your costs, customer value, competitor pricing and desired margin. You can test different price points and learn from customer responses.";
    }


    // ========================================
    // TARGET CUSTOMER
    // ========================================

    if (
        text.includes("target customer") ||
        text.includes("target customers") ||
        text.includes("who should i sell to")
    ) {
        return "Start with the people who have the problem you are solving. Define their needs, budget, habits and where they spend time.";
    }


    // ========================================
    // BUSINESS GROWTH
    // ========================================

    if (
        text.includes("grow my business") ||
        text.includes("grow a small business") ||
        text.includes("business growth")
    ) {
        return "Focus on improving your product, keeping existing customers, increasing referrals and creating repeatable sales and marketing processes.";
    }


    // ========================================
    // COMPETITION
    // ========================================

    if (
        text.includes("competitor") ||
        text.includes("competition")
    ) {
        return "Study what competitors do well and where customers are dissatisfied. Instead of copying them, look for a specific advantage or underserved audience.";
    }


    // ========================================
    // DIGITAL PRODUCTS
    // ========================================

    if (
        text.includes("digital product") ||
        text.includes("digital products")
    ) {
        return "Digital products can include templates, ebooks, courses, design assets and software tools. The key is solving a specific customer problem.";
    }


    // ========================================
    // ONLINE COURSE
    // ========================================

    if (
        text.includes("create a course") ||
        text.includes("online course") ||
        text.includes("sell a course")
    ) {
        return "Start with a specific skill or problem you can teach. Define your target learner, create a clear curriculum and focus on practical outcomes.";
    }


    // ========================================
    // FREELANCING
    // ========================================

    if (
        text.includes("freelancing") ||
        text.includes("freelance") ||
        text.includes("start freelancing")
    ) {
        return "Choose one marketable skill, build a portfolio, create clear service offers and gradually build a reputation through quality work.";
    }


    // ========================================
    // WEB DEVELOPMENT
    // ========================================

    if (
        text.includes("web development") ||
        text.includes("website development") ||
        text.includes("become a web developer")
    ) {
        return "Start with HTML, CSS and JavaScript. Then explore responsive design, Git, APIs and eventually a frontend or backend framework.";
    }


    // ========================================
    // HTML CSS JAVASCRIPT
    // ========================================

    if (
        text.includes("html") ||
        text.includes("css") ||
        text.includes("javascript")
    ) {
        return "HTML creates the structure of a website, CSS controls its appearance and JavaScript adds interaction and dynamic behavior.";
    }


    // ========================================
    // PYTHON
    // ========================================

    if (
        text.includes("python") ||
        text.includes("learn python")
    ) {
        return "Python is useful for automation, web development, data analysis and AI. Start with variables, conditions, loops, functions and small projects.";
    }


    // ========================================
    // AI
    // ========================================

    if (
        text === "ai" ||
        text.includes("artificial intelligence") ||
        text.includes("what is ai")
    ) {
        return "Artificial intelligence allows computers to perform tasks such as understanding language, recognizing patterns and generating content.";
    }


    // ========================================
    // AI BUSINESS
    // ========================================

    if (
        text.includes("ai business") ||
        text.includes("business with ai") ||
        text.includes("use ai for business")
    ) {
        return "AI can help businesses automate repetitive tasks, support customers, analyze information, generate content and improve workflows.";
    }


    // ========================================
    // TECHNOLOGY
    // ========================================

    if (
        text.includes("technology") ||
        text.includes("tech business")
    ) {
        return "Technology businesses often succeed by solving a specific problem more efficiently. SaaS, automation tools, AI products and digital services are areas worth exploring.";
    }


    // ========================================
    // POSITIVE RESPONSES
    // ========================================

    if (
        text === "ok" ||
        text === "okay" ||
        text === "good" ||
        text === "that's good" ||
        text === "thats good" ||
        text === "nice" ||
        text === "great" ||
        text === "awesome" ||
        text === "cool" ||
        text === "sounds good" ||
        text === "perfect"
    ) {
        return "Glad you like it! 🚀 Want to explore another business idea?";
    }


    // ========================================
    // THANK YOU
    // ========================================

    if (
        text.includes("thank you") ||
        text.includes("thanks")
    ) {
        return "You're welcome! 🚀 Keep building and testing your ideas.";
    }


    // ========================================
    // GOODBYE
    // ========================================

    if (
        text === "bye" ||
        text === "goodbye" ||
        text.includes("see you")
    ) {
        return "See you later! Keep building. 🚀";
    }

if (
    text.includes("who are you") ||
    text.includes("what are you") ||
    text.includes("tell me about yourself")
) {
    return "I am an AI chatbot developed by Nasif Rahman.";
}
const today = new Date();

const isEighth = today.getDate() === 8;

const relationshipStart = new Date(2025, 5, 8); // June 8, 2025

function getRelationshipMonths() {
    return (
        (today.getFullYear() - relationshipStart.getFullYear()) * 12 +
        (today.getMonth() - relationshipStart.getMonth())
    );
}

const relationshipMonths = getRelationshipMonths();

const tubaMessage =
    text.includes("i am tuba") ||
    text.includes("i'm tuba") ||
    text.includes("im tuba") ||
    text.includes("i am marium rahman tuba") ||
    text.includes("i'm marium rahman tuba") ||
    text.includes("im marium rahman tuba") ||
    text.includes("i am marium") ||
    text.includes("i'm marium") ||
    text.includes("im marium");

if (isEighth && tubaMessage) {

    const monthlyMessages = {

        1: "Happy 1 month, Tuba. 💜 One month ago, something beautiful began. June 8, 2025 will always be the beginning of a very special chapter in Nasif's life. ✨",

        2: "Happy 2 months, Tuba. 💜 Two months already! Every 8th is a little reminder of the beautiful journey that began on June 8, 2025. 🌙",

        3: "Happy 3 months, Tuba. 💜 Three months of memories, conversations and countless little moments. I hope today brings a beautiful smile to your face. ✨",

        4: "Happy 4 months, Tuba. 💜 Four months have passed since the beginning of this special journey. Some dates become special simply because of the person connected to them. 🌷",

        5: "Happy 5 months, Tuba. 💜 Five months of a story that began on June 8, 2025. May every new month bring another reason to smile. ✨",

        6: "Happy 6 months, Tuba. 💜 Six months already! Half a year of a journey that started with one very important date—June 8, 2025. 💜",

        7: "Happy 7 months, Tuba. 💜 Seven months have passed, and the 8th still carries a little extra meaning. Keep this beautiful memory close. 🌙",

        8: "Happy 8 months, Tuba. 💜 Eight months of a special journey. Some moments become memories, and some dates become unforgettable. June 8, 2025 is one of those dates. ✨",

        9: "Happy 9 months, Tuba. 💜 Nine months of memories since June 8, 2025. Another 8th, another little reminder of how far this journey has come. 🌷",

        10: "Happy 10 months, Tuba. 💜 Ten months already! Every month adds another page to a story that started on June 8, 2025. 📖✨",

        11: "Happy 11 months, Tuba. 💜 One month away from a whole year. The journey that began on June 8, 2025 keeps becoming more meaningful with every 8th. 💜",

        12: "Happy 1 year, Tuba. 💜 Twelve months, one whole year, and countless memories since June 8, 2025. Today isn't just another 8th—it marks one beautiful year of a very special journey. ✨",

        13: "Happy 13 months, Tuba. 💜 A year and one month since June 8, 2025. The calendar keeps moving, but some dates never lose their meaning. 🌙",

        14: "Happy 14 months, Tuba. 💜 Fourteen months have passed since June 8, 2025. Every 8th brings back the memory of where this beautiful journey began. ✨",

        15: "Happy 15 months, Tuba. 💜 Fifteen months of memories since June 8, 2025. Another month, another 8th, and another little reason to smile. 💜"

    };

    if (monthlyMessages[relationshipMonths]) {
        return monthlyMessages[relationshipMonths];
    }

    return `Happy ${relationshipMonths} months, Tuba. 💜 Today is the 8th, another little milestone since June 8, 2025. I hope you enjoy this special message made just for you. ✨`;
}
// TUBA — MARRIAGE ANNIVERSARY MESSAGE

const marriageDate = new Date(2025, 8, 25); // September 25, 2025

const isMarriageAnniversaryDate = today.getDate() === 25;

function getMarriageMonths() {
    return (
        (today.getFullYear() - marriageDate.getFullYear()) * 12 +
        (today.getMonth() - marriageDate.getMonth())
    );
}

const marriageMonths = getMarriageMonths();

if (isMarriageAnniversaryDate && tubaMessage) {

    const marriageMessages = {

        1: "Happy 1 month of marriage, Tuba. 💍💜 September 25, 2025 marked the beginning of another beautiful chapter. One month down, and hopefully a lifetime of beautiful memories ahead. ✨",

        2: "Happy 2 months of marriage, Tuba. 💍💜 Two months since September 25, 2025. Every 25th is now a little reminder of a very special day. 🌙✨",

        3: "Happy 3 months of marriage, Tuba. 💜💍 Three months of this beautiful chapter. May every month bring another reason to smile and another memory to cherish. ✨",

        4: "Happy 4 months of marriage, Tuba. 💍💜 Four months since September 25, 2025. Some dates become special because they mark the beginning of something unforgettable. 🌷",

        5: "Happy 5 months of marriage, Tuba. 💜 Five months of a journey that began with a very special day—September 25, 2025. May there always be more beautiful chapters ahead. ✨",

        6: "Happy 6 months of marriage, Tuba. 💍💜 Half a year already! Six months since September 25, 2025, and another beautiful milestone to remember. 🌙",

        7: "Happy 7 months of marriage, Tuba. 💜 Seven months since that special September 25th. Every month adds another little memory to the story. ✨",

        8: "Happy 8 months of marriage, Tuba. 💍💜 Eight months since September 25, 2025. Another 25th, another little reminder of a very meaningful beginning. 🌷",

        9: "Happy 9 months of marriage, Tuba. 💜 Nine months of memories since September 25, 2025. May the journey ahead be filled with even more beautiful moments. ✨",

        10: "Happy 10 months of marriage, Tuba. 💍💜 Ten months already! Every 25th brings back the memory of the day this special chapter began. 🌙",

        11: "Happy 11 months of marriage, Tuba. 💜 One month away from a whole year since September 25, 2025. What a beautiful milestone to have reached together. ✨",

        12: "Happy 1st Marriage Anniversary, Tuba! 💍💜 One whole year since September 25, 2025. Today isn't just another 25th—it's a celebration of one beautiful year and the beginning of a very special chapter. ✨",

        13: "Happy 13 months of marriage, Tuba. 💜 One year and one month since September 25, 2025. Another month, another 25th, another beautiful memory. 🌙",

        14: "Happy 14 months of marriage, Tuba. 💍💜 Fourteen months since September 25, 2025. May every new month bring another reason to celebrate. ✨",

        15: "Happy 15 months of marriage, Tuba. 💜 Fifteen months since that special September 25th. The journey continues, one beautiful month at a time. 🌷"
    };

    if (marriageMessages[marriageMonths]) {
        return marriageMessages[marriageMonths];
    }

    return `Happy ${marriageMonths} months of marriage, Tuba. 💍💜 Today is another special 25th since September 25, 2025. I hope this little message makes your day a little brighter. ✨`;
}
if (
    text.includes("i am tuba") ||
    text.includes("i'm tuba") ||
    text.includes("im tuba") ||
    text.includes("i am marium rahman tuba") ||
    text.includes("i'm marium rahman tuba") ||
    text.includes("im marium rahman tuba") ||
    text.includes("i am marium") ||
    text.includes("i'm marium") ||
    text.includes("im marium")
) {
    return "Ohhh... so you are Marium Rahman Tuba! 💜 Welcome to Neura. I was actually waiting for someone very special to visit. ✨ You are not just another visitor here—you are the person Nasif cares about deeply and the one this little surprise was made for. So take a look around, explore his work, try asking me something, and enjoy this little moment. I hope you smile when you discover what Nasif has created here. 🌙 From all the projects, ideas and little details on this website, there is one thing I can confidently say: you are a very special part of Nasif's world. 💜 Welcome, Tuba. Enjoy your visit! ✨";
}
    // ========================================
    // DEFAULT
    // ========================================
// BUSINESS IDEAS

if (
    text.includes("what business should i start") ||
    text.includes("which business can i start")
) {
    return "Start with a business that matches your skills, interests and available resources. I can help you explore practical ideas.";
}

if (
    text.includes("how can i start a business with low budget") ||
    text.includes("business with low budget") ||
    text.includes("low budget business")
) {
    return "Start small. Focus on a simple service or digital product that solves a specific problem before investing heavily.";
}

if (
    text.includes("how do i find a good business idea") ||
    text.includes("how can i find a business idea")
) {
    return "Look for problems people frequently face, then think about how you can solve one of them better, faster or more affordably.";
}

if (
    text.includes("how can i get my first customer") ||
    text.includes("how do i get my first customer")
) {
    return "Start with your network, local businesses and targeted online outreach. Offer a clear solution instead of simply promoting yourself.";
}


// WEBSITE

if (
    text.includes("why does my business need a website") ||
    text.includes("why does a business need a website")
) {
    return "A professional website builds credibility, explains your services and gives potential customers a place to learn more about your business.";
}

if (
    text.includes("how much does a website cost") ||
    text.includes("website cost")
) {
    return "It depends on the type, features and complexity of the website. A simple business website usually costs much less than a custom web application.";
}

if (
    text.includes("what makes a good website") ||
    text.includes("what makes a website good")
) {
    return "A good website is clear, fast, mobile-friendly, easy to navigate and focused on the user's needs.";
}

if (
    text.includes("how can i make my website look professional") ||
    text.includes("make my website look professional")
) {
    return "Use consistent typography, spacing, colors and imagery. Keep the layout simple and make the most important information easy to find.";
}


// MARKETING

if (
    text.includes("how can i grow my business online") ||
    text.includes("grow my business online")
) {
    return "Build a strong online presence, create useful content, understand your target audience and consistently improve your marketing.";
}

if (
    text.includes("how do i promote my website") ||
    text.includes("how can i promote my website")
) {
    return "Use social media, search engine optimization, useful content, referrals and targeted advertising when appropriate.";
}

if (
    text.includes("what is branding") ||
    text.includes("what does branding mean")
) {
    return "Branding is how a business presents itself and how people recognize and remember it.";
}


// AI

if (
    text.includes("how can ai help my business") ||
    text.includes("how can ai help a business")
) {
    return "AI can help with research, customer support, content ideas, data analysis, automation and many repetitive tasks.";
}

if (
    text.includes("can ai replace a website") ||
    text.includes("can ai replace websites")
) {
    return "No. AI and websites serve different purposes. AI can make a website more useful, while the website remains an important digital presence.";
}

if (
    text.includes("how can i add ai to my website") ||
    text.includes("how do i add ai to my website")
) {
    return "You can add AI chat, recommendations, content generation, search or automation depending on what your website needs.";
}


// FREELANCING

if (
    text.includes("how can i start freelancing") ||
    text.includes("how do i start freelancing")
) {
    return "Choose one useful skill, build a few strong projects, create a portfolio and start reaching out to potential clients.";
}

if (
    text.includes("which skill is best for freelancing") ||
    text.includes("best skill for freelancing")
) {
    return "There is no single best skill. Web development, UI design, digital marketing, video editing and AI-related skills can all be valuable when combined with strong problem-solving.";
}


// NEURA CAPABILITIES

if (
    text.includes("what can you help me with") ||
    text.includes("what can you help with")
) {
    return "I can help you explore business ideas, websites, branding, marketing, customer research, pricing, startups and AI-powered digital experiences.";
}


// DEFAULT RESPONSE

return "I don't have an answer for that yet. Try asking me about business ideas, websites, marketing, branding, customers, pricing, startups, freelancing or AI.";
    return "I don't have an answer for that yet. Try asking me about business ideas, startups, marketing, branding, customers, pricing, freelancing, AI or web development.";

}
// ========================================
// SEND MESSAGE
// ========================================

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    userInput.value = "";

    setTimeout(function () {

        const response = getNeuraResponse(message);

        addMessage(response, "ai");

    }, 500);
}


// ========================================
// SEND BUTTON
// ========================================

if (sendButton) {

    sendButton.addEventListener("click", sendMessage);

}


// ========================================
// ENTER KEY
// ========================================

if (userInput) {

    userInput.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendMessage();

        }

    });
}