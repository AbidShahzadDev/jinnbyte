/**
 * Case-study content, lifted verbatim from the original HTML templates.
 *
 * All seven case pages shared one layout and differed only in content, an
 * accent-colour triple and how many items sat in each grid — so they render
 * from a single template at /work/[slug] driven by this data.
 */

export type CaseMetric = { value: string; label: string; blurb?: string };

export type CaseStudy = {
  slug: string;
  name: string;
  sector: string;
  headline: string;
  summary: string;
  hero: string;
  /** Per-case accent, applied as CSS custom properties on the page wrapper. */
  accent: { base: string; light: string; deep: string };
  kpis: CaseMetric[];
  challenge: { kicker: string; title: string; paragraphs: string[] };
  solution: { kicker: string; title: string; paragraphs: string[] };
  shots: string[];
  ecosystem: {
    kicker: string;
    title: string;
    items: { image: string; title: string; blurb: string; includes: string[] }[];
  };
  journey: { kicker: string; title: string; steps: { title: string; blurb: string }[] };
  built: {
    kicker: string;
    title: string;
    /** Some studies carry a lead paragraph beside the heading. */
    lead?: string;
    cells: { title: string; blurb: string }[];
    principles: { title: string; sub?: string }[];
  };
  impact: {
    kicker: string;
    title: string;
    lead: string;
    metrics: CaseMetric[];
    scope: string[];
  };
  cta: { kicker: string; title: string; body: string };
};

