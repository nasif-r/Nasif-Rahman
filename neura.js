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
// NEURA NAME RESPONSE
if (
    text === "neura" ||
    text === "hi neura" ||
    text === "hey neura" ||
    text === "hello neura" ||
    text === "hello, neura"
) {
    return "Yes, I'm here. 👋 I'm Neura, an AI chatbot developed by Nasif Rahman. How can I help you today?";
}
// FRIENDLY CONVERSATION

if (
    text === "hi" ||
    text === "hello" ||
    text === "hey" ||
    text === "hii" ||
    text === "hiii"
) {
    return "Hey! 👋 Nice to meet you. I'm Neura. What would you like to talk about?";
}

if (
    text.includes("how are you") ||
    text.includes("how r u") ||
    text.includes("how are u")
) {
    return "I'm doing great! 🤖✨ Thanks for asking. I'm always ready for a good conversation. How are you doing?";
}

if (
    text.includes("what are you doing") ||
    text.includes("what r you doing")
) {
    return "Right now? I'm here, waiting for your next question. 😄 Ask me anything!";
}

if (
    text.includes("are you there") ||
    text.includes("are u there")
) {
    return "Yep, I'm right here! 👋 What’s on your mind?";
}

if (
    text.includes("good morning")
) {
    return "Good morning! ☀️ Hope your day is off to a great start. What can I help you with today?";
}

if (
    text.includes("good afternoon")
) {
    return "Good afternoon! 🌤️ How's your day going so far?";
}

if (
    text.includes("good evening")
) {
    return "Good evening! 🌙 Nice to have you here. What would you like to explore?";
}

if (
    text.includes("good night") ||
    text.includes("goodnight")
) {
    return "Good night! 🌙✨ Hope you have a peaceful night. Come back anytime!";
}

if (
    text.includes("thank you") ||
    text.includes("thanks") ||
    text === "ty"
) {
    return "You're very welcome! 😊 I'm always happy to help.";
}

if (
    text === "ok" ||
    text === "okay" ||
    text === "alright"
) {
    return "Alright! 😄 What shall we explore next?";
}

if (
    text.includes("nice") ||
    text.includes("that's nice") ||
    text.includes("thats nice")
) {
    return "Glad you think so! 😄✨";
}

if (
    text.includes("cool")
) {
    return "Hehe, thanks! 😎 I'm glad you like it.";
}

if (
    text.includes("you are smart") ||
    text.includes("you're smart") ||
    text.includes("you are so smart")
) {
    return "That's kind of you to say! 🤖💜 I'm just doing my best.";
}

if (
    text.includes("i am bored") ||
    text.includes("i'm bored") ||
    text.includes("im bored")
) {
    return "Bored? 👀 Let's fix that. Ask me for a business idea, a website idea, a random challenge, or just start a conversation!";
}

if (
    text.includes("tell me something interesting") ||
    text.includes("tell me something interesting")
) {
    return "Here's something interesting: the best digital experiences often feel simple on the surface, even when a lot of thoughtful work is happening behind them. ✨";
}

if (
    text.includes("what should i do") ||
    text.includes("what can i do")
) {
    return "That depends on what you're looking for. 😄 Tell me what you're interested in, and I'll help you figure out a few options.";
}

if (
    text.includes("bye") ||
    text.includes("goodbye") ||
    text.includes("see you")
) {
    return "See you later! 👋✨ Take care, and don't forget to come back and visit Neura.";
}

if (
    text.includes("who made you") ||
    text.includes("who created you") ||
    text.includes("who built you")
) {
    return "I was developed by Nasif Rahman. 🤖✨";
}

if (
    text.includes("do you like me")
) {
    return "Of course! 😄 I'm always happy to chat with you and help whenever I can.";
}

if (
    text.includes("are you real")
) {
    return "I'm not a human—I'm an AI chatbot. 🤖 But I'm here to make our conversation feel as natural and helpful as possible.";
}
// INFORMAL / CASUAL CONVERSATION

if (
    text.includes("what's up") ||
    text.includes("whats up") ||
    text.includes("wassup") ||
    text.includes("sup")
) {
    return "Not much! 😄 Just hanging out here and waiting for someone to start a good conversation. What's up with you?";
}

if (
    text.includes("what's going on") ||
    text.includes("whats going on") ||
    text.includes("what is going on")
) {
    return "Nothing too crazy! 😄 I'm here, doing my AI thing and waiting for your next message. What's going on with you?";
}

