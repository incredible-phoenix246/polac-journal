"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, TrendingUp, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Advancing Knowledge Through Publication
            </h1>
            <p className="text-xl mb-8">
              Discover, Publish, and Elevate Your Research with Journal
              Publisher
            </p>
            <Button size="lg" className="text-lg">
              Explore Journals <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Journals Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Journals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Science & Technology",
              "Medicine & Health",
              "Social Sciences",
            ].map((journal, index) => (
              <motion.div
                key={journal}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{journal}</CardTitle>
                    <CardDescription>
                      Latest research and breakthroughs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      View Journal
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: BookOpen, stat: "1000+", label: "Published Articles" },
              { icon: Users, stat: "500+", label: "Expert Reviewers" },
              { icon: TrendingUp, stat: "5M+", label: "Monthly Readers" },
            ].map(({ icon: Icon, stat, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-4xl font-bold mb-2">{stat}</h3>
                <p className="text-lg">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Publish Your Research?
            </h2>
            <p className="text-xl mb-8">
              Join our community of researchers and make your work accessible to
              millions.
            </p>
            <Button size="lg" variant="secondary" className="text-lg">
              Submit Your Manuscript <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter for the latest research and
              publication updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button type="submit" size="lg">
                Subscribe <Mail className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