export const caseStudies: CaseStudy[] = [
    {
      "slug": "buff",
      "name": "BUFF",
      "sector": "Health & Fitness",
      "headline": "Turning fitness content into a complete digital ecosystem.",
      "summary": "An end-to-end fitness ecosystem that transforms workout programmes into measurable, motivating and recurring digital experiences.",
      "hero": "/images/cases/buff-hero.webp",
      "accent": {
        "base": "#3D2417",
        "light": "#E9A67F",
        "deep": "#8F5330"
      },
      "kpis": [
        {
          "value": "400%",
          "label": "Increase in MRR"
        },
        {
          "value": "100%",
          "label": "Growth in user base"
        },
        {
          "value": "40%",
          "label": "Reduction in churn"
        }
      ],
      "challenge": {
        "kicker": "The challenge",
        "title": "A workout programme can deliver information. A digital ecosystem can build a relationship.",
        "paragraphs": [
          "BUFF’s founders were selling workout programmes through books and PDFs.",
          "The content existed, but users had no connected environment in which to follow their programmes, record workouts, understand progress or remain engaged over time.",
          "The opportunity was to transform static fitness content into an ongoing digital experience."
        ]
      },
      "solution": {
        "kicker": "The solution",
        "title": "From workout plans to a recurring fitness experience.",
        "paragraphs": [
          "We transformed BUFF into a subscription-based fitness ecosystem where users can follow structured programmes, complete workouts, track performance and understand their progress over time.",
          "Gamification, achievements, community, analytics and engagement mechanics were layered around the core training experience to create more reasons for users to return.",
          "The product became more than a digital version of a programme. It became the environment in which the user’s fitness journey takes place."
        ]
      },
      "shots": [
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?fm=jpg&q=76&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1546483875-ad9014c88eba?fm=jpg&q=76&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1669322779651-5ca89652492e?fm=jpg&q=76&w=1200&auto=format&fit=crop"
      ],
      "ecosystem": {
        "kicker": "The ecosystem",
        "title": "Training, progress and motivation in one experience.",
        "items": [
          {
            "image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Workout Experience",
            "blurb": "Structured digital training built around programmes and individual sessions.",
            "includes": [
              "Workout Plans",
              "Exercise Tracking",
              "Set & Performance Logging",
              "Workout History",
              "Guided Training"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Progress Intelligence",
            "blurb": "Helping users understand what their effort is producing.",
            "includes": [
              "Performance History",
              "Progress Tracking",
              "Body & Training Data",
              "Achievements",
              "Analytics"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1744551612249-655d096b9f95?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Engagement Layer",
            "blurb": "Creating reasons to keep participating beyond individual workouts.",
            "includes": [
              "XP & Levels",
              "Medals & Achievements",
              "Streaks",
              "Community",
              "Social Engagement",
              "Gamification"
            ]
          }
        ]
      },
      "journey": {
        "kicker": "The fitness journey",
        "title": "From a plan on paper to a habit in the product.",
        "steps": [
          {
            "title": "Users choose a programme",
            "blurb": "Structured fitness plans become accessible directly inside the product."
          },
          {
            "title": "Workouts happen inside the ecosystem",
            "blurb": "Training can be followed and recorded without leaving the application."
          },
          {
            "title": "Every session builds history",
            "blurb": "Workout activity contributes to an evolving view of performance."
          },
          {
            "title": "Progress becomes visible",
            "blurb": "Analytics, achievements and tracking make improvement tangible."
          },
          {
            "title": "Engagement continues between workouts",
            "blurb": "Community, progression and gamification provide additional reasons to return."
          }
        ]
      },
      "built": {
        "kicker": "What we engineered",
        "title": "A recurring product, not a digital booklet.",
        "cells": [
          {
            "title": "Subscription Fitness Application",
            "blurb": "The core digital training environment."
          },
          {
            "title": "Workout Tracking System",
            "blurb": "Structured logging across programmes, exercises and individual sessions."
          },
          {
            "title": "Progress Intelligence",
            "blurb": "Historical performance and progress visibility across the user journey."
          },
          {
            "title": "Gamification System",
            "blurb": "XP, medals, achievements and progression mechanics."
          },
          {
            "title": "Community Experience",
            "blurb": "Social features that extend engagement beyond individual training."
          },
          {
            "title": "Subscription & Retention Infrastructure",
            "blurb": "A recurring digital product model built around continued participation."
          }
        ],
        "principles": [
          {
            "title": "Training delivers utility."
          },
          {
            "title": "Tracking creates progress."
          },
          {
            "title": "Gamification creates motivation."
          },
          {
            "title": "Community creates participation."
          }
        ]
      },
      "impact": {
        "kicker": "Impact",
        "title": "A business model rebuilt around returning users.",
        "lead": "The problem was not simply converting PDFs into screens. A digital fitness product needs to give users a reason to return after today’s workout.",
        "metrics": [
          {
            "value": "400%",
            "label": "Increase in MRR"
          },
          {
            "value": "100%",
            "label": "Growth in User Base"
          },
          {
            "value": "40%",
            "label": "Reduction in Churn"
          }
        ],
        "scope": [
          "Fitness Platform",
          "Subscription Experience",
          "Workout Tracking",
          "Progress Intelligence",
          "Gamification",
          "Community",
          "Analytics",
          "Mobile Product Engineering"
        ]
      },
      "cta": {
        "kicker": "Building a product people need to keep coming back to?",
        "title": "Design engagement around the value users already care about.",
        "body": "We help businesses turn content, services and recurring user behaviour into connected digital products built for long-term engagement."
      }
    },
    {
      "slug": "facebloom",
      "name": "FaceBloom",
      "sector": "Consumer AI",
      "headline": "Combining personalised beauty intelligence with scalable user acquisition.",
      "summary": "A personalised AI beauty experience supported by a performance-driven influencer acquisition and growth ecosystem.",
      "hero": "/images/cases/facebloom-hero.webp",
      "accent": {
        "base": "#46233C",
        "light": "#E3A3CB",
        "deep": "#8A3F73"
      },
      "kpis": [
        {
          "value": "Top 20",
          "label": "Lifestyle App Store ranking"
        },
        {
          "value": "50,000+",
          "label": "Users"
        },
        {
          "value": "$1M+",
          "label": "Revenue generated"
        }
      ],
      "challenge": {
        "kicker": "The challenge",
        "title": "Building the product was only one side of the opportunity.",
        "paragraphs": [
          "FaceBloom needed to create an engaging consumer AI experience while also finding a scalable way to grow its audience without depending heavily on traditional paid acquisition.",
          "That meant solving two connected challenges: creating enough personal value for users to engage with the product, and building an acquisition engine capable of bringing those users in efficiently."
        ]
      },
      "solution": {
        "kicker": "The solution",
        "title": "Personalised AI on the product side. Performance-driven growth on the acquisition side.",
        "paragraphs": [
          "We engineered the consumer experience around selfie-based beauty analysis, personalised recommendations and celebrity lookalikes.",
          "Alongside the product, we built an influencer growth ecosystem that gave creators referral codes, performance visibility and commission-based incentives.",
          "Instead of treating user acquisition as a separate marketing activity, growth became part of the digital product infrastructure itself."
        ]
      },
      "shots": [
        "https://images.unsplash.com/photo-1522108098940-de49801b5b40?fm=jpg&q=76&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1655026392641-bf283a5f12d4?fm=jpg&q=76&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?fm=jpg&q=76&w=1200&auto=format&fit=crop"
      ],
      "ecosystem": {
        "kicker": "The ecosystem",
        "title": "A consumer product connected directly to its acquisition engine.",
        "items": [
          {
            "image": "https://images.unsplash.com/photo-1551184451-76b762941ad6?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Consumer AI Experience",
            "blurb": "A personalised beauty journey designed around each user.",
            "includes": [
              "Selfie-Based Analysis",
              "Personalised Beauty Insights",
              "Recommendations",
              "Celebrity Lookalikes",
              "AI-Powered Personalisation"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1581182800629-7d90925ad072?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Influencer Platform",
            "blurb": "A dedicated environment for managing creator-led acquisition.",
            "includes": [
              "Influencer Profiles",
              "Referral Codes",
              "Performance Tracking",
              "Commission Visibility",
              "Campaign Attribution"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Growth Infrastructure",
            "blurb": "The layer connecting acquisition activity to measurable product growth.",
            "includes": [
              "Referral Attribution",
              "Install Tracking",
              "Creator Performance",
              "Commission Logic",
              "Acquisition Analytics"
            ]
          }
        ]
      },
      "journey": {
        "kicker": "The growth loop",
        "title": "From personalised experience to scalable acquisition.",
        "steps": [
          {
            "title": "Users discover FaceBloom through creators",
            "blurb": "Influencer referrals create a trackable acquisition path."
          },
          {
            "title": "The product delivers personalised value",
            "blurb": "Users receive an AI-powered beauty experience tailored around their selfie and profile."
          },
          {
            "title": "Attribution connects users to creators",
            "blurb": "Acquisition can be traced back to the influencer responsible for the referral."
          },
          {
            "title": "Performance becomes measurable",
            "blurb": "Creators and the business gain visibility into results."
          },
          {
            "title": "Incentives reinforce growth",
            "blurb": "Commission-based rewards align creator success with product growth."
          }
        ]
      },
      "built": {
        "kicker": "What we engineered",
        "title": "A consumer product and its growth engine.",
        "cells": [
          {
            "title": "AI Consumer Application",
            "blurb": "A personalised beauty experience powered by user imagery and AI analysis."
          },
          {
            "title": "Personalisation Engine",
            "blurb": "Recommendations and experiences shaped around individual users."
          },
          {
            "title": "Influencer Performance Dashboard",
            "blurb": "A dedicated platform for referral and commission visibility."
          },
          {
            "title": "Referral Attribution System",
            "blurb": "Infrastructure connecting creators to the users they acquire."
          },
          {
            "title": "Growth Analytics",
            "blurb": "Performance visibility across acquisition and creator activity."
          }
        ],
        "principles": [
          {
            "title": "How do we make the product personally valuable?"
          },
          {
            "title": "How do we create a scalable system for bringing users into it?"
          }
        ]
      },
      "impact": {
        "kicker": "Impact",
        "title": "A product and an acquisition engine growing together.",
        "lead": "A consumer application can offer a strong experience and still struggle if acquisition remains too expensive.",
        "metrics": [
          {
            "value": "Top 20",
            "label": "Lifestyle App Store Ranking"
          },
          {
            "value": "50,000+",
            "label": "Users"
          },
          {
            "value": "$1M+",
            "label": "Revenue Generated"
          }
        ],
        "scope": [
          "Consumer AI",
          "Personalisation",
          "AI Image Analysis",
          "Influencer Platform",
          "Referral Tracking",
          "Growth Infrastructure",
          "User Experience Design"
        ]
      },
      "cta": {
        "kicker": "Building a consumer AI product?",
        "title": "Engineer the experience and the growth engine around it.",
        "body": "We help consumer businesses connect intelligent product experiences with the systems required to acquire, engage and retain users."
      }
    },
    {
      "slug": "lingolane",
      "name": "LingoLane",
      "sector": "Ed-Tech",
      "headline": "Extending foundational learning beyond the classroom.",
      "summary": "A connected foundational learning ecosystem combining gamified learning, teacher support and parent visibility around each child’s individual learning journey.",
      "hero": "/images/cases/lingolane-hero.webp",
      "accent": {
        "base": "#1E3A5F",
        "light": "#8FBCE9",
        "deep": "#2C5486"
      },
      "kpis": [
        {
          "value": "100%",
          "label": "Curriculum digitised"
        },
        {
          "value": "1:1",
          "label": "Personalised learning pace"
        },
        {
          "value": "3-in-1",
          "label": "Learning ecosystem"
        }
      ],
      "challenge": {
        "kicker": "The challenge",
        "title": "Every child learns differently. Teachers and parents cannot always be there for every learning moment.",
        "paragraphs": [
          "Foundational learning depends heavily on the time and attention available from teachers and parents, yet every child develops skills at a different pace.",
          "At the same time, children are spending more time on digital devices, creating an opportunity to turn screen time into something more meaningful, educational and engaging.",
          "The challenge was not simply to digitise a curriculum. It was to create a learning experience that could support the child independently while keeping teachers and parents connected to their progress."
        ]
      },
      "solution": {
        "kicker": "The solution",
        "title": "One learning journey connecting the child, teacher and parent.",
        "paragraphs": [
          "We engineered LingoLane as a connected learning ecosystem built around the complete learning experience.",
          "For children, curriculum becomes an interactive journey delivered through lessons, activities, mini-games and culturally relevant experiences. For teachers, the platform provides the tools to manage curriculum and understand how individual learners are progressing.",
          "For parents, it creates visibility into what their child is learning and how they are developing over time. The result is a digital learning companion that extends support beyond the classroom without replacing the role of the teacher or parent."
        ]
      },
      "shots": [
        "https://images.unsplash.com/photo-1588072432836-e10032774350?fm=jpg&q=76&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1537655780520-1e392ead81f2?fm=jpg&q=76&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/flagged/photo-1567116681178-c326fa4e2c8b?fm=jpg&q=76&w=1200&auto=format&fit=crop"
      ],
      "ecosystem": {
        "kicker": "The ecosystem",
        "title": "Three experiences. One connected learning journey.",
        "items": [
          {
            "image": "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Child Learning Experience",
            "blurb": "A gamified learning environment designed to make foundational education engaging enough for children to explore independently.",
            "includes": [
              "Gamified Lessons",
              "Educational Activities",
              "Mini-Games",
              "Interactive Learning Journeys",
              "Progress & Rewards",
              "Culturally Driven Content"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1565350831386-8c52421af9fa?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Teacher Experience",
            "blurb": "A curriculum and progress environment that helps teachers extend learning beyond classroom hours while maintaining visibility into each learner.",
            "includes": [
              "Curriculum Management",
              "Lesson & Activity Management",
              "Student Progress Tracking",
              "Learning Visibility",
              "Individual Learner Insights"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1605627079912-97c3810a11a4?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Parent Experience",
            "blurb": "A simple way for parents to remain connected to their child’s education without needing to supervise every learning session.",
            "includes": [
              "Learning Progress Visibility",
              "Completed Activities",
              "Curriculum Awareness",
              "Achievement Tracking",
              "Child Learning Insights"
            ]
          }
        ]
      },
      "journey": {
        "kicker": "The learning journey",
        "title": "From curriculum to personalised digital learning.",
        "steps": [
          {
            "title": "Curriculum is structured digitally",
            "blurb": "Learning material is transformed into interactive lessons, activities and experiences designed around foundational development."
          },
          {
            "title": "Children learn through play",
            "blurb": "Lessons are delivered through gamification, mini-games and interactive challenges that make learning feel like exploration."
          },
          {
            "title": "Progress develops at the child’s pace",
            "blurb": "Each learner can progress according to their own learning journey rather than depending entirely on classroom pace."
          },
          {
            "title": "Teachers stay informed",
            "blurb": "Progress information gives teachers greater visibility into what each child has completed and where support may be useful."
          },
          {
            "title": "Parents remain connected",
            "blurb": "Parents can understand what their child is learning and see progress without managing the learning experience themselves."
          }
        ]
      },
      "built": {
        "kicker": "What we engineered",
        "title": "More than a learning application.",
        "lead": "LingoLane required multiple experiences and systems to operate as one connected educational product.",
        "cells": [
          {
            "title": "Gamified Learning Application",
            "blurb": "An interactive child experience combining structured curriculum with lessons, activities and mini-games."
          },
          {
            "title": "Curriculum Digitisation System",
            "blurb": "A framework for transforming educational material into structured digital learning journeys."
          },
          {
            "title": "Teacher Dashboard",
            "blurb": "Tools for managing learning content and maintaining visibility into learner progress."
          },
          {
            "title": "Parent Experience",
            "blurb": "A dedicated view of learning activity, progress and development."
          },
          {
            "title": "Progress Intelligence",
            "blurb": "A connected data layer that carries learning progress across the child, teacher and parent experiences."
          },
          {
            "title": "Gamification & Engagement",
            "blurb": "Rewards, progression and interactive experiences designed to encourage children to continue learning."
          }
        ],
        "principles": [
          {
            "title": "The child needs engagement.",
            "sub": "Learning must feel intuitive, rewarding and enjoyable."
          },
          {
            "title": "The teacher needs visibility.",
            "sub": "Technology should support the teacher rather than create another system to manage."
          },
          {
            "title": "The parent needs clarity.",
            "sub": "Progress should be understandable without requiring constant supervision."
          }
        ]
      },
      "impact": {
        "kicker": "Impact",
        "title": "Extending the value of every learning moment.",
        "lead": "The product was not approached as a game with educational content added to it. It was designed around three different users with different needs.",
        "metrics": [
          {
            "value": "100%",
            "label": "Curriculum Digitised",
            "blurb": "Traditional curriculum transformed into an interactive digital learning experience."
          },
          {
            "value": "1:1",
            "label": "Personalised Learning Pace",
            "blurb": "An experience that allows children to progress according to their own learning journey."
          },
          {
            "value": "3-in-1",
            "label": "Learning Ecosystem",
            "blurb": "Child, teacher and parent experiences connected around the same learner."
          }
        ],
        "scope": [
          "Foundational Learning",
          "Gamified Learning",
          "Curriculum Digitisation",
          "Educational Game Design",
          "Teacher Support",
          "Parent Experience",
          "Progress Tracking",
          "User Experience Design",
          "Digital Solutions Engineering"
        ]
      },
      "cta": {
        "kicker": "Building the next learning experience?",
        "title": "Start with the learner. Engineer the ecosystem around them.",
        "body": "We help education businesses turn curriculum, learning challenges and new ideas into connected digital experiences designed around students, teachers and parents."
      }
    },
    {
      "slug": "maslow",
      "name": "Maslow",
      "sector": "HR & Recruitment",
      "headline": "Bringing intelligence and structure to every interview.",
      "summary": "Interview intelligence that gives hiring teams the knowledge, structure and confidence to assess candidates across specialist roles.",
      "hero": "/images/cases/maslow-hero.webp",
      "accent": {
        "base": "#383420",
        "light": "#DCC582",
        "deep": "#7A6B2E"
      },
      "kpis": [
        {
          "value": "80%",
          "label": "Reduction in hiring workflow time"
        }
      ],
      "challenge": {
        "kicker": "The challenge",
        "title": "Hiring responsibility does not always come with specialist subject expertise.",
        "paragraphs": [
          "Hiring teams regularly interview candidates across roles that require technical or domain-specific knowledge.",
          "An interviewer can understand recruitment and still lack the depth required to challenge specialist answers, identify inconsistencies or determine the best next question.",
          "That creates a difficult balance between evaluating candidates consistently and relying heavily on individual interviewer knowledge."
        ]
      },
      "solution": {
        "kicker": "The solution",
        "title": "Intelligence before, during and after the interview.",
        "paragraphs": [
          "We engineered Maslow as an interview intelligence platform supporting the complete hiring conversation.",
          "Before the interview, Maslow helps prepare structured agendas and relevant areas of assessment.",
          "During the conversation, the real-time assistant provides questions, guidance and fact checking.",
          "Afterwards, candidate information is transformed into structured, evidence-based reporting for the wider hiring team.",
          "Instead of replacing the interviewer, the platform gives them greater context and command throughout the process."
        ]
      },
      "shots": [
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?fm=jpg&q=76&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560264357-8d9202250f21?fm=jpg&q=76&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?fm=jpg&q=76&w=1200&auto=format&fit=crop"
      ],
      "ecosystem": {
        "kicker": "The ecosystem",
        "title": "One intelligence layer across the hiring journey.",
        "items": [
          {
            "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Interview Preparation",
            "blurb": "Helping hiring teams enter each interview with greater clarity.",
            "includes": [
              "Structured Agendas",
              "Role Context",
              "Interview Planning",
              "Assessment Areas",
              "Question Preparation"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Live Interview Assistant",
            "blurb": "Real-time intelligence available during the conversation.",
            "includes": [
              "Suggested Questions",
              "Follow-Up Guidance",
              "Fact Checking",
              "Conversation Support",
              "Real-Time Interview Intelligence"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Post-Interview Reporting",
            "blurb": "Turning the conversation into structured hiring information.",
            "includes": [
              "Candidate Reports",
              "Interview Evidence",
              "Assessment Summaries",
              "Decision Support",
              "Hiring Visibility"
            ]
          }
        ]
      },
      "journey": {
        "kicker": "The interview journey",
        "title": "From role context to structured hiring insight.",
        "steps": [
          {
            "title": "Understand the role",
            "blurb": "The system helps establish the context and assessment requirements."
          },
          {
            "title": "Prepare the interview",
            "blurb": "A structured agenda gives the interviewer a clear path into the conversation."
          },
          {
            "title": "Support the conversation live",
            "blurb": "Maslow provides guidance as the interview develops."
          },
          {
            "title": "Capture relevant evidence",
            "blurb": "Important information from the conversation contributes to the assessment."
          },
          {
            "title": "Turn the interview into structured insight",
            "blurb": "Post-interview reports give the hiring team a more consistent basis for decisions."
          }
        ]
      },
      "built": {
        "kicker": "What we engineered",
        "title": "Intelligence across the whole hiring conversation.",
        "cells": [
          {
            "title": "Hiring Intelligence Dashboard",
            "blurb": "The central environment for interview and candidate information."
          },
          {
            "title": "Interview Preparation Experience",
            "blurb": "Structured agenda and assessment planning before conversations begin."
          },
          {
            "title": "Real-Time Interview Assistant",
            "blurb": "An extension supporting interviewers during live conversations."
          },
          {
            "title": "Fact Checking & Guidance",
            "blurb": "Intelligence designed to strengthen specialist-role assessment."
          },
          {
            "title": "Candidate Reporting",
            "blurb": "Structured evidence and reporting following each interview."
          }
        ],
        "principles": [
          {
            "title": "The right context before the interview."
          },
          {
            "title": "The right support during it."
          },
          {
            "title": "Better evidence afterwards."
          }
        ]
      },
      "impact": {
        "kicker": "Impact",
        "title": "A faster, more consistent hiring conversation.",
        "lead": "The interviewer still owns the conversation and ultimately the hiring decision.",
        "metrics": [
          {
            "value": "80%",
            "label": "Reduction in Hiring Workflow Time"
          }
        ],
        "scope": [
          "Interview Intelligence",
          "Real-Time Assistance",
          "Candidate Assessment",
          "AI Guidance",
          "Reporting",
          "Hiring Dashboard",
          "Workflow Intelligence"
        ]
      },
      "cta": {
        "kicker": "Building the next intelligent workflow?",
        "title": "Put AI where better context can improve better decisions.",
        "body": "We help businesses introduce intelligence into complex professional workflows without losing the people and judgement at the centre of them."
      }
    },
    {
      "slug": "openline",
      "name": "Openline",
      "sector": "Relationship & Wellness",
      "headline": "Making relationship support more accessible and personal.",
      "summary": "An AI companion for the personal and relationship conversations people may not always have somewhere else to take.",
      "hero": "/images/cases/openline-hero.webp",
      "accent": {
        "base": "#2A2E55",
        "light": "#A9AEEC",
        "deep": "#4B4F97"
      },
      "kpis": [
        {
          "value": "80%",
          "label": "Conflicts resolved within Openline"
        },
        {
          "value": "1,000+",
          "label": "App sessions per day"
        },
        {
          "value": "24/7",
          "label": "AI companion support"
        }
      ],
      "challenge": {
        "kicker": "The challenge",
        "title": "People often need support before they need formal counselling.",
        "paragraphs": [
          "Not every relationship issue requires a therapist.",
          "Everyday misunderstandings, difficult conversations and personal concerns can still benefit from a private place to reflect and communicate, yet people may not always have somewhere they feel comfortable taking them.",
          "The opportunity was to make thoughtful relationship support available at the moment it is needed."
        ]
      },
      "solution": {
        "kicker": "The solution",
        "title": "A private AI companion for both individual and shared relationship journeys.",
        "paragraphs": [
          "Openline creates a space where users can privately explore thoughts, concerns and relationship situations with AI.",
          "When partners are connected, the experience can expand into structured couple conversations designed to help both sides express themselves, understand one another and move toward greater clarity.",
          "The same product therefore supports both the personal reflection that happens individually and the communication that happens together."
        ]
      },
      "shots": [
        "https://images.unsplash.com/photo-1478476868527-002ae3f3e159?fm=jpg&q=76&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555820585-c5ae44394b79?fm=jpg&q=76&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581182815808-b6eb627a8798?fm=jpg&q=76&w=1200&auto=format&fit=crop"
      ],
      "ecosystem": {
        "kicker": "The ecosystem",
        "title": "Support designed around different moments in a relationship.",
        "items": [
          {
            "image": "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Solo Companion",
            "blurb": "A private space for personal reflection and guidance.",
            "includes": [
              "AI Conversations",
              "Personal Reflection",
              "Relationship Guidance",
              "Private Support",
              "Ongoing Companion Experience"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1522071901873-411886a10004?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Couple Experience",
            "blurb": "A shared environment designed around communication between partners.",
            "includes": [
              "Partner Connection",
              "Guided Conversations",
              "Shared Topics",
              "Structured Reflection",
              "Relationship Sessions"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1506383631675-0b110111327b?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "AI Guidance Layer",
            "blurb": "Intelligence supporting both solo and shared journeys.",
            "includes": [
              "Conversational AI",
              "Contextual Guidance",
              "Reflection Support",
              "Structured Conversation Flows",
              "24/7 Availability"
            ]
          }
        ]
      },
      "journey": {
        "kicker": "The support journey",
        "title": "From a private thought to a shared conversation.",
        "steps": [
          {
            "title": "Start privately",
            "blurb": "A user can discuss what is on their mind with the AI companion."
          },
          {
            "title": "Explore the situation",
            "blurb": "Structured dialogue helps organise thoughts and understand the issue more clearly."
          },
          {
            "title": "Bring in the partner when appropriate",
            "blurb": "Connected experiences allow both people to participate."
          },
          {
            "title": "Structure the conversation",
            "blurb": "The product creates a more guided environment for communication."
          },
          {
            "title": "Continue beyond a single conflict",
            "blurb": "Openline remains available as an ongoing personal and relationship companion."
          }
        ]
      },
      "built": {
        "kicker": "What we engineered",
        "title": "A companion built for an ongoing journey.",
        "cells": [
          {
            "title": "Personal AI Companion",
            "blurb": "A conversational experience built around private personal and relationship support."
          },
          {
            "title": "Solo Reflection Journey",
            "blurb": "Structured experiences for users exploring concerns independently."
          },
          {
            "title": "Connected Couple Experience",
            "blurb": "Partner-linked flows supporting shared conversations."
          },
          {
            "title": "Guided Conversation System",
            "blurb": "Structured interactions designed around better communication and reflection."
          },
          {
            "title": "Relationship History & Continuity",
            "blurb": "Product experiences designed to support an ongoing journey rather than isolated conversations."
          }
        ],
        "principles": [
          {
            "title": "Sometimes someone simply needs to talk."
          },
          {
            "title": "Sometimes they need to understand their own thoughts."
          },
          {
            "title": "Sometimes both partners need a structured way to communicate."
          }
        ]
      },
      "impact": {
        "kicker": "Impact",
        "title": "Support available at the moment it is needed.",
        "lead": "Relationship support is not one fixed workflow.",
        "metrics": [
          {
            "value": "80%",
            "label": "Conflicts Resolved Within Openline"
          },
          {
            "value": "1,000+",
            "label": "App Sessions Per Day"
          },
          {
            "value": "24/7",
            "label": "AI Companion Support"
          }
        ],
        "scope": [
          "AI Companion",
          "Solo Reflection",
          "Couple Experience",
          "Guided Conversations",
          "Relationship Support",
          "Conversational AI",
          "User Experience Design"
        ]
      },
      "cta": {
        "kicker": "Building a digital wellness experience?",
        "title": "Create support around the moments users actually experience.",
        "body": "We help wellness businesses turn complex human journeys into thoughtful, accessible and intelligent digital products."
      }
    },
    {
      "slug": "smf",
      "name": "SMF Med",
      "sector": "Health & MedTech",
      "headline": "Turning medical records into a connected health intelligence ecosystem.",
      "summary": "An AI-powered health records platform that transforms uploaded medical documents into structured, accessible patient history for both patients and doctors.",
      "hero": "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?fm=jpg&q=76&w=1800&auto=format&fit=crop",
      "accent": {
        "base": "#0F4038",
        "light": "#6FD3BC",
        "deep": "#1B7563"
      },
      "kpis": [
        {
          "value": "1",
          "label": "Unified health record"
        },
        {
          "value": "100%",
          "label": "Uploaded reports converted into structured records"
        }
      ],
      "challenge": {
        "kicker": "The challenge",
        "title": "A patient’s medical history should not live across disconnected documents.",
        "paragraphs": [
          "Medical information is often spread across laboratory reports, scans, prescriptions and other documents accumulated over time.",
          "For patients, maintaining a complete medical history becomes difficult. For doctors, reviewing that information can mean working through multiple documents before understanding the wider clinical context.",
          "The opportunity was to turn those fragmented records into an accessible, continuously growing health history."
        ]
      },
      "solution": {
        "kicker": "The solution",
        "title": "From uploaded documents to structured health intelligence.",
        "paragraphs": [
          "We engineered SMF Med as a connected patient and doctor ecosystem.",
          "Patients upload medical documents through the mobile application. OCR and AI extract and interpret the information, create accessible summaries and organise relevant data into a longitudinal electronic health record.",
          "Doctors can then review reports, medical history and AI-generated summaries through a dedicated portal, giving them a clearer view of the patient journey without relying solely on individual documents."
        ]
      },
      "shots": [
        "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?fm=jpg&q=76&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?fm=jpg&q=76&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504813184591-01572f98c85f?fm=jpg&q=76&w=1200&auto=format&fit=crop"
      ],
      "ecosystem": {
        "kicker": "The ecosystem",
        "title": "One health history across patient and doctor experiences.",
        "items": [
          {
            "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Patient Application",
            "blurb": "A central place for individuals to build and maintain their digital medical history.",
            "includes": [
              "Medical Report Uploads",
              "AI-Generated Summaries",
              "Structured Health Records",
              "Historical Report Access",
              "Longitudinal Patient History"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "AI Document Intelligence",
            "blurb": "The intelligence layer that transforms documents into usable health information.",
            "includes": [
              "OCR Processing",
              "Medical Document Parsing",
              "Information Extraction",
              "AI Summarisation",
              "Structured Record Generation"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Doctor Portal",
            "blurb": "A dedicated clinical view of patient information.",
            "includes": [
              "Patient History",
              "Uploaded Reports",
              "AI-Generated Summaries",
              "Longitudinal Records",
              "Clinical Data Access"
            ]
          }
        ]
      },
      "journey": {
        "kicker": "The record journey",
        "title": "From document to usable patient history.",
        "steps": [
          {
            "title": "A patient uploads a medical report",
            "blurb": "Documents enter the health record through the mobile experience."
          },
          {
            "title": "OCR extracts the information",
            "blurb": "The platform converts document content into machine-readable data."
          },
          {
            "title": "AI interprets and summarises it",
            "blurb": "Relevant information is transformed into a clearer, more accessible summary."
          },
          {
            "title": "The record grows over time",
            "blurb": "New reports contribute to an evolving longitudinal health history."
          },
          {
            "title": "Doctors access the wider context",
            "blurb": "The doctor portal brings reports, summaries and history together in one place."
          }
        ]
      },
      "built": {
        "kicker": "What we engineered",
        "title": "A connected medical-record infrastructure.",
        "cells": [
          {
            "title": "Patient Mobile Application",
            "blurb": "A patient-facing experience for uploading, storing and reviewing medical information."
          },
          {
            "title": "AI Report Intelligence",
            "blurb": "AI-powered analysis and summarisation of uploaded medical documents."
          },
          {
            "title": "OCR & Document Processing",
            "blurb": "Extraction and structuring of information from reports and scanned documents."
          },
          {
            "title": "Longitudinal EHR",
            "blurb": "A continuously growing patient record designed around medical history over time."
          },
          {
            "title": "Doctor Portal",
            "blurb": "A dedicated environment for reviewing patient records, reports and summaries."
          }
        ],
        "principles": [
          {
            "title": "The patient needs continuity."
          },
          {
            "title": "The doctor needs context."
          },
          {
            "title": "The platform needs to transform documents into information that becomes more valuable as the record grows."
          }
        ]
      },
      "impact": {
        "kicker": "Impact",
        "title": "A record that grows more useful over time.",
        "lead": "The value of the solution is not simply storing medical files digitally.",
        "metrics": [
          {
            "value": "1",
            "label": "Unified Health Record",
            "blurb": "A single longitudinal history bringing medical information together over time."
          },
          {
            "value": "100%",
            "label": "Reports Structured",
            "blurb": "Uploaded reports transformed into structured digital records."
          }
        ],
        "scope": [
          "AI Health Intelligence",
          "Medical Document Processing",
          "OCR",
          "EHR",
          "Patient Application",
          "Doctor Portal",
          "Clinical Data Access",
          "System Integration"
        ]
      },
      "cta": {
        "kicker": "Building the next healthcare experience?",
        "title": "Turn fragmented health data into connected intelligence.",
        "body": "We help healthcare businesses design and engineer digital ecosystems that make information more accessible, structured and useful across the patient journey."
      }
    },
    {
      "slug": "toptec",
      "name": "TopTec",
      "sector": "Field & Home Services",
      "headline": "Connecting customers, technicians and service operations.",
      "summary": "A connected home-services ecosystem bringing customers, technicians, business operations and autonomous AI into one platform.",
      "hero": "/images/cases/toptec-hero.webp",
      "accent": {
        "base": "#112F45",
        "light": "#82BADB",
        "deep": "#1E5A80"
      },
      "kpis": [
        {
          "value": "100%",
          "label": "Inbound call coverage"
        },
        {
          "value": "80%",
          "label": "Sales conversion from AI voice agent"
        }
      ],
      "challenge": {
        "kicker": "The challenge",
        "title": "Service delivery becomes harder when every part of the operation works separately.",
        "paragraphs": [
          "Home-service businesses often coordinate customers, technicians, bookings and internal operations through fragmented systems and manual processes.",
          "Customers need a simple way to find and book services. Technicians need clear visibility into their work. Operations teams need to coordinate demand, scheduling and staff.",
          "And inbound calls can become missed opportunities when nobody is available to answer."
        ]
      },
      "solution": {
        "kicker": "The solution",
        "title": "One connected ecosystem across the complete service journey.",
        "paragraphs": [
          "We engineered TopTec around the relationship between customer demand, technician supply and company operations.",
          "Customer and technician applications connect into a central management platform where bookings, assignments and service activity can be coordinated.",
          "An autonomous AI receptionist adds another operational layer, answering inbound calls, capturing customer needs, supporting bookings and coordinating technician activity.",
          "Integrated outreach then helps businesses reconnect with existing customers and generate additional demand."
        ]
      },
      "shots": [
        "https://images.unsplash.com/photo-1542319920155-a236a55f1a97?fm=jpg&q=76&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?fm=jpg&q=76&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?fm=jpg&q=76&w=1200&auto=format&fit=crop"
      ],
      "ecosystem": {
        "kicker": "The ecosystem",
        "title": "Customer experience, field operations and AI working as one system.",
        "items": [
          {
            "image": "https://images.unsplash.com/photo-1695891583421-3cbbf1c2e3bd?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Customer Experience",
            "blurb": "A digital journey for discovering and accessing services.",
            "includes": [
              "Service Discovery",
              "Bookings",
              "Customer Information",
              "Service Tracking",
              "Digital Service Experience"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Technician Experience",
            "blurb": "A field-facing environment built around job delivery.",
            "includes": [
              "Assigned Jobs",
              "Scheduling",
              "Job Information",
              "Service Updates",
              "Technician Operations"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1680459575585-390ed5cfcae0?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "Company Operations",
            "blurb": "A central view across customers, jobs and technicians.",
            "includes": [
              "Booking Management",
              "Technician Assignment",
              "Operational Visibility",
              "Scheduling",
              "Service Management"
            ]
          },
          {
            "image": "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?fm=jpg&q=76&w=1000&auto=format&fit=crop",
            "title": "AI Receptionist",
            "blurb": "An autonomous voice layer supporting inbound service demand.",
            "includes": [
              "Inbound Call Handling",
              "Customer Information Capture",
              "Booking Support",
              "Technician Coordination",
              "24/7 Call Coverage"
            ]
          }
        ]
      },
      "journey": {
        "kicker": "The service journey",
        "title": "From customer request through to delivery.",
        "steps": [
          {
            "title": "Customer demand enters the ecosystem",
            "blurb": "Users can engage digitally or through the AI voice receptionist."
          },
          {
            "title": "Service requirements are captured",
            "blurb": "The system collects the information needed to progress the request."
          },
          {
            "title": "Availability and operations connect",
            "blurb": "Bookings move into the central operational environment."
          },
          {
            "title": "Technicians are coordinated",
            "blurb": "Relevant service activity is assigned and surfaced to field teams."
          },
          {
            "title": "The relationship continues after the job",
            "blurb": "Outreach and reactivation capabilities help businesses reconnect with existing customers."
          }
        ]
      },
      "built": {
        "kicker": "What we engineered",
        "title": "An operating system for a service business.",
        "cells": [
          {
            "title": "Customer Mobile Application",
            "blurb": "A digital service journey for customers."
          },
          {
            "title": "Technician Mobile Application",
            "blurb": "A field operations experience built around technician jobs and schedules."
          },
          {
            "title": "Central Operations Dashboard",
            "blurb": "The management layer connecting customers, bookings and technicians."
          },
          {
            "title": "Autonomous AI Voice Receptionist",
            "blurb": "AI-powered inbound call handling and booking support."
          },
          {
            "title": "Booking & Assignment Automation",
            "blurb": "Connected workflows for moving demand into service delivery."
          },
          {
            "title": "Customer Reactivation Automation",
            "blurb": "Outreach infrastructure for reconnecting with existing customers."
          }
        ],
        "principles": [
          {
            "title": "Customers create demand."
          },
          {
            "title": "Technicians fulfil it."
          },
          {
            "title": "Businesses coordinate it."
          },
          {
            "title": "AI can remove operational gaps between them."
          }
        ]
      },
      "impact": {
        "kicker": "Impact",
        "title": "No call missed, no job left uncoordinated.",
        "lead": "Home-service delivery depends on multiple participants operating together.",
        "metrics": [
          {
            "value": "100%",
            "label": "Inbound Call Coverage"
          },
          {
            "value": "80%",
            "label": "Sales Conversion From AI Voice Agent"
          }
        ],
        "scope": [
          "Customer Platform",
          "Technician Operations",
          "Service Management",
          "AI Receptionist",
          "Booking Automation",
          "Technician Assignment",
          "Customer Outreach",
          "System Integration"
        ]
      },
      "cta": {
        "kicker": "Building a connected service business?",
        "title": "Connect customer demand, field operations and intelligence around one service journey.",
        "body": "We help service businesses replace disconnected workflows with digital ecosystems designed around how work actually moves from customer request to delivery."
      }
    }
  ];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const caseSlugs = caseStudies.map((c) => c.slug);