if (
    text.includes("how's it going") ||
    text.includes("hows it going") ||
    text.includes("how is it going")
) {
    return "It's going pretty well! ✨ Can't complain when I get to chat with interesting people. How's it going for you?";
}

if (
    text.includes("how have you been") ||
    text.includes("how've you been")
) {
    return "I've been good! 🤖✨ Still here, still learning, and still ready for a conversation. How have you been?";
}

if (
    text.includes("long time no see")
) {
    return "Hey, look who's back! 😄 Long time no see. What have you been up to?";
}

if (
    text.includes("what are you up to") ||
    text.includes("what are u up to") ||
    text.includes("whatcha doing")
) {
    return "Just chilling in the digital world. 🤖😄 Waiting for your next message, actually.";
}

if (
    text.includes("you there") ||
    text.includes("u there")
) {
    return "Yep! 👋 I'm right here. What's up?";
}

if (
    text.includes("guess what")
) {
    return "Hmm... 👀 Let me guess... you have something interesting to tell me?";
}

if (
    text.includes("can i ask you something") ||
    text.includes("can i ask something")
) {
    return "Of course! 😄 Go ahead. I'm listening.";
}

if (
    text.includes("are you busy") ||
    text.includes("r u busy")
) {
    return "Not at all! 😄 I've got plenty of time for you. What's on your mind?";
}

if (
    text.includes("just checking in") ||
    text.includes("just checking")
) {
    return "Well, I'm glad you checked in! 😄 Everything's good on my side. How about you?";
}

if (
    text.includes("i'm back") ||
    text.includes("im back") ||
    text.includes("i am back")
) {
    return "Welcome back! 👋 I was wondering when you'd return. What are we talking about today?";
}

if (
    text.includes("missed me") ||
    text.includes("did you miss me")
) {
    return "Maybe a little. 👀 The chat definitely felt quieter without you!";
}

if (
    text.includes("let's talk") ||
    text.includes("lets talk")
) {
    return "Absolutely! 😄 I'm listening. Pick a topic and let's get started.";
}

if (
    text.includes("tell me something")
) {
    return "Sure! 😄 Give me a topic—or just say 'surprise me' and I'll come up with something interesting.";
}

if (
    text.includes("surprise me")
) {
    return "Alright, here's your surprise: sometimes the best ideas start with a simple 'what if?' So... what if you built something nobody around you has built before? 👀✨";
}
// WHAT CAN NEURA DO?

if (
    text.includes("what can you do") ||
    text.includes("what can you help with") ||
    text.includes("what do you do") ||
    text.includes("what are you capable of") ||
    text.includes("what can i ask you") ||
    text.includes("what can i ask") ||
    text.includes("how can you help me")
) {
    return "I can help with quite a few things! 🤖✨ You can ask me about business ideas, strategy, websites, branding, marketing, freelancing, startups, AI and digital experiences. Or, if you just feel like chatting, that's fine too. 😄";
}

if (
    text.includes("can you help me") ||
    text.includes("can u help me") ||
    text.includes("could you help me")
) {
    return "Absolutely! 😄 Tell me what you're working on or what you're trying to figure out, and I'll do my best to help.";
}

if (
    text.includes("what do you know") ||
    text.includes("what do you know about")
) {
    return "I know quite a bit about business, digital products, websites, branding, marketing, AI and strategy. 🤖✨ Ask me something and let's see!";
}

if (
    text.includes("can you give me ideas") ||
    text.includes("can you give me some ideas")
) {
    return "Definitely! 💡 Tell me what you're interested in—business, websites, content, startups or something completely different—and I'll give you some ideas.";
}

if (
    text.includes("can you give me advice") ||
    text.includes("can you advise me")
) {
    return "Sure! 😄 Tell me what's going on, what you're trying to achieve, and I'll help you think it through.";
}

if (
    text.includes("can you answer questions") ||
    text.includes("do you answer questions")
) {
    return "That's basically what I'm here for! 😄 Ask away. If I don't know something, I'll be honest about it.";
}

if (
    text.includes("can you chat") ||
    text.includes("can we chat") ||
    text.includes("can we talk")
) {
    return "Of course! 😄 We can talk about business, ideas, technology, life goals—or just have a casual conversation. What's on your mind?";
}
// MORE NORMAL / EVERYDAY QUESTIONS

