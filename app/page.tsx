"use client";
import { AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { Book, GraduationCap, Mail, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { botToken, chatId } from "@/utils/shared";
import { FormEvent, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("first-name") as HTMLInputElement)
        .value,
      lastName: (form.elements.namedItem("last-name") as HTMLInputElement)
        .value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const text = `
<b>📥 Yangi Murojaat!</b>

👤 Ismi: <b>${data?.firstName}</b>
👤 Familiyasi: <b>${data?.lastName}</b>
📞 Telefon: <b>${data?.phone}</b>
📌 Mavzu: <b>${data?.subject}</b>
📝 Xabar: <b>${data?.message}</b>
`;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    });

    alert("Xabar muvaffaqiyatli yuborildi!");
    form.reset();

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Book className="h-6 w-6" />
            <span>Maxmudov</span>
          </Link>
          <nav className="ml-auto gap-4 sm:gap-6 hidden sm:flex">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="#courses"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Courses
            </Link>
            <Link
              href="#resources"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Resources
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your English Potential
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Expert English instruction tailored to your needs. From
                    grammar fundamentals to advanced literature analysis.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#courses">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Explore Courses
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button variant="outline">Contact Me</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center w-[550px] h-[550px] overflow-hidden rounded-2xl">
                <Image
                  src="/image1.jpg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="English teacher in classroom"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Me
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With over 4 years of teaching experience, I specialize in
                  helping students of all levels improve their English skills.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/image1.jpg?height=400&width=400"
                width={400}
                height={400}
                alt="Teacher portrait"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Certified English Educator
                      </h3>
                      <p className="text-gray-500">
                        Master's degree in English Literature with an IELTS band
                        score of 8. Specialized in modern teaching methodologies
                        and experienced in helping learners achieve academic
                        success in English.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Personalized Approach
                      </h3>
                      <p className="text-gray-500">
                        I believe every student learns differently. My teaching
                        style adapts to your unique needs and learning pace.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Proven Results</h3>
                      <p className="text-gray-500">
                        My students consistently achieve excellent results in
                        exams and develop confidence in their English abilities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="courses"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Courses Offered
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive English courses designed to meet your specific
                  goals and needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>English Fundamentals</CardTitle>
                  <CardDescription>
                    Perfect for beginners and those looking to strengthen their
                    foundation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Grammar basics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Vocabulary building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Simple conversation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Basic writing skills</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Intermediate English</CardTitle>
                  <CardDescription>
                    For students ready to advance their language proficiency
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Advanced grammar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Fluent conversation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Essay writing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Reading comprehension</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Advanced English</CardTitle>
                  <CardDescription>
                    Master complex language skills and literary analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Literature analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Academic writing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Debate and rhetoric</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Research methods</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Exam Preparation</CardTitle>
                  <CardDescription>
                    Targeted preparation for standardized English tests
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>TOEFL preparation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>IELTS strategies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>SAT/ACT English</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Practice tests</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Business English</CardTitle>
                  <CardDescription>
                    Professional English for career advancement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Email writing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Presentation skills</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Negotiation language</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Professional vocabulary</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Conversation Club</CardTitle>
                  <CardDescription>
                    Practice speaking in a supportive group environment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Weekly discussions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Cultural topics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Pronunciation practice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-emerald-600" />
                      <span>Confidence building</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="resources" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Learning Resources
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access a variety of materials to support your English learning
                  journey.
                </p>
              </div>
            </div>
            <div className="mx-auto py-12">
              <Tabs defaultValue="worksheets" className="max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="worksheets">Worksheets</TabsTrigger>
                  <TabsTrigger value="reading">Reading Lists</TabsTrigger>
                  <TabsTrigger value="videos">Video Lessons</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="worksheets"
                  className="p-4 border rounded-lg mt-4"
                >
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-emerald-600" />
                      <span>Grammar Practice Worksheets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-emerald-600" />
                      <span>Vocabulary Building Exercises</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-emerald-600" />
                      <span>Writing Prompts Collection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-emerald-600" />
                      <span>Pronunciation Guides</span>
                    </div>
                    <Button className="w-fit bg-emerald-600 hover:bg-emerald-700">
                      Download Resources
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent
                  value="reading"
                  className="p-4 border rounded-lg mt-4"
                >
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-emerald-600" />
                      <span>Beginner Reading Recommendations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-emerald-600" />
                      <span>Intermediate Literature Selections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-emerald-600" />
                      <span>Advanced Literary Analysis Texts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-emerald-600" />
                      <span>Current Articles for Discussion</span>
                    </div>
                    <Button className="w-fit bg-emerald-600 hover:bg-emerald-700">
                      View Reading Lists
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent
                  value="videos"
                  className="p-4 border rounded-lg mt-4"
                >
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-emerald-600" />
                      <span>Grammar Explanation Series</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-emerald-600" />
                      <span>Pronunciation Tutorials</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-emerald-600" />
                      <span>Conversation Practice Videos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-emerald-600" />
                      <span>Literary Analysis Discussions</span>
                    </div>
                    <Button className="w-fit bg-emerald-600 hover:bg-emerald-700">
                      Access Video Library
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Student Testimonials
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear what my students have to say about their learning
                  experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/placeholder.svg?height=50&width=50"
                        alt="Student"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">James Davis</CardTitle>
                      <CardDescription>TOEFL Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    "Thanks to the exam preparation course, I scored 112 on my
                    TOEFL exam. The strategies and practice tests were
                    invaluable!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/placeholder.svg?height=50&width=50"
                        alt="Student"
                      />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Maria Lopez</CardTitle>
                      <CardDescription>
                        Business English Student
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    "The Business English course helped me secure a promotion at
                    work. My communication skills improved dramatically."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/placeholder.svg?height=50&width=50"
                        alt="Student"
                      />
                      <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Alex Kim</CardTitle>
                      <CardDescription>
                        Advanced English Student
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    "The literature analysis skills I learned helped me excel in
                    my university studies. The teaching approach was engaging
                    and effective."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/placeholder.svg?height=50&width=50"
                        alt="Student"
                      />
                      <AvatarFallback>SP</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Sarah Parker</CardTitle>
                      <CardDescription>
                        Conversation Club Member
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    "The conversation club boosted my confidence in speaking
                    English. The supportive environment made it easy to practice
                    and improve."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/placeholder.svg?height=50&width=50"
                        alt="Student"
                      />
                      <AvatarFallback>RJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Raj Patel</CardTitle>
                      <CardDescription>Fundamentals Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    "Starting from scratch was intimidating, but the
                    fundamentals course made learning English accessible and
                    enjoyable."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/placeholder.svg?height=50&width=50"
                        alt="Student"
                      />
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Emma Wilson</CardTitle>
                      <CardDescription>IELTS Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    "I achieved a band score of 8.0 on my IELTS exam after just
                    three months of preparation. The personalized approach made
                    all the difference."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or ready to start your English learning
                  journey? Contact me today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-emerald-600" />
                    <span>contact@englishexcellence.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-emerald-600" />
                    <span>+998 99 645 6867</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-emerald-600" />
                    <span>Virtual and in-person sessions available</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4 pt-4">
                    <Link href={"https://t.me/Maxmudov003"} target="_blank">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M21.05 2.39 2.9 10.28c-.84.34-.83.8-.15 1.01l4.56 1.43 1.75 5.56c.22.68.4.94.82.94.42 0 .6-.2.83-.44l2-2.05 4.15 3.05c.76.42 1.3.2 1.48-.7L22.97 3.7c.27-1.06-.4-1.52-1.12-1.31Z" />
                        </svg>
                        <span className="sr-only">Telegram</span>
                      </Button>
                    </Link>

                    <Link href={"https://www.instagram.com/makhmudov.ms003"}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.7-.6-8.3 2-11z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you soon
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First name
                        </label>
                        <input
                          id="first-name"
                          name="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last name
                        </label>
                        <input
                          name="last-name"
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone
                      </label>
                      <input
                        name="phone"
                        id="phone"
                        type="text"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="+998901234567"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="I'm interested in..."
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell me about your learning goals..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                      disabled={loading}
                    >
                      {loading ? "loading..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy;{" "}
            <Link target="_blank" href={"https://t.me/Tilav_web"}>
              Developer
            </Link>
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Cookies
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
