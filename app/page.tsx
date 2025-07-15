"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  MessageSquare,
  Users,
  Share2,
  BarChart2,
  PresentationIcon as PresentationChart,
  Award,
  Shield,
  Lock,
  Key,
  FileCheck,
  AlertCircle,
  Database,
  DollarSign,
  TrendingUp,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"
import PricingCard from "@/components/pricing-card"
import ServiceCard from "@/components/service-card"
import BlogCard from "@/components/blog-card"
import BlogModal from "@/components/blog-modal"
import WhyXeroSection from "@/components/why-xero-section"
import Link from "next/link"
import ConsultationModal from "@/components/consultation-modal"
import WelcomePopup from "@/components/welcome-popup"



export default function Home() {
  const { scrollY } = useScroll()
  const ref = useRef(null)
  const [activeSection, setActiveSection] = useState("home")
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAllBlogs, setShowAllBlogs] = useState(false)
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)
  const [isWelcomePopupOpen, setIsWelcomePopupOpen] = useState(false)

  // Animation values based on scroll
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8])
  const scale = useTransform(scrollY, [0, 200], [1, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Show welcome popup after a short delay when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWelcomePopupOpen(true)
    }, 2000) // Show popup after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleReadMore = (blog: any) => {
    setSelectedBlog(blog)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const toggleShowAllBlogs = () => {
    setShowAllBlogs(!showAllBlogs)
  }

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content:
        "Vision Accountants transformed our financial management. Their cloud-based approach gives us real-time insights we never had before.",
      image: "/clients/1.png",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content:
        "The team at Vision Accountants helped us scale our business with confidence. Their expertise in tax planning saved us thousands.",
      image: "/clients/2.png",
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Entrepreneur",
      content:
        "I was drowning in receipts before finding Vision Accountants. Now my books are always up-to-date and tax season is stress-free.",
      image: "/clients/3.png",
    },
  ]

  const services = [
    {
      title: "Bookkeeping Services",
      description: "Take control of your business finances with expert bookkeeping services.",
      icon: "BookOpen",
      link: "/services#bookkeeping",
      fullDescription:
        "Running a business is hard enough—let us handle the numbers. At Vision Accountants, we combine cutting-edge technology with expert bookkeeping to simplify your financial management, so you can focus on what really matters: growing your business.",
    },
    {
      title: "Payroll Services",
      description: "Simplify payroll with expert services designed for your business.",
      icon: "DollarSign",
      link: "/services#payroll",
      fullDescription:
        "Payroll doesn't have to be a headache. From calculating wages to filing taxes, managing payroll can be time-consuming and complex. At Vision Accountants, we take the stress out of payroll so you can focus on what you do best—running your business.",
    },
    {
      title: "Project Accounting",
      description: "Take control of your projects with expert project accounting services.",
      icon: "BarChart",
      link: "/services#project-accounting",
      fullDescription:
        "Are your project finances a maze of spreadsheets, receipts, and guesswork? Whether you're in construction, consulting, IT, or any project-based industry, managing project costs and budgets doesn't have to be overwhelming.",
    },
    {
      title: "Outsourced Accounting",
      description: "Outsource your accounting and focus on what you do best.",
      icon: "FileText",
      link: "/services#outsourced-accounting",
      fullDescription:
        "Running a business is hard enough—let us handle the numbers. At Vision Accountants, we offer professional outsourced accounting services designed to save you time, reduce stress, and keep your finances in perfect order.",
    },
    {
      title: "Virtual Bookkeeper",
      description: "Hire a dedicated Virtual Bookkeeper starting at just $10/hour.",
      icon: "User",
      link: "/services#virtual-bookkeeper",
      fullDescription:
        "Tired of inconsistent bookkeeping? Weekly or monthly services don't fit your needs? At Vision Accounting, we offer dedicated Virtual Bookkeepers who provide on-demand support, ensuring your finances stay accurate and up to date—without the cost of a full-time hire.",
    },
    {
      title: "Income Tax Filing",
      description: "Simplify tax season with expert income tax filing services.",
      icon: "FileCheck",
      link: "/services#tax-filing",
      fullDescription:
        "Tax season doesn't have to be stressful. At Vision Accountants, we specialize in professional income tax filing services designed to save you time, maximize your refund, and ensure compliance with the IRS.",
    },
  ]

  const blogs = [
    {
      title: "The Future of Accounting: Why Cloud-Based Solutions Are a Game-Changer",
      excerpt:
        "Let's face it—accounting isn't exactly known for being exciting. For most business owners, it's a necessary evil: a never-ending cycle of receipts, spreadsheets, and deadlines that leaves you feeling overwhelmed and frustrated. But what if we told you there's a better way?",
      image: "/B1.png",
      date: "March 15, 2023",
      author: "Vision Accountants",
      content: `Let's face it—accounting isn't exactly known for being exciting. For most business owners, it's a necessary evil: a never-ending cycle of receipts, spreadsheets, and deadlines that leaves you feeling overwhelmed and frustrated. But what if we told you there's a better way? A way to turn your accounting from a headache into a superpower?

Enter cloud-based accounting—the future of financial management. It's not just a trend; it's a game-changer. And at Vision Accountants, we're here to show you why.

What Is Cloud-Based Accounting?

Imagine having access to your financial data anytime, anywhere. No more digging through file cabinets or waiting for your accountant to email you a report. Cloud-based accounting lets you store, manage, and analyze your finances online, using secure platforms like QuickBooks Online, Xero, or Wave.

It's like having your entire accounting system in your pocket—ready whenever you need it.

Why Cloud Accounting Is a Game-Changer

1. Real-Time Access to Your Financials

Gone are the days of waiting for month-end reports to see how your business is doing. With cloud accounting, you get real-time insights into your cash flow, expenses, and profits. Whether you're at the office, at home, or on the go, your financial data is just a click away.

2. Say Goodbye to Paperwork

Tired of drowning in receipts and invoices? Cloud accounting automates the tedious stuff, like data entry and reconciliation. Just snap a photo of your receipt, upload it to the cloud, and let the software do the rest. It's like having a personal assistant for your finances.

3. Bank-Level Security

Worried about keeping your data safe? Cloud platforms use bank-level encryption to protect your information. Plus, with features like two-factor authentication (2FA), you can rest easy knowing your data is secure.

4. Seamless Collaboration

Working with an accountant used to mean endless emails and file attachments. Not anymore. Cloud accounting lets you and your accountant work together in real time, sharing data and insights instantly. It's like having your accountant in the room with you—without the awkward small talk.

5. Scalability for Growing Businesses

As your business grows, your accounting needs will change. Cloud-based solutions grow with you, offering flexible features and pricing to match your needs. Whether you're a solopreneur or a growing enterprise, cloud accounting has you covered.

But What About the Myths?

We get it—change can be scary. You might be thinking:

"Isn't the cloud risky?" Actually, cloud platforms are often more secure than traditional systems, with regular updates and backups to keep your data safe.

"Do I need to be tech-savvy?" Not at all! Cloud accounting is designed to be user-friendly, and our team is always here to guide you every step of the way.

"Is it worth the cost?" Think of it as an investment in your business's future. The time and money you'll save will more than pay for itself.

Why Vision Accountants?

At Vision Accountants, we're not just about numbers—we're about empowering your business. We've embraced cloud-based solutions because we believe they're the future of accounting. And we're here to help you make the switch with confidence.

When you work with us, you're not just getting an accountant—you're getting a trusted partner who's invested in your success. We'll handle the technical stuff, so you can focus on what you do best: running your business.

Ready to Embrace the Future?

The future of accounting is here, and it's brighter than ever. With cloud-based solutions, you can say goodbye to stress, inefficiency, and uncertainty—and hello to clarity, control, and confidence.

At Vision Accountants, we're here to guide you every step of the way. Whether you're ready to make the switch or just want to learn more, we're here for you. Let's turn your accounting from a chore into a competitive advantage.

Schedule a free consultation today and see how cloud-based accounting can transform your business. The future is waiting—let's build it together.`,
    },
    {
      title: "Tax Mistakes Small Businesses Make (and How to Avoid Them)",
      excerpt:
        "Let's be honest—taxes are nobody's idea of a good time. For small business owners, they can feel like a minefield of deadlines, forms, and regulations. One wrong move, and you could be facing penalties, audits, or worse.",
      image: "/B2.png",
      date: "April 2, 2023",
      author: "Vision Accountants",
      content: `Let's be honest—taxes are nobody's idea of a good time. For small business owners, they can feel like a minefield of deadlines, forms, and regulations. One wrong move, and you could be facing penalties, audits, or worse.

But here's the good news: you don't have to go it alone. At Vision Accountants, we've seen it all—and we're here to help you avoid the most common tax mistakes small businesses make. Think of this as your tax survival guide, packed with tips to keep your business compliant, stress-free, and ready to thrive.

Mistake #1: Missing Deadlines

The Problem:
Tax deadlines don't wait for anyone. Miss one, and you could be hit with penalties, interest, or even an audit.

The Fix:
- Mark your calendar with all key tax deadlines (federal, state, and local).
- Set reminders a week or two in advance to give yourself plenty of time.
- Work with a professional accountant (like us!) to ensure everything is filed on time.

Pro Tip: At Vision Accountants, we handle the deadlines so you don't have to. Consider it one less thing to worry about!

Mistake #2: Misclassifying Employees and Contractors

The Problem:
Hiring freelancers or contractors? Be careful—misclassifying them as employees (or vice versa) can lead to serious tax issues.

The Fix:
- Understand the difference between employees and contractors (hint: it's all about control and independence).
- Use IRS guidelines to classify workers correctly.
- When in doubt, ask your accountant for guidance.

Pro Tip: We help businesses navigate worker classifications every day. Let us take the guesswork out of the equation.

Mistake #3: Failing to Keep Accurate Records

The Problem:
Receipts stuffed in a shoebox? Spreadsheets that haven't been updated since last year? Poor record-keeping can lead to missed deductions, errors, and headaches during tax season.

The Fix:
- Go digital! Use cloud-based tools like QuickBooks or Xero to track income and expenses in real time.
- Keep all receipts, invoices, and financial documents organized (bonus points for using apps like Hubdoc or Expensify).
- Reconcile your accounts regularly to catch errors early.

Pro Tip: We can set you up with the right tools and systems to make record-keeping a breeze. No shoeboxes required!

Mistake #4: Overlooking Deductions and Credits

The Problem:
Did you know you could be leaving money on the table? Many small businesses miss out on valuable deductions and credits simply because they don't know they exist.

The Fix:
- Familiarize yourself with common deductions, like home office expenses, mileage, and startup costs.
- Don't forget about tax credits, such as the Research and Development (R&D) Credit or the Work Opportunity Tax Credit (WOTC).
- Work with a professional accountant to ensure you're claiming everything you're entitled to.

Pro Tip: At Vision Accountants, we're experts at finding every deduction and credit your business qualifies for. Let us help you keep more of your hard-earned money.

Mistake #5: Trying to Do It All Yourself

The Problem:
Running a business is a full-time job. Adding "tax expert" to your resume can lead to burnout, mistakes, and missed opportunities.

The Fix:
- Outsource your accounting and tax prep to professionals who live and breathe this stuff.
- Focus on what you do best—growing your business—and let us handle the rest.

Pro Tip: Think of us as your financial pit crew. We'll keep your business running smoothly so you can focus on the road ahead.

Why Vision Accountants?

At Vision Accountants, we know taxes can feel overwhelming. But they don't have to be. We're here to take the stress out of tax season and help you avoid costly mistakes.

When you work with us, you're not just getting an accountant—you're getting a trusted partner who's invested in your success. We'll handle the numbers, so you can focus on what really matters: running your business.

Ready to Tackle Tax Season Like a Pro?

Tax mistakes happen—but they don't have to happen to you. With the right tools, knowledge, and support, you can navigate tax season with confidence.

At Vision Accountants, we're here to make taxes simple, stress-free, and even (dare we say it) empowering. Let's turn your tax headaches into opportunities for growth.

Schedule a free consultation today and see how we can help your business thrive. Because when it comes to taxes, you don't have to go it alone—we've got your back.`,
    },
    {
      title: "5 Financial Metrics Every Business Owner Should Track",
      excerpt:
        "Let's face it—running a business is a lot like driving a car. You need to keep your eyes on the dashboard to make sure everything's running smoothly. But instead of speed and fuel levels, your dashboard is all about financial metrics.",
      image: "/B3.png",
      date: "May 10, 2023",
      author: "Vision Accountants",
      content: `Let's face it—running a business is a lot like driving a car. You need to keep your eyes on the dashboard to make sure everything's running smoothly. But instead of speed and fuel levels, your dashboard is all about financial metrics.

The problem? Many business owners don't know which metrics to track—or why they even matter. That's where we come in. At Vision Accountants, we're here to help you understand the numbers that drive your business. Think of this as your financial GPS, guiding you toward success.

Ready to take control of your finances? Let's dive in.

1. Cash Flow: The Lifeblood of Your Business

Why It Matters:
Cash flow is the money moving in and out of your business. It's what keeps the lights on, pays your team, and fuels growth. But here's the kicker: you can be profitable on paper and still run out of cash.

What to Track:
- Positive Cash Flow: More money coming in than going out.
- Negative Cash Flow: More money going out than coming in.

Pro Tip: Use a cash flow statement to monitor your inflows and outflows. At Vision Accountants, we can help you spot trends and plan for the future.

2. Profit Margins: Are You Pricing Right?

Why It Matters:
Profit margins tell you how much money you're actually keeping from each sale. If your margins are too thin, you could be working hard just to break even.

What to Track:
- Gross Profit Margin: (Revenue - Cost of Goods Sold) / Revenue.
- Net Profit Margin: (Revenue - All Expenses) / Revenue.

Pro Tip: If your margins are low, it might be time to revisit your pricing strategy or cut unnecessary costs. We can help you crunch the numbers and make smart decisions.

3. Accounts Receivable Turnover: Are You Getting Paid on Time?

Why It Matters:
If your clients aren't paying on time, your cash flow can take a hit. This metric shows how quickly you're collecting payments—and whether you need to tighten up your invoicing process.

What to Track:
- Accounts Receivable Turnover Ratio: Net Credit Sales / Average Accounts Receivable.

Pro Tip: Aim for a high turnover ratio. If it's low, consider offering early payment discounts or setting stricter payment terms. We can help you streamline your invoicing and collections process.

4. Operating Expenses: Are You Overspending?

Why It Matters:
Operating expenses are the costs of running your business—rent, utilities, salaries, and more. If they're too high, they can eat into your profits.

What to Track:
- Total Operating Expenses: The sum of all your day-to-day costs.
- Operating Expense Ratio: Operating Expenses / Revenue.

Pro Tip: Look for ways to reduce costs without sacrificing quality. We can help you identify areas where you can cut back and save.

5. Gross Revenue: Are You Growing or Stagnating?

Why It Matters:
Gross revenue is the total amount of money your business brings in before expenses. It's a key indicator of growth—but it's not the whole story.

What to Track:
- Monthly/Quarterly Revenue Trends: Are your sales increasing, decreasing, or staying the same?
- Revenue by Product/Service: Which offerings are driving the most income?

Pro Tip: Don't just focus on revenue—look at profitability too. We can help you analyze your revenue streams and make data-driven decisions.

Why Vision Accountants?

Tracking these metrics might sound overwhelming, but it doesn't have to be. At Vision Accountants, we're here to make financial management simple, stress-free, and even empowering.

When you work with us, you're not just getting an accountant—you're getting a trusted partner who's invested in your success. We'll help you understand your numbers, spot opportunities, and make smart decisions for your business.

Ready to Take Control of Your Finances?

Your financial metrics are more than just numbers—they're the key to unlocking your business's potential. By tracking these 5 metrics, you'll gain the insights you need to grow, thrive, and achieve your vision.

At Vision Accountants, we're here to help you every step of the way. Whether you need help setting up your financial dashboard or analyzing your metrics, we've got your back.

Schedule a free consultation today and see how we can help your business succeed. Because when it comes to your finances, you don't have to go it alone—we're here for you.`,
    },
    {
      title: "How to Choose the Right Accounting Software for Your Business",
      excerpt:
        "Choosing the right accounting software is like finding the perfect pair of shoes—it needs to fit just right, support your unique needs, and help you go the distance. But with so many options on the market, how do you know which one is right for your business?",
      image: "/B4.png",
      date: "June 15, 2023",
      author: "Vision Accountants",
      content: `Choosing the right accounting software is like finding the perfect pair of shoes—it needs to fit just right, support your unique needs, and help you go the distance. But with so many options on the market, how do you know which one is right for your business?

At Vision Accountants, we've helped hundreds of businesses find their perfect accounting software match. And we're here to share our insights with you. Think of this as your ultimate guide to choosing accounting software that will grow with your business and make your financial life easier.

Why Your Choice of Accounting Software Matters

The right accounting software isn't just about tracking expenses and income—it's about giving you the insights you need to make smart business decisions. It can help you:

- Save time by automating tedious tasks
- Reduce errors with built-in checks and balances
- Get paid faster with professional invoicing
- Stay compliant with tax regulations
- Make data-driven decisions with real-time reporting

But choose the wrong software, and you could end up with a system that's too complex, too simple, or just not right for your business needs. Let's make sure that doesn't happen.

Step 1: Assess Your Business Needs

Before you start comparing features and prices, take a step back and think about what you really need from your accounting software.

Ask yourself:
- How many transactions do you process each month?
- Do you need inventory management?
- Will you be processing payroll?
- How many users need access to the system?
- Do you need industry-specific features?
- What other tools do you use that might need to integrate with your accounting software?

Your answers will help narrow down your options and ensure you're looking at software that fits your business.

Step 2: Consider These Must-Have Features

While every business is unique, there are some features that almost every business should look for in accounting software:

1. Cloud-Based Access
   Look for software that lets you access your financial data anytime, anywhere. Cloud-based solutions like QuickBooks Online and Xero offer flexibility and real-time updates.

2. User-Friendly Interface
   If the software is too complicated, you won't use it effectively. Look for an intuitive interface that you and your team can navigate with ease.

3. Bank Feed Integration
   Automatic bank feeds save time and reduce errors by importing transactions directly from your bank accounts.

4. Invoicing and Payment Processing
   Look for software that makes it easy to create professional invoices and accept online payments.

5. Reporting Capabilities
   Make sure the software offers the reports you need to understand your business's financial health.

6. Tax Compliance
   Choose software that helps you stay compliant with tax regulations and makes tax time less stressful.

7. Mobile App
   A good mobile app lets you manage your finances on the go, from sending invoices to capturing receipts.

Step 3: Compare the Top Contenders

Now that you know what you need, let's look at some of the top accounting software options:

QuickBooks Online
- Best for: Small to medium-sized businesses that need comprehensive features
- Strengths: Robust reporting, wide range of integrations, excellent invoicing
- Considerations: Can be more expensive than other options, might have more features than very small businesses need

Xero
- Best for: Growing businesses that value collaboration and automation
- Strengths: Unlimited users, strong inventory management, modern interface
- Considerations: Some advanced features require add-ons, U.S. payroll requires integration with Gusto

Wave
- Best for: Freelancers and very small businesses on a tight budget
- Strengths: Free accounting and invoicing, easy to use, good for service-based businesses
- Considerations: Limited features compared to paid options, fewer integrations

FreshBooks
- Best for: Service-based businesses and freelancers who prioritize invoicing
- Strengths: Excellent time tracking, project management, and client portal
- Considerations: More limited reporting than some competitors, not ideal for inventory-heavy businesses

Zoho Books
- Best for: Businesses already using other Zoho products
- Strengths: Strong automation, good customer portal, competitive pricing
- Considerations: Less popular than some options, which means fewer accountants may be familiar with it

Step 4: Consider Scalability

Your business won't stay the same size forever (at least, that's the goal!). Choose accounting software that can grow with you. Ask yourself:

- Can the software handle an increase in transactions?
- Can you add users as your team grows?
- Does it offer more advanced features you can activate as needed?
- Can it integrate with other tools you might need in the future?

Step 5: Get Professional Input

At Vision Accountants, we always recommend consulting with an accounting professional before making your final decision. Why? Because we've seen the good, the bad, and the ugly when it comes to accounting software.

A good accountant can:
- Recommend software based on your specific industry and needs
- Help you set up the software correctly from the start
- Train you and your team on how to use it effectively
- Provide ongoing support as your business grows

Why Vision Accountants?

At Vision Accountants, we're not just accountants—we're technology experts. We've worked with all the major accounting software platforms and can help you choose, implement, and optimize the right solution for your business.

When you work with us, you're not just getting an accountant—you're getting a trusted advisor who's invested in your success. We'll help you choose accounting software that saves you time, reduces stress, and gives you the insights you need to grow your business.

Ready to Find Your Perfect Accounting Software Match?

Choosing the right accounting software is a big decision—but it doesn't have to be overwhelming. With the right guidance and a clear understanding of your needs, you can find a solution that fits your business like a glove.

At Vision Accountants, we're here to help you every step of the way. Whether you need help choosing software, setting it up, or using it effectively, we've got your back.

Schedule a free consultation today and let's find the perfect accounting software for your business. Because when your finances are in order, there's no limit to what your business can achieve.`,
    },
    {
      title: "Year-End Tax Planning: 7 Strategies to Minimize Your Tax Bill",
      excerpt:
        "As the year draws to a close, most business owners are focused on holiday plans, year-end sales, and setting goals for the new year. But there's one more thing you should add to your to-do list: year-end tax planning.",
      image: "/B5.png",
      date: "November 5, 2023",
      author: "Vision Accountants",
      content: `As the year draws to a close, most business owners are focused on holiday plans, year-end sales, and setting goals for the new year. But there's one more thing you should add to your to-do list: year-end tax planning.

At Vision Accountants, we believe that effective tax planning isn't just about filling out forms correctly—it's about taking proactive steps to minimize your tax bill and keep more of your hard-earned money. And the best time to do that is before the year ends.

In this guide, we'll share 7 powerful strategies to help you reduce your tax liability and set yourself up for a financially successful new year. Think of it as our holiday gift to you—the gift of tax savings.

Why Year-End Tax Planning Matters

Many business owners wait until March or April to think about taxes. By then, it's too late to implement many tax-saving strategies. Year-end tax planning gives you the opportunity to:

- Take advantage of deductions and credits before they expire
- Defer income to the next tax year (or accelerate it into the current year, depending on your situation)
- Make strategic investments that can reduce your taxable income
- Identify potential tax issues before they become problems

In short, year-end tax planning puts you in control of your tax situation, rather than letting the tax code control you.

Strategy 1: Defer Income (or Accelerate It)

The Basics:
If you expect to be in the same or lower tax bracket next year, consider deferring income to January. If you expect to be in a higher bracket next year, you might want to accelerate income into the current year.

How to Do It:
- For cash-basis businesses: Hold off on sending invoices until late December, so payment will likely arrive in January.
- For accrual-basis businesses: Consider delaying shipments or service completion until January.
- If accelerating income: Send invoices early and follow up to ensure payment before December 31.

Pro Tip: This strategy works best when you have a good understanding of your expected income for both the current and upcoming year. We can help you project your tax liability and make the right decision.

Strategy 2: Accelerate Deductions (or Defer Them)

The Basics:
The flip side of income timing is deduction timing. If you expect to be in a higher tax bracket this year, consider accelerating deductions into the current year. If you expect to be in a higher bracket next year, consider deferring deductions.

How to Do It:
- Pay deductible expenses before December 31 (rent, utilities, supplies, etc.)
- Prepay expenses for the first quarter of next year (up to 12 months of prepaid expenses may be deductible)
- Make charitable contributions before year-end
- If deferring deductions: Wait until January to pay for expenses when possible

Pro Tip: Keep in mind that some expenses must be capitalized and depreciated over time, rather than deducted immediately. We can help you navigate these rules.

Strategy 3: Max Out Retirement Contributions

The Basics:
Contributions to retirement plans are one of the most powerful tax-saving tools available to business owners. They reduce your taxable income while helping you build wealth for the future.

How to Do It:
- For Solo 401(k)s: Contribute up to $22,500 as an employee (plus $7,500 catch-up if you're 50 or older) and up to 25% of compensation as an employer, for a total maximum of $66,000 in 2023 ($73,500 if 50 or older)
- For SEP IRAs: Contribute up to 25% of compensation or $66,000, whichever is less
- For SIMPLE IRAs: Contribute up to $15,500 (plus $3,500 catch-up if you're 50 or older)

Pro Tip: Some retirement plans must be established before year-end, even if you don't fund them until your tax filing deadline. Don't wait until the last minute!

Strategy 4: Take Advantage of Section 179 and Bonus Depreciation

The Basics:
Section 179 and bonus depreciation allow you to deduct the full cost of qualifying equipment and improvements in the year they're placed in service, rather than depreciating them over several years.

How to Do It:
- Purchase and place in service qualifying equipment before December 31
- For Section 179: Deduct up to $1,160,000 in 2023 (phasing out when total purchases exceed $2,890,000)
- For bonus depreciation: Deduct 80% of the cost of qualifying property in 2023 (this percentage will decrease in future years)

Pro Tip: These deductions can only be used to offset business income, not to create a loss. We can help you determine the optimal amount to claim.

Strategy 5: Harvest Tax Losses

The Basics:
If you have investments that have decreased in value, consider selling them to realize the losses, which can offset capital gains and up to $3,000 of ordinary income.

How to Do It:
- Review your investment portfolio for securities that have decreased in value
- Sell enough losing investments to offset any capital gains plus up to $3,000 of ordinary income
- Be aware of the wash-sale rule, which prohibits claiming a loss if you buy the same or a substantially identical security within 30 days before or after the sale

Pro Tip: Tax-loss harvesting can be a complex strategy with implications beyond taxes. We recommend consulting with both your accountant and financial advisor before implementing this strategy.

Strategy 6: Consider a Qualified Business Income (QBI) Deduction

The Basics:
The QBI deduction allows eligible business owners to deduct up to 20% of their qualified business income from pass-through entities (sole proprietorships, partnerships, S corporations, and some trusts and estates).

How to Do It:
- Determine if your business qualifies for the deduction
- If your taxable income is above the threshold ($170,050 for single filers, $340,100 for joint filers in 2023), consider strategies to reduce your taxable income
- For service businesses above the income threshold, consider splitting business activities or increasing qualified property

Pro Tip: The QBI deduction has complex rules and limitations, especially for high-income taxpayers and certain service businesses. We can help you navigate these rules and maximize your deduction.

Strategy 7: Review Your Business Structure

The Basics:
Your business structure (sole proprietorship, partnership, S corporation, C corporation) has significant tax implications. As your business grows and changes, the optimal structure may change as well.

How to Do It:
- Review your current business structure with your accountant
- Consider the tax implications of each structure for your specific situation
- If a change is warranted, plan the timing carefully (changes generally need to be made at the beginning of a tax year)

Pro Tip: While tax considerations are important, they shouldn't be the only factor in choosing a business structure. Legal liability, administrative requirements, and future plans should also be considered.

Why Vision Accountants?

At Vision Accountants, we don't just help you file your taxes—we help you strategically plan for them. Our proactive approach to tax planning has saved our clients thousands of dollars in taxes.

When you work with us, you're not just getting an accountant—you're getting a trusted advisor who's invested in your success. We'll help you implement these strategies and others tailored to your specific situation.

Ready to Minimize Your Tax Bill?

Year-end tax planning isn't just for large corporations—it's for any business owner who wants to keep more of their hard-earned money. With the right strategies and professional guidance, you can significantly reduce your tax liability and set yourself up for a financially successful new year.

At Vision Accountants, we're here to help you every step of the way. Whether you need help implementing these strategies or developing a comprehensive tax plan, we've got your back.

Schedule a free consultation today and let's make sure you're not paying a penny more in taxes than you have to. Because when it comes to taxes, planning ahead isn't just smart—it's essential.`,
    },
  ]

  return (
    <>
    <head>
      <title>Vision Accountants</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Expert cloud-based accounting services tailored for modern businesses. Experience stress-free financial management with real-time insights." />
      <link rel="icon" href="/vlogoT-01.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </head>
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar activeSection={activeSection} />

      <main className="relative z-10 h-[calc(100vh - 72px)]  ">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback-42xPv8Ms6Jc7q9MYz7Pf6EB89OXPo0.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  >
                  Simplify Your Finances with Vision Accountants
                </motion.h1>
                <motion.p
                  className="text-xl text-slate-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  >
                  Expert cloud-based accounting services tailored for modern businesses. Experience stress-free
                  financial management with real-time insights.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button
                    size="lg"
                    onClick={() => setIsConsultationModalOpen(true)}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
                    >
                    Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                >
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                  <h2 className="text-2xl font-semibold text-white mb-4">Start Simple. Start Free.</h2>
                  <ul className="space-y-4">
                    {[
                      "No Signup Fees",
                      "Free Consultation",
                      "Free Monthly Management Reports",
                      "Free Support for Cloud-Based Accounting Tools",
                    ].map((item, index) => (
                      <motion.li
                      key={index}
                      className="flex items-center text-slate-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link href="#why-us" className="text-slate-400 hover:text-white transition-colors">
                <ChevronDown className="h-8 w-8 animate-bounce" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-20 px-4 bg-gradient-to-b from-slate-900/80 to-slate-800/80 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Us</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                What makes us different? It's not just our expertise. It's our
                commitment to you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Our Expertise</h3>
                </div>
                <p className="text-slate-300">
                  Vision Accountants is a virtual, cloud accounting and bookkeeping firm specializing in Xero – a completely cloud-based accounting platform. Our team includes accounting professionals striving to offer you Quality & Cost Efficient Accounting & Bookkeeping services for USA based Businesses.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Our Commitment</h3>
                </div>
                <p className="text-slate-300">
                  Whether you're a small business owner, a startup founder, or a CPA looking for support, we're here to
                  make your life easier. At Vision Accountants, we're not just about balancing the books—we're about
                  helping you write the next chapter of your success story. Let's turn your financial chaos into
                  clarity, together.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-8 border border-purple-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
                  <img src="/Team.png" alt="Team" className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold text-white mb-4">Why Clients Trust Us</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">"No Surprises, Just Solutions"</h4>
                        <p className="text-slate-300">
                          With fixed monthly pricing, you'll never have to worry about hidden fees or unexpected bills.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">"Your Data, Fortress-Level Protected"</h4>
                        <p className="text-slate-300">
                          We use bank-level encryption, two-factor authentication (2FA), and secure password sharing to
                          keep your information safe.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">"Real-Time Insights, Anytime, Anywhere"</h4>
                        <p className="text-slate-300">
                          Our cloud-based tools give you 24/7 access to your finances, so you're always in control.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Process Section */}
        <section
          id="process"
          className="py-20 px-4 bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-lg"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We've streamlined our approach to make accounting simple and stress-free for you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Consult",
                  subtitle: "Let's Talk About Your Vision",
                  description:
                  "Start by booking a free 30-minute consultation at a time that works for you. During this call, we'll listen to your goals, challenges, and vision for your business. Then, we'll outline a tailored service plan that fits your needs—whether it's bookkeeping, tax preparation, payroll, or financial consulting.",
                  icon: <MessageSquare className="h-6 w-6 text-white" />,
                },
                {
                  title: "Onboard",
                  subtitle: "We'll onboard your preferred Accounting software",
                  description:
                  "Once we've drafted your plan, our team will guide you through a smooth onboarding process. We'll confirm your preferred accounting software (like QuickBooks, Xero), set up secure data-sharing channels, and establish workflows that align with your business.",
                  icon: <Users className="h-6 w-6 text-white" />,
                },
                {
                  title: "Connect",
                  subtitle: "Share your Data Securely and Easily",
                  description:
                  "You're in control of how you share your data. Whether it's through Dropbox, Google Drive, Hubdoc, Dext, Expensify, we make it simple and safe. Your information is protected with the latest encrypted technology, so you can rest easy knowing your data is in good hands.",
                  icon: <Share2 className="h-6 w-6 text-white" />,
                },
                {
                  title: "Access",
                  subtitle: "Real-Time Insights, Anytime, Anywhere",
                  description:
                  "Whether you're on the go or in the office, you'll always have a clear view of your finances. Need a backup file or a specific report? Just let us know—we're here to make it happen.",
                  icon: <BarChart2 className="h-6 w-6 text-white" />,
                },
                {
                  title: "Deliver",
                  subtitle: "Your Financials, Done Right",
                  description:
                  "With Vision Accountants, you're not just getting a service—you're gaining a partner. We'll handle everything from bookkeeping and payroll to tax prep and cash flow analysis, so you can focus on growing your business. Stay connected with your dedicated accountant through Skype, Zoom, Google Meets.",
                  icon: <PresentationChart className="h-6 w-6 text-white" />,
                },
              ].map((step, index) => (
                <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                  </div>
                  <h4 className="text-lg font-medium text-purple-400 mb-3">{step.subtitle}</h4>
                  <p className="text-slate-300 flex-grow">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-20 px-4 bg-gradient-to-b from-slate-900/80 to-slate-800/80 backdrop-blur-lg"
          >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing That Works as Hard as You Do</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                At Vision Accountants, we believe in transparency, simplicity, and value. That's why we offer fixed
                monthly pricing tailored to your business needs—no surprises, no hidden fees.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                title="Launch Package"
                price="$150"
                description="Perfect for startups and small businesses ready to take charge of their finances."
                features={[
                  "On-call Support: Have a question? We're just a call away.",
                  "Regular Ledger Reviews: We'll keep your books accurate and up-to-date.",
                  "Sales Tax Filings: Stay compliant without the headache.",
                  "Year-End Workup: We'll handle the heavy lifting so you're ready for tax season.",
                ]}
                index={0}
                onGetStarted={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                />

              <PricingCard
                title="Grow Package"
                price="$300"
                description="Perfect for businesses that want to hand off day-to-day accounting tasks"
                features={[
                  "Everything in Launch Package",
                  "Weekly/Monthly Bookkeeping: We'll handle up to 300 transactions per month.",
                  "USA Payroll: Get your team paid on time without any hassle.",
                  "Receipt Capturing: Say goodbye to shoeboxes full of receipts.",
                  "Monthly Reconciliation: We'll ensure your accounts are always in sync.",
                ]}
                popular={true}
                index={1}
                onGetStarted={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                />

              <PricingCard
                title="Soar Package"
                price="$500"
                description="Perfect for established businesses that want it all."
                features={[
                  "Everything in Grow Package",
                  "Weekly Bookkeeping: We'll handle up to 500 transactions per month.",
                  "Monthly Management Reports: Get a clear, detailed snapshot of your performance.",
                  "Result Dashboards: Track your KPIs and make data-driven decisions.",
                  "Year-End Workup: We'll ensure your finances are tax-ready.",
                ]}
                index={2}
                onGetStarted={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                />
            </div>

            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              >
              <div className="max-w-5xl mx-auto">
                <motion.div
                  className="relative bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-slate-900/60 backdrop-blur-xl rounded-2xl border border-purple-500/20 shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="relative p-8 md:p-12">
                    {/* Badge */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      ⚡ Flexible Option
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      {/* Left Content */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            Hire a Virtual Bookkeeper
                          </h3>
                          <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                            Starting at $8/hour
                          </div>
                          <p className="text-lg text-slate-300 leading-relaxed mb-10">
                            Need flexible bookkeeping that adapts to your business? Get a dedicated virtual bookkeeper with on-demand support.
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4">
                          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">Expert bookkeepers with diverse experience</span>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">Pay only for what you need</span>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                            <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">24/7 secure data access</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Content - Image and CTA */}
                      <div className="flex flex-col h-full">
                        {/* Image positioned down and centered */}
                        <div className="flex justify-center mb-8 mt-8">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
                            <img
                              src="/Virtual Bookkeeper.png"
                              alt="Virtual Bookkeeper"
                              className="relative w-56 h-56 md:w-64 md:h-64 object-cover rounded-2xl shadow-2xl border border-white/20"
                            />
                          </div>
                        </div>
                        
                        {/* Content that aligns with left side */}
                        <div className="flex flex-col justify-end h-full space-y-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <p className="text-slate-300 text-sm">
                              Perfect for businesses that need flexible, scalable bookkeeping solutions
                            </p>
                          </div>
                          
                          <Button
                            size="lg"
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                            onClick={() => {
                              const contactSection = document.getElementById('contact');
                              contactSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            Hire Virtual Bookkeeper Now!
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Vision Accountants?</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">No Surprises</h4>
                  <p className="text-slate-300">Fixed monthly pricing means no hidden fees or unexpected bills.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">Expert Support</h4>
                  <p className="text-slate-300">
                    Our team of professionals is here to guide you every step of the way.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">Scalable Solutions</h4>
                  <p className="text-slate-300">Upgrade or Downgrade your package as per your business's requirements.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">Peace of Mind</h4>
                  <p className="text-slate-300">We'll handle the numbers so you can focus on your vision.</p>
                </div>
              </div>
              <div className="mt-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  onClick={() => setIsConsultationModalOpen(true)}
                >
                  Schedule a Free Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Software Section */}
        <section
          id="software"
          className="py-20 px-4 bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-lg"
          >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Software We Use</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our breadth of application and automation expertise is unparalleled in the industry
              </p>
            </motion.div>

            <Tabs defaultValue="accounting" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-8 bg-white/10 p-1 rounded-lg mb-8">
                <TabsTrigger value="accounting">Accounting</TabsTrigger>
                <TabsTrigger value="document">Document</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
                <TabsTrigger value="payroll">Payroll</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="workflow">Workflow</TabsTrigger>
                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              </TabsList>

              <TabsContent value="accounting" className="mt-0 sm:mt-0 md:mt-0">
                <div className="flex flex-wrap justify-center gap-6 mt-24 sm:mt-0">
                  {["Xero", "QuickBooks", "ZohoBooks"].map((software, index) => (
                    <motion.div
                    key={index}
                      className="w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)] bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      >
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                        <img src={`/software/${index + 1}.png`} alt={software} className="w-10 h-10 rounded-full object-cover" />
                      </div>
                      <h3 className="text-lg font-medium text-white">{software}</h3>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="document" className="mt-0 sm:mt-0 md:mt-0">
                <div className="flex flex-wrap justify-center gap-6 mt-24 sm:mt-0">
                  {["Dext", "Hubdoc", "Expensify"].map((software, index) => (
                    <motion.div
                    key={index}
                      className="w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)] bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      >
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                        <img src={`/software/${index + 4}.png`} alt={software} className="w-10 h-10 rounded-full object-cover" />
                      </div>
                      <h3 className="text-lg font-medium text-white">{software}</h3>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="payment" className="mt-0 sm:mt-0 md:mt-0">
                <div className="flex flex-wrap justify-center gap-6 mt-24 sm:mt-0">
                  {["Plooto", "Stripe", "PayPal", "Square"].map((software, index) => (
                    <motion.div
                    key={index}
                    className="w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)] bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                        <img src={`/software/${index + 7}.png`} alt={software} className="w-10 h-10 rounded-full object-cover" />
                      </div>
                      <h3 className="text-lg font-medium text-white">{software}</h3>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="payroll" className="mt-0 sm:mt-0 md:mt-0">
                <div className="flex flex-wrap justify-center gap-6 mt-24 sm:mt-0">
                  {["Payment Evolution", "ADP", "Wagepoint", "Gusto"].map((software, index) => (
                    <motion.div
                    key={index}
                      className="w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)] bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      >
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                        <img src={`/software/${index + 11}.png`} alt={software} className="w-10 h-10 rounded-full object-cover" />
                      </div>
                      <h3 className="text-lg font-medium text-white">{software}</h3>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="mt-0 sm:mt-0 md:mt-0">
                <div className="flex flex-wrap justify-center gap-6 mt-24 sm:mt-0">
                  {["Spotlight", "LivePlan", "Syft"].map((software, index) => (
                    <motion.div
                    key={index}
                    className="w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)] bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                        <img src={`/software/${index + 15}.png`} alt={software} className="w-10 h-10 rounded-full object-cover" />
                      </div>
                      <h3 className="text-lg font-medium text-white">{software}</h3>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="workflow" className="mt-0 sm:mt-0 md:mt-0">
                <div className="flex flex-wrap justify-center gap-6 mt-24 sm:mt-0">
                  {["Karbon", "Clickup", "Lastpass"].map((software, index) => (
                    <motion.div
                    key={index}
                    className="w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)] bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                        <img src={`/software/${index + 18}.png`} alt={software} className="w-10 h-10 rounded-full object-cover" />
                      </div>
                      <h3 className="text-lg font-medium text-white">{software}</h3>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ecommerce" className="mt-0 sm:mt-0 md:mt-0">
                <div className="flex flex-wrap justify-center gap-6 mt-24 sm:mt-0">
                  {["Shopify", "WooCommerce", "BigCommerce", "Magento"].map((software, index) => (
                    <motion.div
                    key={index}
                    className="w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)] bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                        <img src={`/software/${index + 21}.png`} alt={software} className="w-10 h-10 rounded-full object-cover" />
                      </div>
                      <h3 className="text-lg font-medium text-white">{software}</h3>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="healthcare" className="mt-0 sm:mt-0 md:mt-0">
                <div className="flex flex-wrap justify-center gap-6 mt-24 sm:mt-0">
                  {["Epic", "Cerner", "Athenahealth", "Meditech"].map((software, index) => (
                    <motion.div
                    key={index}
                    className="w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)] bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                        <img src={`/software/${index + 25}.png`} alt={software} className="w-10 h-10 rounded-full object-cover" />
                      </div>
                      <h3 className="text-lg font-medium text-white">{software}</h3>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Why XERO Section */}
        <section
          id="why-xero"
          className="py-20 px-4 bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-lg"
          >
          <WhyXeroSection />
        </section>

        {/* Security Section */}
        <section
          id="security"
          className="py-20 px-4 bg-gradient-to-b from-slate-900/80 to-slate-800/80 backdrop-blur-lg"
          >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Data Locked and Protected</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                With Vision Accountants, your data isn't just secure—it's fortress-level protected. Because when it comes to your business, we don't just meet standards—we set them.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Bank-Level Encryption",
                  description:
                  "Your data is protected with the same advanced encryption used by leading financial institutions.",
                  icon: <Lock className="h-6 w-6 text-white" />,
                },
                {
                  title: "Secure Access Control",
                  description:
                  "Every login is guarded by two-factor authentication (2FA), ensuring only authorized users can access your accounts.",
                  icon: <Key className="h-6 w-6 text-white" />,
                },
                {
                  title: "Password Sharing Made Safe",
                  description:
                  "Share credentials securely with our team using LastPass, the industry-leading password manager, for seamless and protected collaboration.",
                  icon: <Shield className="h-6 w-6 text-white" />,
                },
                {
                  title: "Proactive Risk Management",
                  description: "We monitor and mitigate risks 24/7, so you don't have to worry about threats.",
                  icon: <AlertCircle className="h-6 w-6 text-white" />,
                },
                {
                  title: "Regular Security Audits",
                  description:
                  "Our systems are tested frequently to ensure they meet the highest standards of safety and compliance.",
                  icon: <FileCheck className="h-6 w-6 text-white" />,
                },
                {
                  title: "Safe File Sharing",
                  description: "Share documents effortlessly through Dropbox, Google Drive.",
                  icon: <Database className="h-6 w-6 text-white" />,
                },
              ].map((feature, index) => (
                <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 px-4 bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-lg"
          >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Testimonials</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                See what our clients have to say about working with Vision Accountants.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
              ))}
            </div>

            <motion.div
              className="mt-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-8 border border-purple-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              >
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Love Us? Share Us! Earn a Month of Free Accounting!
              </h3>
              <p className="text-slate-300 text-center mb-6">
                At Vision Accountants, we believe great things happen when great people come together. That's why we're
                offering you a no-strings-attached reward for spreading the word.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h4 className="text-lg font-medium text-white mb-2">Here's how it works:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Refer a friend, colleague, or fellow business owner to Vision Accountants.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Once they sign up and complete their first month, 20% discount on that month's accounting on each referral.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-slate-300 text-center mb-4">
                    It's our way of saying thank you for trusting us and sharing the love. Because when your network
                    grows, we all grow.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    >
                    Ready to Share the Vision?
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 px-4 bg-gradient-to-b from-slate-900/80 to-slate-800/80 backdrop-blur-lg"
          >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We offer a comprehensive range of accounting services to meet your business needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>

            <motion.div
              className="mt-16 bg-white/10 backdrop-blur-lg rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Detailed Service Information</h3>
                  <p className="text-slate-300 mb-4">
                    Each of our services is tailored to meet your specific business needs. We take the time to
                    understand your goals, challenges, and vision, then create a customized plan that helps you achieve
                    financial clarity and success.
                  </p>
                  <p className="text-slate-300">
                    Whether you need help with day-to-day bookkeeping, complex tax preparation, or strategic financial
                    planning, our team of experts is here to support you every step of the way.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img src="/Services.png" alt="Services" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>





        {/* Blogs Section */}
        <section id="blogs" className="py-20 px-4 bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Blog</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Insights, tips, and expert advice to help you manage your finances better.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogs.slice(0, showAllBlogs ? blogs.length : 3).map((blog, index) => (
                <BlogCard key={index} blog={blog} index={index} onReadMore={handleReadMore} />
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button className="bg-white/20 hover:bg-white/30 text-white" onClick={toggleShowAllBlogs}>
                {showAllBlogs ? "Show Less" : "View All Blog Posts"}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 bg-gradient-to-b from-slate-900/80 to-slate-800/80 backdrop-blur-lg"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Start the Conversation</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                At Vision Accountants, we're here to help you simplify your finances, save time, and achieve your
                business goals.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
                <form
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData();

                    // Get form elements
                    const nameInput = form.querySelector('#name') as HTMLInputElement;
                    const companyInput = form.querySelector('#company') as HTMLInputElement;
                    const emailInput = form.querySelector('#email') as HTMLInputElement;
                    const phoneInput = form.querySelector('#phone') as HTMLInputElement;
                    const packageSelect = form.querySelector('#package') as HTMLSelectElement;
                    const messageTextarea = form.querySelector('#message') as HTMLTextAreaElement;

                    // Get selected services
                    const selectedServices = Array.from(form.querySelectorAll('input[name="services"]:checked'))
                      .map((checkbox) => (checkbox as HTMLInputElement).value);

                    // Add form fields to FormData
                    formData.append('name', nameInput.value);
                    formData.append('company', companyInput.value);
                    formData.append('email', emailInput.value);
                    formData.append('phone', phoneInput.value);
                    formData.append('package', packageSelect.value);
                    formData.append('services', JSON.stringify(selectedServices));
                    formData.append('message', messageTextarea.value);

                    try {
                      const response = await fetch('https://slategrey-porpoise-967301.hostingersite.com/', {
                        method: 'POST',
                        body: formData,
                        headers: {
                          'Accept': 'application/json',
                        },
                        mode: 'cors',
                      });

                      if (response.ok) {
                        const data = await response.json();
                        alert(data.message || 'Message sent successfully!');
                        form.reset();
                      } else {
                        const errorData = await response.json().catch(() => null);
                        alert(errorData?.message || 'Failed to send message. Please try again.');
                      }
                    } catch (error) {
                      console.error('Error:', error);
                      alert('An error occurred. Please try again or contact us directly.');
                    }
                  }}
                >
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-white">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-white">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-white">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="package" className="text-white">
                        Select Package (Optional)
                      </label>
                      <select
                        id="package"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white [&>option]:bg-black"
                      >
                        <option value="">Select a package</option>
                        <option value="launch">Launch Package - $150/month</option>
                        <option value="grow">Grow Package - $300/month</option>
                        <option value="soar">Soar Package - $500/month</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-white block">Select Services</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'bookkeeping', label: 'Bookkeeping & Accounting Services' },
                          { id: 'payroll', label: 'Payroll Services' },
                          { id: 'reports', label: 'Monthly Management/Financial Reports' },
                          { id: 'project', label: 'Project Accounting' },
                          { id: 'backlog', label: 'Backlog Bookkeeping' },
                          { id: 'virtual', label: 'Hire a full time virtual bookkeeper' },
                          { id: 'tax', label: 'Tax Preparation' },
                          { id: 'year-end', label: 'Annual/Year-end Accounts' }
                        ].map((service) => (
                          <div key={service.id} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={service.id}
                              name="services"
                              value={service.id}
                              className="w-4 h-4 text-purple-600 bg-white/10 border-white/20 rounded focus:ring-purple-500"
                            />
                            <label htmlFor={service.id} className="text-slate-300">
                              {service.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-white">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Our Location</h3>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3022.215209132329!2d-74.008504!3d40.707869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                      width="600"
                      height="690"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      className="w-full h-[690px]"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4">Contact Information</h4>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3 text-purple-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      123 Accounting Lane, Financial District, NY 10004
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3 text-purple-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      +1 (555) 123-4567
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3 text-purple-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      info@visionaccountants.com
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4">Business Hours</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday: 10:00 AM - 4:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Blog Modal */}
      <BlogModal isOpen={isModalOpen} onClose={closeModal} blog={selectedBlog} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      {/* Welcome Popup */}
      <WelcomePopup
        isOpen={isWelcomePopupOpen}
        onClose={() => setIsWelcomePopupOpen(false)}
      />

      {/* 3CX Live Chat Integration */}
      <div dangerouslySetInnerHTML={{
        __html: `
          <!--Use the below code snippet to provide real time updates to the live chat plugin without the need of copying and paste each time to your website when changes are made via PBX-->
          <!--<call-us-selector phonesystem-url="https://1653.3cx.cloud" party="LiveChat569666"></call-us-selector>-->
          
          <!--Incase you don't want real time updates to the live chat plugin when options are changed, use the below code snippet. Please note that each time you change the settings you will need to copy and paste the snippet code to your website--> 
          <call-us 
          phonesystem-url="https://1653.3cx.cloud" 
          style="position:fixed;font-size:16px;line-height:17px;z-index: 999999;--call-us-main-accent-color:#a78bfa;--call-us-main-background-color:#FFFFFF;--call-us-plate-background-color:#000000;--call-us-plate-font-color:#E6E6E6;--call-us-main-font-color:#292929;--call-us-agent-bubble-color:#29292910;right: 20px; bottom: 20px;" 
          id="wp-live-chat-by-3CX" 
          minimized="false" 
          animation-style="noanimation" 
          party="LiveChat569666" 
          minimized-style="bubbleright" 
          allow-call="true" 
          allow-video="false" 
          allow-soundnotifications="true" 
          enable-mute="true" 
          enable-onmobile="true" 
          offline-enabled="true" 
          enable="true" 
          ignore-queueownership="false" 
          authentication="both" 
          show-operator-actual-name="true" 
          aknowledge-received="true" 
          gdpr-enabled="false" 
          message-userinfo-format="both" 
          message-dateformat="both" 
          lang="browser" 
          button-icon-type="default" 
          greeting-visibility="none" 
          greeting-offline-visibility="none" 
          chat-delay="0" 
          enable-direct-call="true" 
          enable-ga="false" 
          ></call-us> 
          <script defer src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js" id="tcx-callus-js" charset="utf-8"></script>
        `
      }} />
    </div>
    </>
  )
}
