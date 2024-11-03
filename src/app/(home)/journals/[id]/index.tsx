"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Download,
  Share2,
  BookOpen,
  ThumbsUp,
  MessageSquare,
  Send,
} from "lucide-react";
import { Button } from "ui/button";
import { Card, CardContent } from "ui/card";
import { Textarea } from "ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "ui/avatar";
import Link from "next/link";
import { journals } from "./data";

export default function JournalDetail() {
  const params = useParams();
  const [journal, setJournal] = useState<(typeof journals)[0] | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    const journalId = Number(params.id);
    const foundJournal = journals.find((j) => j.id === journalId);
    setJournal(foundJournal || null);
  }, [params.id]);

  if (!journal) {
    return <div className="container mx-auto px-4 py-8">Journal not found</div>;
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: journal.comments.length + 1,
        user: "Current User",
        avatar: "/placeholder.svg?height=40&width=40",
        content: newComment,
        date: new Date().toISOString().split("T")[0],
      };
      setJournal({
        ...journal,
        comments: [...journal.comments, newCommentObj],
      });
      setNewComment("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/journals" passHref>
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Journals
          </Button>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={journal.image}
            alt={journal.title}
            width={1200}
            height={600}
            className="w-full h-64 object-cover"
          />
        </motion.div>
        <div className="p-6">
          <motion.h1
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {journal.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground mb-2">
              By {journal.author}
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Published on {journal.date}
            </p>
            <p className="text-lg font-medium mb-6">{journal.category}</p>
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <p className="text-lg mb-6">{journal.summary}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <Button className="flex-1" onClick={() => setIsReading(true)}>
              <BookOpen className="mr-2 h-4 w-4" /> Read Journal
            </Button>
            <Button className="flex-1">
              <Download className="mr-2 h-4 w-4" /> Download Journal
            </Button>
            <Button variant="outline" className="flex-1">
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-primary" />
                <span className="font-semibold">Reads</span>
              </div>
              <span>{journal.reads}</span>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <ThumbsUp className="h-6 w-6 mr-2 text-primary" />
                <span className="font-semibold">Likes</span>
              </div>
              <span>{isLiked ? journal.likes + 1 : journal.likes}</span>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 mr-2 text-primary" />
                <span className="font-semibold">Comments</span>
              </div>
              <span>{journal.comments.length}</span>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-8 flex justify-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            variant={isLiked ? "default" : "outline"}
            onClick={() => setIsLiked(!isLiked)}
          >
            <ThumbsUp className="mr-2 h-5 w-5" />
            {isLiked ? "Liked" : "Like this Journal"}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <Textarea
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-2"
          />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit">
              <Send className="mr-2 h-4 w-4" /> Post Comment
            </Button>
          </motion.div>
        </form>
        <div className="space-y-4">
          <AnimatePresence>
            {journal.comments.map((comment, index) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-muted p-4 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={comment.avatar} alt={comment.user} />
                    <AvatarFallback>{comment.user[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{comment.user}</p>
                    <p className="text-sm text-muted-foreground">
                      {comment.date}
                    </p>
                  </div>
                </div>
                <p>{comment.content}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      <AnimatePresence>
        {isReading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-card p-6 rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <h2 className="text-2xl font-bold mb-4">{journal.title}</h2>
              <p className="mb-4">
                This is where the full content of the journal would be
                displayed. For demonstration purposes, we're showing a
                placeholder text.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                auctor, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec
                aliquam nisl nisl sit amet nisl. Nullam auctor, nisl nec
                ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl
                sit amet nisl.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={() => setIsReading(false)}>Close</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