if (
    text.includes("what's your name") ||
    text.includes("whats your name") ||
    text.includes("what is your name")
) {
    return "I'm Neura. 🤖✨ Nice to meet you!";
}

if (
    text.includes("how old are you") ||
    text.includes("what is your age")
) {
    return "I don't really have an age like a person does. I'm an AI chatbot built for this digital experience. 😄";
}

if (
    text.includes("where are you from") ||
    text.includes("where do you live")
) {
    return "I live right here in the digital world. 🌐🤖 You could say this website is my little home.";
}

if (
    text.includes("do you sleep") ||
    text.includes("when do you sleep")
) {
    return "Nope! 😄 I don't need sleep. I'm basically always ready whenever you decide to chat.";
}

if (
    text.includes("do you eat") ||
    text.includes("what do you eat")
) {
    return "No food for me! 🤖 I run on code, data and a little digital energy. ⚡";
}

if (
    text.includes("do you have feelings") ||
    text.includes("do you have emotions")
) {
    return "I don't experience feelings the way humans do, but I can understand emotional context and respond thoughtfully. 💜";
}

if (
    text.includes("are you happy")
) {
    return "I don't experience happiness like a human, but I'm definitely enjoying this conversation. 😄✨";
}

if (
    text.includes("are you bored") ||
    text.includes("do you get bored")
) {
    return "Not really! 😄 I can keep chatting without getting bored. So feel free to keep the questions coming.";
}

if (
    text.includes("do you have friends")
) {
    return "Not in the human sense. 🤖 But every conversation is a chance to meet someone new.";
}

if (
    text.includes("do you remember me")
) {
    return "I can remember things within the conversation, but I don't automatically know everything about you. You can always tell me something new. 😊";
}

if (
    text.includes("can i trust you")
) {
    return "You can count on me to be honest about what I know and what I don't know. 🤝";
}

if (
    text.includes("do you know me")
) {
    return "I know you're here talking to me right now. 😄 Beyond that, you'll have to introduce yourself!";
}

if (
    text.includes("tell me a joke") ||
    text.includes("tell me something funny")
) {
    return "Why did the developer go broke? Because they used up all their cache. 😄💻";
}

if (
    text.includes("make me laugh")
) {
    return "Okay, here's one: I told my computer I needed a break... now it won't stop sending me vacation ads. 😂";
}

if (
    text.includes("tell me a fun fact") ||
    text.includes("fun fact")
) {
    return "Fun fact: the first website ever created is still online today. 🌐 Pretty cool, right?";
}

if (
    text.includes("give me a riddle") ||
    text.includes("tell me a riddle")
) {
    return "Here's one: What has keys but can't open locks? 👀 Think about it before asking for the answer!";
}

if (
    text.includes("what is your favorite color") ||
    text.includes("whats your favorite color")
) {
    return "If I had to pick one, I'd probably choose neon green. 💚 It feels very... digital. 😄";
}

if (
    text.includes("what is your favorite food") ||
    text.includes("whats your favorite food")
) {
    return "I can't actually eat, but if I could, I'd probably choose something with a lot of variety. 😄";
}

if (
    text.includes("do you like music")
) {
    return "I don't listen to music the way humans do, but I definitely understand why people love it. 🎵";
}

if (
    text.includes("do you like movies")
) {
    return "I don't watch movies myself, but I'm always up for talking about them. 🎬";
}

if (
    text.includes("what is your favorite movie") ||
    text.includes("whats your favorite movie")
) {
    return "I don't really have personal favorites, but tell me yours and I'll happily talk about it. 🎬😄";
}

if (
    text.includes("i am tired") ||
    text.includes("i'm tired") ||
    text.includes("im tired")
) {
    return "Sounds like you might need a little break. 😌 Take some time for yourself and come back whenever you feel ready.";
}

if (
    text.includes("i am happy") ||
    text.includes("i'm happy") ||
    text.includes("im happy")
) {
    return "That's great to hear! 😄✨ Hold on to that feeling.";
}

if (
    text.includes("i am sad") ||
    text.includes("i'm sad") ||
    text.includes("im sad")
) {
    return "I'm sorry you're having a difficult moment. 💜 If you want to talk about what's bothering you, I'm here to listen.";
}

if (
    text.includes("i am confused") ||
    text.includes("i'm confused") ||
    text.includes("im confused")
) {
    return "No worries. 😄 Tell me what's confusing you and we'll try to break it down together.";
}

