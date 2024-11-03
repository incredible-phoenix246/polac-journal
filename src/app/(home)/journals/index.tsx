"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Search,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const journals = [
  {
    id: 1,
    title: "Journal of Quantum Physics",
    author: "Dr. Alice Johnson",
    date: "2023-05-15",
    category: "Physics",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Advanced Machine Learning Techniques",
    author: "Prof. Bob Smith",
    date: "2023-06-02",
    category: "Computer Science",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Climate Change and Biodiversity",
    author: "Dr. Carol White",
    date: "2023-06-10",
    category: "Environmental Science",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Neuroscience of Decision Making",
    author: "Dr. David Brown",
    date: "2023-06-18",
    category: "Psychology",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Advancements in Gene Therapy",
    author: "Prof. Eve Green",
    date: "2023-06-25",
    category: "Biology",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Artificial Intelligence in Healthcare",
    author: "Dr. Frank Lee",
    date: "2023-07-03",
    category: "Medicine",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 7,
    title: "Sustainable Urban Planning",
    author: "Prof. Grace Taylor",
    date: "2023-07-11",
    category: "Urban Studies",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 8,
    title: "Quantum Computing: Challenges and Opportunities",
    author: "Dr. Henry Wilson",
    date: "2023-07-19",
    category: "Computer Science",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 9,
    title: "The Future of Renewable Energy",
    author: "Prof. Irene Davis",
    date: "2023-07-27",
    category: "Energy Science",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 10,
    title: "Cognitive Development in Early Childhood",
    author: "Dr. Jack Robinson",
    date: "2023-08-04",
    category: "Psychology",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 11,
    title: "Nanotechnology in Cancer Treatment",
    author: "Prof. Karen Miller",
    date: "2023-08-12",
    category: "Medicine",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 12,
    title: "Blockchain Technology and Cybersecurity",
    author: "Dr. Liam Anderson",
    date: "2023-08-20",
    category: "Information Technology",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 13,
    title: "Ocean Acidification and Marine Ecosystems",
    author: "Prof. Mia Thompson",
    date: "2023-08-28",
    category: "Marine Biology",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 14,
    title: "The Ethics of Artificial Intelligence",
    author: "Dr. Nathan Clark",
    date: "2023-09-05",
    category: "Philosophy",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 15,
    title: "Advances in Astrophysics",
    author: "Prof. Olivia Wright",
    date: "2023-09-13",
    category: "Astronomy",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function JournalList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const journalsPerPage = 6;

  const filteredJournals = journals.filter(
    (journal) =>
      journal.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || journal.category === selectedCategory)
  );

  const totalPages = Math.ceil(filteredJournals.length / journalsPerPage);
  const indexOfLastJournal = currentPage * journalsPerPage;
  const indexOfFirstJournal = indexOfLastJournal - journalsPerPage;
  const currentJournals = filteredJournals.slice(
    indexOfFirstJournal,
    indexOfLastJournal
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const categories = Array.from(
    new Set(journals.map((journal) => journal.category))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Journals
      </motion.h1>

      <motion.div
        className="mb-8 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search journals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentJournals.map((journal, index) => (
          <motion.div
            key={journal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <Image
                  src={journal.image}
                  alt={journal.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="text-xl mt-4">{journal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  By {journal.author}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Published on {journal.date}
                </p>
                <p className="text-sm font-medium">{journal.category}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href={`/journals/${journal.id}`} passHref>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        <Button
          variant="outline"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            variant={currentPage === index + 1 ? "default" : "outline"}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <motion.div
        className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Contribute?</h2>
        <p className="text-xl mb-6">
          Share your research with the world. Submit your paper today!
        </p>
        <Button size="lg" variant="secondary">
          Submit Your Manuscript
        </Button>
      </motion.div>
    </div>
  );
}
