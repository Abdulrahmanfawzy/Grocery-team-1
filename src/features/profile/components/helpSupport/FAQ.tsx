import { Button, Card, CardContent } from '@/components'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ChevronDown, CircleHelp } from 'lucide-react'

export default function FAQ() {
  // =====================================================
  // Types
  // =====================================================

  type FAQ = {
    question: string
    answer: string
  }

  // =====================================================
  // Data
  // =====================================================

  const faqs: FAQ[] = [
    {
      question: 'How do I track my order?',
      answer: 'Go to Order History and click on any order to see real-time tracking.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 7 days for non-perishable items in original packaging.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'Visit the Subscriptions page and click Cancel on any active subscription.',
    },
    {
      question: 'Do you deliver on weekends?',
      answer: 'Yes! We deliver 7 days a week including holidays.',
    },
  ]

  return (
    <Card className="rounded-md border-slate-200 bg-[#f7fbfd] shadow-none">
      <CardContent className="p-5">
        {/* Section Header */}

        <div className="mb-4 flex items-center gap-2">
          <CircleHelp className="h-4 w-4 text-app-main" />

          <h2 className="text-md font-medium text-slate-700">Frequently Asked Questions</h2>
        </div>

        {/* FAQ */}

        <Accordion className="space-y-2 ">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className=" rounded-md  bg-[#dedcdd] px-3 "
            >
              <AccordionTrigger
                className="
                        py-2.5
                        text-left
                        text-sm
                        font-medium
                        text-app-main
                        hover:no-underline
                        [&>svg]:h-3
                        [&>svg]:w-3
                        
                      "
              >
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pb-3 text-xs leading-4 text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* All FAQs */}

        <Button size="lg" className="mt-4 px-7">
          View All FAQs
          <ChevronDown size={20} className="-rotate-90" />
        </Button>
      </CardContent>
    </Card>
  )
}