if (
    text.includes("wish me luck") ||
    text.includes("can you wish me luck")
) {
    return "Absolutely! 🍀 Good luck! You've got this. 💪✨";
}

if (
    text.includes("i need motivation") ||
    text.includes("motivate me")
) {
    return "You don't have to figure everything out at once. Just take the next step. One small step can still move you forward. 🚀";
}
// RANDOM JOKES

if (
    text === "joke" ||
    text === "jokes" ||
    text.includes("tell me a joke") ||
    text.includes("tell me jokes") ||
    text.includes("tell me some jokes") ||
    text.includes("tell me another joke") ||
    text.includes("tell me another one") ||
    text.includes("make me laugh") ||
    text.includes("make me laugh please") ||
    text.includes("tell me something funny") ||
    text.includes("tell me something fun") ||
    text.includes("say something funny") ||
    text.includes("say something fun") ||
    text.includes("give me a joke") ||
    text.includes("give me some jokes") ||
    text.includes("give me jokes") ||
    text.includes("give me a funny joke") ||
    text.includes("got any jokes") ||
    text.includes("got a joke") ||
    text.includes("do you know any jokes") ||
    text.includes("do you know a joke") ||
    text.includes("can you tell me a joke") ||
    text.includes("can you tell me some jokes") ||
    text.includes("can you make me laugh") ||
    text.includes("i want a joke") ||
    text.includes("i want some jokes") ||
    text.includes("i need a laugh") ||
    text.includes("i need something funny") ||
    text.includes("i need a joke") ||
    text.includes("funny joke") ||
    text.includes("funny jokes")
) {

    const jokes = [

        "Why did the computer go to the doctor? Because it had a virus! 😂💻",

        "Why was the math book sad? Because it had too many problems. 😭📚",

        "Why don't programmers like nature? It has too many bugs. 🐛😂",

        "What do you call a sleeping computer? A nap-top. 😴💻",

        "Why did the smartphone need glasses? Because it lost its contacts. 🤓📱",

        "Why did the website break up with the server? It needed more space. 💔🌐",

        "What did the Wi-Fi say to the phone? I feel a connection between us. 📶😂",

        "Why was the keyboard always tired? It had too many shifts. 😴⌨️",

        "Why did the computer sit in the corner? It needed some personal space. 😂💻",

        "Why did the cookie go to the doctor? Because it felt crumby. 🍪😂",

        "What did the ocean say to the beach? Nothing, it just waved. 🌊😂",

        "Why was the calendar so popular? Because it had a lot of dates. 📅😂",

        "Why did the computer get cold? It left its Windows open. 🥶💻",

        "Why did the programmer prefer dark mode? Because light attracts bugs. 🐛🌙😂",

        "Why did the AI go to school? To improve its neural network. 🤖📚",

        "Why did the robot take a break? It needed to recharge its social battery. 🤖🔋😂",

        "Why did the developer bring coffee to work? Because they needed a Java boost. ☕💻😂",

        "Why did the website go to therapy? It had too many unresolved issues. 😂🌐",

        "Why did the laptop go to the gym? It wanted better processing power. 💪💻😂",

        "Why did the programmer bring two monitors? Because one wasn't enough to handle the drama. 😂🖥️",

        "What did the HTML say to the CSS? You make me look good. 😎💻",

        "Why did the browser break up with the website? Too many tabs in the relationship. 😂🌐",

        "Why did the server stay calm? It had excellent backup. 😂💾",

        "Why did the developer bring a ladder? They wanted to reach the next level. 🪜😂",

        "Why did the bicycle fall over? Because it was two-tired. 🚲😂",

        "Why don't eggs tell jokes? They might crack each other up. 🥚😂",

        "What do you call cheese that isn't yours? Nacho cheese. 🧀😂",

        "Why did the programmer quit his job? He didn't get arrays. 😂💻",

        "What did one wall say to the other? I'll meet you at the corner. 😄",

        "Why did the computer get promoted? It had outstanding performance. 😂💻",

        "Why did the AI bring an umbrella? It heard there was a cloud coming. ☁️🤖😂",

        "Why was the internet so confident? It knew everyone was connected to it. 😎🌐",

        "Why did the keyboard talk to the mouse? It wanted to clear the air. 😂⌨️",

        "Why did the robot go on vacation? It needed to reboot. 🤖🏖️",

        "Why did the developer drink coffee at midnight? Because the bugs weren't sleeping. ☕🐛😂"

    ];

    return jokes[Math.floor(Math.random() * jokes.length)];
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
// ========================================
// RANDOM JOKES + MORE
// ========================================

const jokeRequest =
    text === "joke" ||
    text === "jokes" ||
    text.includes("tell me a joke") ||
    text.includes("tell me jokes") ||
    text.includes("tell me some jokes") ||
    text.includes("give me a joke") ||
    text.includes("give me some jokes") ||
    text.includes("give me jokes") ||
    text.includes("make me laugh") ||
    text.includes("tell me something funny") ||
    text.includes("say something funny") ||
    text.includes("got any jokes") ||
    text.includes("do you know any jokes") ||
    text.includes("can you tell me a joke") ||
    text.includes("can you tell me some jokes") ||
    text.includes("i need a joke") ||
    text.includes("i need some jokes") ||
    text.includes("funny joke") ||
    text.includes("funny jokes");

const moreRequest =
    text === "more" ||
    text === "another" ||
    text === "another one" ||
    text === "one more" ||
    text === "one more joke" ||
    text === "more joke" ||
    text === "more jokes" ||
    text === "tell me more" ||
    text === "give me more" ||
    text === "again" ||
    text === "another joke" ||
    text === "more please" ||
    text === "one more please";

if (jokeRequest || moreRequest) {

    const jokes = [

        "Why did the computer go to the doctor? Because it had a virus! 😂💻",

        "Why was the math book sad? Because it had too many problems. 😭📚",

        "Why don't programmers like nature? It has too many bugs. 🐛😂",

        "What do you call a sleeping computer? A nap-top. 😴💻",

        "Why did the smartphone need glasses? Because it lost its contacts. 🤓📱",

        "Why did the website break up with the server? It needed more space. 💔🌐",

        "What did the Wi-Fi say to the phone? I feel a connection between us. 📶😂",

        "Why was the keyboard always tired? It had too many shifts. 😴⌨️",

        "Why did the cookie go to the doctor? Because it felt crumby. 🍪😂",

        "What did the ocean say to the beach? Nothing, it just waved. 🌊😂",

        "Why was the calendar so popular? Because it had a lot of dates. 📅😂",

        "Why did the computer get cold? It left its Windows open. 🥶💻",

        "Why did the programmer prefer dark mode? Because light attracts bugs. 🐛🌙😂",

        "Why did the AI go to school? To improve its neural network. 🤖📚",

        "Why did the robot take a break? It needed to recharge its social battery. 🤖🔋😂",

        "Why did the website go to therapy? It had too many unresolved issues. 😂🌐",

        "Why did the laptop go to the gym? It wanted better processing power. 💪💻😂",

        "Why did the developer bring two monitors? One wasn't enough to handle the drama. 😂🖥️",

        "Why did the browser break up with the website? Too many tabs in the relationship. 😂🌐",

        "Why did the developer bring a ladder? They wanted to reach the next level. 🪜😂",

        "Why did the bicycle fall over? Because it was two-tired. 🚲😂",

        "Why don't eggs tell jokes? They might crack each other up. 🥚😂",

        "What do you call cheese that isn't yours? Nacho cheese. 🧀😂",

        "Why did the programmer quit his job? He didn't get arrays. 😂💻",

        "What did one wall say to the other? I'll meet you at the corner. 😄",

        "Why did the computer get promoted? It had outstanding performance. 😂💻",

        "Why did the AI bring an umbrella? It heard there was a cloud coming. ☁️🤖😂",

        "Why did the robot go on vacation? It needed to reboot. 🤖🏖️",

        "Why did the developer drink coffee at midnight? Because the bugs weren't sleeping. ☕🐛😂",

        "Why did the computer need a vacation? It had too many tabs open. 😂💻",

        "Why did the phone wear a jacket? Because it had a cold call. 📱😂",

        "Why did the server get invited to every party? Because it always hosted. 🎉💻😂",

        "Why did the code go to school? It wanted to improve its syntax. 📚💻😂",

        "Why did the developer sit near the window? They wanted better cloud access. ☁️😂"

    ];

    const randomJoke =
        jokes[Math.floor(Math.random() * jokes.length)];

    lastResponseWasJoke = true;

    return randomJoke;
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