export const journals = [
    {
        id: 1,
        title: "Journal of Quantum Physics",
        author: "Dr. Alice Johnson",
        date: "2023-05-15",
        category: "Physics",
        image: "/placeholder.svg?height=400&width=600",
        summary: "This journal explores recent advancements in quantum physics, including quantum entanglement and quantum computing.",
        likes: 156,
        comments: [
            { id: 1, user: "Bob Smith", avatar: "/placeholder.svg?height=40&width=40", content: "Fascinating read! The implications for quantum computing are mind-boggling.", date: "2023-05-16" },
            { id: 2, user: "Carol White", avatar: "/placeholder.svg?height=40&width=40", content: "I'd love to see more on the practical applications of quantum entanglement.", date: "2023-05-17" }
        ],
        reads: 1890
    },
    {
        id: 2,
        title: "Advanced Machine Learning Techniques",
        author: "Prof. Bob Smith",
        date: "2023-06-02",
        category: "Computer Science",
        image: "/placeholder.svg?height=400&width=600",
        summary: "A comprehensive review of cutting-edge machine learning algorithms and their applications in various fields.",
        likes: 203,
        comments: [
            { id: 1, user: "Alice Johnson", avatar: "/placeholder.svg?height=40&width=40", content: "The section on reinforcement learning was particularly insightful.", date: "2023-06-03" },
            { id: 2, user: "David Brown", avatar: "/placeholder.svg?height=40&width=40", content: "I'm curious about the potential applications in healthcare. Any thoughts?", date: "2023-06-04" }
        ],
        reads: 2150
    },
    {
        id: 3,
        title: "Climate Change and Biodiversity",
        author: "Dr. Carol White",
        date: "2023-06-10",
        category: "Environmental Science",
        image: "/placeholder.svg?height=400&width=600",
        summary: "An in-depth analysis of the impact of climate change on global biodiversity and potential mitigation strategies.",
        likes: 178,
        comments: [
            { id: 1, user: "Eve Green", avatar: "/placeholder.svg?height=40&width=40", content: "This research is crucial for developing effective conservation policies.", date: "2023-06-11" },
            { id: 2, user: "Frank Lee", avatar: "/placeholder.svg?height=40&width=40", content: "I'd be interested in seeing more data on marine ecosystems.", date: "2023-06-12" }
        ],
        reads: 1980
    },
    {
        id: 4,
        title: "Neuroscience of Decision Making",
        author: "Dr. David Brown",
        date: "2023-06-18",
        category: "Psychology",
        image: "/placeholder.svg?height=400&width=600",
        summary: "This journal delves into the neural mechanisms underlying human decision-making processes and their implications.",
        likes: 145,
        comments: [
            { id: 1, user: "Grace Taylor", avatar: "/placeholder.svg?height=40&width=40", content: "The implications for understanding addiction are fascinating.", date: "2023-06-19" },
            { id: 2, user: "Henry Wilson", avatar: "/placeholder.svg?height=40&width=40", content: "How does this research apply to group decision-making scenarios?", date: "2023-06-20" }
        ],
        reads: 1760
    },
    {
        id: 5,
        title: "Advancements in Gene Therapy",
        author: "Prof. Eve Green",
        date: "2023-06-25",
        category: "Biology",
        image: "/placeholder.svg?height=400&width=600",
        summary: "A comprehensive overview of recent breakthroughs in gene therapy and their potential applications in treating genetic disorders.",
        likes: 189,
        comments: [
            { id: 1, user: "Irene Davis", avatar: "/placeholder.svg?height=40&width=40", content: "The ethical considerations section was particularly thought-provoking.", date: "2023-06-26" },
            { id: 2, user: "Jack Robinson", avatar: "/placeholder.svg?height=40&width=40", content: "I'm excited about the potential applications in treating rare diseases.", date: "2023-06-27" }
        ],
        reads: 2050
    },
    {
        id: 6,
        title: "Artificial Intelligence in Healthcare",
        author: "Dr. Frank Lee",
        date: "2023-07-03",
        category: "Medicine",
        image: "/placeholder.svg?height=400&width=600",
        summary: "An exploration of how AI is revolutionizing healthcare, from diagnosis to treatment planning and drug discovery.",
        likes: 217,
        comments: [
            { id: 1, user: "Karen Miller", avatar: "/placeholder.svg?height=40&width=40", content: "The potential for AI in personalized medicine is incredible.", date: "2023-07-04" },
            { id: 2, user: "Liam Anderson", avatar: "/placeholder.svg?height=40&width=40", content: "How are privacy concerns being addressed in these AI applications?", date: "2023-07-05" }
        ],
        reads: 2340
    },
    {
        id: 7,
        title: "Sustainable Urban Planning",
        author: "Prof. Grace Taylor",
        date: "2023-07-11",
        category: "Urban Studies",
        image: "/placeholder.svg?height=400&width=600",
        summary: "This journal discusses innovative approaches to urban planning that prioritize sustainability and quality of life.",
        likes: 132,
        comments: [
            { id: 1, user: "Mia Thompson", avatar: "/placeholder.svg?height=40&width=40", content: "The case studies on green infrastructure were particularly inspiring.", date: "2023-07-12" },
            { id: 2, user: "Nathan Clark", avatar: "/placeholder.svg?height=40&width=40", content: "How can these principles be applied to rapidly growing cities in developing countries?", date: "2023-07-13" }
        ],
        reads: 1620
    },
    {
        id: 8,
        title: "Quantum Computing: Challenges and Opportunities",
        author: "Dr. Henry Wilson",
        date: "2023-07-19",
        category: "Computer Science",
        image: "/placeholder.svg?height=400&width=600",
        summary: "An in-depth look at the current state of quantum computing, its challenges, and potential future applications.",
        likes: 198,
        comments: [
            { id: 1, user: "Olivia Wright", avatar: "/placeholder.svg?height=40&width=40", content: "The explanation of quantum error correction was particularly clear.", date: "2023-07-20" },
            { id: 2, user: "Peter Young", avatar: "/placeholder.svg?height=40&width=40", content: "I'm curious about the timeline for practical quantum supremacy.", date: "2023-07-21" }
        ],
        reads: 2180
    },
    {
        id: 9,
        title: "The Future of Renewable Energy",
        author: "Prof. Irene Davis",
        date: "2023-07-27",
        category: "Energy Science",
        image: "/placeholder.svg?height=400&width=600",
        summary: "A comprehensive analysis of emerging renewable energy technologies and their potential impact on global energy systems.",
        likes: 176,
        comments: [
            { id: 1, user: "Quinn Adams", avatar: "/placeholder.svg?height=40&width=40", content: "The section on grid-scale energy storage was particularly informative.", date: "2023-07-28" },
            { id: 2, user: "Rachel Brown", avatar: "/placeholder.svg?height=40&width=40", content: "How do you see the role of nuclear energy in this renewable future?", date: "2023-07-29" }
        ],
        reads: 1950
    },
    {
        id: 10,
        title: "Cognitive Development in Early Childhood",
        author: "Dr. Jack Robinson",
        date: "2023-08-04",
        category: "Psychology",
        image: "/placeholder.svg?height=400&width=600",
        summary: "This journal examines the latest research on cognitive development in young children and its implications for education.",
        likes: 159,
        comments: [
            { id: 1, user: "Sarah Lee", avatar: "/placeholder.svg?height=40&width=40", content: "The implications for early childhood education policies are significant.", date: "2023-08-05" },
            { id: 2, user: "Tom Wilson", avatar: "/placeholder.svg?height=40&width=40", content: "How does screen time factor into these developmental processes?", date: "2023-08-06" }
        ],
        reads: 1820
    },
    {
        id: 11,
        title: "Nanotechnology in Cancer Treatment",
        author: "Prof. Karen Miller",
        date: "2023-08-12",
        category: "Medicine",
        image: "/placeholder.svg?height=400&width=600",
        summary: "An exploration of how nanotechnology is being used to develop more effective and targeted cancer treatments.",
        likes: 205,
        comments: [
            { id: 1, user: "Uma Patel", avatar: "/placeholder.svg?height=40&width=40", content: "The potential for reducing side effects is really promising.", date: "2023-08-13" },
            { id: 2, user: "Victor Chang", avatar: "/placeholder.svg?height=40&width=40", content: "I'm curious about the timeline for clinical trials of these new treatments.", date: "2023-08-14" }
        ],
        reads: 2270
    },
    {
        id: 12,
        title: "Blockchain Technology and Cybersecurity",
        author: "Dr. Liam Anderson",
        date: "2023-08-20",
        category: "Information Technology",
        image: "/placeholder.svg?height=400&width=600",
        summary: "This journal discusses the potential of blockchain technology in enhancing cybersecurity across various industries.",
        likes: 187,
        comments: [
            { id: 1, user: "Wendy Baker", avatar: "/placeholder.svg?height=40&width=40", content: "The analysis of potential vulnerabilities was particularly insightful.", date: "2023-08-21" },
            { id: 2, user: "Xavier Lewis", avatar: "/placeholder.svg?height=40&width=40", content: "How does this technology address the issue of quantum computing threats?", date: "2023-08-22" }
        ],
        reads: 2090
    },
    {
        id: 13,
        title: "Ocean Acidification and Marine Ecosystems",
        author: "Prof. Mia Thompson",
        date: "2023-08-28",
        category: "Marine Biology",
        image: "/placeholder.svg?height=400&width=600",
        summary: "An in-depth analysis of the effects of ocean acidification on marine life and potential conservation strategies.",
        likes: 168,
        comments: [
            { id: 1, user: "Yara Silva", avatar: "/placeholder.svg?height=40&width=40", content: "The impact on coral reefs is particularly concerning.", date: "2023-08-29" },
            { id: 2, user: "Zack Taylor", avatar: "/placeholder.svg?height=40&width=40", content: "What role can individuals play in mitigating these effects?", date: "2023-08-30" }
        ],
        reads: 1910
    },
    {
        id: 14,
        title: "The Ethics of Artificial Intelligence",
        author: "Dr. Nathan Clark",
        date: "2023-09-05",
        category: "Philosophy",
        image: "/placeholder.svg?height=400&width=600",
        summary: "This journal explores the ethical implications of AI development and deployment in various aspects of society.",
        likes: 193,
        comments: [
            { id: 1, user: "Anna Johnson", avatar: "/placeholder.svg?height=40&width=40", content: "The discussion on AI bias was particularly thought-provoking.", date: "2023-09-06" },
            { id: 2, user: "Ben Wilson", avatar: "/placeholder.svg?height=40&width=40", content: "How can we ensure AI development aligns with human values?", date: "2023-09-07" }
        ],
        reads: 2200
    },
    {
        id: 15,
        title: "Advances in Astrophysics",
        author: "Prof. Olivia Wright",
        date: "2023-09-13",
        category: "Astronomy",
        image: "/placeholder.svg?height=400&width=600",
        summary: "A comprehensive review of recent discoveries and theories in astrophysics, including dark matter and exoplanets.",
        likes: 211,
        comments: [
            { id: 1, user: "Chris Lee", avatar: "/placeholder.svg?height=40&width=40", content: "The section on exoplanet detection methods was fascinating.", date: "2023-09-14" },
            { id: 2, user: "Diana Chen", avatar: "/placeholder.svg?height=40&width=40", content: "How close are we to understanding the nature of dark matter?", date: "2023-09-15" }
        ],
        reads: 2380
    }
];